import { createCountriesHTML, getCountriesDOMElements } from './countriesHTML';
import { createCountryDOMElement } from './createCountryDOMElement';
import { Keyboard } from '../virtual-keyboard/keyboard';
import { properties } from '../Properties/Properties';
import { getControlsBlockHTML } from '../controls/controlsBlock';
import { filterInput } from './filterInput';
import { updateListOfCountries }  from './updateListOfCountries';
import { changeStylesOfCountries } from './changeStylesOfCountries';
import { updateApp } from '../mainApp/updataApp';

let countriesElements = null;

const createTableCountries = (el) => {

  createCountriesHTML(el);
  countriesElements = getCountriesDOMElements(el);
  getControlsBlockHTML(countriesElements.countriesControl, el);
  
  el.addEventListener('click', (event) => {
    const { target } = event;
    if (target === el) return;
    if (target.closest('.country-item')) {
      properties.country = target.closest('.country-item').querySelector('.country-name').innerText;
      Keyboard.properties.value = ''; 
      updateListOfCountries(countriesElements.input);
    } else if (target.closest('.btn-all')) {
      properties.type = 'cases';    
    } else if (target.closest('.btn-deaths')) {
      properties.type = 'deaths';     
    } else if (target.closest('.btn-recovered')) {
      properties.type = 'recovered';
    }
    changeStylesOfCountries(countriesElements, properties.type);
    updateApp();  
  });

  countriesElements.input.addEventListener('keyup', (e) => {
    console.log('keyup');
    filterInput(countriesElements.input);
    if (e.code === 'Enter') {
      console.log('keyup');
      const countryNamesHTML = document.querySelectorAll('.country-name'); 
      countryNamesHTML.forEach((countryName) => {
        if(countryName.innerText.toUpperCase() === countriesElements.input.value.toUpperCase()) {
          properties.country = countryName.innerText;
          updateApp();
        }
      });
      Keyboard.properties.value = ''; 
      updateListOfCountries(countriesElements.input);
    }
  });
};

const renderCountries = (countries) => {
  countries.sort((a,b) => b.arrData - a.arrData);
  countriesElements.list.innerHTML = '';
  countries.forEach((country) => {
    const elem = createCountryDOMElement(country);
    countriesElements.list.append(elem);
  })
  changeStylesOfCountries(countriesElements, properties.type);
};

setTimeout(() => {
  Keyboard.init()  
}, 1000);

export {
  createTableCountries,
  renderCountries,
}

