import Chart from 'chart.js';
import './chart.scss';
import { chartHTML } from './chartHTML';
import { getChartConfig } from './chartConfig';
import { checkChart } from './checkChart';
import { addData } from './addDataToChart';
import { callbacksToolTips } from './chartDataForConfig';
import { properties } from '../Properties/Properties';

let chart = null;
let ctxt = null;
let checkboxes;
let offsetY;
let chartProps = {
  cases: false,
  deaths: false,
  recovered: false,
};

Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  draw(ease) {
    Chart.controllers.line.prototype.draw.call(this, ease);
    if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
      const activePoint = this.chart.tooltip._active[0];
      const { ctx } = this.chart;
      const { x } = activePoint.tooltipPosition();
      const topY = this.chart.scales['y-axis-0'].top;
      const bottomY = this.chart.scales['y-axis-0'].bottom;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(topY, offsetY);
      ctx.lineTo(this.chart.width, offsetY);
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.stroke();
      ctx.restore();
    }
  },
});

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
  ctxt = document.getElementById('myChart').getContext('2d');
  checkboxes = document.querySelectorAll('.chart__label');
  chart = new Chart(ctxt, getChartConfig());
  document.getElementById('myChart').addEventListener('mousemove', (e) => {
    const targetCoords = e.target.getBoundingClientRect();
    const yCoord = e.clientY - targetCoords.top;
    offsetY = yCoord;
    if (offsetY < chart.chartArea.top || offsetY > chart.chartArea.bottom) {
      offsetY = -1;
    }
    return offsetY;
  });
  return chart;
};

export { createChart, changeChartData };
