import keyboard from '../../assets/icons/keyboard.svg';

export const createCountriesHTML = (el) => {
  el.innerHTML = `
  <div class="countries-header">
    <div class="countries-keyboard">${keyboard}</div>
    <div class="countries-control"></div>
  </div> 
  <div class="countries-wrapper">
  <div class="countries-title">Cases by country</div>
  <input type="text" placeholder="Search..." class="countries-input">
  <div class="countries-list"></div>
  <div class="toggle-cases">
    <div class="btn-cases btn-all btn-enabled ">All Cases</div>
    <div class="btn-cases btn-deaths">Deaths</div>
    <div class="btn-cases btn-recovered">Recovered</div>
  </div>
</div>`;
}

export const getCountriesDOMElements = (el) => {
  const btnKeyboard = el.querySelector('.countries-keyboard');
  const countriesControl = el.querySelector('.countries-control');
  const wrapper = el.querySelector('.countries-wrapper');
  const title = el.querySelector('.countries-title');
  const input = el.querySelector('.countries-input');
  const list = el.querySelector('.countries-list');
  const btnAll = el.querySelector('.btn-all');
  const btnDeaths = el.querySelector('.btn-deaths');
  const btnRecovered = el.querySelector('.btn-recovered');

  return {
    btnKeyboard, 
    countriesControl,
    wrapper,
    title,
    input,
    list,
    btnAll,
    btnDeaths,
    btnRecovered
  };
}

