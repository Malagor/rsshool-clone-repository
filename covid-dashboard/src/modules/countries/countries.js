import { createCountriesHTML, getCountriesDOMElements } from './countriesHTML';
import { createCountryDOMElement } from './createCountryDOMElement';
import { Keyboard } from '../virtual-keyboard/keyboard';



let countriesElements = null;
let changeView = null;

const createTableCountries = (el) => {

  createCountriesHTML(el);
  countriesElements = getCountriesDOMElements(el);

  el.addEventListener('click', (event) => {
    const { target } = event;
    if (target === el) return;
    changeView();
  });
};

const renderCountries = (countries) => {
  countries.sort((a,b) => b.arrData - a.arrData);
  countriesElements.list.innerHTML = '';
  countries.forEach((country) => {
    const elem = createCountryDOMElement(country);
    countriesElements.list.append(elem);
  })
};

const setChangeViewCountryTable = (fn) => {
  changeView = fn;
};

setTimeout(() => {
  Keyboard.init()  
}, 3000);


export {
  createTableCountries,
  renderCountries,
  setChangeViewCountryTable
}

