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

}
