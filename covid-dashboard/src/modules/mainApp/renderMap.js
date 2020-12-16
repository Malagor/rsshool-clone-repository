import { setMarksToMap } from '../map/map';
import { renderCountries } from '../countries/countries';

export function renderMap() {
  const url = 'https://corona.lmao.ninja/v2/countries';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const dataForMap = [];
      const dataForCountriesTable = [];

      data.forEach(el => {

        const { active, country, population, cases } = el;
        const { lat, long, flag } = el.countryInfo;

        dataForMap.push({
          active,
          country,
          population,
          lat,
          long,
          flag,
        });

        dataForCountriesTable.push({
          flag,
          country,
          arrData: cases,
        });
      });

      setMarksToMap(dataForMap);
      renderCountries(dataForCountriesTable);
    });
}
