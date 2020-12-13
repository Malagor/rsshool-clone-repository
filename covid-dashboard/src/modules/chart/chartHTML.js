const chartHTML = `
<div class="chart__header">
<button type="button" class="button chart__buttons_changeData">Change data</button>
<form action="#" class="chart__checkboxes">
  <p>    
    <input type="checkbox" id="diseased" checked="checked" class="chart__checkbox">
    <label for="diseased" class="chart__label"><span>Cases</span></label>
  </p>
  <p>
    <input type="checkbox" id="deaths" class="chart__checkbox">
    <label for="deaths" class="chart__label"><span>Deaths</span></label>
  </p>
  <p>  
    <input type="checkbox" id="recovered" class="chart__checkbox">
    <label for="recovered" class="chart__label"><span>Recovered</span></label>
  </p>
</form>
<button type="button" class="button chart__buttons_fullScreen">Full</button>
</div>
<div class="chart__wrapper"><canvas id="myChart" style="position: relative; width: 100%; height: 100%;"></canvas></div>
`;

export default chartHTML;
