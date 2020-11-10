import Square from "./Square.js";
import sound from "../util/sound.js";

export default class Board {
  constructor(element, size, isPic = false) {
    this.size = size || 4;
    this.countCells = size * size;
    this.$board = element;
    this.cellArray = [];
    this.isPic = isPic;

    this.init();
  }

  static create(element, size, isPic) {
    return new Board(element, size, isPic);
  }

  init() {
    this.start(true);

    // this.$board.addEventListener('mousedown', (e) => {
    //   e.preventDefault();
    // });

    // let currentCard;
    // const dragStart = function () {
    //   setTimeout(() => {
    //     this.classList.add('hide');
    //     currentCard = this;
    //   }, 0);
    // };
    //
    // const dragEnd = function () {
    //   this.classList.remove('hide');
    // };
    //
    // const dragOver = function (evt) {
    //   evt.preventDefault();
    // };
    //
    // const dragDrop = function (evt) {
    //   evt.preventDefault();
    //   this.append(currentCard);
    //   this.classList.remove('hovered');
    // };
    //
    // const dragEnter = function () {
    //   this.classList.add('hovered');
    // };
    //
    // const dragLeave = function () {
    //   this.classList.remove('hovered');
    // };
    //
    // this.cellArray.forEach(cell => {
    //   const grid = cell.cell;
    //   const square = cell.square;
    //
    //   grid.addEventListener('dragover', dragOver);
    //   grid.addEventListener('dragenter', dragEnter);
    //   grid.addEventListener('dragleave', dragLeave);
    //   grid.addEventListener('drop', dragDrop);
    //
    //   if (square) {
    //     square['$square'].addEventListener('dragstart', dragStart);
    //     square['$square'].addEventListener('dragend', dragEnd);
    //   }
    // });

    // this.dragNDrop();
    // this.render();
  }

  start(isInit = false) {
    // console.log('Board.start');
    this.cellArray = [];
    const randIndexArray = isInit
      ? this.randIndex(this.countCells, false)
      : this.randIndex(this.countCells);

    let imgIndex;
    if (this.isPic) {
      imgIndex = 1 + Math.floor(Math.random() * Math.floor(150));
    }
    console.log('randIndexArray', randIndexArray);
    for (let i = 0; i < this.countCells; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      const left = i % this.size;
      const top = (i - left) / this.size;
      let square = null;


      if (randIndexArray[i] !== (this.countCells) - 1) {
        square = Square.create(randIndexArray[i], randIndexArray[i] + 1);

        if (this.isPic) {
          const sqr = square.square;
          const width = 400;
          const height = 400;
          const size = this.size;
          const sqrSize = width / size;
          const leftBg = randIndexArray[i] % size;
          const topBg = (randIndexArray[i] - leftBg) / size;

          sqr.style.backgroundImage = `url(../assets/images/${imgIndex}.jpg)`;
          sqr.style.backgroundSize = `${width}px ${height}px`;
          sqr.style.backgroundPosition = `${(size - leftBg) * sqrSize}px ${(size - topBg) * sqrSize}px`;
        }
      }

      this.cellArray.push({
        top,
        left,
        cell,
        square
      });
    }
    this.render();
  }

  render = () => {

    this.$board.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    this.$board.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;
    this.$board.innerHTML = '';

    const fragment = document.createDocumentFragment();

    this.cellArray.forEach(gridElement => {
      const square = gridElement.square;

      if (square) {
        square['$square'].setAttribute('draggable', false);
        gridElement.cell.appendChild(square['$square']);
      }
      fragment.appendChild(gridElement.cell);
    });

    this.$board.appendChild(fragment);


    // // Drag N Drop
    // const emptyCell = this.cellArray[this.getIndexEmpty()];
    // // console.log('emptyCell', emptyCell);
    //
    // const {top, left} = emptyCell;
    // const movableSquaresIndex = this.nextdoorNeighbours(top, left);
    //
    //
    // // Массив соседних с пустой элементоы
    // const gridEl = movableSquaresIndex.map(i => {
    //     return this.cellArray[i].square['$square'];
    //   }
    // );
    //
    // console.log('gridEl', gridEl);
    //
    // // drag n drop events
    // let currentCard;
    // const dragStart = function () {
    //   setTimeout(() => {
    //     this.classList.add('hide');
    //     currentCard = this;
    //   }, 0);
    // };
    //
    // const dragEnd = function () {
    //   this.classList.remove('hide');
    // };
    //
    // const dragOver = function (evt) {
    //   evt.preventDefault();
    // };
    //
    // const dragDrop = function (evt) {
    //   evt.preventDefault();
    //   this.append(currentCard);
    //   this.classList.remove('hovered');
    // };
    //
    // const dragEnter = function () {
    //   this.classList.add('hovered');
    // };
    //
    // const dragLeave = function () {
    //   this.classList.remove('hovered');
    // };
    //
    //
    // // пустая ячейка в которую можно положить
    // emptyCell.cell.addEventListener('dragover', dragOver);
    // emptyCell.cell.addEventListener('dragenter', dragEnter);
    // emptyCell.cell.addEventListener('dragleave', dragLeave);
    // emptyCell.cell.addEventListener('drop', dragDrop);
    //
    // // Те которые можно тягать
    // gridEl.forEach(cell => {
    //   cell.setAttribute('draggable', 'true');
    //   cell.addEventListener('dragstart', dragStart);
    //   cell.addEventListener('dragend', dragEnd);
    // });
  };

  // Поиск индексов фишек с решаемым результатом
  randIndex(num, isSort = true) {

    let arr = [...Array(num).keys()];

    do {
      if (isSort) {
        arr = arr.sort(() => Math.random() - 0.5);
      }
    } while (!this.isSolution(arr));

    return arr;
  }

