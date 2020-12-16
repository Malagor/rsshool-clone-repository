import Chart from 'chart.js';
import './chart.scss';
import chartHTML from './chartHTML';
import getChartConfig from './chartConfig';
import checkChart from './checkChart';
import { addData } from './addDataToChart';
// import { properties } from '../Properties';
import { allWorldPerPeriod } from '../queries/Queries';

let chart = null;
let dataCorrect = null;
let titleForLabel = null;
let ctx = null;

function showRecovered(data, title, type) {
  chart = new Chart(ctx, getChartConfig(data, title, type));
  dataCorrect = data;
  titleForLabel = title;
  return chart;
}

function getTestData() {
  const url = allWorldPerPeriod();

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const allData = Object.entries(data);
      showRecovered(allData, 'All World', 'cases');
    });
}


function createChart(el) {
  el.insertAdjacentHTML('afterbegin', chartHTML);
  const chartProps = {
    cases: true,
    deaths: false,
    recovered: false,
  };
  ctx = document.getElementById('myChart').getContext('2d');
  const checkboxes = document.querySelectorAll('.chart__label');

  checkboxes.forEach(item => {

    item.addEventListener('click', () => {
      const checkProps = JSON.stringify(Object.values(chartProps));

      checkChart(chartProps, item);

      if (checkProps !== JSON.stringify(Object.values(chartProps))) {

        addData(
          item.firstElementChild.textContent.toLowerCase(),
          dataCorrect,
          chartProps,
          titleForLabel,
          chart,
        );

      }
    });
  });
  getTestData();
}

export {
  createChart,
  showRecovered
}



