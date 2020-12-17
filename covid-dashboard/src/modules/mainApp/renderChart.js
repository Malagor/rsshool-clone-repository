// import { allWorldPerPeriod, countryDataPerPeriod } from '../queries/Queries';
import { changeChartData } from '../chart/chart';

export function renderChart(country = false, day = false, type = 'cases') {
  let url;

  // if (country) {
  //   url = countryDataPerPeriod(country, day);
  // } else {
  //   url = allWorldPerPeriod(day);
  // }

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let arrData;

      if (country) {
        const additionalArr = Object.entries(data);
        arrData = Object.entries(additionalArr[2][1]);
      } else {
        arrData = Object.entries(data);
      }
      changeChartData(arrData, country || 'All World', type, day);
    });
}
