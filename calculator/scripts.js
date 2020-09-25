class Calculator {

  constructor(previousOperandTextElement, currentOperandTextElement, logElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.logElement = logElement;
    this.clear();
  }

  clear() {
    this.curentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
    this.currentOperandTextElement.innerText = '';
    this.previousOperandTextElement.innerText = '';
  }

  delete() {
    this.curentOperand = this.curentOperand.toString().slice(0, -1);
  }

  addLog(text) {
    this.logElement.innerHTML += `<p>${text}</p>`;
    this.logElement.scrollTop = 9999;
  }

  clearLog() {
    this.logElement.innerHTML = '';
  }

  appendNumber(number) {
    if (number === '.' && this.curentOperand.includes('.')) return;

    this.curentOperand += number;
    console.log(this.curentOperand);
  }

  chooseOperation(operation) {
    if (this.curentOperand === '') return;

    if(operation === 'x²' || operation === '√' || operation === '⅟ₓ') {
      this.operation = operation;
    }

    if (this.previousOperand !== '' || operation === 'x²' || operation === '√' || operation === '⅟ₓ') {
      console.log('операция');
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.curentOperand;
    this.curentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.curentOperand);



    if (!isNaN(current) && (this.operation === 'x²' || this.operation === '√' || this.operation === '⅟ₓ')) {

      /* Унарные операции */
      switch (this.operation) {
        case "√":
          computation = current ** (1 / 2);
          this.addLog(`√${current} = <span>${computation}</span>`);
          break;
        case "x²":
          computation = current * current;
          this.addLog(`${current}² = <span>${computation}</span>`);
          break;
        case "⅟ₓ":
          computation = 1 / current;
          this.addLog(`⅟<sub>${current}</sub> = <span>${computation}</span>`);
          break;
        default:
          // return;
      }
    }

    /* Бинарные операции */
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "×":
        computation = prev * current;
        this.addLog(`${prev} ${this.operation} ${current} = <span>${computation}</span>`);
        break;
      case "+":
        computation = prev + current;
        this.addLog(`${prev} ${this.operation} ${current} = <span>${computation}</span>`);
        break;
      case "-":
        computation = prev - current;
        this.addLog(`${prev} ${this.operation} ${current} = <span>${computation}</span>`);
        break;
      case "÷":
        computation = prev / current;
        this.addLog(`${prev} ${this.operation} ${current} = <span>${computation}</span>`);
        break;

      default:
        // return;
    }

    this.curentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';

  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.curentOperand;

    switch (this.operation) {
      case 'x²':
      case '√':
      case '⅟ₓ':
        break;
      default:
        this.previousOperandTextElement.innerText = this.previousOperand + (this.operation === undefined ? '' : this.operation);
    }
  }

}

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const delBtn = document.querySelector('[data-delete]');
const equalBtn = document.querySelector('[data-equals]');
const logBtn = document.querySelector('[data-log]');
const clearBtn = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const calculatorGrid = document.getElementById('js-calculator-grid');

const logElement = document.querySelector('#js-log .log-text');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement, logElement);


calculatorGrid.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('[data-number]')) {
    calculator.appendNumber(target.innerText);
    calculator.updateDisplay();
  }

  if (target.closest('[data-operation]')) {
    calculator.chooseOperation(target.innerText);
    calculator.updateDisplay();
  }

  if (target.closest('[data-delete]')) {
    console.log('del');
    calculator.delete();
    calculator.updateDisplay();

  }

  if (target.closest('[data-equals]')) {
    calculator.compute();
    calculator.updateDisplay();
  }

  if (target.closest('[data-log]')) {
    calculator.clearLog();
  }

  if (target.closest('[data-all-clear]')) {
    calculator.clear();
  }

});

/*
 *    Отображение нажатия на кнопки
 */

function clickButton(target) {
  if (target !== null) {
    target.classList.add('click');
    setTimeout(() => {
      target.classList.remove('click');
    }, 200)
  }
}

calculatorGrid.addEventListener('mousedown', (event) => {
  const target = event.target.closest('button');

  if (target) {
    clickButton(target);
  }

});

