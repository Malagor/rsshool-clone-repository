/* eslint-disable import/extensions */
import Board from './Board.js';
import State from './State.js';
import Score from './Score.js';
import msToTime from '../util/msToTime.js';

export default class Game {
  constructor() {
    this.properties = {
      size: 4,
      isPicturesSquare: false,
      isSound: true,
      sizeBoard: null,
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
      turnsToggle: null,
      board: null,
    };

    this.board = null;
    this.state = null;
    this.score = null;

    this.init();
    this.events();
  }

  static ready() {
    const game = new Game();

    const loadGameObj = game.loadStateGame();

    if (loadGameObj) {
      game.properties.size = +loadGameObj.size;
      game.properties.isSound = loadGameObj.isSound;
      game.properties.isPicturesSquare = loadGameObj.isPic;
      if (game.properties.isPicturesSquare) {
        game.elements.board.classList.add('picture');
      } else {
        game.elements.board.classList.remove('picture');
      }
      const { imgIndex, state, arrayCell } = loadGameObj;
      game.state.time = state.time;
      game.state.turns = state.turns;
      game.state.state = state.state;
      game.board = Board.create(game.elements.board, game.properties.size,
        game.properties.sizeBoard, arrayCell, game.properties.isPicturesSquare, imgIndex);
    } else {
      game.board = Board.create(game.elements.board,
        game.properties.size, game.properties.sizeBoard);
    }

    game.board.start(true);
    if (game.state.state === 'play') {
      game.state.start();
    }

    // game.board.cellArray = loadGameObg.arrayCell;
    // game.board.render();

    return game;
  }

  init = () => {
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

    document.body.insertAdjacentHTML('afterbegin', `
    <div class="field"></div>
    <div class="statistic"></div>
    `);

    this.state = State.ready('.statistic');
    this.score = Score.ready();

    this.elements.board = document.querySelector('.field');

    this.elements.menuToggle = document.querySelector('.menu-toggle');
    this.elements.menuInner = document.querySelector('.menu-inner');
    this.elements.menu = document.querySelector('.menu');

    this.elements.newGame = document.querySelector('#new');
    this.elements.resume = document.querySelector('#resume');
    this.elements.score = document.querySelector('#score');
    this.elements.setting = document.querySelector('#setting');

    this.viewMenu();
  };

