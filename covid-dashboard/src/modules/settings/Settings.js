/**
 *
 * Author: Alex Malagor <seo.dnja@mail.com>
 *
 * Module function: Setting popup
 *
 * */

import settingsHTML from './settingsHTML';
import { setPropertis } from '../Properties/Properties';


export default function DefaultTemplate() {
  document.body.insertAdjacentHTML('beforeend', settingsHTML());

  // Заносим в переменные нужные элементы верстки
  const popup = document.querySelector('#popup');
  const form = document.forms.settings;
  // const population = el.querySelector('#setting-population');

  // Объявляем переменные-заглушки обработчиков событий
  let sendEventUpdateData = null;

  // И прописываем методы присваивания функций обработчиков к нашим переменным
  function setSendForm(fn) {
    sendEventUpdateData = fn;
  }

  function getFormData() {
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

    setPropertis(data);
    sendEventUpdateData();
  }

  function popupClick() {
    // console.log('Popup click');
  }

  function showPopup(el) {
    // getting the size and position of the calling element
    const { offsetLeft, offsetTop, clientHeight } = el;
    // getting the Width of the popup window
    const popupWidth = popup.clientWidth;

    popup.style.top = `${offsetTop + clientHeight}px`;
    popup.style.left = `${offsetLeft - popupWidth}px`;
    popup.classList.toggle('open');
  }

  // Add Events Listeners
  (function events() {
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

  // и по итогу возвращаем набор функций/интерфейс/API работы с этим модулем.
  return {
    showPopup,
    setHandler: {
      setSendForm,
    },
  };
}
