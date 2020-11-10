export default class Score {
  constructor() {
    this.scoreTable = this.loadTable();
  }

  static ready() {
    return new Score();
  }

  // Сохранение таблицы рекордов в localStorage
  saveTable() {
    if (this.scoreTable.length) {
      localStorage.setItem('scoreTable', JSON.stringify(this.scoreTable));
    } else {
      console.log('Таблица рекордов не сохранена. Таблица пуста');
    }
  }

// Загрузка таблицы рекордов из localStorage
  loadTable() {
    if (localStorage.getItem('scoreTable')) {
      // console.log('Таблица рекордов ЗАГРУЖЕНА!!!');
      return JSON.parse(localStorage.getItem('scoreTable'));
    } else {
      console.log('Таблица рекордов не загружена');
      return [];
    }
  }

  // Запись нового рекорда в таблицу, или нет, если он маленький
  setResult = (result) => {
    const {time, turns} = result;

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

  // Получение времени последнего в ранге рекорда в таблице (возвращает 10 результат)
  getLastPositionInScoreByTime = () => {
    const maxResultInTable = this.sortByField('time');

    if (maxResultInTable.length < 10) {
      return -1
    }
    return maxResultInTable[maxResultInTable.length - 1].time;

  };

  // Получение количства ходов последнего в ранге рекодда
  getLastPositionInScoreByTurns = () => {
    const maxResultInTable = this.sortByField('turns');

    if (maxResultInTable.length < 10) {
      return -1
    }
    return maxResultInTable[maxResultInTable.length - 1].turns;
  };

  // Сортировка таблицы рекордов по времени или ходам
  sortByField (field) {
    return this.scoreTable
      .sort((a, b) => a[field] - b[field])
      .filter((val, index) => index < 10);
  }

  // Возвращает таблицу рекордов отсортированную по времени
  getBestTime() {
    return this.sortByField('time');
  }

// Возвращает таблицу рекордов отсортированную по ходам
  getBestTurns() {
    return this.sortByField('turns');
  }
}
