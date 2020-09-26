class Calculator {

  constructor(previousOperandTextElement, currentOperandTextElement, logElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.logElement = logElement;
    this.isNewNumber = true;
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
    if (this.isNewNumber) return;
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
    if (number === '.' && /\./.test(this.curentOperand) && !this.isNewNumber) return;

    if (this.isNewNumber) {
      this.curentOperand = number;
      this.isNewNumber = false;
    } else
      this.curentOperand += number;
  }

  negativeNumber() {

    if (this.curentOperand === 0 || this.isNewNumber) {
      this.curentOperand = '-'
    } else {
      if (/-/.test(this.curentOperand)) {
        this.curentOperand = this.curentOperand.replace('-', '');
      } else {
        this.curentOperand = '-' + this.curentOperand;
      }
    }
    this.isNewNumber = false;
  }

  chooseOperation(operation) {
    if (this.curentOperand === '' || isNaN(this.curentOperand)) return;


    this.isNewNumber = true;

    const isUnaryOperation = operation === '√' || operation === '⅟ₓ';

    if (isUnaryOperation) {
      this.operation = operation;
    }

    if (this.previousOperand !== '' || isUnaryOperation) {
      this.compute();
    }

    if (isUnaryOperation) {
      this.operation = undefined;

    } else {
      this.operation = operation;
      this.previousOperand = this.curentOperand;
      this.curentOperand = '';
    }
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.curentOperand);

    const isUnaryOperation = this.operation === '√' || this.operation === '⅟ₓ';

    function roundComp(number) {
      const accuracy = 100000000000000;
      if (/\./.test(number.toString())) {
        return Math.round(number * accuracy) / accuracy;
      } else {
        return number;
      }
    }

    if (!isNaN(current) && isUnaryOperation) {

      /* Унарные операции */
      switch (this.operation) {
        case "√":
          computation = roundComp(current ** (1 / 2));
          this.addLog(`√${current} = <span>${computation}</span>`);
          break;
        case "⅟ₓ":
          computation = roundComp(1 / current);
          this.addLog(`⅟<sub>${current}</sub> = <span>${computation}</span>`);
          break;
        default:
      }
    } else {
      /* Бинарные операции */
      if (isNaN(prev) || isNaN(current)) return;

      switch (this.operation) {
        case "×":
          computation = roundComp(prev * current);
          this.addLog(`${prev} ${this.operation} ${current} = <span>${computation}</span>`);
          break;
        case "+":
          computation = roundComp(prev + current);
          this.addLog(`${prev} ${this.operation} ${current} = <span>${computation}</span>`);
          break;
        case "-":
          computation = roundComp(prev - current);
          this.addLog(`${prev} ${this.operation} ${current} = <span>${computation}</span>`);
          break;
        case "÷":
          computation = roundComp(prev / current);
          this.addLog(`${prev} ${this.operation} ${current} = <span>${computation}</span>`);
          break;
        case "xⁿ":
          computation = roundComp(prev ** current);
          this.addLog(`${prev}<sup>${current}</sup> = <span>${computation}</span>`);
          break;
        default:
          return;
      }
    }
    this.isNewNumber = true;
    this.curentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';

  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.curentOperand;

    switch (this.operation) {
      case '√':
      case '⅟ₓ':
        this.currentOperandTextElement.innerText = this.previousOperand;
        break;
      case 'xⁿ':
        this.previousOperandTextElement.innerText = this.previousOperand + '^';
        break;
      default:
        this.previousOperandTextElement.innerText = this.previousOperand + (this.operation === undefined ? '' : this.operation);
    }
  }

}

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

  if (target.closest('[data-plus-minus]')) {
    calculator.negativeNumber();
    calculator.updateDisplay();
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

