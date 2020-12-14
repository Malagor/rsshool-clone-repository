import Chart from 'chart.js';
import './chart.scss';
import chartHTML from './chartHTML';
import getChartConfig from './chartConfig';
import checkChart from './checkChart';
import { addData } from './addDataToChart';
import Settings from '../settings/Settings';
// import { properties } from '../Properties';
import Queries from '../queries/Queries';

export default function MyChar(el) {
  el.insertAdjacentHTML('afterbegin', chartHTML);
  const settings = Settings();
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
  const settingsButton = document.querySelector('.chart__buttons_changeData');

  settingsButton.addEventListener('click', () => {
    const elem = {
      offsetLeft:
        document.querySelector('.chart__buttons_changeData').offsetLeft +
        document.querySelector('.chart').offsetLeft,
      offsetTop:
        document.querySelector('.chart__buttons_changeData').offsetTop +
        document.querySelector('.chart').offsetTop,
      clientHeight: document.querySelector('.chart__buttons_changeData')
        .clientHeight,
    };
    settings.showPopup(elem);
  });

  checkboxes.forEach((item) => {
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

  function setChart(data, title) {
    console.log('data', data);
    chart = new Chart(ctx, getChartConfig(data, title));
    dataCorrect = data;
    titleForLabel = title;
    return chart;
  }

  (function getDataForSetChart() {
    const url = Queries();
    fetch(url.allWorldPerPeriod())
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allData = Object.entries(data);
        setChart(allData, 'All World');
      });
  })();

  // return {
  //   nameOfFunctions,
  // };
}
