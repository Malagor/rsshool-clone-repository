import Sidebar from "./Sidebar";
import Screen from "./Screen";
import CSS from "./CSS";
import HTML from "./HTML";

import getNewIndexCurrentTask from "../utils/getNewIndexCurrentTask"
import {convertToNodeInnerText, createStringForSearch, parseNodeInnerText} from "../utils/parseNodeInnerText";
import typingText from "../utils/typingText";
import saveLoadLocalStorage from "../utils/saveLoadLocalStorage";
import Modal from "./Modal";
import TaskList from "./TaskList";

const taskRawData = require('../Data/data');

export default class App {
  constructor(obj) {
    this.propertes = {
      indexCurrentTask: obj.indexCurrentTask,
      TASKS_COUNT: obj.TASKS_COUNT
    };

    this.tasksList = obj.tasksList;

    this.components = {
      sidebar: obj.sidebar,
      screen: obj.screen,
      css: obj.css,
      html: obj.html,
      modal: obj.modal
    };

    // handlers component`s events
    this.components.sidebar.changeTask = this.changeTask.bind(this);
    this.components.css.checkAnswer = this.checkAnswer.bind(this);
    this.components.html.toggleHighlight = this.toggleHighlight.bind(this);
    this.components.screen.toggleHighlightScreen = this.toggleHighlightScreen.bind(this);
    this.components.css.typeCorrectAnswer = this.typeCorrectAnswer.bind(this);
    this.components.sidebar.statistics.reset = this.reset.bind(this);
  }

  static create(el) {
    const node = document.querySelector(el);

    node.innerHTML = `    
    <section class="screen"></section>
    <section class="style-css"></section>
    <section class="html-code">
      <div class="">
        &lt;wagon /&gt;
      </div>
      <div class="">
        &lt;wagon&gt;
        <div class="">
          &lt;wood /&gt;
        </div>
        &lt;/wagon&gt;
      </div>
      <div class="">
        &lt;wagon /&gt;
      </div>
    </section>    
    `;

    const tasksList = TaskList.create(taskRawData);
    const TASKS_COUNT = tasksList.getAllTasksCount();
    const loadData = App.loadData();
    let indexCurrentTask = 0;

    if (loadData) {
      indexCurrentTask = loadData.current;
      tasksList.loadTasks(loadData.tasks);
    }

    const screen = Screen.create('.screen');
    const sidebar = Sidebar.create('.sidebar');
    const css = CSS.create('.style-css');
    const html = HTML.create('.html-code');
    const modal = Modal.create();

    const tasks = tasksList.tasksArray;

    sidebar.init(tasks, indexCurrentTask);
    sidebar.printTaskText(tasks[indexCurrentTask]);
    sidebar.setCurrentTaskInMenu(tasks[indexCurrentTask].id);
    sidebar.setDoneCheckboxInHeader(tasks[indexCurrentTask].done, tasks[indexCurrentTask].hint);
    sidebar.statistics.setStatictics(TASKS_COUNT, tasksList.countDoneTask(), tasksList.countHintTask());

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
      modal
    };

