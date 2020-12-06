import CodeMirror from "codemirror/lib/codemirror";
import 'codemirror/mode/css/css';

export default class CSS {
  constructor(obj) {
    this.elements = {
      node: obj.node,
      button: obj.button,
      textarea: obj.textarea,
      helpButton: obj.helpButton
    };
    this.codeMirror = obj.codeMirror;

    // handlers
    this.checkAnswer = null;
    this.typeCorrectAnswer = null;

    this.events.bind(this)();
  }

  static create(el) {
    const node = document.querySelector(el);

    node.insertAdjacentHTML('beforeend', `
        <div id="cssArea" class="css__area"></div>
        <button class="btn btn__css" id="enter">Enter</button>
        <button class="help__button" id="helpButton">?</button>
        <div class="help__block">By clicking this button, you will get the correct answer. The task will be marked as "completed with a hint".</div>
     `);

    const button = document.querySelector('#enter');
    const textarea = document.querySelector('#cssArea');
    const helpButton = node.querySelector('#helpButton');

    const codeMirror = CodeMirror(textarea, {
      lineNumbers: true,
      matchBrackets: true,
    });

    const elements = {
      node,
      button,
      textarea,
      helpButton,
      codeMirror
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

    // Press "Enter" button on the keyboard
    this.elements.node.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.checkAnswer();
      }
    });
  }

  clear() {
    this.codeMirror.setValue('');
  }
}
