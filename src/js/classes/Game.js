import Board from "./Board.js";
import State from "./State.js";
import Score from "./Score.js";
import msToTime from "../util/msToTime.js";


export default class Game {
  constructor(board) {
    // this.view = {
    //   menu: null,
    //   score: null,
    //   setting: null
    // };
    // this.menuToggle = null;
    this.properties = {
      size: 4,
      isPicturesSquare: false
    };

    this.elements = {
      menuToggle: null,
      menuInner: null,
      menu: null,
      newGame: null,
      score: null,
      setting: null,
      resume: null,
      timeToggle: null,
      turnsToggle: null
    };

    this.board = board;
    this.state = State.ready('.stat');
    this.score = Score.ready();

    this.init();
    this.events();
  }

  static ready() {
    const board = new Board('.field', 3);
    return new Game(board);
  }

  init() {
    document.body.insertAdjacentHTML('afterbegin', `
    <div class="menu-toggle">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="menu">
      <div class="menu-inner">
        <div class="score"></div>
        <div class="settings"></div>
      </div>
    </div>
    `);

    this.elements.menuToggle = document.querySelector('.menu-toggle');
    this.elements.menuInner = document.querySelector('.menu-inner');
    this.elements.menu = document.querySelector('.menu');

    this.elements.newGame = document.querySelector('#new');
    this.elements.resume = document.querySelector('#resume');
    this.elements.score = document.querySelector('#score');
    this.elements.setting = document.querySelector('#setting');

    // this.elements.menuInner.innerHTML = this.viewMenu();
    this.viewMenu();
  }

  events = () => {
    document.body.addEventListener('click', (e) => {
      const {target} = e;

      // Клик по клетке поля
      if (target.closest('.cell')) {
        this.board.move(target.closest('.cell'));
        this.state.turn();
        if (this.board.isFinish()) {
          this.finishGame();
        }
      }

      // Клик по переключателю меню
      if (target.closest('.menu-toggle')) this.menuToggle(e);

      // пункты меню
      if (target.closest('#new')) this.newGame(e);
      if (target.closest('#resume')) this.resume(e);
      if (target.closest('#score')) this.viewScore();
      if (target.closest('#setting')) this.viewSetting();

      // Переключатель вида таблицы рекордов
      if (target.closest('#timeLabel')) this.viewTimeScore();

      if (target.closest('#turnLabel')) this.viewTurnsScore();

      if (target.closest('.back')) this.viewMenu();
    })
  };

  menuToggle(e) {
    e.preventDefault();

    const {menu, menuToggle} = this.elements;
    menu.classList.toggle('open');
    menuToggle.classList.toggle('open');

    document.querySelector('.field').classList.toggle('blur');
    document.querySelector('.stat').classList.toggle('blur');
  };

  newGame = (e) => {
    console.log('new Game');
    this.menuToggle(e);
    this.board.start();
    this.state.stop();
    this.state.start();
  };

  resume(e) {
    console.log('resume');
    this.menuToggle(e);
  }

  viewMenu() {
    this.elements.menuInner.innerHTML = '';
    this.elements.menuInner.insertAdjacentHTML('afterbegin', `
        <ul class="menu-list">
          <li id="resume">Продолжить</li>
          <li id="new">Новая игра</li>
          <li id="score">Счет</li>
          <li id="setting">Настройки</li>
        </ul>
    `);
  }

  viewSetting() {
    this.elements.menuInner.innerHTML = '';
    this.elements.menuInner.insertAdjacentHTML('afterbegin', `
        <form class="settings" name="settings">
        <a class="back" href="#"><h2>Back</h2></a>
        <h2 class="menu__title">Settings</h2>
        <div class="group">
        <label for="size">Size</label>
            <select name="size" id="size">
              <option value="3">3x3</option>
              <option value="4">4x4</option>
              <option value="5">5x5</option>
              <option value="6">6x6</option>
              <option value="7">7x7</option>
              <option value="8">8x8</option>
            </select>
         </div>
        <div class="group">
        <label for="isPicture">Design</label>
        <div>
        <input type="radio" name="isPicture" id="isPic" checked value="false"><label class="input-label" for="isPic">Digit</label>
        </div>
        <div>
        <input type="radio" name="isPicture" value="true" id="isDig"><label class="input-label" for="isDig">Picture</label>
        </div>
        </div>
        </form>
    `);


    // TODO: забрать данные с формы при изменении выбора и сохранить в переменные. При выборе новой игры, применить


    function setSetings() {
      // const sizeSelect = settings.language;
      // document.querySelector('#size')

    }
  }

  viewScore = () => {
    this.elements.menuInner.innerHTML = '';
    this.elements.menuInner.insertAdjacentHTML('afterbegin', `
    <div class="score-view">
    <a class="back" href="#"><h2>Back</h2></a>
      <h2 class="menu__title">Scores</h2>
      <ul class="score__labels">
        <li class="score__item active" id="timeLabel">Time</li>
        <li class="score__item" id="turnLabel">Turns</li>
      </ul>
      <div class="score__content">
        <div class="score__table">                   
        </div>
      </div>
    </div>
  </div>
    `);

    this.elements.timeToggle = document.querySelector('#timeLabel');
    this.elements.turnsToggle = document.querySelector('#turnLabel');

    // if (!this.elements.timeToggle.classList.contains('active') && !this.elements.turnsToggle.classList.contains('active')) {
    //   this.elements.timeToggle.classList.add('active');
    // }

    if (this.elements.timeToggle.classList.contains('active')) {
      this.viewTimeScore();
    } else {
      this.viewTurnsScore();
    }

  };

  viewTimeScore() {
    if (!this.elements.timeToggle.classList.contains('active')) {
      this.scoreToggle();
    }

    const table = document.querySelector('.score__table');

    table.innerHTML = '';
    table.insertAdjacentHTML('beforeend',
      `<div class="position">Pos</div>
      <div class="name">Name</div>
      <div class="time">Time</div>
      <div class="turns">Turns</div> `);

    const bestTime = this.score.getBestTime();
    bestTime.forEach((res, index) => {
      const {name, time, turns} = res;

      table.insertAdjacentHTML('beforeend', `
          <div class="position">${index + 1}</div>
          <div class="name">${name}</div>
          <div class="time">${msToTime(time)}</div>
          <div class="turns">${turns}</div>       
      `)
    });
  }

  viewTurnsScore = () => {
    if (!this.elements.turnsToggle.classList.contains('active')) {
      this.scoreToggle();
    }

    const table = document.querySelector('.score__table');

    table.innerHTML = '';
    table.insertAdjacentHTML('beforeend',
      `<div class="position">Pos</div>
      <div class="name">Name</div>
      <div class="turns">Turns</div> 
      <div class="time">Time</div>`);

    const bestTime = this.score.getBestTurns();
    bestTime.forEach((res, index) => {
      const {name, time, turns} = res;

      table.insertAdjacentHTML('beforeend', `
          <div class="position">${index + 1}</div>
          <div class="name">${name}</div>
          <div class="turns">${turns}</div>       
          <div class="time">${msToTime(time)}</div>
      `)
    });
  };

  scoreToggle = () => {
    const {timeToggle, turnsToggle} = this.elements;
    timeToggle.classList.toggle('active');
    turnsToggle.classList.toggle('active');
  };


  finishGame() {
    this.state.stop();
    const turns = this.state.getTurns();
    const time = this.state.time;
    const name = prompt('Your Name?');

    const res = {
      turns,
      time,
      name
    };

    this.score.setResult(res);
    console.log(res);
  };
};
