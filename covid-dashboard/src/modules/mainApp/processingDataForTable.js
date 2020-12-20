const getDataforAllWorld = (data, currCases, currRecovered, currDeaths) => {
  const dataForAllWorld = {
    country: 'All World',
    cases: data.map((elem) => elem[currCases]).reduce((s,elem) => s + elem, 0),
    recovered: data.map((elem) => elem[currRecovered]).reduce((s,elem) => s + elem, 0),
    deaths: data.map((elem) => elem[currDeaths]).reduce((s,elem) => s + elem, 0),
  } 
  return dataForAllWorld;
}

export const processingDataForTable = (data, country, period, population) => {
  let dataForTable = {};
  if (!country) {  
    if (period === false) {
      if (population === false) { 
        dataForTable = getDataforAllWorld(data, 'cases', 'recovered', 'deaths');
      } else if (population === true) {
        dataForTable = getDataforAllWorld(data, 'casesPer100k', 'recoveredPer100k', 'deathsPer100k');        
      }
    } else if (period === 2) {
      if (population === false) { 
        dataForTable = getDataforAllWorld(data, 'todayCases', 'todayRecovered', 'todayDeaths');        
      } else if (population === true) {
        dataForTable = getDataforAllWorld(data, 'todayCasesPer100k', 'todayRecoveredPer100k', 'todayDeathsPer100k');
      } 
    }   
  } else if (country) {
    dataForTable.country = country;
    const countryObj = data.filter((elem) => elem.country === country);
    if (period === false) {
      if (population === false) { 
        dataForTable.cases = countryObj.cases;
        dataForTable.recovered = countryObj.recovered;
        dataForTable.deaths = countryObj.deaths;
      } else if (population === true) {
        dataForTable.cases = countryObj.casesPer100k;
        dataForTable.recovered = countryObj.recoveredPer100k;
        dataForTable.deaths = countryObj.deathsPer100k;
      }
    } else if (period === 2) {
      if (population === false) { 
        dataForTable.cases = countryObj.todayCases;
        dataForTable.recovered = countryObj.todayRecovered;
        dataForTable.deaths = countryObj.todayDeaths;
      } else if (population === true) {
        dataForTable.cases = countryObj.todayCasesPer100k;
        dataForTable.recovered = countryObj.todayRecoveredPer100k;
        dataForTable.deaths = countryObj.todayDeathsPer100k;
      }
    }   
  } 
  return dataForTable;
}  

  