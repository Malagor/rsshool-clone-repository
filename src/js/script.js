'use strict';
import Game from "./classes/Game.js";


//
// let turns = 0;
// let isPlaying = false;
// let start = null;
// let finish = null;
//
// const score = Score.ready();
// const state = new State('.stat');
// state.start();
//
// const field = document.querySelector('.field');
//
//
// field.addEventListener('mousedown', (e) => {
//   e.preventDefault();
// });
//
// const cells = new Array(16);
//
// const numbers = [...Array(15).keys()]
//   .map(x => x + 1);
//   // .sort(() => Math.random() - 0.5)
//   // .sort(() => Math.random() - 0.5)
//   // .sort(() => Math.random() - 0.5);
//
// cells[15] = {
//   value: 16,
//   top: 3,
//   left: 3
// };
//
// function moveCell(i) {
//   if (isPlaying === false) {
//     start = Date.now();
//     isPlaying = true;
//   }
//
//   state.turn();
//   const {top: emptyTop, left: emptyLeft} = cells[15];
//   const {top: curTop, left: curLeft, cell} = cells[i];
//
//   if ((Math.abs(emptyTop - curTop) + Math.abs(emptyLeft - curLeft)) !== 1) return;
//
//   cells[15].top = curTop;
//   cells[15].left = curLeft;
//   cells[i].top = emptyTop;
//   cells[i].left = emptyLeft;
//
//   cell.style.top = `${emptyTop * 100}px`;
//   cell.style.left = `${emptyLeft * 100}px`;
//
//   sound();
//
//   const isFinished = cells.every(cell => {
//     return cell.value === ((cell.top * 4) + cell.left + 1);
//   });
//
//   if (isFinished) {
//     finish = Date.now();
//     state.stop();
//
//     const finishResult = {
//       name: prompt('Ваше имя:'),
//       time: finish - start,
//       turns: state.getTurns(),
//     };
//
//     const isLeader = score.setResult(finishResult);
//
//     console.log(`Время решения: ${msToTime(finish - start)} и ${state.getTurns()} ходов`, isLeader ? 'Вы попавли в таблицу рекордов': '');
//   }
// }
//
//
// for (let i = 0; i < 15; i++) {
//   const cell = document.createElement('div');
//   cell.className = 'cell';
//   const value = numbers[i];
//   cell.innerHTML = `${value}`;
//
//   const left = i % 4;
//   const top = (i - left) / 4;
//
//   cell.style.top = `${top * 100}px`;
//   cell.style.left = `${left * 100}px`;
//
//   field.appendChild(cell);
//
//   cells[i] = {
//     value,
//     top,
//     left,
//     cell
//   };
//
//   cell.addEventListener('click', () => {
//     moveCell(i);
//   });
// }
Game.ready();


