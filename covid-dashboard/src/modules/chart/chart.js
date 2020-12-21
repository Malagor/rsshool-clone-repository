import Chart from 'chart.js';
import './chart.scss';
import { chartHTML } from './chartHTML';
import { getChartConfig } from './chartConfig';
import { checkChart } from './checkChart';
import { addData } from './addDataToChart';
import { callbacksToolTips } from './chartDataForConfig';
import { properties } from '../Properties/Properties';

let chart = null;
let ctx = null;
let checkboxes;
let chartProps = {
  cases: false,
  deaths: false,
  recovered: false,
};

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

function changeChartData(data, title) {
  const { type, population } = properties;
  let { period } = properties;
  if (typeof period === 'boolean') {
    period = period ? 2 : false;
  }
  console.log(population);
  const val = Object.entries(chartProps);
  val.map((it) => {
    it[1] = false;
    if (it[0].toString() === type) it[1] = true;
    return it;
  });
  chartProps = Object.fromEntries(val);
  checkboxes.forEach((it) => {
    const el = it.firstElementChild.textContent.toLowerCase();
    it.previousElementSibling.checked = false;
    if (el === type) it.previousElementSibling.checked = true;
  });

  chart.config.data.datasets = [];
  addData(type, data, chartProps, chart, title);
  chart.config.options.title.text = title;
  chart.config.data.labels = Object.keys(data[0][1]);
  chart.config.options.tooltips.callbacks = callbacksToolTips(title);

  if (period) {
    const averageWeeksPerMonthCount = 4;
    chart.config.options.scales.xAxes[0].time.unit = 'day';
    chart.config.options.scales.xAxes[0].time.displayFormats.day = 'MMM DD';
    chart.config.options.scales.xAxes[0].ticks.maxTicksLimit = averageWeeksPerMonthCount;
  } else {
    const monthsCount = 12;
    chart.config.options.scales.xAxes[0].time.unit = 'month';
    chart.config.options.scales.xAxes[0].time.displayFormats.month = 'MMM YYYY';
    chart.config.options.scales.xAxes[0].ticks.maxTicksLimit = monthsCount;
  }

  chart.update();
  checkboxesEvents(data);
}

const createChart = (el) => {
  el.insertAdjacentHTML('afterbegin', chartHTML);
  ctx = document.getElementById('myChart').getContext('2d');
  checkboxes = document.querySelectorAll('.chart__label');
  chart = new Chart(ctx, getChartConfig());
  return chart;
};

export { createChart, changeChartData };