    return new App(config);
  }

  checkAnswer() {
    const answer = this.components.css.getScreenValue().trim();
    const isAnswersMatch = this.tasksList.checkAnswer(this.propertes.indexCurrentTask, answer);

    if (isAnswersMatch) {
      this.answerIsCorrect();
    } else {
      this.answerIsWrong();
    }
  }

  answerIsWrong() {
    const {css} = this.components;

    css.elements.textarea.classList.add('shake');
    css.elements.textarea.addEventListener('animationend', () => {
      css.elements.textarea.classList.remove('shake');
      css.elements.textarea.value = this.components.css.elements.textarea.value.trim();
    })
  }

  answerIsCorrect() {
    this.tasksList.tasksArray[this.propertes.indexCurrentTask].done = true;
    this.components.screen.correctAnswerAnimation();

    // wait animation correct answer
    setTimeout(() => {
      this.propertes.indexCurrentTask = getNewIndexCurrentTask(this.propertes.indexCurrentTask, this.propertes.TASKS_COUNT);
      this.printTaskOnScreen(this.propertes.indexCurrentTask);
      this.components.sidebar.createTaskListInMenu(this.tasksList.tasksArray);
      this.saveData();
      this.components.sidebar.statistics.setStatictics(this.propertes.TASKS_COUNT, this.tasksList.countDoneTask(), this.tasksList.countHintTask());

      if (this.tasksList.isAllDone()) {
        this.finish();
      }

    }, 1000);
  }

  finish() {
    this.components.modal.showModal(this.propertes.TASKS_COUNT, this.tasksList.countHintTask());
  }

  newChalenge(){
    this.propertes.indexCurrentTask = 0;
    this.printTaskOnScreen(this.propertes.indexCurrentTask);
    this.components.sidebar.createTaskListInMenu(this.tasksList.tasksArray);
    this.components.sidebar.statistics.setStatictics(this.propertes.TASKS_COUNT, this.tasksList.countDoneTask(), this.tasksList.countHintTask());
  }

  changeTask(target) {
    if (target === 'left') { // click arrow left-right in menu
      this.propertes.indexCurrentTask = getNewIndexCurrentTask(this.propertes.indexCurrentTask);
    } else if (target === 'right') {
      this.propertes.indexCurrentTask = getNewIndexCurrentTask(this.propertes.indexCurrentTask, this.propertes.TASKS_COUNT);
    } else { // here target is element of a menu item
      this.propertes.indexCurrentTask = parseInt(target.dataset.index, 10);
      this.components.sidebar.toggleMenu();
    }
    this.printTaskOnScreen(this.propertes.indexCurrentTask);
  }

  printTaskOnScreen(index) {
    const {sidebar, css, html, screen} = this.components;
    const task = this.tasksList.tasksArray[index];

    sidebar.setCurrentTaskLevel(task.level);
    sidebar.printTaskText(task);
    sidebar.setDoneCheckboxInHeader(task.done, task.hint);
    sidebar.setCurrentTaskInMenu(task.id);

    screen.setTitleText(task.mission);
    screen.printTask(task.code);
    const rightAnswer = task.answers[0];
    screen.markRightAnswerElements(rightAnswer);

    html.printTaskCode(task.code);
    css.clear();
  }

  toggleHighlight(event) {
    const {target} = event;
    if (target.classList.contains('html-code')) return;
    const innerText = target.firstChild.nodeValue;
    const parseText = parseNodeInnerText(innerText);
    const strForSearch = createStringForSearch(parseText);

    const screenElements = this.components.screen.elements.innerBox.querySelectorAll(strForSearch);
    screenElements.forEach(el => el.classList.toggle('highlight'));
    target.classList.toggle('highlight');

    // this.printTooltip(target, innerText);
  }

  toggleHighlightScreen(event) {
    const {target} = event;
    if (target.classList.contains('screen__inner')) return;

    const {id, localName: tag, childElementCount: child} = target;

    // deleting the service class - right answer element
    let {className} = target;
    className = className.replace('right-answer-element', '').trim();

    const nodeData = {
      tag,
      id,
      className,
      child
    };

    const innerText = convertToNodeInnerText(nodeData);

    this.components.html.elements.blocks.forEach(node => {
      if (node.firstChild.nodeValue.trim() === innerText) {
        node.classList.toggle('highlight')
      }
    });

    target.classList.toggle('highlight');

    this.components.screen.printTooltip(target, innerText);
  }

  typeCorrectAnswer() {
    const task = this.tasksList.tasksArray[this.propertes.indexCurrentTask];
    const rightAnswer = task.answers[0];
    task.hint = true;
    const cssPanel = this.components.css.elements.textarea;

    typingText(cssPanel, rightAnswer);
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

  reset(){
    // TODO: implement action confirmation
    this.tasksList.reset();
    saveLoadLocalStorage('reset');
    this.newChalenge();
  }
}
