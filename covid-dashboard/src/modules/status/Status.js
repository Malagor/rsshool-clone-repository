import { properties } from '../Properties/Properties';

export default function DefaultTemplate(el) {
  el.innerHTML =
    '<div class="status__date">10.11.2020</div>' +
    '<div class="status__country">All World</div>' +
    '<div class ="status__period">All time pandemic</div>' +
    '<div class ="status__type">Cases</div>' +
    '<div class="status__count">Entire population</div>';

  // Заносим в переменные нужные элементы верстки
  const date = el.querySelector('.status__date');
  const country = el.querySelector('.status__country');
  const period = el.querySelector('.status__period');
  const count = el.querySelector('.status__count');
  const type = el.querySelector('.status__type');

//  const properties = {
//   country: 'All World',
//   period: 'all',
//   count: 'all',
//   type: 'cases',
// };

  function setData(data) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
    };

    date.textContent = data.toLocaleString('en-US', options);
  }

  setData(new Date());

  function setCountry(nameCountry = false) {
    country.textContent = nameCountry || 'All World';
  }

  function setPeriod(allPeriod = true) {
    if (allPeriod === true && typeof allPeriod === 'boolean') {
      properties.period = 'all';
      period.textContent = 'All time pandemic';
    } else if (allPeriod === false && typeof allPeriod === 'boolean') {
      properties.period = 1;
      period.textContent = `Last day`;
    } else {
      properties.period = allPeriod;
      period.textContent = `${allPeriod} day`;
    }
  }

  function setCount(allPopulation = true) {
    if (allPopulation) {
      count.textContent = 'Entire population';
    } else {
      count.textContent = 'Per 100k inhabitants';
    }
  }

  function setType(typeData = 'Cases') {
    type.textContent = typeData.charAt(0).toUpperCase() + typeData.slice(1);
  }

  function updateStatusBar() {
    setCountry(properties.country);
    setCount(properties.count);
    setPeriod(properties.period);
    setType(properties.type);
  }

  updateStatusBar();

  return {
    properties,
    updateStatusBar,
    setHandler: {},
  };
}
