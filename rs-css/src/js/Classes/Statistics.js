export default class Statistics {
  constructor(obj) {
    this.elements = {
      allTask: obj.allTask,
      doneTask: obj.doneTask,
      hintTask: obj.hintTask,
      resetBtn: obj.resetBtn
    };

    this.property = {
      allTaskCount: obj.allTaskCount,
      doneTaskCount: obj.doneTaskCount,
      hintTaskCount: obj.hintTaskCount
    };

    this.progress = obj.progress;

    this.reset = null;

    this.init();
    this.events.call(this);
  }

  static create(obj) {




    const config = {
      allTaskCount: 0,
      doneTaskCount: 0,
      hintTaskCount: 0,
      resetBtn: null,
      allTask: null,
      doneTask: null,
      hintTask: null,
      ...obj
    };

    return new Statistics(config);
  }

  init() {
    this.elements.allTask.textContent = this.property.allTaskCount;
    this.elements.doneTask.textContent = this.property.doneTaskCount;
    this.elements.hintTask.textContent = this.property.hintTaskCount;

    this.renderProgress();
  }

  events() {
    this.elements.resetBtn.addEventListener('click', () => {
      this.reset();
    })
  }

  set allTask(value) {
    this.property.allTaskCount = value;
    this.elements.allTask.textContent = value;
    this.renderProgress();
  }

  set doneTask(value) {
    this.property.doneTaskCount = value;
    this.elements.doneTask.textContent = value;
    this.renderProgress();
  }

  set hintTask(value) {
    this.property.hintTaskCount = value;
    this.elements.hintTask.textContent = value;
    this.renderProgress();
  }

  setStatictics(all, done, hint) {
    this.allTask = all;
    this.doneTask = done;
    this.hintTask = hint;
  }

  renderProgress() {
    let width = this.property.doneTaskCount * 100 / this.property.allTaskCount;
    if (Number.isNaN(width) || width === Infinity){
      width = 0;
    }
    let hintWidth = this.property.hintTaskCount * 100 / this.property.doneTaskCount;
    if (Number.isNaN(hintWidth) || hintWidth === Infinity){
      hintWidth = 0;
    }
    const doneWidth = 100 - hintWidth;

    this.progress.style.width = `${width}%`;
    this.progress.style.backgroundImage = `linear-gradient(to right, #f04b01 0%, #f04b01 ${doneWidth}%, #fff ${doneWidth}%, #fff 100%)`;
  }
}
