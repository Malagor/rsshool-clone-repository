import hljs from 'highlight.js';

import Sidebar from './Sidebar';
import Screen from './Screen';
import CSS from './CSS';
import HTML from './HTML';
import Modal from './Modal';
import TaskList from './TaskList';

import getNewIndexCurrentTask from '../utils/getNewIndexCurrentTask';
import typingText from '../utils/typingText';
import saveLoadLocalStorage from '../utils/saveLoadLocalStorage';

import school from '../../img/rs_school_js.svg';
import github from '../../img/GitHub-Mark.svg';
import Info from './Info';
import Statistics from './Statistics';

const taskRawData = require('../Data/data');

export default class App {
  constructor(obj) {
    this.propertes = {
      indexCurrentTask: obj.indexCurrentTask,
      TASKS_COUNT: obj.TASKS_COUNT,
    };

    this.tasksList = obj.tasksList;

    this.components = {
      sidebar: obj.sidebar,
      screen: obj.screen,
      css: obj.css,
      html: obj.html,
      modal: obj.modal,
      info: obj.info,
      statistics: obj.statistics,
    };

    // handlers component`s events
    this.components.info.changeTask = this.changeTask.bind(this);
    this.components.info.toggleMenu = this.toggleMenu.bind(this);
    this.components.css.checkAnswer = this.checkAnswer.bind(this);
    this.components.css.typeCorrectAnswer = this.typeCorrectAnswer.bind(this);
    this.components.sidebar.changeTask = this.changeTask.bind(this);
    this.components.html.toggleHighlight = this.toggleHighlight.bind(this);
    this.components.screen.toggleHighlightScreen = this.toggleHighlightScreen.bind(this);
    this.components.statistics.reset = this.reset.bind(this);

    this.init();
  }

  static create() {
    const node = document.querySelector('header.header');

    node.insertAdjacentHTML('afterend', `    
    <section class="screen"></section>
    <section class="style-css">
    <div class="style-css__title">
        <div class="style-css__left">CSS Editor</div>
        <div class="style-css__right">style.css</div>
      </div>
    </section>
    <section class="html-code">
      <div class="html-code__title">
        <div class="html-code__left">HTML Viewer</div>
        <div class="html-code__right">railway.html</div>
      </div>
      <div class="html-code__inner code language-html"></div>
    </section>    
    `);

    document.querySelector('.school').insertAdjacentHTML('afterbegin', `
      <a href="https://rs.school/js/">${school} JavaScript course at RS SCHOOL</a>
    `);

    document.querySelector('.author').insertAdjacentHTML('afterbegin', `
      <a href="https://github.com/Malagor">Author: Alex Malagor ${github}</a>
    `);

    const tasksList = TaskList.create(taskRawData);
    const TASKS_COUNT = tasksList.getAllTasksCount();
    const loadData = App.loadData();
    let indexCurrentTask = 0;

    if (loadData) {
      indexCurrentTask = loadData.current;
      tasksList.loadTasks(loadData.tasks);
    }

    const screen = Screen.create('.screen');
    const info = Info.create('.info-panel');
    const sidebar = Sidebar.create('.sidebar');
    const css = CSS.create('.style-css');
    const html = HTML.create('.html-code__inner');
    const modal = Modal.create();
    const statistics = Statistics.create('.statistics-panel');

    const tasks = tasksList.tasksArray;

    info.setDoneCheckboxInHeader(tasks[indexCurrentTask].done, tasks[indexCurrentTask].hint);
    info.setCountAllTasksInInfoBlock(TASKS_COUNT);
    info.setCurrentTaskLevel(tasks[indexCurrentTask].level);

    sidebar.init(tasks, indexCurrentTask);
    sidebar.setCurrentTaskInMenu(tasks[indexCurrentTask].id);
    statistics.setStatictics(TASKS_COUNT, tasksList.countDoneTask(), tasksList.countHintTask());

    screen.setTitleText(tasks[indexCurrentTask].mission);
    screen.printTask(tasks[indexCurrentTask].code);
    // add animation to right answer elements
    const rightAnswer = tasks[indexCurrentTask].answers[0];
    screen.markRightAnswerElements(rightAnswer);

    html.printTaskCode(tasks[indexCurrentTask].code);

    const config = {
      indexCurrentTask,
      tasksList,
      TASKS_COUNT,
      screen,
      sidebar,
      css,
      html,
      modal,
      info,
      statistics,
    };

    return new App(config);
  }

  init() {
    hljs.highlightBlock(this.components.html.elements.node);

    document.querySelector('.mode').addEventListener('click', () => {
      document.body.classList.toggle('night');
    });
  }


  checkAnswer() {
    const answer = this.components.css.codeMirror.getValue().trim();
    const isAnswersMatch = this.tasksList.checkAnswer(this.propertes.indexCurrentTask, answer);

    if (isAnswersMatch) {
      this.answerIsCorrect();
    } else {
      this.answerIsWrong();
    }
  }

