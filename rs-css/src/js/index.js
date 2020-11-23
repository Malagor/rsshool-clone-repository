// import CodeMirror from 'codemirror/lib/codemirror';
// import 'codemirror/lib/codemirror.css';

import '../css/style.css';
import '../css/style.scss';

import App from "./Controller/App";

App.create();

// import '../img/GitHub-Mark-64px.png';
// import '../img/rs_school_js.svg';
// import '../img/next-arrow.svg';
// import '../img/check.svg';
//
// import Task from "./Classes/Task";
// import Sidebar from "./Views/Sidebar";
//
// const taskList = require('./Models/taskList');
// import { moduleOne } from './moduleOne';
//
// const helloArr = require('./moduleOne.js');
//
// class TestClass {
//   constructor() {
//     const msg = "Using ES2015+ syntax";
//     console.log(msg);
//   }
// }
//
// const test = new TestClass();
// console.log(test);
//
// // Пример массива
// console.log(helloArr);
//
// /* пример подключения модуля */
// const mod = moduleOne(2, 3);
//
// console.log(mod);
//
// const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
//   lineNumbers: true, // Нумеровать каждую строчку.
//   matchBrackets: true,
//   mode: {name: "javascript", json: true},
//   indentUnit: 2, // Длина отступа в пробелах.
//   indentWithTabs: true,
//   enterMode: "keep",
//   tabMode: "shift"
// });
//
// console.log(editor);

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



