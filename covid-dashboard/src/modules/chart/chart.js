import Chart from 'chart.js';
import './chart.scss';
import { chartHTML } from './chartHTML';
import { getChartConfig } from './chartConfig';
import { checkChart } from './checkChart';
import { checkSizeChart } from './adaptiveChart';
import { addData } from './addDataToChart';
import { callbacksToolTips } from './chartDataForConfig';
import { properties } from '../Properties/Properties';
import { getControlsBlockHTML } from '../controls/controlsBlock';

let chart = null;
let ctxt = null;
let chartHeader;
let checkboxes;
let offsetY;
let offsetX;
let chartProps = {
  cases: false,
  deaths: false,
  recovered: false,
};

Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  draw(ease) {
    Chart.controllers.line.prototype.draw.call(this, ease);
    if (
      this.chart.tooltip._active &&
      this.chart.tooltip._active.length &&
      offsetY !== -1
    ) {
      const activePoint = this.chart.tooltip._active[0];
      const { ctx } = this.chart;
      const { x } = activePoint.tooltipPosition();
      const topY = this.chart.scales['y-axis-0'].top;
      const bottomY = this.chart.scales['y-axis-0'].bottom;
      const rightY = this.chart.scales['y-axis-0'].right;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(rightY, offsetY);
      ctx.lineTo(this.chart.width - 25, offsetY);
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
  const { type } = properties;
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

  checkSizeChart(chart);
  chart.update();
  checkboxesEvents(data);
}

const createChart = (el) => {
  el.insertAdjacentHTML('afterbegin', chartHTML);
  ctxt = document.getElementById('myChart').getContext('2d');
  chartHeader = document.querySelector('.chart__header');
  getControlsBlockHTML(chartHeader, el);
  checkboxes = document.querySelectorAll('.chart__label');
  chart = new Chart(ctxt, getChartConfig());
  window.addEventListener('resize', () => checkSizeChart(chart));
  document.getElementById('myChart').addEventListener('mousemove', (e) => {
    const targetCoords = e.target.getBoundingClientRect();
    offsetY = e.clientY - targetCoords.top;
    offsetX = e.clientX - targetCoords.left;
    if (
      offsetY < chart.chartArea.top ||
      offsetY > chart.chartArea.bottom ||
      offsetX < chart.chartArea.left ||
      offsetX > chart.chartArea.right
    ) {
      offsetY = -1;
      chart.options.tooltips.enabled = false;
      chart.options.hover.intersect = true;
    } else {
      chart.options.tooltips.enabled = true;
      chart.options.hover.intersect = false;
    }
    return offsetY;
  });
  return chart;
};

export { createChart, changeChartData };
