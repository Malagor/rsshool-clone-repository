const calculatorGrid = document.getElementById('js-calculator-grid');
const buttons = document.querySelectorAll('button');

calculatorGrid.addEventListener('mousedown', (event) => {
  const target = event.target.closest('button');

  clickButton(target);
});

function clickButton(target) {
  if (target !== null) {
      target.classList.add('click');
      setTimeout(() => {target.classList.remove('click');},200)
  }
}