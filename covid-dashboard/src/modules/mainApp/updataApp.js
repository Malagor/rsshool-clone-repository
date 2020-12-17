import { properties } from '../Properties/Properties';
// import { setMarksToMap } from '../map/map';
// import { renderCountries } from '../countries/countries';
import {
  // urlAllTimeByCountries,
  urlAllWorldPerPeriod,
  urlCountryDataPerPeriod,
  urlFlagAndPopulation,
} from '../queries/Queries';
import { changeChartData } from '../chart/chart';

export const updateApp = () => {
  const { country, period, /* population, */ type } = properties;

  let url;
  const urlGeneralInfo = urlFlagAndPopulation();
  const locPeriod = period ? 30 : 'all';

  if (country) {
    url = urlCountryDataPerPeriod(country, locPeriod);
  } else {
    url = urlAllWorldPerPeriod(locPeriod);
  }

  Promise.all([
    fetch(url),
    fetch(urlGeneralInfo)
  ]).then(async ([covidData, generalInfo]) => {
    return {
      covidData: await covidData.json(),
      generalInfo: await generalInfo.json()
    };
  })
    .then((data) => {
      let arrData;
      let locCountry;

      if (country) {
        const additionalArr = Object.entries(data.covidData);
        arrData = Object.entries(additionalArr[2][1]);
        locCountry = country;
      } else {
        locCountry = 'All World';
        arrData = Object.entries(data.covidData);
      }

      changeChartData(arrData, locCountry, type, period);

    }).catch((err) => {
    console.log('Error updating information in the app!', err);
  });
};