  answerIsWrong() {
    const { css } = this.components;

    css.elements.textarea.classList.add('shake');
    css.elements.textarea.addEventListener('animationend', () => {
      css.elements.textarea.classList.remove('shake');
    });
  }

  answerIsCorrect() {
    this.tasksList.tasksArray[this.propertes.indexCurrentTask].done = true;
    this.components.screen.correctAnswerAnimation();

    // wait animation correct answer
    setTimeout(() => {
      this.components.css.codeMirror.setValue('');
      this.propertes.indexCurrentTask = getNewIndexCurrentTask(this.propertes.indexCurrentTask, this.propertes.TASKS_COUNT);
      this.printTaskOnScreen(this.propertes.indexCurrentTask);
      this.components.sidebar.createTaskListInMenu(this.tasksList.tasksArray);
      this.saveData();
      this.components.statistics.setStatictics(this.propertes.TASKS_COUNT, this.tasksList.countDoneTask(), this.tasksList.countHintTask());

      if (this.tasksList.isAllDone()) {
        this.finish();
      }
    }, 1000);
  }

  finish() {
    this.components.modal.showModal(this.propertes.TASKS_COUNT, this.tasksList.countHintTask());
  }

  newChalenge() {
    this.propertes.indexCurrentTask = 0;
    this.printTaskOnScreen(this.propertes.indexCurrentTask);
    this.components.sidebar.createTaskListInMenu(this.tasksList.tasksArray);
    this.components.statistics.setStatictics(this.propertes.TASKS_COUNT, this.tasksList.countDoneTask(), this.tasksList.countHintTask());
  }

  changeTask(target) {
    if (target === 'left') { // click arrow left-right in menu
      this.propertes.indexCurrentTask = getNewIndexCurrentTask(this.propertes.indexCurrentTask);
    } else if (target === 'right') {
      this.propertes.indexCurrentTask = getNewIndexCurrentTask(this.propertes.indexCurrentTask, this.propertes.TASKS_COUNT);
    } else { // here target is element of a menu item
      this.propertes.indexCurrentTask = parseInt(target.dataset.index, 10);
      this.components.info.toggleMenu();
    }
    this.printTaskOnScreen(this.propertes.indexCurrentTask);
  }

  printTaskOnScreen(index) {
    const { sidebar, css, html, screen, info } = this.components;
    const task = this.tasksList.tasksArray[index];

    info.setCurrentTaskLevel(task.level);
    info.setDoneCheckboxInHeader(task.done, task.hint);

    sidebar.printTaskText(task);
    sidebar.setCurrentTaskInMenu(task.id);

    screen.setTitleText(task.mission);
    screen.printTask(task.code);
    const rightAnswer = task.answers[0];
    screen.markRightAnswerElements(rightAnswer);

    html.printTaskCode(task.code);
    css.clear();

    hljs.highlightBlock(html.elements.node);
  }

  toggleHighlight(target) {
    if (target.classList.contains('html-code__inner')) return;

    const screenElements = this.components.screen.elements.innerBox.querySelectorAll('*');

    const dataIndex = target.dataset.index;
    screenElements.forEach(el => {
      if (el.dataset.index === dataIndex) {
        el.classList.toggle('highlight');
        const innerText = el.dataset.html;
        this.components.screen.printTooltip(el, innerText);
      }
    });
    target.classList.toggle('highlight');
  }

  toggleHighlightScreen(event) {
    const { target } = event;
    if (target.classList.contains('screen__inner')) return;

    // mark an item on the HTML-block
    const dataIndex = target.dataset.index;

    this.components.html.elements.blocks.forEach(node => {
      if (node.dataset.index === dataIndex) {
        node.classList.toggle('highlight');
      }
    });
    // mark an element on SCREEN-block
    target.classList.toggle('highlight');

    const innerText = target.dataset.html;
    this.components.screen.printTooltip(target, innerText);
  }

  typeCorrectAnswer() {
    const task = this.tasksList.tasksArray[this.propertes.indexCurrentTask];
    const rightAnswer = task.answers[0];

    // Mark the hint only if we haven't solved this task before
    if (!task.done) {
      task.hint = true;
    }

    typingText(this.components.css.codeMirror, rightAnswer);
  }

  saveData() {
    const data = {};
    data.current = this.propertes.indexCurrentTask;
    data.tasks = this.tasksList.saveArray();

    saveLoadLocalStorage(JSON.stringify(data));
  }

  static loadData() {
    return JSON.parse(saveLoadLocalStorage());
  }

  reset() {
    // TODO: implement action confirmation
    this.tasksList.reset();
    saveLoadLocalStorage('reset');
    this.newChalenge();
  }

  toggleMenu() {
    const width = window.innerWidth;

    if (width >= 768) {
      this.components.sidebar.elements.nav.navWrapper.classList.toggle('open');
    } else {
      this.components.sidebar.elements.node.classList.toggle('open');
    }
    this.components.info.elements.menuToggle.classList.toggle('open');
  }
}
