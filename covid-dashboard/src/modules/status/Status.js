import { properties } from '../Properties/Properties';

let elementsDOM = null;

const setCurrentDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
  };
  elementsDOM.date.textContent = date.toLocaleString('en-US', options);
};

const setCount = (allPopulation = true) => {
  if (allPopulation) {
    elementsDOM.count.textContent = 'Entire population';
  } else {
    elementsDOM.count.textContent = 'Per 100k inhabitants';
  }
};

const setType = (typeData) => {
  elementsDOM.type.textContent = typeData.charAt(0).toUpperCase() + typeData.slice(1);
};

const setCountry = (country) => {
  elementsDOM.country.textContent = country || 'All World';
};

const setPeriod = (period) => {
  elementsDOM.period.textContent = period === 'all' ? 'For all period' : `${period} day(s)` ;
};

const updateStatusBar = () => {
  setCountry(properties.country);
  setCount(properties.count);
  setPeriod(properties.period);
  setType(properties.type);
};

const createStatusBar = (el) => {
  el.innerHTML =
    '<div class="status__date"></div>' +
    '<div class="status__country"></div>' +
    '<div class ="status__period"></div>' +
    '<div class ="status__type"></div>' +
    '<div class="status__count"></div>';

  // Заносим в переменные нужные элементы верстки
  const date = el.querySelector('.status__date');
  const country = el.querySelector('.status__country');
  const period = el.querySelector('.status__period');
  const count = el.querySelector('.status__count');
  const type = el.querySelector('.status__type');

  elementsDOM = {
    date,
    country,
    count,
    period,
    type,
  };

  setCurrentDate(new Date());
  updateStatusBar();

  return elementsDOM;
};

export {
  createStatusBar,
  updateStatusBar,
};
