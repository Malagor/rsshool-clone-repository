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
import { updateStatusBar } from '../status/Status';

let popup;
let form;

const showPopup = (el) => {
  // getting the size and position of the calling element
  // const { offsetLeft, offsetTop, clientHeight } = el;
  const params = el.getBoundingClientRect();
  // getting the Width of the popup window
  const popupWidth = popup.clientWidth;
  console.log(params);
  popup.style.top = `${params.bottom}px`;
  popup.style.left = `${params.left - popupWidth}px`;
  popup.classList.toggle('open');
};

const getFormData = () => {
  let country = form.country.value;
  const population = form.population.checked;
  const period = form.period.checked;
  const type = form.type.value;

  country = country === 'All World' || '' ? false : country;

  const data = {
    country,
    population,
    period,
    type,
  };

  setProperties(data);
  updateStatusBar();
  updateApp();
};

const createSettings = () => {
  document.body.insertAdjacentHTML('beforeend', settingsHTML());

  // Заносим в переменные нужные элементы верстки
  popup = document.querySelector('#popup');
  form = document.forms.settings;

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

export {
  // showPopup,
  createSettings,
  setSettingToggleElement,
};
