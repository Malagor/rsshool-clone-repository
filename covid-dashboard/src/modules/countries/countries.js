/* eslint-disable import/no-cycle */
import { createCountriesHTML, getCountriesDOMElements } from './countriesHTML';
import { createCountryDOMElement } from './createCountryDOMElement';
import { properties } from '../Properties/Properties';
import { getControlsBlockHTML } from '../controls/controlsBlock';
import { filterInput } from './filterInput';
import { returnListOfCountries }  from './returnListOfCountries';
import { changeStylesOfCountries } from './changeStylesOfCountries';

let countriesElements = null;
let changeView = null;

const createTableCountries = (el) => {

  createCountriesHTML(el);
  countriesElements = getCountriesDOMElements(el);
  getControlsBlockHTML(countriesElements.countriesControl);
  
  el.addEventListener('click', (event) => {
    const { target } = event;
    if (target === el) return;
    if (target.closest('.country-item')) {
      properties.country = target.closest('.country-item').querySelector('.country-name').innerText;
    } else if (target.closest('.btn-all')) {
      properties.type = 'cases';    
    } else if (target.closest('.btn-deaths')) {
      properties.type = 'deaths';     
    } else if (target.closest('.btn-recovered')) {
      properties.type = 'recovered';
    }
    changeStylesOfCountries(countriesElements, properties.type);
    returnListOfCountries(countriesElements);
    changeView();   
  });

  countriesElements.input.addEventListener('keyup', (e) => {
    filterInput(countriesElements);
    if (e.code === 'Enter') {
      const countryNamesHTML = document.querySelectorAll('.country-name'); 
      countryNamesHTML.forEach((countryName) => {
        if(countryName.innerText.toUpperCase() === countriesElements.input.value.toUpperCase()) {
          properties.country = countryName.innerText;
          changeView();
        }
      });
      returnListOfCountries(countriesElements);
    }
  });
};

const renderCountries = (countries) => {
  console.log (countries);
  countries.sort((a,b) => b.arrData - a.arrData);
  countriesElements.list.innerHTML = '';
  countries.forEach((country) => {
    const elem = createCountryDOMElement(country);
    countriesElements.list.append(elem);
  })
  changeStylesOfCountries(countriesElements, properties.type);
};

const setChangeViewCountryTable = (fn) => {
  changeView = fn;
};

export {
  createTableCountries,
  renderCountries,
  setChangeViewCountryTable
}

