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
    elementsDOM.count.textContent = 'Per 100k population';
  } else {
    elementsDOM.count.textContent = 'All population';
  }
};

const setType = (typeData) => {
  elementsDOM.type.textContent = typeData.charAt(0).toUpperCase() + typeData.slice(1);
  elementsDOM.type.className = `${typeData}`;
};

const setCountry = (country) => {
  elementsDOM.country.textContent = country || 'All World';
};

const setPeriod = (period) => {
  let periodLoc;
  if ( typeof period === 'boolean') {
    periodLoc = period ? 'One last day' : 'For all period';
  } else {
    periodLoc = `${period} day(s)`;
  }
  elementsDOM.period.textContent = periodLoc ;
};

const updateStatusBar = () => {
  setCountry(properties.country);
  setCount(properties.population);
  setPeriod(properties.period);
  setType(properties.type);
};

const createStatusBar = (el) => {
  el.innerHTML =
    '<div class="status__date"></div>' +
    '<div class="status__country"></div>' +
    '<div class ="status__period"></div>' +
    '<div id ="status__type"></div>' +
    '<div class="status__count"></div>';

  // Заносим в переменные нужные элементы верстки
  const date = el.querySelector('.status__date');
  const country = el.querySelector('.status__country');
  const period = el.querySelector('.status__period');
  const count = el.querySelector('.status__count');
  const type = el.querySelector('#status__type');

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
