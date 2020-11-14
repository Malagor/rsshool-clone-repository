/* eslint-disable import/extensions */
import Square from './Square.js';
import sound from '../util/sound.js';

export default class Board {
  constructor(element, size, sizeBoard, arrayCell = [], isPic = false, imageIndex = null) {
    this.size = size || 4;
    this.countCells = size * size;
    this.$board = element;
    this.cellArray = null;
    this.isPic = isPic;
    this.imageIndex = imageIndex;
    this.draggableSquare = null;
    this.randIndexArray = arrayCell;
    this.sizeBoard = sizeBoard;
  }

  static create(element, size, sizeBoard, arrayCell, isPic, imageIndex) {
    return new Board(element, size, sizeBoard, arrayCell, isPic, imageIndex);
  }

  start(isInit = false) {
    this.$board.style.setProperty('--size', `${this.size}`);
    this.cellArray = [];

    // Если это новая игра, то получаем перемешанные индексы, иначе попорядку
    if (this.randIndexArray.length === 0) {
      this.randIndexArray = this.randIndex(this.countCells, !isInit);
    }

    // выюираем рандомную картинку
    if (this.isPic && (this.imageIndex === null)) {
      this.imageIndex = 1 + Math.floor(Math.random() * Math.floor(150));
    }

    // создаем массив клеток
    for (let i = 0; i < this.countCells; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      const left = i % this.size;
      const top = (i - left) / this.size;
      let square = null;

      // Создаем фишку в клетке
      if (this.randIndexArray[i] !== (this.countCells) - 1) {
        square = Square.create(this.randIndexArray[i], this.randIndexArray[i] + 1);

        // Если в настройках выбрана картинка, то формируем картинку для фишки
        if (this.isPic) {
          const sqr = square.square;
          const width = this.sizeBoard;
          const height = this.sizeBoard;
          const { size } = this;
          const leftBg = this.randIndexArray[i] % size;
          const topBg = (this.randIndexArray[i] - leftBg) / size;

          sqr.style.backgroundImage = `url(./assets/images/${this.imageIndex}.jpg)`;
          sqr.style.backgroundSize = `${width}px ${height}px`;
          sqr.style.setProperty('--bgTop', `${leftBg}`);
          sqr.style.setProperty('--bgLeft', `${topBg}`);
        }
      }

      // Помещаем элемент в массив
      this.cellArray.push({
        top, // строка
        left, // рядок
        cell, // DOM элемент клетки
        square, // DOM  элемент фишки в клетке, или null
      });
    }

    this.render();
  }

  render = () => {
    this.$board.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    this.$board.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;
    this.$board.innerHTML = '';

    const fragment = document.createDocumentFragment();

    this.cellArray.forEach((gridElement) => {
      const { square } = gridElement;

      if (square) {
        square.$square.setAttribute('draggable', false);
        gridElement.cell.appendChild(square.$square);
      }
      fragment.appendChild(gridElement.cell);
    });

    this.$board.appendChild(fragment);

    // после отрисовки навешиваем возможность тягать клетки ТОЛЬКО рядом с пустой
    // this.setDraggable();
    // this.dragNDrop();
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
    // Если четный то вовзращает true
    function isEven(num) {
      return !(num % 2);
    }

    let emptyPosition = null;
    const size = Math.sqrt(arr.length);

    let sum = arr.reduce((summ, value, index) => {
      if (value === arr.length - 1) {
        const left = index % size;
        emptyPosition = ((index - left) / size) + 1;
      } else {
        for (let i = index + 1; i < arr.length; i += 1) {
          if (value > arr[i]) {
            summ += 1;
          }
        }
      }
      return summ;
    }, 0);

    if (isEven(arr.length)) {
      sum += emptyPosition;
    }

    return isEven(sum);
  };

