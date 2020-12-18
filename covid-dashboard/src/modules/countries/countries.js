/* eslint-disable import/no-cycle */
// import { defineProperties } from 'core-js/fn/object';
import { createCountriesHTML, getCountriesDOMElements } from './countriesHTML';
import { createCountryDOMElement } from './createCountryDOMElement';
import { properties } from '../Properties/Properties';
import { getControlsBlockHTML } from '../controls/controlsBlock';
import { filterInput } from './filterInput';


let countriesElements = null;
let changeView = null;

const createTableCountries = (el) => {

  createCountriesHTML(el);
  countriesElements = getCountriesDOMElements(el);
  getControlsBlockHTML(countriesElements.countriesControl);
  const btns = document.querySelectorAll('.btn-cases');
  
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
      const listOfCountries = document.querySelectorAll('.country-item');  
      listOfCountries.forEach((item) => {item.style.display = ''});
      countriesElements.input.value = '';
  
    }
  });

  el.addEventListener('click', (event) => {
    const numbers = document.querySelectorAll('.country-number');
    const { target } = event;
    if (target === el) return;
    if (target.closest('.country-item')) {
      properties.country = target.closest('.country-item').querySelector('.country-name').innerText;
    } else if (target.closest('.btn-all')) {
      properties.type = 'cases';
      btns.forEach((item) => item.classList.remove('btn-enabled'));
      numbers.forEach((numb) => {
        numb.classList.add('number-cases');
        numb.classList.remove('number-deaths', 'number-recovered');
      });
      countriesElements.btnAll.classList.add('btn-enabled');
    } else if (target.closest('.btn-deaths')) {
      properties.type = 'deaths';
      btns.forEach((item) => item.classList.remove('btn-enabled'));
      numbers.forEach((numb) => {
        numb.classList.add('number-deaths');
        numb.classList.remove('number-cases', 'number-recovered');
      });
      countriesElements.btnDeaths.classList.add('btn-enabled');
    } else if (target.closest('.btn-recovered')) {
      properties.type = 'recovered';
      btns.forEach((item) => item.classList.remove('btn-enabled'));
      numbers.forEach((numb) => {
        numb.classList.add('number-recovered');
        numb.classList.remove('number-cases', 'number-deaths');
      });
      countriesElements.btnRecovered.classList.add('btn-enabled');
    }
    changeView();
    const listOfCountries = document.querySelectorAll('.country-item');  
    listOfCountries.forEach((item) => {item.style.display = ''});
    countriesElements.input.value = '';
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

export {
  createTableCountries,
  renderCountries,
  setChangeViewCountryTable
}

