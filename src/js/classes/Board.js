import Square from "./Square.js";
import State from "./State.js";
import Score from "./Score.js";
import sound from "../util/sound.js";

export default class Board {
  constructor(element, size, state, score) {
    this.size = size || 4;
    this.$board = document.querySelector(element);
    this.$cellsCollection = null;
    this.cellArray = [];
    this.dragableSquad = null;
    this.state = state;
    this.score = score;

    this.init();
  }

  static create(element, size, state) {
    return new Board(element, size, State.ready(state), Score.ready());
  }

  init() {
    this.$board.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    this.$board.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;


    function randIndex(num) {
      return [...Array(num).keys()]
        // .sort(() => Math.random() - 0.5);
    }

    const randIndexArray = randIndex(16);
    const countCell = this.size * this.size;

    for (let i = 0; i < countCell; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      const left = i % this.size;
      const top = (i - left) / this.size;
      let square = null;

      if (randIndexArray[i] !== (this.size * this.size) -1 ) {
        square = Square.create(randIndexArray[i], /*top, left,*/ i+1);
        cell.appendChild(square.square);
      }

      this.cellArray.push({
        top,
        left,
        cell,
        square
      });

      cell.addEventListener('click', this.move);
    }

    console.log(this.cellArray);

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


    this.dragNDrop();
    this.render();
  }

  move = (event) => {
    sound();
    const target = event.target.closest('.cell');

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
    }

    this.state.turn();
    const isFinish = this.isFinish();

    if (isFinish) {
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
    }

    // this.render();

    // this.dragNDrop();

  };

  isFinish() {
    return this.cellArray.every(el => {
      const {top, left} = el;
      let index;
      if (el.square) {
        index = el.square.index;
      } else {
        index = (this.size * this.size) - 1;
      }

      if ((top * this.size + left) === index) return true;
    })
  }

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

  animationMove = (direction, indexElement) => {
    // console.log(indexElement);
    const cls = `move${direction}`;
    const $el = this.cellArray[indexElement].square['$square'];
    // console.log(this.cellArray);
    // console.log($el);


    $el.classList.add(cls);
    // console.log($el.classList);

    setTimeout(() => {
      // console.log('anim');
      $el.classList.remove(cls);
      this.render();
    }, 300);
  };

  render = () => {
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

  getIndexClick = (target) => {
    return this.cellArray.findIndex(curElement => {
      return curElement.cell === target;
    })
  };

  getIndexEmpty = () => {
    return this.cellArray.findIndex(element => {
      return element.square === null;
    })
  };

  nextdoorNeighbours(top, left) {

    const curIndex = top * this.size + left;
    // console.log('curIndex', curIndex);

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
