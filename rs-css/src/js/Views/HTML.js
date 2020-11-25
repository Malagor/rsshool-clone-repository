import {convertClasses, convertId, convertTagForHtmlBlock} from '../utils/converterHTML';

export default class HTML {
  constructor(obj) {
    this.elements = {
      node: obj.node,
      blocks: null
    };

    this.toggleHighlight = null;
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
    this.addListenersToNodes();
  }

  createArrayOfNodes() {
    this.elements.blocks = this.elements.node.getElementsByTagName("div");

    this.elements.blocks.forEach((el, i) => {
      // eslint-disable-next-line no-param-reassign
      el.dataset.index = i;
    });
  }

  addListenersToNodes() {
    this.elements.blocks.forEach((el) => {
      el.addEventListener('mouseover', event => this.toggleHighlight(event));
      el.addEventListener('mouseout', event => this.toggleHighlight(event));
    });
  }

  clearScreen() {
    this.elements.node.textContent = '';
  }


  // setMouseEvents(arr) {
  //   arr.forEach((el) => {
  //     el.addEventListener('mouseover', this.toggleHighlight);
  //     el.addEventListener('mouseout', this.toggleHighlight);
  //   });
  // }
  //
  // toggleHighlight(el) {
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
  //   target.classList.toggle('highlight');
  // }
}
