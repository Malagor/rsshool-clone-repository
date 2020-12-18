const createDataforPeriod = (countryName, arrCases, arrRecovered, arrDeaths, currPopulation, period, population) => {
  const obj = {};
  if (period === false) {
    obj.country = countryName;
    obj.cases = arrCases[arrCases.length - 1];
    obj.recovered = arrRecovered[arrRecovered.length - 1];
    obj.deaths = arrDeaths[arrDeaths.length - 1];
  } else if (period === 2) {
    obj.country = countryName;
    obj.cases = arrCases[1] - arrCases[0];
    obj.recovered = arrRecovered[1] - arrRecovered[0];
    obj.deaths = arrDeaths[1] - arrDeaths[0];
  }
  if (population) {
    obj.cases = obj.cases * 100000 / currPopulation;
    obj.recovered = obj.cases * 100000 / currPopulation;
    obj.deaths = obj.cases * 100000 / currPopulation;
  }
  return obj;
}


export const processingDataForTable = (data, country, period, population) => {
let objOfCountry = {};
let currentPopulation;
  if (country) { 
    const countryWithFlagAndPop = data.flagAndPop.find((elem) => elem.country === country);
    const countryWithCases = data.allCountriesInfo.find((elem) => elem.country === country);
    const arrCases = Object.values(countryWithCases .timeline.cases);
    const arrRecovered = Object.values(countryWithCases .timeline.recovered);
    const arrDeaths = Object.values(countryWithCases .timeline.deaths);
    currentPopulation = countryWithFlagAndPop.population;
    objOfCountry = createDataforPeriod(country, arrCases, arrRecovered, arrDeaths, currentPopulation, period, population);
    
  } else {
    const arrCases  = Object.values(data.covidData.cases);
    const arrRecovered  = Object.values(data.covidData.recovered);
    const arrDeaths  = Object.values(data.covidData.deaths);
    const arrayOfPopulations =  data.flagAndPop.map((elem) => elem.population);
    currentPopulation = arrayOfPopulations.reduce((s, pop) => s + pop, 0);
    objOfCountry = createDataforPeriod("All World", arrCases, arrRecovered, arrDeaths, currentPopulation, period, population);
  }

  return objOfCountry;
};