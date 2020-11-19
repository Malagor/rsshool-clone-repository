export default class Railway {
  constructor(obj) {
    this.elements = {
      main: obj.main,
      title: obj.title,
      innerBox: obj.innerBox
    };
  }

  static create(el) {
    const main = document.querySelector(el);
    main.insertAdjacentHTML('afterbegin', `
    <h2 id="taskTarget" class="railway__title">Mission Task</h2>
    <div class="railway__inner">
      <wagon></wagon>
      <wagon class="moving">
        <wood></wood>
      </wagon>
      <wagon></wagon>
    </div>
    `);

    const title = document.querySelector('#taskTarget');
    const innerBox = document.querySelector('.railway__inner');

    const config = {
      main,
      title,
      innerBox
    };

    return new Railway(config);
  }

  setTitleText(text) {
    this.elements.title.textContent = text;
  }

}
