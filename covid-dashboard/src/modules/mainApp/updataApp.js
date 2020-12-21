import { properties } from '../Properties/Properties';
import {
  allCountriesGeneralData,
  countriesPerPeriod,
} from '../queries/Queries';
import { countPer100k } from './countPer100k';
import { getLastDayData } from './getLastDayData';
import { changeChartData } from '../chart/chart';
import { processingDataForChart } from './processingDataForChart';

export const updateApp = () => {
  const { country, population, type } = properties;
  console.log(country, population, type);
  let { period } = properties;

  if (typeof period === 'boolean') {
    period = period ? 2 : false;
  }

  const urlGeneralData = allCountriesGeneralData();
  // const urlCountriesData = countriesPerPeriod(country, period);

  fetch(urlGeneralData)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const generalData = data;
      const codesCountries = data.map((el) => el.countryInfo.iso3);

      const urlCountriesData = countriesPerPeriod(codesCountries, period);

      fetch(urlCountriesData)
        .then((response) => {
          return response.json();
        })
        .then((countriesData) => {
          const compileData = generalData.map((el, idx) => {
            if (countriesData[idx]) {
              const casesTime = Object.entries(
                countriesData[idx].timeline.cases,
              );
              const deathsTime = Object.entries(
                countriesData[idx].timeline.deaths,
              );
              const recoveredTime = Object.entries(
                countriesData[idx].timeline.recovered,
              );
              const cases = casesTime[casesTime.length - 1][1];
              const deaths = deathsTime[deathsTime.length - 1][1];
              const recovered = recoveredTime[recoveredTime.length - 1][1];

              const { population: pops } = el;
              const { length } = casesTime;

              if (length) {
                el.todayCases = getLastDayData(casesTime);
                el.todayDeaths = getLastDayData(deathsTime);
                el.todayRecovered = getLastDayData(recoveredTime);
              }

              el.cases = cases;
              el.deaths = deaths;
              el.recovered = recovered;

              el.casesPer100k = countPer100k(cases, pops);
              el.deathsPer100k = countPer100k(deaths, pops);
              el.recoveredPer100k = countPer100k(recovered, pops);

              el.todayCasesPer100k = countPer100k(el.todayCases, pops);
              el.todayRecoveredPer100k = countPer100k(el.todayDeaths, pops);
              el.todayDeathsPer100k = countPer100k(el.todayRecovered, pops);
              el.timeData = {
                cases: casesTime,
                deaths: deathsTime,
                recovered: recoveredTime,
              };
              return el;
            }
            return null;
          });
          return compileData.filter((el) => el !== null);
        })
        .then((fullArrayCountries) => {
          console.log(fullArrayCountries);

          // Тут раздербанивайте входящий массив на составляющие и вызывайте свои функции

          const { resultArr, locCountry } = processingDataForChart(
            fullArrayCountries,
          );
          changeChartData(resultArr, locCountry);
        })
        .catch((err) => {
          console.log("I can't convert country data", err);
        });
    })
    .catch((err) => {
      console.log("Can't get general data about countries!", err);
    });
};
