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
      taskText: obj.taskText
    };

    this.changeTask = null;

    this.init.bind(this);
    this.events.bind(this)();
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
    <div id="task" class="task">
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
      taskDoneCheckbox
    };

    return new Sidebar(elements);
  }

  init(taskArray) {
    console.log(taskArray);
    this.createTaskListInMenu(taskArray);
    this.setCountAllTasksInInfoBlock(taskArray.length);
    this.setCurrentTaskLevel(taskArray[0].level);
    this.printTaskText(taskArray[0]);
  }

  events() {
    this.elements.node.addEventListener('click', e => {
      const {target} = e;

      if (target.closest('.arrow__left')) {
        this.changeTask('left');
      }
      if (target.closest('.arrow__right')) {
        this.changeTask('right');
      }
      if (target.closest('#menuToggle')) {
        this.toggleMenu();
      }
      if (target.closest('.nav__item')) {
        this.changeTask(target.closest('.nav__item'));

        // const event = new Event('clickMenuTask', {bubbles: true});
        // target.closest('.nav__item').dispatchEvent(event);
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
    const {title, id, syntax, level, done} = taskObj;
    const checkClass = done ? 'task-done-check' : '';
    return `
      <li class="nav__item" data-index="${id}">
        <div class="nav__check ${checkClass}">
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

  setDoneCheckboxInHeader(isDone = true) {
    if (isDone) {
      this.elements.taskDoneCheckbox.classList.add('task-done-check');
    } else {
      this.elements.taskDoneCheckbox.classList.remove('task-done-check');
    }
  }
}
