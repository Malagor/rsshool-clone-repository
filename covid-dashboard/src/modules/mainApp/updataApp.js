// import { updateStatusBar } from '../status/Status';
import { properties } from '../Properties/Properties';
// import { renderChart } from './renderChart';
// import { setMarksToMap } from '../map/map';
// import { renderCountries } from '../countries/countries';
import { allWorldPerPeriod, countryDataPerPeriod, getPopulation } from '../queries/Queries';

export const updateApp = () => {
  const { country, period, /* population, type */ } = properties;

  let url;
  const urlGeneralInfo = getPopulation();

  if (country) {
    url = countryDataPerPeriod(period);
  } else {
    url = allWorldPerPeriod(period);
  }

  Promise.all([
    fetch(url),
    fetch(urlGeneralInfo)
  ]).then(async([aa, bb]) => {
    const a = await aa.json();
    const b = await bb.json();
    return [a, b]
  })
    .then((responseText) => {
      console.log(responseText);

    }).catch((err) => {
    console.log(err);
  });

  // updateStatusBar();
  // renderChart(country, period, type);
  //
  // const url = 'https://corona.lmao.ninja/v2/countries';
  //
  // fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     const dataForMap = [];
  //     const dataForCountriesTable = [];
  //
  //     data.forEach(el => {
  //
  //       const { active, country: cntr, population, cases } = el;
  //       const { lat, long, flag } = el.countryInfo;
  //
  //       dataForMap.push({
  //         active,
  //         country: cntr,
  //         population,
  //         lat,
  //         long,
  //         flag,
  //       });
  //
  //       dataForCountriesTable.push({
  //         flag,
  //         country: cntr,
  //         arrData: cases,
  //       });
  //     });
  //
  //     setMarksToMap(dataForMap);
  //     renderCountries(dataForCountriesTable);
  //   });


};
