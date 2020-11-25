import '../css/style.css';
import '../css/style.scss';

import App from "./Controller/App";

App.create('main.main');


// const wagons = document.querySelectorAll('wagon');
// const linesCode = document.querySelectorAll('.html-code div');

// function toggleHighlight(el) {
//   const {target} = el;
//   let index = 0;
//
//   if (target.localName === 'wagon') {
//     wagons.forEach((wag, i) => {
//       if (wag === target) {
//         console.log(i);
//         index = i;
//       }
//     });
//   } else {
//     linesCode.forEach((wag, i) => {
//
//       if (wag === target) {
//         console.log(i);
//         index = i;
//       }
//     });
//   }
//
//   if (index >= 0) {
//     wagons[index].classList.toggle('highlight');
//     linesCode[index].classList.toggle('highlight');
//   }
//   // target.classList.toggle('highlight');
// }

// function setMouseEvents(arr) {
//   arr.forEach((el) => {
//     el.addEventListener('mouseover', toggleHighlight);
//     el.addEventListener('mouseout', toggleHighlight);
//   });
// }
//
// setMouseEvents(wagons);
// setMouseEvents(linesCode);



