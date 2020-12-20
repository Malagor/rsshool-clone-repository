import { properties } from '../Properties/Properties';

const getDataforAllWorld = (data, currCases, currRecovered, currDeaths) => {
  const dataForAllWorld = {
    country: 'All World',
    cases: data.map((elem) => elem[currCases]).reduce((s,elem) => s + elem, 0),
    recovered: data.map((elem) => elem[currRecovered]).reduce((s,elem) => s + elem, 0),
    deaths: data.map((elem) => elem[currDeaths]).reduce((s,elem) => s + elem, 0),
  } 
  return dataForAllWorld;
}

export const processingDataForTable = (data) => {
  const { country, population, period } = properties;
  let dataForTable = {};
  if (!country) {  
    if (!period) {
      if (population === false) { 
        dataForTable = getDataforAllWorld(data, 'cases', 'recovered', 'deaths');
      } else if (population === true) {
        dataForTable = getDataforAllWorld(data, 'casesPer100k', 'recoveredPer100k', 'deathsPer100k');        
      }
    } else if (period) {
      if (population === false) { 
        dataForTable = getDataforAllWorld(data, 'casesToday', 'recoveredToday', 'deathsToday');        
      } else if (population === true) {
        dataForTable = getDataforAllWorld(data, 'casesTodayPer100k', 'recoveredTodayPer100k', 
        'deathsTodayPer100k');
      } 
    }   
  } else if (country) {
    dataForTable.country = country;
    const countryObj = data.filter((elem) => elem.country === country);
    if (!period) {
      if (population === false) { 
        dataForTable.cases = countryObj.cases;
        dataForTable.recovered = countryObj.recovered;
        dataForTable.deaths = countryObj.deaths;
      } else if (population === true) {
        dataForTable.cases = countryObj.casesPer100k;
        dataForTable.recovered = countryObj.recoveredPer100k;
        dataForTable.deaths = countryObj.deathsPer100k;
      }
    } else if (period) {
      if (population === false) { 
        dataForTable.cases = countryObj.casesToday;
        dataForTable.recovered = countryObj.recoveredToday;
        dataForTable.deaths = countryObj.deathsToday;
      } else if (population === true) {
        dataForTable.cases = countryObj.casesTodayPer100k;
        dataForTable.recovered = countryObj.recoveredTodayPer100k;
        dataForTable.deaths = countryObj.deathsTodayPer100k;
      }
    }   
  } 
  return dataForTable;
}  
