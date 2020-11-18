export default class Task {
  constructor(obj = {}) {
    this.id = Task.instanceCount;
    this.target = obj.target;
    this.title = obj.title;
    this.description = obj.description;
    this.examples = obj.examples;
    this.answers = obj.answers;
    this.level = obj.level;
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
}

Task.instanceCount = 0;
