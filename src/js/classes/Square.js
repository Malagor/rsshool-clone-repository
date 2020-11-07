export default class Square {
  constructor(index, /*top, left,*/ value) {
    this.index = index;
    // this.position ={
    //   top: top,
    //   left: left
    // };
    this.value = value;
    this.$square = null;

    this.init();
  }

  static create(index, /*top, left,*/ value) {
    return new Square(index, /*top, left,*/ value);
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
