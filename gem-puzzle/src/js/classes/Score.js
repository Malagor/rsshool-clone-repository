export default class Score {
  constructor() {
    this.scoreTable = this.loadTable();
  }

  static ready() {
    return new Score();
  }

  // save in localStorage
  saveTable() {
    if (this.scoreTable.length) {
      localStorage.setItem('scoreTable', JSON.stringify(this.scoreTable));
    } else {
      console.log('Таблица рекордов не сохранена. Таблица пуста');
    }
  }

  // load from localStorage
  loadTable = () => {
    if (localStorage.getItem('scoreTable')) {
      return JSON.parse(localStorage.getItem('scoreTable'));
    }
    console.log('Таблица рекордов не загружена');
    return [];
  };

  // set new record to score table
  setResult = (result) => {
    const { time, turns } = result;

    const lastTime = this.getLastPositionInScoreByTime();
    const lastTurns = this.getLastPositionInScoreByTurns();

    if (time < lastTime
      || turns < lastTurns
      || lastTime === -1
      || lastTurns === -1) {
      this.scoreTable.push(result);

      this.saveTable();
      return true;
    }
    return false;
  };

  getLastPositionInScoreByTime = () => {
    const maxResultInTable = this.sortByField('time');

    if (maxResultInTable.length < 10) {
      return -1;
    }
    return maxResultInTable[maxResultInTable.length - 1].time;
  };

  getLastPositionInScoreByTurns = () => {
    const maxResultInTable = this.sortByField('turns');

    if (maxResultInTable.length < 10) {
      return -1;
    }
    return maxResultInTable[maxResultInTable.length - 1].turns;
  };

  sortByField(field) {
    return this.scoreTable
      .sort((a, b) => a[field] - b[field])
      .filter((val, index) => index < 10);
  }

  getBestTime() {
    return this.sortByField('time');
  }

  getBestTurns() {
    return this.sortByField('turns');
  }
}
