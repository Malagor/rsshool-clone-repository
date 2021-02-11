import Node from "./Node";

export default class Task {
  constructor(obj) {
    this.id = Task.instanceCount;
    this.mission = obj.mission;
    this.title = obj.title;
    this.subtitle = obj.subtitle;
    this.syntax = obj.syntax;
    this.description = obj.description;
    this.examples = obj.examples;
    this._answers = obj.answers;
    this.level = obj.level;
    this.code = obj.code;
    this._done = obj.done;
    this._hint = obj.hint;

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
      hint: false,
      ...obj
    };

    const {code: codeRaw} = resultConfig;

    if (codeRaw) {
      resultConfig.code = Task.parserRawCode(codeRaw);
    }

    return new Task(resultConfig);
  }

  get done() {
    return this._done;
  }

  set done(value) {
    this._done = !!value;
    return this;
  }

  get answers() {
    return this._answers;
  }


  get hint() {
    return this._hint;
  }

  set hint(value) {
    this._hint = !!value;
  }

  static parserRawCode(codeRaw) {
    const result = [];
    codeRaw.forEach(node => {
      result.push(Node.create(node));
    });

    return result;
  }

  reset() {
    this.done = false;
    this.hint = false;
  }

  save() {
    const {id, done, hint} = this;
    return {
      id,
      done,
      hint
    }
  }

  changeData(obj) {
    this.id = obj.id;
    this.done = obj.done;
    this.hint = obj.hint;
  }
}

Task.instanceCount = 0;
