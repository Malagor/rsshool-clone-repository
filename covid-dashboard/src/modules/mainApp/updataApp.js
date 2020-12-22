import { properties, saveProperties } from '../Properties/Properties';
import { changeChartData } from '../chart/chart';
import { processingDataForChart } from './processingDataForChart';
import { allCountriesGeneralData, countriesPerPeriod } from '../queries/Queries';
import { renderTable } from '../table/table';
import { renderCountries } from '../countries/countries';
import { countPer100k } from './countPer100k';
import { getLastDayData } from './getLastDayData';
import { processingDataForTable } from './processingDataForTable';
import { processingDataForCountries } from './processingDataForCountries';

import { processingDataForMap } from './processingDataForMap';
import { setMarksToMap } from '../map/map';
import { localStorageCountryList } from './localStorageCountryList';
import { updateStatusBar } from '../status/Status';
import { updateCountryInPopupSetting } from '../settings/Settings';
import { loaderOn } from '../loader/loader';

export const updateApp = () => {
  saveProperties();
  updateStatusBar();
  updateCountryInPopupSetting();

  let { period } = properties;
  if (typeof period === 'boolean') {
    period = period ? 2 : false;
  }

  const urlGeneralData = allCountriesGeneralData();
  loaderOn(true);

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
                el.casesToday = getLastDayData(casesTime);
                el.deathsToday = getLastDayData(deathsTime);
                el.recoveredToday = getLastDayData(recoveredTime);
              }

              el.cases = cases;
              el.deaths = deaths;
              el.recovered = recovered;

              el.casesPer100k = countPer100k(cases, pops);
              el.deathsPer100k = countPer100k(deaths, pops);
              el.recoveredPer100k = countPer100k(recovered, pops);

              el.casesTodayPer100k = countPer100k(el.casesToday, pops);
              el.deathsTodayPer100k = countPer100k(el.deathsToday, pops);
              el.recoveredTodayPer100k = countPer100k(el.recoveredToday, pops);
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
        .then(fullArrayCountries => {
          localStorageCountryList(fullArrayCountries, 'save');
          return fullArrayCountries;
        })
        .then(fullArrayCountries => {
          const configForMap = processingDataForMap(fullArrayCountries);
          setMarksToMap(configForMap);

          const dataForTable = processingDataForTable(fullArrayCountries);
          renderTable(dataForTable);

          const dataForCountries = processingDataForCountries(fullArrayCountries);
          renderCountries(dataForCountries);

          const { resultArr, locCountry } = processingDataForChart(fullArrayCountries);
          changeChartData(resultArr, locCountry);

          loaderOn(false);

        })
        .catch((err) => {
          console.log("I can't convert country data", err);
        });
    })
    .catch((err) => {
      console.log("Can't get general data about countries!", err);
    });
};
