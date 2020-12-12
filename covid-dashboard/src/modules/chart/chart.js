import Chart from 'chart.js';
import './chart.scss';
import chartHTML from './chartHTML';
import getChartConfig from './chartConfig';

export default function MyChar(el) {
  el.insertAdjacentHTML('afterbegin', chartHTML);
  // eslint-disable-next-line no-unused-vars
  let chart = null;

  const ctx = document.getElementById('myChart').getContext('2d');

  // function setChart(lbls, dt, title) {
  //   chart = new Chart(ctx, getChartConfig(lbls, dt, title));
  //   return chart;
  // }

  function showRecovered(lbls, dt, title) {
    chart = new Chart(ctx, getChartConfig(lbls, dt, title));
    return chart;
  }

  return {
    showRecovered,
  };
}
