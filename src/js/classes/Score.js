export default class Score {
  constructor() {
    this.scoreTable = this.loadTable();
  }

  static ready() {
    return new Score();
  }

  saveTable() {
    if (this.scoreTable.length) {
      localStorage.setItem('scoreTable', JSON.stringify(this.scoreTable));
    } else {
      console.log('Таблица рекордов не сохранена. Таблица пуста');
    }
  }

  loadTable() {
    if (localStorage.getItem('scoreTable')) {
      console.log('Таблица рекордов ЗАГРУЖЕНА!!!');
      return JSON.parse(localStorage.getItem('scoreTable'));
    } else {
      console.log('Таблица рекордов не загружена');
      return [];
    }
  }

  setResult = (result) => {
    const {time, turns} = result;

    const lastTime = this._getLastPositionInScoreByTime();
    const lastTurns = this._getLastPositionInScoreByTurns();

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

  _getLastPositionInScoreByTime = () => {
    // const maxResultInTable = this.scoreTable
    //   .sort((a, b) => a.time - b.time)
    //   .filter((val, index) => index < 10);
    const maxResultInTable = this.sortByField('time');


    if (maxResultInTable.length < 10) {
      return -1
    }

    return maxResultInTable[maxResultInTable.length - 1].time;

  };

  _getLastPositionInScoreByTurns = () => {
    // const maxResultInTable = this.scoreTable
    //   .sort((a, b) => a.turns - b.turns)
    //   .filter((val, index) => index < 10);

    const maxResultInTable = this.sortByField('turns');

    if (maxResultInTable.length < 10) {
      return -1
    }

    return maxResultInTable[maxResultInTable.length - 1].turns;
  };

  sortByField (field) {
    return this.scoreTable
      .sort((a, b) => a[field] - b[field])
      .filter((val, index) => index < 10);
  }

  // TODO: оформить вывод таблицы рекордов

  bestTime() {
    return this.sortByField('time').filter((el, i) => {
      return i < 10;
    })
  }

  bestTurns() {
    return this.sortByField('turns').filter((el, i) => {
      return i < 10;
    })
  }
}
