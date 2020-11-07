import msToTime from "../util/msToTime.js";

export default class State {
  constructor(el) {
    this._time = 0;
    this._turns = 0;
    this._state = 'ready';
    // this.$turns = null;
    this.$el = document.querySelector(el);

    this.$turns = this.$el.querySelector('.turns');
    this.$times = this.$el.querySelector('.times');

    this.start();
  }

  static ready(el) {
    return new State(el);
  }

  start = () => {
    this._time = 0;
    this._turns = 0;
    this._state = 'play';
    this.tick();
  };

  stop = () => {
    this._state = 'stop';
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
      this.$times.textContent = `Time: ${this.time}`;
      setTimeout(this.tick, 1000);
    }
  };

  get time() {
    return msToTime(this._time);
  }


}
