import leftButton from '../../assets/img/left_button.svg';
import rightButton from '../../assets/img/right_button.svg';

const chartHTML = `
<button type="button" class="button chart__buttons_changeData">Change data</button>
<button type="button" class="button chart__buttons_fullScreen">Full</button>
<div class="chart__wrapper"><canvas id="myChart" style="position: relative; width: 100%; height: 100%;"></canvas></div>
  <div class="chart__buttons">
    <button type="button" class="button chart__button">${leftButton}</button>
    <p class="chart__category"><span>Recovered</span></p>
    <button type="button" class="button chart__button">${rightButton}</button>
  </div>`;

export default chartHTML;
