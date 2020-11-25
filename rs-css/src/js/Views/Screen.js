import {convertClasses, convertId, convertTagForScreenBlock} from '../utils/converterHTML';

export default class Screen {
  constructor(obj) {
    this.elements = {
      node: obj.node,
      title: obj.title,
      innerBox: obj.innerBox
    };
  }

  static create(el) {
    const node = document.querySelector(el);
    node.insertAdjacentHTML('afterbegin', `
    <h2 id="taskTarget" class="railway__title">Mission Task</h2>
    <div class="screen__inner">
      <wagon></wagon>
      <wagon class="moving">
        <wood></wood>
      </wagon>
      <wagon></wagon>
    </div>
    `);

    const title = document.querySelector('#taskTarget');
    const innerBox = document.querySelector('.screen__inner');

    const config = {
      main: node,
      title,
      innerBox
    };

    return new Screen(config);
  }

  setTitleText(text) {
    this.elements.title.textContent = text;
  }


  printTask(code){
    this.elements.innerBox.innerHTML = '';

    if (!code || !Array.isArray(code)) {
      throw new Error('Received is not correct data for print task code');
    }

    console.log('code', code);
    code.forEach((node) => {
      this.elements.innerBox.innerHTML += Screen.nodeToHTML(node)
    });

    // TODO: НАвесить события
    // this.createArrayOfNodes();
    // this.addListenersToNodes();
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

}
