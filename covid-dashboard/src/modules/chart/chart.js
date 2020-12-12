import Chart from 'chart.js';
import './chart.scss';
import chartHTML from './chartHTML';
import getChartConfig from './chartConfig';
import checkChart from './checkChart';
import { addData } from './addDataToChart';
// import { properties } from '../Properties';
import Queries from '../queries/Queries';

export default function MyChar(el) {
  el.insertAdjacentHTML('afterbegin', chartHTML);
  let chart = null;
  let dataCorrect = null;
  let titleForLabel = null;
  const chartProps = {
    cases: true,
    deaths: false,
    recovered: false,
  };
  const ctx = document.getElementById('myChart').getContext('2d');
  const checkboxes = document.querySelectorAll('.chart__label');

  checkboxes.forEach((item) =>
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
    }),
  );

  function showRecovered(data, title, type) {
    chart = new Chart(ctx, getChartConfig(data, title, type));
    dataCorrect = data;
    titleForLabel = title;
    return chart;
  }

  function getTestData() {
    const url = Queries();

    fetch(url.allWorldPerPeriod())
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allData = Object.entries(data);
        showRecovered(allData, 'All World', 'cases');
      });
  }
  getTestData();

  return {
    showRecovered,
  };
}
