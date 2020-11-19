export default class Sidebar {
  constructor(el) {
    this.elements = {
      main: el.main,
      infoBlock: el.infoBlock,
      controls: {
        arrowLeft: el.arrowLeft,
        arrowRight: el.arrowRight
      },
      levels: {
        currentLevel: el.currentLevel,
        allCountLevels: el.allCountLevels
      },
      menuToggle: el.menuToggle,
      nav: {
        nav: el.nav,
        navList: el.navList
      },
      taskText: el.taskText
    };

    this.init.bind(this);
    this.events.bind(this)();
  }

  static create(el) {
    const main = document.querySelector(el);
    main.innerHTML = '';
    main.insertAdjacentHTML('afterbegin', `
    <div id="info" class="info">
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

    const elements = {
      main,
      infoBlock,
      arrowLeft,
      arrowRight,
      currentLevel,
      allCountLevels,
      menuToggle,
      nav,
      navList,
      taskText
    };

    return new Sidebar(elements);
  }

  init(taskArray) {
    console.log(taskArray);
    this.createTaskListInMenu(taskArray);
    this.setCountAllTasksInInfoBlock(taskArray.length);
    this.setHeader(taskArray[0].level);
    this.printTaskText(taskArray[0]);
  }

  events() {
    this.elements.main.addEventListener('click', e => {
      const {target} = e;

      if (target.closest('.arrow__left')) {
        const event = new Event('clickLeftArrow', {bubbles: true});
        document.body.dispatchEvent(event);
      }
      if (target.closest('.arrow__right')) {
        const event = new Event('clickRightArrow', {bubbles: true});
        document.body.dispatchEvent(event);
      }
      if (target.closest('#menuToggle')) {
        this.toggleMenu();
      }
      if (target.closest('.nav__item')){
        const event = new Event('clickMenuTask', {bubbles: true});
        target.closest('.nav__item').dispatchEvent(event);
      }
    });
  }

  toggleMenu() {
    this.elements.menuToggle.classList.toggle('open');
    this.elements.nav.nav.classList.toggle('open');
  }

  createTaskListInMenu(taskArray){
    this.elements.nav.navList.innerHTML = '';
    taskArray.forEach(task => {
   this.elements.nav.navList.innerHTML += task.toHTMLForMenu()
 });
  }

  setHeader(cur){
    this.elements.levels.currentLevel.textContent = cur;
  }

  setCountAllTasksInInfoBlock(num){
    this.elements.levels.allCountLevels.textContent = num;
  }

  printTaskText(taskObj) {
    this.elements.taskText.innerHTML = taskObj.toHTML();
  }
}
