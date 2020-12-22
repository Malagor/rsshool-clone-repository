export const mainHTML = () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `
  <div class="fullScreen-overlay"></div>
  <div class="loader">
    <div class="loader__lines">
      <div class="loader__lines_one loader__line"></div>
      <div class="loader__lines_two loader__line"></div>
    </div>
    <p class="loader__title">COVID-19 Dashboard</p>
  </div>
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
    <div id="status" class="status"></div>
    <div id="table" class="table"></div>
    <div id ="countries" class="countries">      
    </div>
    <div id="map" class="map"></div>
    <div id="chart" class="chart"></div>
    <footer class="footer"></footer>
  </div>`,
  );

  const app = document.querySelector('#app');
  const cases = document.querySelector('#cases');
  const table = document.querySelector('#table');
  const countries = document.querySelector('#countries');
  const map = document.querySelector('#map');
  const chart = document.querySelector('#chart');
  const status = document.querySelector('#status');
  const header = document.querySelector('header.header');
  const footer = document.querySelector('footer.footer');

  return {
    app,
    cases,
    table,
    countries,
    map,
    chart,
    status,
    header,
    footer,
  };
};
