import { properties } from '../Properties/Properties';

export const checkSizeChart = (chart) => {
  let { period } = properties;
  if (typeof period === 'boolean') {
    period = period ? 2 : false;
  }

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

  const table = window.matchMedia('screen and (max-width: 992px)');
  const minTable = window.matchMedia('screen and (max-width: 768px)');

  if (table.matches) {
    chart.config.options.title.fontSize = 13;
    chart.config.options.scales.xAxes[0].time.displayFormats.month = 'MMM YY';
    chart.config.options.scales.xAxes.scaleFontSize = 12;
    chart.config.options.scales.yAxes.scaleFontSize = 12;
  }
  if (minTable.matches) {
    chart.config.options.title.fontSize = 12;
    chart.config.options.scales.xAxes[0].time.displayFormats.month = 'MMM YY';
    chart.config.options.scales.xAxes.scaleFontSize = 9;
    chart.config.options.scales.yAxes.scaleFontSize = 9;
  }
};
