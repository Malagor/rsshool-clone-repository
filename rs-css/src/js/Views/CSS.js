export default class CSS {
  constructor(obj) {
    this.elements ={
      node: obj.node,
      button: obj.button,
      textarea: obj.textarea
    };

    this.checkAnswer = null;

    this.events.bind(this)();
  }

  static create(el) {
    const node = document.querySelector(el);

    const button = document.querySelector('#enter');
    const textarea = document.querySelector('#cssArea');
    const elements = {
      node,
      button,
      textarea
    };

    return new CSS(elements);
  }

  events() {
    this.elements.node.addEventListener('click', (e) => {
      const {target} = e;
      if (target.closest('#enter')){
        this.checkAnswer();
      }
    });

    this.elements.node.addEventListener('keydown', (e) => {
      if (e.keyCode === 13){
        e.preventDefault();
        this.checkAnswer();
      }
    })

  }

  getScreenValue() {
    return this.elements.textarea.value;
  }

  clear(){
    this.elements.textarea.value = '';
  }
}
