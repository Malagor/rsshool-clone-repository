import {convertClasses, convertId, convertTagForScreenBlock} from '../utils/converterHTML';
import {showTooltip, calculateTooltipsPosition} from "../utils/showTooltip";

export default class Screen {
  constructor(obj) {
    this.elements = {
      node: obj.node,
      title: obj.title,
      innerBox: obj.innerBox,
      tooltip: obj.tooltip
    };

    this.events.call(this);

    // events handlers

    this.toggleHighlightScreen = null;
  }

  static create(el) {
    const node = document.querySelector(el);
    node.insertAdjacentHTML('afterbegin', `
    <h2 id="taskTarget" class="railway__title">Mission Task</h2>
    <div class="screen__inner"></div>
    <div id="tooltip" class="tooltip">&lt;wagon id="moving" class="yellow"&gt;</div>
    `);

    const title = document.querySelector('#taskTarget');
    const innerBox = document.querySelector('.screen__inner');
    const tooltip = document.querySelector('#tooltip');

    const config = {
      main: node,
      title,
      innerBox,
      tooltip
    };

    return new Screen(config);
  }

  setTitleText(text) {
    this.elements.title.textContent = text;
  }


  printTask(code) {
    this.elements.innerBox.innerHTML = '';

    if (!code || !Array.isArray(code)) {
      throw new Error('Received is not correct data for print task code');
    }

    code.forEach((node) => {
      this.elements.innerBox.innerHTML += Screen.nodeToHTML(node)
    });
  }

  static nodeToHTML(code) {

    const {tag, id, classes, child} = code;

    const formatIdAndClasses = `
      ${convertId(id)} ${convertClasses(classes)}
      `.trim();

    let formatChild = '';
    if (child) {
      child.forEach(el => {
        formatChild += Screen.nodeToHTML(el);
      })
    }

    const formatTag = convertTagForScreenBlock(tag, formatIdAndClasses, formatChild).trim();

    return `      
        ${formatTag}      
      `;
  }

  events() {
    this.elements.innerBox.addEventListener('mouseover', event => {
      this.toggleHighlightScreen(event);
    });
    this.elements.innerBox.addEventListener('mouseout', event => {
      this.toggleHighlightScreen(event);
    });
  }

  printTooltip(node, text) {
    const {tooltip} = this.elements;
    tooltip.textContent = text;

    const posTooltip = calculateTooltipsPosition(node);
    showTooltip(tooltip, posTooltip.top, posTooltip.left);
  }

  markRightAnswerElements(sel) {
    this.elements.innerBox.querySelectorAll(sel).forEach(el => {
      el.classList.add('right-answer-element');
    })
  }

  correctAnswerAnimation(){
    const rightAnswerElements = this.elements.innerBox.querySelectorAll('.right-answer-element');
    rightAnswerElements.forEach(el => {
      el.classList.add('animation-correct-answer');
    })
  }
}
