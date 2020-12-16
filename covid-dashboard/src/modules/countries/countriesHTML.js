export const createCountriesHTML = (el) => {
  el.innerHTML = `<div class="countries-wrapper">
  <div class="countries-title">Cases by country</div>
  <input type="text" class="countries-input">
  <div class="countries-list"></div>
  <div class="toggle-cases">
    <div class="btn-cases btn-all">All Cases</div>
    <div class="btn-cases btn-deaths">Deaths</div>
    <div class="btn-cases btn-recovered">Recovered</div>
  </div>
</div>`;
}

export const getCountriesDOMElements = (el) => {
  const wrapper = el.querySelector('.countries-wrapper');
  const title = el.querySelector('.countries-title');
  const input = el.querySelector('.countries-input');
  const list = el.querySelector('.countries-list');
  const btnAll = el.querySelector('.btn-all');
  const btnDeaths = el.querySelector('.btn-deaths');
  const btnRecovered = el.querySelector('.btn-recovered');

  return {
    wrapper,
    title,
    input,
    list,
    btnAll,
    btnDeaths,
    btnRecovered
  };
}