  // Перемещение фишки
  move = (target, isSound = true) => {
    const curIndex = this.getIndexElementByTarget(target);
    const emptyIndex = this.getIndexEmpty();

    const { top: curTop, left: curLeft } = this.cellArray[curIndex];
    const { top: emptyTop, left: emptyLeft } = this.cellArray[emptyIndex];

    const deltaTop = curTop - emptyTop;
    const deltaLeft = curLeft - emptyLeft;

    if ((Math.abs(deltaLeft) + Math.abs(deltaTop)) === 1) {
      if (isSound) {
        sound();
      }

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
    return this.cellArray.every((el) => {
      const { top, left } = el;
      let index;
      if (el.square) {
        index = el.square.index;
      } else {
        index = (this.countCells) - 1;
      }

      return (top * this.size + left) === index;
    });
  }

  // Перемещение фишек перетягиванием
  dragNDrop = () => {
    // console.log('DRAG N DROP!!!');

    this.setDraggable();

    const allCell = document.querySelectorAll('.square');
    allCell.forEach((el) => {
      el.setAttribute('draggable', 'false');
    });

    const emptyCell = this.cellArray[this.getIndexEmpty()];
    const { top, left } = emptyCell;

    // Массив соседних с пустой элементов
    const gridEl = this.nextdoorNeighbours(top, left).map((i) => {
      if (this.cellArray[i].square) {
        return this.cellArray[i].square.$square;
      }
      return false;
    });

    gridEl.forEach((cell) => cell.setAttribute('draggable', 'true'));

    // // Убирает возможность тягаться у всех фишек
    // this.setDraggable();
    //
    // // Получаем пустую клетку
    // const emptyCell = this.cellArray[this.getIndexEmpty()];
    //
    // // Ее позиция
    // const { top, left } = emptyCell;
    //
    // // Массив соседних с пустой элементов
    // const gridEl = this.nextdoorNeighbours(top, left).map((i) => {
    //   if (this.cellArray[i].square) {
    //     return this.cellArray[i].square.$square;
    //   }
    //   return false;
    // });
    //
    // this.setDraggable(gridEl);

    // drag n drop events
    const dragStart = (target) => {
      setTimeout(() => {
        target.classList.add('hide');
        this.draggableSquare = target;
      }, 0);
    };

    const dragEnd = (target) => {
      target.classList.remove('hide');
    };

    const dragOver = (evt) => {
      evt.preventDefault();
    };

    const dragDrop = (evt) => {
      evt.preventDefault();
      const indexDropCell = this.getIndexElementByTarget(evt.target);
      this.moveSquareInArray(indexDropCell, this.draggableSquare);

      evt.target.append(this.draggableSquare);
      evt.target.classList.remove('hovered');

      console.log('Индекс пустой ячейки:', this.getIndexEmpty());
      this.dragNDrop();
      // this.setDraggable();
      // this.render();
    };

    function dragEnter() {
      this.classList.add('hovered');
    }

    function dragLeave() {
      this.classList.remove('hovered');
    }

    // пустая ячейка в которую можно положить
    emptyCell.cell.addEventListener('dragover', dragOver);
    emptyCell.cell.addEventListener('dragenter', dragEnter);
    emptyCell.cell.addEventListener('dragleave', dragLeave);
    emptyCell.cell.addEventListener('drop', (e) => {
      dragDrop(e);
      // this.render();
    });

    console.log('gridEl', gridEl);
    // Те которые можно тягать
    gridEl.forEach((cell) => {
      // Устанавливаем клеткам возможность тягаться
      // this.setDraggable(cell);
      cell.addEventListener('dragstart', (e) => {
        dragStart(e.target);
      });
      cell.addEventListener('dragend', (e) => {
        dragEnd(e.target);
      });
    });
  };

  moveSquareInArray = (newCellIndex, squareElement) => {
    const oldCell = this.cellArray
      .filter((cell) => !!(cell.square && cell.square.$square === squareElement));
    this.cellArray[newCellIndex].square = oldCell[0].square;
    // console.log(oldCell[0]);

    oldCell[0].square = null;

    // console.log('Empty:', oldCell[0]);
  };

  // Установка возможности Drag-N-Drop
  // Если передан DOM элемен, то ему навешивается возможность тягаться
  // Усли не передан, то у всех фишек убирается перетягивание
  setDraggable = () => {
    const allCell = document.querySelectorAll('.square');
    allCell.forEach((el) => {
      el.setAttribute('draggable', 'false');
    });

    const emptyCell = this.cellArray[this.getIndexEmpty()];
    const { top, left } = emptyCell;

    // Массив соседних с пустой элементов
    const gridEl = this.nextdoorNeighbours(top, left).map((i) => {
      if (this.cellArray[i].square) {
        return this.cellArray[i].square.$square;
      }
      return false;
    });

    gridEl.forEach((cell) => cell.setAttribute('draggable', 'true'));
  };

  // Анимация перемещения
  animationMove = (direction, indexElement) => {
    const cls = `move${direction}`;
    const $el = this.cellArray[indexElement].square.$square;

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
  getIndexElementByTarget = (target) => this.cellArray
    .findIndex((curElement) => curElement.cell === target);

  // Поиск индекса пустой фишки
  getIndexEmpty = () => this.cellArray.findIndex((element) => element.square === null);

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
    ].filter((index) => index !== null);
  }

  getSquareIndex(cell) {
    const { square } = cell;
    // возвращаем либо индекс, если фоишки нет, то последний индекс
    return square ? square.index : this.countCells - 1;
  }

  getValueSquareArray = () => this.cellArray.map((cell) => this.getSquareIndex(cell));
}
