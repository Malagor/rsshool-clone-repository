import Sidebar from "../Views/Sidebar";
import Task from "../Classes/Task";
import Screen from "../Views/Screen";

import getNewIndexCurrentTask from "../utils/getNewIndexCurrentTask"

import '../../img/GitHub-Mark-64px.png';
import '../../img/rs_school_js.svg';
import '../../img/next-arrow.svg';
import '../../img/check.svg';
import CSS from "../Views/CSS";
import HTML from "../Views/HTML";

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

  }

  static create() {
    // Начальное состояние приложения
    const indexCurrentTask = 0; // Индекс текущего Задания в массиве заданий

    const tasks = taskRawData.map(taskItem => {
      return Task.create(taskItem);
    });
    const TASKS_COUNT = tasks.length;
    const screen = Screen.create('.screen');
    const sidebar = Sidebar.create('.sidebar');
    const css = CSS.create('.style-css');
    const html = HTML.create('.html-code');

    sidebar.init(tasks);
    sidebar.printTaskText(tasks[indexCurrentTask]);
    screen.setTitleText(tasks[indexCurrentTask].mission);
    html.printTaskCode(tasks[indexCurrentTask].code);

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
    const {sidebar} = this.components;

    sidebar.setCurrentTaskLevel(this.tasks[index].level);
    sidebar.printTaskText(this.tasks[index]);
    sidebar.setDoneCheckboxInHeader(this.tasks[index].done);

    this.components.screen.setTitleText(this.tasks[index].mission);

    this.components.css.clear();
  }

}

// export default function main() {

  // let indexCurrentTask = 0; // Индекс текущего Задания в массиве заданий

  // Начальное состояние приложения
  // const tasks = taskRawData.map(taskItem => {
  //   return Task.create(taskItem)
  // });

  // console.log(taskRawData[0].code);

  // tasks.isFinish = () => {
  //   return tasks.every(task => {
  //     return task.done;
  //   })
  // };

  // const TASKS_COUNT = tasks.length;
  // const screen = Railway.create('.railway');
  // const sidebar = Sidebar.create('.sidebar');
  // const css = CSS.create('.style-css');

  // sidebar.init(tasks);
  // sidebar.printTaskText(tasks[indexCurrentTask]);
  // screen.setTitleText(tasks[indexCurrentTask].mission);

  // function printTaskOnScreen(index) {
  //   sidebar.setCurrentTaskLevel(tasks[index].level);
  //   sidebar.printTaskText(tasks[index]);
  //   sidebar.setDoneCheckboxInHeader(tasks[index].done);
  //
  //   screen.setTitleText(tasks[index].mission);
  //
  //   css.clear();
  // }

  // Target can be the direction or element of a menu item
  // function changeTask(target) {
  //   if (target === 'left') {
  //     indexCurrentTask = getNewIndexCurrentTask(indexCurrentTask);
  //   } else if (target === 'right') {
  //     indexCurrentTask = getNewIndexCurrentTask(indexCurrentTask, TASKS_COUNT);
  //   } else { // target is element of a menu item
  //     indexCurrentTask = parseInt(target.dataset.index, 10);
  //     sidebar.toggleMenu();
  //   }
  //   printTaskOnScreen(indexCurrentTask);
  // }

  // sidebar.changeTask = changeTask.bind(this);

  // function finish() {
  //   console.log("Finish training");
  // }

  // function answerIsRight() {
  //   tasks[indexCurrentTask].done = true;
  //
  //   if (tasks.isFinish()) {
  //     finish();
  //   } else {
  //     indexCurrentTask = getNewIndexCurrentTask(indexCurrentTask, TASKS_COUNT);
  //     printTaskOnScreen(indexCurrentTask);
  //     sidebar.createTaskListInMenu(tasks);
  //   }
  // }

  // function answerIsWrong() {
  //   css.elements.textarea.classList.add('shake');
  //   css.elements.textarea.addEventListener('animationend', () => {
  //     css.elements.textarea.classList.remove('shake');
  //     css.elements.textarea.value = css.elements.textarea.value.trim();
  //   })
  // }

  // function checkAnswer() {
  //   const answer = css.getScreenValue().trim();
  //   const isAnswersMatch = tasks[indexCurrentTask].isRightAnswer(answer);
  //
  //   if (isAnswersMatch) {
  //     answerIsRight();
  //   } else {
  //     answerIsWrong();
  //   }
  // }

  // css.checkAnswer = checkAnswer.bind(this);
// }