  events = () => {
    document.body.addEventListener('click', (e) => {
      const { target } = e;

      // Клик по клетке поля

      if (target.closest('.cell')) {
        if (this.state.state === 'play') {
          if (this.board.move(target.closest('.cell'), this.properties.isSound)) {
            this.state.turn();
            if (this.board.isFinish()) {
              this.finishGame();
            }
            this.saveStateGame();
          }
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
    });
  };

  menuToggle(e) {
    e.preventDefault();

    const { menu, menuToggle } = this.elements;
    menu.classList.toggle('open');
    menuToggle.classList.toggle('open');

    document.querySelector('.field').classList.toggle('blur');
    document.querySelector('.stat').classList.toggle('blur');

    if (document.querySelector('.win-modal')) {
      document.querySelector('.win-modal').classList.toggle('blur');
    }
  }

  newGame = (e) => {
    this.menuToggle(e);

    if (document.querySelector('.win-modal')) {
      document.body.removeChild(document.querySelector('.win-modal'));
    }

    if (document.querySelector('.win-modal')) {
      document.body.removeChild(document.querySelector('.overlay'));
    }

    if (this.properties.isPicturesSquare) {
      this.elements.board.classList.add('picture');
    } else {
      this.elements.board.classList.remove('picture');
    }
    this.board = Board.create(this.elements.board, this.properties.size,
      this.properties.sizeBoard, [], this.properties.isPicturesSquare);
    this.board.start();
    this.state.stop();
    this.state.start();
  };

  resume(e) {
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
        <input type="radio" name="isPicture" value="true" id="isDig"  checked="checked"><label class="input-label" for="isDig">Picture</label>
        </div>
        </div>
        <div class="group">
          <input type="checkbox" id="sound">
          <label class="sound-label" for="sound">Sound</label>
        </div>
        </form>
    `);

    const select = document.querySelector('.settings #size');
    const radios = document.querySelectorAll('input[type="radio"][name="isPicture"]');
    const check = document.querySelector('#sound');

    select.options[this.properties.size - 3].selected = true;
    check.checked = this.properties.isSound;

    const setSettings = () => {
      this.properties.size = select.value;
      this.properties.isSound = check.checked;

      for (const radio of radios) {
        if (radio.checked) {
          this.properties.isPicturesSquare = radio.value === 'true';
        }
      }
    };

    select.addEventListener('change', setSettings);
    check.addEventListener('change', setSettings);

    for (const radio of radios) {
      radio.checked = radio.value === `${this.properties.isPicturesSquare}`;
      radio.addEventListener('change', setSettings);
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

    if (this.elements.timeToggle.classList.contains('active')) {
      this.viewTimeScore();
    } else {
      this.viewTurnsScore();
    }
  };

  viewTimeScore = () => {
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
      const { name, time, turns } = res;

      table.insertAdjacentHTML('beforeend', `
          <div class="position">${index + 1}</div>
          <div class="name">${name}</div>
          <div class="time">${msToTime(time)}</div>
          <div class="turns">${turns}</div>       
      `);
    });
  };

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
      const { name, time, turns } = res;

      table.insertAdjacentHTML('beforeend', `
          <div class="position">${index + 1}</div>
          <div class="name">${name}</div>
          <div class="turns">${turns}</div>       
          <div class="time">${msToTime(time)}</div>
      `);
    });
  };

  viewWin = () => {
    const lastTime = this.score.getLastPositionInScoreByTime();
    const lastTurns = this.score.getLastPositionInScoreByTurns();

    const isRecord = lastTime < 0 || lastTurns < 0
      || (lastTime > this.state.time) || (lastTurns > this.state.turns);

    document.body.insertAdjacentHTML('afterbegin', `
    <div class="overlay"></div>
      <div class="win-modal ${isRecord ? '' : 'no-record'}">
        <div class="title">Вам удалось!!!</div>
        <div class="text">После <span class="record-time">${msToTime(this.state.time)}</span> времени и <span class="record-turns">${this.state.turns}</span> ходов вы собрали пазл из <span class="record-size">${(this.properties.size * this.properties.size) - 1}</span> клеток. Поздравляю!!!
        </div>
        <div class="record">Вы<span class="worm-words">, к сожалению не</span> попали в таблицу рекордов<span class="worm-words">. Но это не повод унывать, вы все равно молодец!</span><span class="reason">.</span> </div>
        <div class="question">Внести ваш результат в таблицу? Если "Да", то введите ваше имя и отправте форму. Если вы скромничаете, то тоже имеете право.
        </div>
        <div class="next-game">Для начала новой игры или изменения настроек зайдите в меню. Там все будет.</div>
        <form class="your-name-form">
          <input id="name" class="name" type="text" placeholder="Ваше имя?">
          <input id="cancel" type="reset" value="Я скромный">
          <input id="send" type="submit" value="Я ПОБЕДИТЕЛЬ!">
        </form>
    
    </div>    
    `);
  };

  scoreToggle = () => {
    const { timeToggle, turnsToggle } = this.elements;
    timeToggle.classList.toggle('active');
    turnsToggle.classList.toggle('active');
  };

  finishGame() {
    this.board.randIndexArray = [];
    this.state.stop();
    this.state._state = 'finish';
    const turns = this.state.getTurns();
    const { time } = this.state;
    // const name = prompt('Your Name?');

    this.saveStateGame();
    this.viewWin();

    document.querySelector('#send').addEventListener('click', () => {
      let name = document.querySelector('#name').value;

      if (name === '') name = 'Gamer';

      const res = {
        turns,
        time,
        name,
      };

      if (turns && time) {
        this.score.setResult(res);
      }

      this.closeModal();
    });

    document.querySelector('#cancel').addEventListener('click', () => {
      this.closeModal();
    });
  }

  closeModal = () => {
    const modal = document.querySelector('.win-modal ');
    const overlay = document.querySelector('.overlay ');

    document.body.removeChild(modal);
    document.body.removeChild(overlay);
  };

  saveStateGame = () => {
    const gamePropertyJson = {
      size: this.properties.size,
      isPic: this.properties.isPicturesSquare,
      isSound: this.properties.isSound,
      imgIndex: this.board.imageIndex,
      arrayCell: this.board.getValueSquareArray(),
      state: this.state.getState(),
    };

    // console.log('Save data', gamePropertyJson);
    localStorage.setItem('saveGame', JSON.stringify(gamePropertyJson));
  };

  loadStateGame = () => {
    const loadObj = JSON.parse(localStorage.getItem('saveGame'));
    return loadObj || null;
  }
}
