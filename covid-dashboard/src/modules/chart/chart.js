import Chart from 'chart.js';
import './chart.scss';
import chartHTML from './chartHTML';
import getChartConfig from './chartConfig';
import checkChart from './checkChart';
import addData from './addDataToChart';
import Queries from '../queries/Queries';

export default function MyChar(el) {
  el.insertAdjacentHTML('afterbegin', chartHTML);
  let chart = null;
  const chartProps = {
    cases: true,
    deaths: false,
    recovered: false,
  };
  const ctx = document.getElementById('myChart').getContext('2d');
  const checkboxes = document.querySelectorAll('.chart__label');

  const checkboxesEvents = (dt) => {
    checkboxes.forEach((item) => {
      item.onclick = null;
      item.onclick = () => {
        const checkProps = JSON.stringify(Object.values(chartProps));
        checkChart(chartProps, item);
        if (checkProps !== JSON.stringify(Object.values(chartProps))) {
          addData(
            item.firstElementChild.textContent.toLowerCase(),
            dt,
            chartProps,
            chart,
          );
        }
        return item;
      };
    });
  };

  function setChart(data, title) {
    chart = new Chart(ctx, getChartConfig(data, title));
    checkboxesEvents(data);
    return chart;
  }

  function getDataForSetChart() {
    const url = Queries();
    fetch(url.allWorldPerPeriod())
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allData = Object.entries(data);
        setChart(allData, 'All World');
      });
  }

  getDataForSetChart();

  // return {
  //   setChart,
  // };
}
