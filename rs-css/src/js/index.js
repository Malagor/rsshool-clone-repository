// import CodeMirror from 'codemirror/lib/codemirror';
// import 'codemirror/lib/codemirror.css';

import '../css/style.css';
import '../css/style.scss';
import Task from "./Classes/Task";
import '../img/GitHub-Mark-64px.png';
import '../img/rs_school_js.svg';
import '../img/next-arrow.svg';

const taskList = require('./Models/taskList');
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

const tasks = taskList.map(taskItem => {
  const {title, subtitle, syntax, description, examples} = taskItem;
  const taskObj = {
    title,
    description,
    subtitle,
    syntax,
    examples
  };
  return Task.create(taskObj)
});

console.log(tasks);

const $task = document.querySelector('#task');
$task.innerHTML = "";

// $task.innerHTML = tasks[0].toHTML();

// Листалка задач
const $arrowLeft = document.querySelector('.arrow__left');
const $arrowRight = document.querySelector('.arrow__right');
const $allTaskCount = document.querySelector('#all-tasks-count');
const $currentTaskNumber = document.querySelector('#current-task');

const countTask = tasks.length;
let currentTask = 0;

$allTaskCount.textContent = countTask;
$currentTaskNumber.textContent = currentTask + 1;

function showTask(i) {
  $currentTaskNumber.textContent = i + 1;
  $task.innerHTML = "";
  $task.innerHTML = tasks[i].toHTML();
}

$task.innerHTML = "";
$task.innerHTML = tasks[currentTask].toHTML();

$arrowLeft.addEventListener('click', () => {
  currentTask = currentTask > 0 ? currentTask -= 1 : currentTask;
  showTask(currentTask);
});

$arrowRight.addEventListener('click', () => {
  currentTask = currentTask < countTask - 1 ? currentTask += 1 : currentTask;

  showTask(currentTask);
});


const wagons = document.querySelectorAll('wagon');
const linesCode = document.querySelectorAll('.html-code div');

function toggleHighlight(el) {
  const {target} = el;
  let index;

  if (target.localName === 'wagon') {
    wagons.forEach((wag, i) => {
      if (wag === target) {
        index = i;
      }
    });
  } else {
    linesCode.forEach((wag, i) => {
      if (wag === target) {
        index = i;
      }
    });
  }

  if (index && index >= 0) {
    wagons[index].classList.toggle('highlight');
    linesCode[index].classList.toggle('highlight');
  }
  // target.classList.toggle('highlight');
}

function setMouseEvents(arr) {
  arr.forEach((el) => {
    el.addEventListener('mouseover', toggleHighlight);
    el.addEventListener('mouseout', toggleHighlight);
  });
}

setMouseEvents(wagons);
setMouseEvents(linesCode);





