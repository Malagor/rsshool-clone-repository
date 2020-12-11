export default function DefaultTemplate(el) {
  el.innerHTML =
    '<div class="status__date">10.11.2020</div>' +
    '<div class="status__country">All World</div>' +
    '<div class ="status__period">All time pandemic</div>' +
    '<div class="status__count">Entire population</div>';

  // Заносим в переменные нужные элементы верстки
  const date = el.querySelector('.status__date');
  const country = el.querySelector('.status__country');
  const period = el.querySelector('.status__period');
  const count = el.querySelector('.status__count');

  function setData(data) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
    };

    date.textContent = data.toLocaleString("en-US", options);
  }

  setData(new Date());

  // const dt = new Date();
  // console.log('Data today', dt);

  function setCountry(nameCountry = 'All World') {
    country.textContent = nameCountry;
  }

  function setPeriod(allPeriod = true) {
    if (allPeriod === true && typeof allPeriod === 'boolean') {
      period.textContent = 'All time pandemic';
    } else if (allPeriod === false && typeof allPeriod === 'boolean') {
      period.textContent = `Last day`;
    } else {
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

  function setStatistics(nameCountry = 'All World', allPeriod = true, allPopulation = true) {
    setCountry(nameCountry);
    setCount(allPopulation);
    setPeriod(allPeriod);
  }

  setStatistics();

  return {
    setData,
    setCountry,
    setPeriod,
    setCount,
    setStatistics,
    setHandler: {},
  };
}
