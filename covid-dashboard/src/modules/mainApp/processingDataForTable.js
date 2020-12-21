import { properties } from '../Properties/Properties';

const getDataforAllWorld = (data, currCases, currRecovered, currDeaths) => {
  const dataForAllWorld = {
    country: 'All World',
    cases: (data.map((elem) => elem[currCases]).reduce((s,elem) => s + elem, 0)).toFixed(1),
    recovered: (data.map((elem) => elem[currRecovered]).reduce((s,elem) => s + elem, 0)).toFixed(1),
    deaths: (data.map((elem) => elem[currDeaths]).reduce((s,elem) => s + elem, 0)).toFixed(1),
  } 
  return dataForAllWorld;
}

export const processingDataForTable = (data) => {
  const { country, population, period } = properties;
  let dataForTable = {};
  dataForTable.country = country;
  const countryObj = data.find((elem) => elem.country === country);
  
  if (country) {
    if (period) {
      if (population) {
        dataForTable.cases = countryObj.casesTodayPer100k;
        dataForTable.recovered = countryObj.recoveredTodayPer100k;
        dataForTable.deaths = countryObj.deathsTodayPer100k;
      } else {
        dataForTable.cases = countryObj.casesToday;
        dataForTable.recovered = countryObj.recoveredToday;
        dataForTable.deaths = countryObj.deathsToday;
      }
    } else if (population) {
        dataForTable.cases = countryObj.casesPer100k;
        dataForTable.recovered = countryObj.recoveredPer100k;
        dataForTable.deaths = countryObj.deathsPer100k;
      } else {
        dataForTable.cases = countryObj.cases;
        dataForTable.recovered = countryObj.recovered;
        dataForTable.deaths = countryObj.deaths;
      }
  } else if (period) {
    if (population) {
      dataForTable = getDataforAllWorld(data, 'casesTodayPer100k', 'recoveredTodayPer100k', 
      'deathsTodayPer100k');
    } else {
      dataForTable = getDataforAllWorld(data, 'casesToday', 'recoveredToday', 'deathsToday'); 
    }
  } else if (population) {
    dataForTable = getDataforAllWorld(data, 'casesPer100k', 'recoveredPer100k', 'deathsPer100k');
  } else {
    dataForTable = getDataforAllWorld(data, 'cases', 'recovered', 'deaths');
  }
  
  return dataForTable;
}  
