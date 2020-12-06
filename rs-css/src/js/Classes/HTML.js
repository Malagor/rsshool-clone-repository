import {convertClasses, convertId, convertTagForHtmlBlock} from '../utils/converterHTML';

export default class HTML {
  constructor(obj) {
    this.elements = {
      node: obj.node,
      blocks: null
    };

    this.toggleHighlight = null;

    this.events.call(this);
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

    const formatTag = convertTagForHtmlBlock(tag, formatIdAndClasses, formatChild).trim();

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
    code.forEach((node) => {
      this.elements.node.innerHTML += HTML.nodeToHTML(node)
    });
    this.createArrayOfNodes();
  }

  createArrayOfNodes() {
    this.elements.blocks = this.elements.node.getElementsByTagName("div");

    this.elements.blocks.forEach((el, i) => {
      el.dataset.index = i.toString();
    });
  }

  events() {
    this.elements.node.onmouseover = (event) => {
      const target = event.target.closest("div");
      this.toggleHighlight(target);
    };

    this.elements.node.onmouseout = (event) => {
      const target = event.target.closest("div");
      this.toggleHighlight(target);
    };
  }

  clearScreen() {
    this.elements.node.textContent = '';
  }
}
