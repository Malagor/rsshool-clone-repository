import { updateStatusBar } from '../status/Status';
import { properties } from '../Properties/Properties';
import { renderChart } from './renderChart';
import { setMarksToMap } from '../map/map';
import { renderCountries } from '../countries/countries';

export const updateApp = () => {
  const { country, /* count , */ period, type } = properties;

  updateStatusBar();
  renderChart(country, period, type);

  const url = 'https://corona.lmao.ninja/v2/countries';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const dataForMap = [];
      const dataForCountriesTable = [];

      data.forEach(el => {

        const { active, country: cntr, population, cases } = el;
        const { lat, long, flag } = el.countryInfo;

        dataForMap.push({
          active,
          country: cntr,
          population,
          lat,
          long,
          flag,
        });

        dataForCountriesTable.push({
          flag,
          country: cntr,
          arrData: cases,
        });
      });

      setMarksToMap(dataForMap);
      renderCountries(dataForCountriesTable);
    });


};
