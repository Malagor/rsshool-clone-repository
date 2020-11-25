import Sidebar from "../Views/Sidebar";
import Task from "../Classes/Task";
import Screen from "../Views/Screen";
import CSS from "../Views/CSS";
import HTML from "../Views/HTML";

import getNewIndexCurrentTask from "../utils/getNewIndexCurrentTask"

import '../../img/GitHub-Mark-64px.png';
import '../../img/rs_school_js.svg';
import '../../img/next-arrow.svg';
import '../../img/check.svg';

const taskRawData = require('../Models/taskList');

export default class App{
  constructor(obj) {
    this.propertes = {
      indexCurrentTask: obj.indexCurrentTask,
      TASKS_COUNT: obj.TASKS_COUNT
    };

    this.tasks = obj.tasks;

    this.components = {
      sidebar: obj.sidebar,
      screen: obj.screen,
      css: obj.css,
      html: obj.html,
    };

    // handlers component`s events
    this.components.sidebar.changeTask = this.changeTask.bind(this);
    this.components.css.checkAnswer = this.checkAnswer.bind(this);
    this.components.html.toggleHighlight = this.toggleHighlight.bind(this);
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

    const tasks = taskRawData.map(taskItem => {
      return Task.create(taskItem);
    });
    const indexCurrentTask = 0;
    const TASKS_COUNT = tasks.length;
    const screen = Screen.create('.screen');
    const sidebar = Sidebar.create('.sidebar');
    const css = CSS.create('.style-css');
    const html = HTML.create('.html-code');

    sidebar.init(tasks);
    sidebar.printTaskText(tasks[indexCurrentTask]);
    screen.setTitleText(tasks[indexCurrentTask].mission);
    html.printTaskCode(tasks[indexCurrentTask].code);
    screen.printTask(tasks[indexCurrentTask].code);

    const config = {
      indexCurrentTask,
      tasks,
      TASKS_COUNT,
      screen,
      sidebar,
      css,
      html
    };

    return new App(config);
  }

  checkAnswer() {
    const answer = this.components.css.getScreenValue().trim();
    const isAnswersMatch = this.tasks[this.propertes.indexCurrentTask].isRightAnswer(answer);

    if (isAnswersMatch) {
      this.answerIsRight();
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

  answerIsRight() {
    this.tasks[this.propertes.indexCurrentTask].done = true;

    if (this.isFinish()) {
      this.finish();
    } else {
      this.propertes.indexCurrentTask = getNewIndexCurrentTask(this.propertes.indexCurrentTask, this.propertes.TASKS_COUNT);
      this.printTaskOnScreen(this.propertes.indexCurrentTask);
      this.components.sidebar.createTaskListInMenu(this.tasks);
    }
  }

  finish() {
    console.log("Finish training");
  }

  isFinish() {
    return this.tasks.every(task => {
      return task.done;
    })
  }

  changeTask(target) {
    if (target === 'left') {
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
    const task = this.tasks[index];

    sidebar.setCurrentTaskLevel(task.level);
    sidebar.printTaskText(task);
    sidebar.setDoneCheckboxInHeader(task.done);

    screen.setTitleText(task.mission);
    html.printTaskCode(task.code);
    screen.printTask(task.code);

    css.clear();
  }

  toggleHighlight(event){
    event.stopPropagation();

    const {target} = event;

    if (target.classList.contains('highlight')) {
      target.classList.remove('highlight');
    } else {
    target.classList.add('highlight');
    }
  }
}
