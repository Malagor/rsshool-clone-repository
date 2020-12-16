/**
 *
 * Author: Alex Malagor <seo.dnja@mail.com>
 *
 * Module function: Setting popup
 *
 * */

import settingsHTML from './settingsHTML';
import { setPropertis } from '../Properties/Properties';
// import { updateApp } from '../onEvents/onEvents';


document.body.insertAdjacentHTML('beforeend', settingsHTML());
const popup = document.querySelector('#popup');
const form = document.forms.settings;


// handler
let onUpdateData = null;

const showSettingsPopup = (el) => {
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

  country = (country === 'All World' || '') ? false : country;
  period = period ? 'all' : 30;

  const data = {
    country,
    population,
    period,
    type,
  };

  setPropertis(data);
  // onUpdateData();
  onUpdateData();
};

const setSendFormHandler = (fn) => {
  onUpdateData = fn;
};

const popupClick = () => {
  // console.log('Popup click');
};

(() =>{
  popup.addEventListener('click', (event) => {
    const { target } = event;
    if (target === popup) return;
    popupClick();
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    getFormData();
  });
})();

export {
  showSettingsPopup,
  setSendFormHandler,
};
