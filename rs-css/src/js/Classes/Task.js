export default class Task {
  constructor(obj) {
    this.id = Task.instanceCount;
    this.target = obj.target;
    this.title = obj.title;
    this.subtitle = obj.subtitle;
    this.syntax = obj.syntax;
    this.description = obj.description;
    this.examples = obj.examples;
    this.answers = obj.answers;
    this.level = obj.level;
    this.code = obj.code;
    this._done = false;

    Task.instanceCount += 1;
  }

  static create(obj) {
    const resultConfig = {
      target: 'Text task',
      title: 'Task title',
      subtitle: 'Subtitle task',
      syntax: 'tag',
      description: 'Task Description',
      examples: [],
      answers: [],
      level: 0,
      code: null,
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
}

Task.instanceCount = 0;
