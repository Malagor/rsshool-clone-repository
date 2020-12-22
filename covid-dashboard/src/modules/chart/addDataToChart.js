export function addData(el, data, chartProps, chart) {
  const colors = [
    'rgba(113, 113, 255, 1)',
    'rgba(255, 0, 0, 1)',
    'rgba(0, 255, 0, 1)',
  ];
  const names = [];
  data.map((it) => names.push(it[0]));
  const index = names.indexOf(el);
  const val = chartProps[el];
  const datasetsEl = {
    label: names[index][0].toUpperCase() + names[index].slice(1),
    data: Object.values(data[index][1]),
    borderColor: colors[index],
    pointBackgroundColor: colors[index],
    pointRadius: 0.5,
    pointHoverRadius: 3,
    borderWidth: 0.5,
  };
  const elVal = [];
  chart.config.data.datasets.map((it, ind) =>
    it.borderColor === colors[index] ? elVal.push(ind) : -1,
  );
  if (val) {
    chart.config.data.datasets.push(datasetsEl);
  }
  if (!val) {
    chart.config.data.datasets.splice(elVal[0], 1);
  }
  chart.update();
}
