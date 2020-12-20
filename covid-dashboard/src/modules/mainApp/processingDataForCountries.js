import { properties } from '../Properties/Properties';

export const processingDataForCountries = (data) => {
  const { population, type, period } = properties;
  const countries = [];
  for (let i = 0; i < data.length; i += 1) {
    const country = {
      country: data[i].country,
      flag: data[i].countryInfo.flag,
    };
    if (type === 'cases') {
      if (period === false) {
        if (population === false) {
          country.arrData = data[i].cases;
        } else if (population === true) {
          country.arrData = data[i].casesPer100k;
        }
      } else if (period === 2) {
        if (population === false) {
          country.arrData = data[i].todayCases;
        } else if (population === true) {
          country.arrData = data[i].todayCasesPer100k;
        }
      }
    } else if (type === 'recovered') {
      if (period === false) {
        if (population === false) {
          country.arrData = data[i].recovered;
        } else if (population === true) {
          country.arrData = data[i].recoveredPer100k;
        }
      } else if (period === 2) {
        if (population === false) {
          country.arrData = data[i].todayRecovered;
        } else if (population === true) {
          country.arrData = data[i].todayRecoveredPer100k;
        }
      }
    } else if (type === 'deaths') {
      if (period === false) {
        if (population === false) {
          country.arrData = data[i].deaths;
        } else if (population === true) {
          country.arrData = data[i].deathsPer100k;
        }
      } else if (period === 2) {
        if (population === false) {
          country.arrData = data[i].todayDeaths;
        } else if (population === true) {
          country.arrData = data[i].todayDeathsPer100k;
        }
      }
    } 
    countries.push(country);
  }
  return countries;
}
