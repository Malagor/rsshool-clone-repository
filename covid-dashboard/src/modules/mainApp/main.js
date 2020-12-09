function initLayout() {
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
  <div class="cases">cases</div>
  <div class="table">table</div>
  <div class="countries">countries</div>
  <div class="map">map</div>
  <div class="chart">chart</div>
  <footer class="footer">Authors/School</footer>
</div>`)
}

initLayout();
