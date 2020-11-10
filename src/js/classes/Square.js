export default class Square {
  constructor(index, value) {

    this.index = index;
    this.value = value;
    this.$square = null;

    this.init();
  }

  static create(index, value) {
    return new Square(index, value);
  }

  init() {
    const element = document.createElement('div');
    element.className = 'square';
    element.innerText = this.value;
    // element.setAttribute('draggable', 'true');

    this.$square = element;
  }

  get square() {
    return this.$square;
  }
}
