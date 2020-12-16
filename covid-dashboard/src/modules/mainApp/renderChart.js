import { allWorldPerPeriod, countryDataPerPeriod } from '../queries/Queries';
import { showRecovered } from '../chart/chart';

export function renderChart(country = false, day = 'all', type = 'cases') {
  let url;

  if (country) {
    url = countryDataPerPeriod(country, day);
  } else {
    url = allWorldPerPeriod(day);
  }

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let typeData = null;
      if (country) {
        typeData = data.timeline[type];
      } else {
        typeData = data[type];
      }
      const label = Object.keys(typeData);
      const arrData = [];

      label.forEach(key => {
        arrData.push(typeData[key]);
      });
      showRecovered(label, arrData, `${(country || 'All World')} - ${type}`);
    });
}
