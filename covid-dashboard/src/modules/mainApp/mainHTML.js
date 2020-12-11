export default function mainHTML() {
  document.body.insertAdjacentHTML('afterbegin', `
  <div id="app">
  <header class="header">
    <div class="header__icon"></div>
    <div class="header__title">COVID-19 Dashboard by the Center for Systems Science and Engineering (CSSE)</div>
    <div class="toggle-menu">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </header>
  <div id="status" class="status">Status</div>
  <div id="cases" class="cases">cases</div>
  <div id="table" class="table"></div>
  <div id ="countries" class="countries">
    <div class="ccc">All World</div>
    <div class="ccc">Belarus</div>
    <div class="ccc">Russia</div>
    <div class="ccc">Ukraine</div>
  </div>
  <div id="map" class="map"></div>
  <div id="chart" class="chart"></div>
  <footer class="footer">Authors/School</footer>
</div>`);

  const app = document.querySelector('#app');
  const cases = document.querySelector('#cases');
  const table = document.querySelector('#table');
  const countries = document.querySelector('#countries');
  const map = document.querySelector('#map');
  const chart = document.querySelector('#chart');
  const status = document.querySelector('#status');

  return {
    app,
    cases,
    table,
    countries,
    map,
    chart,
    status
  };
}
