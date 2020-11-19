import Sidebar from "../Views/Sidebar";
import Task from "../Classes/Task";
import Railway from "../Views/Railway";

import * as utils from "../utils/utils"

import '../../img/GitHub-Mark-64px.png';
import '../../img/rs_school_js.svg';
import '../../img/next-arrow.svg';
import '../../img/check.svg';
import CSS from "../Views/CSS";

const taskRawData = require('../Models/taskList');

export default function main() {

  let indexCurrentTask = 0; // Индекс текущего Задания в массиве заданий

  // Начальное состояние приложения
  const tasks = taskRawData.map(taskItem => {
    return Task.create(taskItem)
  });

  tasks.isFinish = () => {
    return tasks.every(task => {
      return task.done;
    })
  };

  const TASKS_COUNT = tasks.length;
  const screen = Railway.create('.railway');
  const sidebar = Sidebar.create('.sidebar');
  const css = CSS.create('.style-css');

  sidebar.init(tasks);
  sidebar.printTaskText(tasks[indexCurrentTask]);
  screen.setTitleText(tasks[indexCurrentTask].mission);

  function printNewTaskOnScreen() {
    sidebar.setHeader(tasks[indexCurrentTask].level);
    sidebar.printTaskText(tasks[indexCurrentTask]);

    screen.setTitleText(tasks[indexCurrentTask].mission);

    css.clear();
  }

  function finish() {
    console.log("Finish training");
  }

  function answerIsWrong() {
    console.log('Answer Is Wrong!!!')
  }

  // Слушаем события от компонентов
  document.body.addEventListener('clickLeftArrow', () => {
    indexCurrentTask = utils.getNewIndexCurrentTask(indexCurrentTask);
    printNewTaskOnScreen();
  });

  document.body.addEventListener('clickRightArrow', () => {
    indexCurrentTask = utils.getNewIndexCurrentTask(indexCurrentTask, TASKS_COUNT);
    printNewTaskOnScreen();
  });

  document.body.addEventListener('enter', () => {
    const answer = css.getScreenValue();
    const answerIsRight = tasks[indexCurrentTask].isRightAnswer(answer);

    if (answerIsRight) {
      tasks[indexCurrentTask].done = true;

      if (tasks.isFinish()) {
        finish();
      } else {
        indexCurrentTask = utils.getNewIndexCurrentTask(indexCurrentTask, TASKS_COUNT);
        printNewTaskOnScreen();
        sidebar.createTaskListInMenu(tasks);
      }
    } else {
      answerIsWrong();
    }
  });

  document.body.addEventListener('clickMenuTask', evt => {
    const {target} = evt;
    indexCurrentTask = parseInt(target.dataset.index, 10);

    printNewTaskOnScreen();
    sidebar.toggleMenu();
  })
}
