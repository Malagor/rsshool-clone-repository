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

const showPopup = (el) => {
  // getting the size and position of the calling element
  // const { offsetLeft, offsetTop, clientHeight } = el;
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

  // Заносим в переменные нужные элементы верстки
  popup = document.querySelector('#popup');
  form = document.forms.settings;
  countryInput = form.country;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    getFormData();
  });
};

const setSettingToggleElement = (el) => {
  el.addEventListener('click', () => {
    showPopup(el);
  });
};

const updateCountryInPopupSetting = () => {
  countryInput.value = properties.country;
};


export {
  // showPopup,
  createSettings,
  setSettingToggleElement,
  updateCountryInPopupSetting
};
