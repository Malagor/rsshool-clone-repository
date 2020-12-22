/**
 *
 * Author: Alex Malagor <seo.dnja@mail.com>
 *
 * Module function: Setting popup
 *
 * */

import settingsHTML from './settingsHTML';
import { properties, setProperties } from '../Properties/Properties';
// eslint-disable-next-line import/no-cycle
import { updateApp } from '../mainApp/updataApp';

let popup;
let form;
let countryInput;
let currElem;

const showPopup = (el) => {
  currElem = el;
  // getting the size and position of the calling element
  const params = el.getBoundingClientRect();
  // getting the Width of the popup window
  const popupWidth = popup.clientWidth;

  popup.style.top = `${params.bottom}px`;
  popup.style.left = `${params.left - popupWidth}px`;
  popup.classList.toggle('open');
};

const getFormData = () => {
  let country = form.country.value;
  const population = form.population.checked;
  const period = form.period.checked;
  const type = form.type.value;

  country = (country === 'All World' || country === '') ? false : country;

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
