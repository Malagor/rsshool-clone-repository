export default class CSS {
  constructor(obj) {
    this.elements ={
      main: obj.main,
      button: obj.button,
      textarea: obj.textarea
    };

    this.events.bind(this)();
  }

  static create(el) {
    const main = document.querySelector(el);

    const button = document.querySelector('#enter');
    const textarea = document.querySelector('#cssArea');
    const elements = {
      main,
      button,
      textarea
    };

    return new CSS(elements);
  }

  events() {
    this.elements.main.addEventListener('click', (e) => {
      const {target} = e;

      if (target.closest('#enter')){
        const event = new Event('enter', {bubbles: true});
        document.body.dispatchEvent(event);
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