  // Проверка на решаемость
  isSolution = (arr) => {

    // Проверка на четность
    function isEven(num) {
      return !(num % 2);
    }

    let emptyPosition = null;
    const size = Math.sqrt(arr.length);

    const sum = arr.reduce((sum, value, index, arr) => {
      if (value === arr.length - 1) {
        sum += (index % size) + 1;
        emptyPosition = (index % size) + 1;
        // console.log('empty pos', (index % size) + 1);
      } else {
        for (let i = index + 1; i < arr.length; i += 1) {
          if (value > arr[i]) {
            sum += 1;
          }
        }
      }
      return sum;
    }, 0);

    if (isEven(arr.length)) {
      if (isEven(sum)) return true;
    } else {
      if (!isEven(sum) && !isEven(emptyPosition)) return true;
    }
    return false;
  };


  // Перемещение фишки
  move = (target, isSound = true) => {
    if (isSound) {
      sound();
    }

    const curIndex = this.getIndexClick(target);
    const emptyIndex = this.getIndexEmpty();

    const {top: curTop, left: curLeft} = this.cellArray[curIndex];
    const {top: emptyTop, left: emptyLeft} = this.cellArray[emptyIndex];

    const deltaTop = curTop - emptyTop;
    const deltaLeft = curLeft - emptyLeft;


    if ((Math.abs(deltaLeft) + Math.abs(deltaTop)) === 1) {

      // Animation moves
      let directionMove;
      if (deltaLeft === -1) {
        directionMove = 'Right';
      } else if (deltaLeft === 1) {
        directionMove = 'Left';
      } else if (deltaTop === -1) {
        directionMove = 'Down';
      } else if (deltaTop === 1) {
        directionMove = 'Up';
      }

      this.animationMove(directionMove, curIndex);

      this.cellArray[emptyIndex].square = this.cellArray[curIndex].square;
      this.cellArray[curIndex].square = null;

      return true;
    }
    return false;
  };

  // Провека на окончание игры
  isFinish() {
    return this.cellArray.every(el => {
      const {top, left} = el;
      let index;
      if (el.square) {
        index = el.square.index;
      } else {
        index = (this.countCells) - 1;
      }

      if ((top * this.size + left) === index) return true;
    })
  }

  // ПАеремещение фишек перетягиванием
  dragNDrop = () => {

    this.setDraggable();

    // Drag N Drop
    const emptyCell = this.cellArray[this.getIndexEmpty()];
    // console.log('emptyCell', emptyCell);

    const {top, left} = emptyCell;
    const movableSquaresIndex = this.nextdoorNeighbours(top, left);


    // Массив соседних с пустой элементоы
    const gridEl = movableSquaresIndex.map(i => {
        return this.cellArray[i].square['$square'];
      }
    );

    // console.log('gridEl', gridEl);

    // drag n drop events
    let currentCard;
    const dragStart = function () {
      setTimeout(() => {
        this.classList.add('hide');
        currentCard = this;
      }, 0);
    };

    const dragEnd = function () {
      this.classList.remove('hide');
    };

    const dragOver = function (evt) {
      evt.preventDefault();
    };

    const dragDrop = function (evt) {
      evt.preventDefault();
      this.append(currentCard);
      this.classList.remove('hovered');
    };

    const dragEnter = function () {
      this.classList.add('hovered');
    };

    const dragLeave = function () {
      this.classList.remove('hovered');
    };


    // пустая ячейка в которую можно положить
    emptyCell.cell.addEventListener('dragover', dragOver);
    emptyCell.cell.addEventListener('dragenter', dragEnter);
    emptyCell.cell.addEventListener('dragleave', dragLeave);
    emptyCell.cell.addEventListener('drop', dragDrop);

    // Те которые можно тягать
    gridEl.forEach(cell => {

      this.setDraggable(cell);
      cell.addEventListener('dragstart', dragStart);
      cell.addEventListener('dragend', dragEnd);
    });

  };

  // Установка возможности Drag-N-Drop
  setDraggable(element) {
    if (element) {
      element.setAttribute('draggable', 'true');
    } else {
      const allCell = document.querySelectorAll('.square');
      allCell.forEach(el => {
        el.setAttribute('draggable', 'false');
      })
    }
  }

  // Анимация перемещения
  animationMove = (direction, indexElement) => {
    const cls = `move${direction}`;
    const $el = this.cellArray[indexElement].square['$square'];


    $el.classList.add(cls);
    this.$board.addEventListener('click', (e) => {
      e.preventDefault();
    });
    $el.addEventListener('animationend', () => {
      $el.classList.remove(cls);
      this.render();
    });
  };

  // Получение индекса кликнутой фишки в массиве
  getIndexClick = (target) => {
    return this.cellArray.findIndex(curElement => {
      return curElement.cell === target;
    })
  };

  // Поиск индекса пустой фишки
  getIndexEmpty = () => {
    return this.cellArray.findIndex(element => {
      return element.square === null;
    })
  };

  // Поиск индексов соседних фишек
  nextdoorNeighbours(top, left) {
    const curIndex = top * this.size + left;

    const getLeft = () => {
      if (left === 0) return null;
      return curIndex - 1;
    };

    const getRight = () => {
      if (left === this.size - 1) return null;
      return curIndex + 1;
    };

    const getTop = () => {
      if (top === 0) return null;
      return curIndex - this.size;
    };

    const getBottom = () => {
      if (top === this.size - 1) return null;
      return curIndex + this.size;
    };

    return [
      getTop(),
      getLeft(),
      getRight(),
      getBottom(),
    ].filter(index => index !== null);
  }

}
