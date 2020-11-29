export default class CSS {
  constructor(obj) {
    this.elements = {
      node: obj.node,
      button: obj.button,
      textarea: obj.textarea,
      helpButton: obj.helpButton
    };

    this.checkAnswer = null;
    this.typeCorrectAnswer = null;

    this.events.bind(this)();
  }

  static create(el) {
    const node = document.querySelector(el);

    node.innerHTML = `
        <textarea name="css" id="cssArea" class="css__area"></textarea>
        <button class="css__button" id="enter">Enter</button>
        <button class="help__button" id="helpButton">?</button>
        <div class="help__block">By clicking this button, you will get the correct answer. The task will be marked as "completed with a hint".</div>
     `;

    const button = document.querySelector('#enter');
    const textarea = document.querySelector('#cssArea');
    const helpButton = node.querySelector('#helpButton');

    const elements = {
      node,
      button,
      textarea,
      helpButton
    };

    return new CSS(elements);
  }

  events() {
    this.elements.node.addEventListener('click', (e) => {
      const {target} = e;

      if (target.closest('#enter')) {
        this.checkAnswer();
      }

      if (target === this.elements.helpButton) {
        this.typeCorrectAnswer();
      }
    });

    this.elements.node.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.checkAnswer();
      }
    });


  }

  getScreenValue() {
    return this.elements.textarea.value;
  }

  clear() {
    this.elements.textarea.value = '';
  }

}
