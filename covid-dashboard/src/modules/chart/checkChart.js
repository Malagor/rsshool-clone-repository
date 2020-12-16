export function checkChart(chartProps, item) {
  item.previousElementSibling.removeAttribute('disabled');
  const el = item.firstElementChild.textContent.toLowerCase();
  chartProps[`${el}`] = !chartProps[`${el}`];
  const values = Object.values(chartProps);
  if (values.every((it) => !it)) {
    item.previousElementSibling.setAttribute('disabled', 'true');
    chartProps[`${el}`] = !chartProps[`${el}`];
  }
  return chartProps;
}
