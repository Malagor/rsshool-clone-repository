/**
 *
 * Author: Alex Malagor <seo.dnja@mail.com>
 *
 * Module function: Setting popup
 *
 * */

import settingsHTML from './settingsHTML';
import { properties, setProperties } from '../Properties/Properties';
import { updateApp } from '../mainApp/updataApp';
import { createListOfCountries } from './createListOfCountries';
import { filterInputInPopup } from './fiterInputInPopup';
import { localStorageCountryList } from '../mainApp/localStorageCountryList';

let popup;
let form;
let countryInput;
let currElem;
let listOfCountries;

setTimeout(() => {
  listOfCountries = createListOfCountries();
}, 0);

const showPopup = (el) => {
  currElem = el;
  // getting the size and position of the calling element
  const params = el.getBoundingClientRect();
  // getting the Width of the popup window
  const popupWidth = popup.clientWidth;

  popup.style.top = `${params.bottom + window.pageYOffset}px`;
  popup.style.left = `${params.left - popupWidth + window.pageXOffset}px`;
  popup.classList.toggle('open');
};

const getFormData = () => {
  let country = form.country.value;
  const population = form.population.checked;
  const period = form.period.checked;
  const type = form.type.value;

  // country = (country === 'All World' || country === '') ? false : country;
  const list = localStorageCountryList(null, 'load').map((elem) => elem.country);
  if (list.includes(form.country.value) || country === 'All World') {
    country = (country === 'All World' || country === '') ? false : country;
  } else {
    listOfCountries.classList.add('setting__list_hide');
    return;
  }

  const data = {
    country,
    population,
    period,
    type,
  };

  setProperties(data);
  updateApp();
};

const createSettings = () => {
  document.body.insertAdjacentHTML('beforeend', settingsHTML());

  popup = document.querySelector('#popup');
  form = document.forms.settings;
  countryInput = form.country;

  countryInput.addEventListener('click', () => {
    listOfCountries.classList.remove('setting__list_hide');
    document.querySelectorAll('.setting-list-item').forEach((item) => { 
        item.addEventListener('click', () => {
          countryInput.value = item.innerText;
          listOfCountries.classList.add('setting__list_hide');
        });
      });
  });

  countryInput.addEventListener('keyup', (e) => {
    filterInputInPopup(countryInput);
    const list = localStorageCountryList(null, 'load').map((elem) => elem.country);
    list.unshift('All World');
    if (e.code === 'Enter') {
      if (list.includes(countryInput.value)) {
        listOfCountries.classList.add('setting__list_hide');
      } else {
        countryInput.value = '';
      }
    }
  }); 

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    getFormData();
    popup.classList.remove('open');
  });
};

const setSettingToggleElement = (el) => {
  el.addEventListener('click', () => {
    if(currElem !== el && popup.classList.contains('open')) {
      popup.classList.remove('open');
      setTimeout(() => {
        showPopup(el);
      }, 100);
    } else {
      showPopup(el);
    }
  });
};

const updateCountryInPopupSetting = () => {
  let { country } = properties;

  country = country || 'All World';
  countryInput.value = country;
};


export {
  createSettings,
  setSettingToggleElement,
  updateCountryInPopupSetting,
};
