import setTitleMessage from "../utils/setTitleMessage";
import Statistics from "./Statistics";

export default class Sidebar {
  constructor(obj) {
    this.elements = {
      node: obj.node,
      infoBlock: obj.infoBlock,
      controls: {
        arrowLeft: obj.arrowLeft,
        arrowRight: obj.arrowRight
      },
      levels: {
        currentLevel: obj.currentLevel,
        allCountLevels: obj.allCountLevels
      },
      taskDoneCheckbox: obj.taskDoneCheckbox,
      menuToggle: obj.menuToggle,
      nav: {
        navWrapper: obj.nav,
        navList: obj.navList
      },
      taskText: obj.taskText,
      resetBtn: obj.resetBtn
    };

    this.statistics = obj.statistics;

    this.changeTask = null;

    this.init.bind(this);
    this.events.call(this);
  }

  static create(el) {
    const node = document.querySelector(el);
    node.innerHTML = '';
    node.insertAdjacentHTML('afterbegin', `
    <nav id="nav" class="nav">
      <ul id="navList" class="nav__list">
      </ul>
    </nav>
    <div id="task" class="task"></div>
    <div class="statistics">
      <div class="statistics__wrapper">
      <h3 class="statistics__title">Statistics</h3>
        <div class="statistics__progress">
          <div id="progressBar" class="statistics__progress-bar" title="Completed without/with hints"></div>
        </div>      
        <div class="statistics__item">
          <div class="statistics__title">All tasks</div>
          <div id="countAllTask" class="statistics__value">10</div>
        </div>
        <div class="statistics__item">
          <div class="statistics__title">Done</div>
          <div id="countDoneTask" class="statistics__value">5</div>
        </div>
        <div class="statistics__item">
          <div class="statistics__title">Hint</div>
          <div id="countHintTask" class="statistics__value">3</div>
        </div>  
      </div>
      <button id="reset" class="btn btn__reset">Reset</button>
    </div>  
    `);

    const nav = document.querySelector('#nav');
    const navList = document.querySelector('#navList');
    const taskText = document.querySelector('#task');

    const resetBtn = document.querySelector('#reset');
    const allTask = document.querySelector('#countAllTask');
    const doneTask = document.querySelector('#countDoneTask');
    const hintTask = document.querySelector('#countHintTask');
    const progress = document.querySelector('#progressBar');

    const statisticsConfig = {
      allTask,
      doneTask,
      hintTask,
      progress,
      resetBtn
    };

    const statistics = Statistics.create(statisticsConfig);
    const elements = {
      node,
      nav,
      navList,
      taskText,
      statistics
    };

    return new Sidebar(elements);
  }

  init(taskArray, currentTaskIndex) {
    this.createTaskListInMenu(taskArray);
    this.printTaskText(taskArray[currentTaskIndex]);
  }

  events() {
    this.elements.node.addEventListener('click', e => {
      const {target} = e;
      if (target.closest('.nav__item')) {
        this.changeTask(target.closest('.nav__item'));
      }
    });
  }

  createTaskListInMenu(taskArray) {
    this.elements.nav.navList.innerHTML = '';
    taskArray.forEach(task => {
      this.elements.nav.navList.innerHTML += Sidebar.printTaskTextForMenuList(task);
    });
  }

  static printTaskTextForMenuList(taskObj) {
    const {title, id, syntax, level, done, hint} = taskObj;
    let checkClass = done ? 'task-done-check' : '';
    checkClass += hint ? ' task-hint' : '';

    const titleMessage = setTitleMessage(done, hint);

    return `
      <li class="nav__item" data-index="${id}">
        <div class="nav__check ${checkClass}" title="${titleMessage}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"/></svg>
        </div>
        <div class="nav__level">${level}</div>
        <div class="nav__syntax">${syntax}</div>
        <div class="nav__title">${title}</div>
      </li>
  `;
  }

  printTaskText(taskObj) {
    const {examples, title, subtitle, syntax, description} = taskObj;
    let examplesHtml = '';

    examples.forEach(example => {
      examplesHtml += `<li class="task__example-item">${example}</li>`
    });

    this.elements.taskText.innerHTML = `
          <h3 class="task__title">${title}</h3>
          <div class="task__subtitle">${subtitle}</div>
          <div class="task__syntax">${syntax}</div>
          <div class="task__desc">${description}
          </div>
          <ul class="task__examples-list">
          ${examplesHtml}
          </ul>
      `;
  }

  setCurrentTaskInMenu(id) {
    const menuItem = this.elements.nav.navList.querySelectorAll('.nav__item');

    menuItem.forEach(el => {
      el.classList.remove('current-task');
      const datasetIndex = +el.dataset.index;
      if (datasetIndex === id) {

        el.classList.add('current-task');
      }
    });
  }
}
