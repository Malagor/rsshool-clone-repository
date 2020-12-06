import arrow from "../../img/next-arrow.svg";

export default class Info {
  constructor(props) {
    this.elements = {
      node: props.node,
      controls: {
        arrowLeft: props.arrowLeft,
        arrowRight: props.arrowRight
      },
      levels: {
        currentLevel: props.currentLevel,
        allCountLevels: props.allCountLevels
      },
      taskDoneCheckbox: props.taskDoneCheckbox,
      menuToggle: props.menuToggle,
    };

    this.changeTask = null;
    this.toggleMenu = null;


    this.events.call(this);
  }

  static create(el) {

    const node = document.querySelector(el);
    node.innerHTML = '';
    node.insertAdjacentHTML("afterbegin", `
    <div id="info" class="info">
    <div class="info__task-check task-done-check">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"/></svg>
    </div>
    <div class="levels">Level <span id="current-task"></span> of <span id="all-tasks-count"></span></div>
    <div class="controls">
      <button class="arrow arrow__left">${arrow}</button>
      <button class="arrow arrow__right">${arrow}</button>
    </div>
    <div id="menuToggle" class="menu__toggle">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
    `);

    const arrowLeft = document.querySelector('.arrow.arrow__left');
    const arrowRight = document.querySelector('.arrow.arrow__right');
    const currentLevel = document.querySelector('#current-task');
    const allCountLevels = document.querySelector('#all-tasks-count');
    const menuToggle = document.querySelector('#menuToggle');
    const taskDoneCheckbox = document.querySelector('.info__task-check');

    const elements = {
      node,
      arrowLeft,
      arrowRight,
      currentLevel,
      allCountLevels,
      menuToggle,
      taskDoneCheckbox,
    };

    return new Info(elements);
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

      // Close-open task menu
      if (target.closest('#menuToggle')) {
        this.toggleMenu();
      }
    });
  }

  setCurrentTaskLevel(cur) {
    this.elements.levels.currentLevel.textContent = cur;
  }

  setCountAllTasksInInfoBlock(num) {
    this.elements.levels.allCountLevels.textContent = num;
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
}
