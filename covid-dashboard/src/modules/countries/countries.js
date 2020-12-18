// import { defineProperties } from 'core-js/fn/object';
import { createCountriesHTML, getCountriesDOMElements } from './countriesHTML';
import { createCountryDOMElement } from './createCountryDOMElement';
import { properties } from '../Properties/Properties';


let countriesElements = null;
let changeView = null;


const renderCountries = (countries) => {
  countries.sort((a,b) => b.arrData - a.arrData);
  countriesElements.list.innerHTML = '';
  countries.forEach((country) => {
    const elem = createCountryDOMElement(country);
    countriesElements.list.append(elem);
  })
};

const createTableCountries = (el) => {

  createCountriesHTML(el);
  countriesElements = getCountriesDOMElements(el);
  
  const btns = document.querySelectorAll('.btn-cases');
  const numbers = document.querySelectorAll('.country-number');
  console.log ('numbers', numbers);

  const filterInput = () => {
    const filter = countriesElements.input.value.toUpperCase();
    const listOfCountries = document.querySelectorAll('.country-item'); 
    for ( let i = 0; i < listOfCountries.length; i += 1) {
      const countryName = listOfCountries[i].querySelector('.country-name');
      if (countryName.innerHTML.toUpperCase().indexOf(filter) === 0) {
        listOfCountries[i].style.display = '';
      } else {
        listOfCountries[i].style.display = 'none';
      }
    }
  }
  
  countriesElements.input.addEventListener('keyup', (e) => {
     filterInput();
     if (e.code === 'Enter') {
       const countryNamesHTML = document.querySelectorAll('.country-name'); 
       countryNamesHTML.forEach((countryName) => {
         if(countryName.innerText.toUpperCase() === countriesElements.input.value.toUpperCase()) {
           properties.country = countryName.innerText;
           console.log (properties);
           changeView();
         }
       });
       const listOfCountries = document.querySelectorAll('.country-item');  
       listOfCountries.forEach((item) => {item.style.display = ''});
       countriesElements.input.value = '';
  
     }
  });

  el.addEventListener('click', (event) => {
    const { target } = event;
    if (target === el) return;
    if (target.closest('.country-item')) {
      properties.country = target.closest('.country-item').querySelector('.country-name').innerText;
      console.log (properties);
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
    console.log (properties);
    
  
    changeView();
    const listOfCountries = document.querySelectorAll('.country-item');  
       listOfCountries.forEach((item) => {item.style.display = ''});
       countriesElements.input.value = '';
  });
};








const setChangeViewCountryTable = (fn) => {
  changeView = fn;
};

export {
  createTableCountries,
  renderCountries,
  setChangeViewCountryTable
}

