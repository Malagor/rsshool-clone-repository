export default class Task {
  constructor(obj) {
    this.id = Task.instanceCount;
    this.mission = obj.mission;
    this.title = obj.title;
    this.subtitle = obj.subtitle;
    this.syntax = obj.syntax;
    this.description = obj.description;
    this.examples = obj.examples;
    this.answers = obj.answers;
    this.level = obj.level;
    this.code = obj.code;
    this._done = obj.done;

    Task.instanceCount += 1;
  }

  static create(obj) {
    const resultConfig = {
      mission: 'Text task',
      title: 'Task title',
      subtitle: 'Subtitle task',
      syntax: 'tag',
      description: 'Task Description',
      examples: [],
      answers: [],
      level: 0,
      code: null,
      done: false,
      ...obj
    };

    return new Task(resultConfig);
  }

  get done() {
    return this._done;
  }

  set done(value) {
    this._done = !!value;
    return this;
  }

  toHTML() {
    let examples = '';
    this.examples.forEach(examp => {
      examples += `<li class="task__example-item">${examp}</li>`
    });
    return `
          <h3 class="task__title">${this.title}</h3>
          <div class="task__subtitle">${this.subtitle}</div>
          <div class="task__syntax">${this.syntax}</div>
          <div class="task__desc">${this.description}
          </div>
          <ul class="task__examples-list">
          ${examples}
          </ul>
      `;
  }

  toHTMLForMenu() {
    const checkClass = this.done ? 'task-done-check' : '';
    return `
      <li class="nav__item" data-index="${this.id}">
        <div class="nav__check ${checkClass}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"/></svg>
        </div>
        <div class="nav__level">${this.level}</div>
        <div class="nav__syntax">${this.syntax}</div>
        <div class="nav__title">${this.title}</div>
      </li>
  `;
  }

  isRightAnswer(answer){
    return this.answers.filter(test => test === answer).length;
  }
}

Task.instanceCount = 0;
