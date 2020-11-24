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

  isRightAnswer(answer) {
    return this.answers.filter(test => test === answer).length;
  }

  static parserRawCode(codeRaw) {
    const result = [];
    codeRaw.forEach(node => {
      result.push(Node.create(node));
    });

  return result;
  }
}

Task.instanceCount = 0;
