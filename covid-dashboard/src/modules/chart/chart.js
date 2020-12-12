import Chart from 'chart.js';
import './chart.scss';
import chartHTML from './chartHTML';
import getChartConfig from './chartConfig';

export default function MyChar(el) {
  el.insertAdjacentHTML('afterbegin', chartHTML);
  let chart = null;
  const chartProps = {
    isCases: true,
    isRecovered: false,
    isDeaths: false,
  };
  console.log(chartProps);
  const ctx = document.getElementById('myChart').getContext('2d');

  function getTestData() {
    const urlHistorical =
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

    fetch(urlHistorical)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allData = Object.entries(data);
        console.log(allData);
      });
  }
  getTestData();

  function showRecovered(labels, data, title) {
    chart = new Chart(ctx, getChartConfig(labels, data, title));
    return chart;
  }

  return {
    showRecovered,
  };
}
