import setTitleMessage from "../utils/setTitleMessage";

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

    this.statistics = {
      allTask: obj.allTask,
      doneTask: obj.doneTask,
      hintTask: obj.hintTask,
      progressBar: obj.progressBar
    };

    this.changeTask = null;

    this.init.bind(this);
    this.events.call(this);
  }

  static create(el) {
    const node = document.querySelector(el);
    node.innerHTML = '';
    node.insertAdjacentHTML('afterbegin', `
    <div id="info" class="info">
    <div class="info__task-check task-done-check">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"/></svg>
    </div>
    <div class="levels">Level <span id="current-task"></span> of <span id="all-tasks-count"></span></div>
    <div class="controls">
      <button class="arrow arrow__left"></button>
      <button class="arrow arrow__right"></button>
    </div>
    <div id="menuToggle" class="menu__toggle">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <nav id="nav" class="nav">
    <ul id="navList" class="nav__list">
    </ul>
  </nav>
  <div id="task" class="task"></div>
  <div class="statistics">
    <div class="statistics__wrapper">
    <h3 class="statistics__title">Statistics</h3>
      <div id="progressBar" class="statistics__progress">
        <div class="statistics__progress-bar"></div>
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

    const infoBlock = document.querySelector('#info');
    const arrowLeft = document.querySelector('.arrow.arrow__left');
    const arrowRight = document.querySelector('.arrow.arrow__right');
    const currentLevel = document.querySelector('#current-task');
    const allCountLevels = document.querySelector('#all-tasks-count');
    const menuToggle = document.querySelector('#menuToggle');
    const nav = document.querySelector('#nav');
    const navList = document.querySelector('#navList');
    const taskText = document.querySelector('#task');
    const taskDoneCheckbox = document.querySelector('.info__task-check');
    const resetBtn = document.querySelector('#reset');
    const countAllTask = document.querySelector('#countAllTask');
    const countDoneTask = document.querySelector('#countDoneTask');
    const countHintTask = document.querySelector('#countHintTask');
    const progressBar = document.querySelector('#progressBar');

    const elements = {
      node,
      infoBlock,
      arrowLeft,
      arrowRight,
      currentLevel,
      allCountLevels,
      menuToggle,
      nav,
      navList,
      taskText,
      taskDoneCheckbox,
      countAllTask,
      countDoneTask,
      countHintTask,
      resetBtn,
      progressBar
    };

    return new Sidebar(elements);
  }

  init(taskArray, curentTaskIndex) {
    console.log(taskArray);
    this.createTaskListInMenu(taskArray);
    this.setCountAllTasksInInfoBlock(taskArray.length);
    this.setCurrentTaskLevel(taskArray[curentTaskIndex].level);
    this.printTaskText(taskArray[curentTaskIndex]);
  }

  events() {
    this.elements.node.addEventListener('click', e => {
      const {target} = e;

      // Change tasks
      if (target.closest('.arrow__left')) {
        this.changeTask('left');
      }
      if (target.closest('.arrow__right')) {
        this.changeTask('right');
      }
      if (target.closest('.nav__item')) {
        this.changeTask(target.closest('.nav__item'));
      }

      // Close-open task menu
      if (target.closest('#menuToggle')) {
        this.toggleMenu();
      }
    });
  }

  toggleMenu() {
    this.elements.menuToggle.classList.toggle('open');
    this.elements.nav.navWrapper.classList.toggle('open');
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

  setCurrentTaskLevel(cur) {
    this.elements.levels.currentLevel.textContent = cur;
  }

  setCountAllTasksInInfoBlock(num) {
    this.elements.levels.allCountLevels.textContent = num;
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

  setDoneCheckboxInHeader(isDone = true, isHint = false) {
    if (isDone) {
      this.elements.taskDoneCheckbox.classList.add('task-done-check');
    } else {
      this.elements.taskDoneCheckbox.classList.remove('task-done-check');
    }

    if (isHint) {
      this.elements.taskDoneCheckbox.classList.add('task-hint');
    } else {
      this.elements.taskDoneCheckbox.classList.remove('task-hint');
    }
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

  setStatistics(done, hint = -1, all = -1){
    if (done) {
      this.statistics.doneTask.textContent = done;
    }

    if (hint !== -1) {
      this.statistics.hintTask.textContent = hint;
    }

    if (all !== -1) {
      this.statistics.allTask.textContent = all;
    }
  }
}
