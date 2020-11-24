import {convertClasses, convertId, convertTag} from '../utils/converterHTML';

export default class HTML {
  constructor(obj) {
    this.elements = {
      node: obj.node
    }
  }

  static create(el) {
    const node = document.querySelector(el);

    const config = {
      node
    };

    return new HTML(config);
  }

  static nodeToHTML(code) {
    const {tag, id, classes, child} = code;

    const formatIdAndClasses = `
    ${convertId(id)} ${convertClasses(classes)}
    `.trim();

    let formatChild = '';
    if (child) {
      child.forEach(el => {
        formatChild += HTML.nodeToHTML(el);
      })
    }

    const formatTag = convertTag(tag, formatIdAndClasses, formatChild).trim();

    return `
    <div>
      ${formatTag}
    </div>
    `;
  }

  printTaskCode(code) {
    this.clearScreen();

    if (!code || !Array.isArray(code)) {
      throw new Error('Received is not correct data for print task code');
    }

    code.forEach(node => {
      this.elements.node.innerHTML += HTML.nodeToHTML(node)
    });
  }

  clearScreen() {
    this.elements.node.textContent = '';
  }
}
