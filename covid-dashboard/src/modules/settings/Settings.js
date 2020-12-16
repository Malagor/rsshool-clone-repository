/**
 *
 * Author: Alex Malagor <seo.dnja@mail.com>
 *
 * Module function: Setting popup
 *
 * */

import settingsHTML from './settingsHTML';
import { setProperties } from '../Properties/Properties';
import { updateApp } from '../mainApp/updataApp';

let popup;
let form;

const showPopup = (el) => {
  // getting the size and position of the calling element
  const { offsetLeft, offsetTop, clientHeight } = el;
  // getting the Width of the popup window
  const popupWidth = popup.clientWidth;

  popup.style.top = `${offsetTop + clientHeight}px`;
  popup.style.left = `${offsetLeft - popupWidth}px`;
  popup.classList.toggle('open');
};

const getFormData = () => {
  let country = form.country.value;
  const population = form.population.checked;
  let period = form.period.checked;
  const type = form.type.value;

  country = (country === 'All World' || '') ? false: country;
  period = period ? 'all': 30;

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

  form.addEventListener('submit', event => {
    event.preventDefault();
    getFormData();
  });
};

const setSettingToggleElement = (el) => {
  el.addEventListener('click', () => {
    showPopup(el);
  });
};

export {
  // showPopup,
  createSettings,
  setSettingToggleElement
}
