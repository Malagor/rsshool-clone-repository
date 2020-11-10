import msToTime from "../util/msToTime.js";

export default class State {
  constructor(el) {
    this._time = 0;
    this._turns = 0;
    this._state = 'start';

    this.timerID = null;

    this.$el = null;
    this.$turns = null;
    this.$times = null;

    this.init(el);
    // this.start();
  }

  static ready(el) {
    return new State(el);
  }

  init(el) {
    this.$el = document.querySelector(el);
    this.createHTML(this.$el);
  }

  createHTML = (parentEl) => {
    parentEl.insertAdjacentHTML('afterbegin', `
    <div class="stat">
      <span class="turns">Turns: 0</span>
      <span class="times">Time: 00:00:00</span>
    </div>
    `);
    this.$turns = this.$el.querySelector('.turns');
    this.$times = this.$el.querySelector('.times');
  };

  start = () => {
    this._time = 0;
    this._turns = 0;
    this._state = 'play';
    this.$turns.innerText = `Turns: ${this._turns}`;
    setTimeout(this.tick, 1000);
  };

  stop = () => {
    this._state = 'stop';
    clearTimeout(this.timerID);
    this.timerID = null;
  };

  pause =() => {
    clearTimeout(this.timerID);
  };

  resume = () => {
    this.tick();
  };

  turn = () => {
    if (this._state === 'play'){
      this._turns += 1;
      this.$turns.innerText = `Turns: ${this._turns}`;
    }
  };

  getTurns = () => {
    return this._turns;
  };

  tick = () => {
    if (this._state === 'play') {
      this._time += 1000;
      this.$times.textContent = `Time: ${msToTime(this.time)}`;
      this.timerID = setTimeout(this.tick, 1000);
    }
  };

  get time() {
    return this._time;
  }
}
