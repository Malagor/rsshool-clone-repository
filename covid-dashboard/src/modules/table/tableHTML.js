export function createTableHTML(el) {
  el.innerHTML = `<div class="table-wrapper">
  <div class="table-country"></div>
  <div class="table-cases">
    <div class="cases-title">Cases</div>
    <div class="cases-number"></div> 
  </div>
  <div class="table-recovered">
    <div class="recovered-title">Recovered</div>
    <div class="recovered-number"></div> 
  </div>
  <div class="table-deaths">
    <div class="deaths-title">Deaths</div>
    <div class="deaths-number"></div> 
  </div>
</div>`;
}

export function getTableDOMEelements(el) {
  const wrapper = el.querySelector('.table-wrapper');
  const country = el.querySelector('.table-country');
  const numbOfCases = el.querySelector('.cases-number');
  const numbOfRecovered = el.querySelector('.recovered-number');
  const numbOfDeaths = el.querySelector('.deaths-number');

  return {
    wrapper,
    country,
    numbOfCases,
    numbOfRecovered,
    numbOfDeaths,
  };
}
