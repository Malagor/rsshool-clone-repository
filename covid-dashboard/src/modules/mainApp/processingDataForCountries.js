export const processingDataForCountries = (data, period, population, type) => {
  const countries = [];
  const arrDataOfCountries = data.allCountriesInfo;
  const arrDataWithFlags = data.flagAndPop;
  for (let i = 0; i < arrDataWithFlags.length; i += 1) {
     const objOfCountry = {};
     objOfCountry.country = arrDataWithFlags[i].name;   
     objOfCountry.flag = arrDataWithFlags[i].flag;
     const additionObj = arrDataOfCountries.find((elem) => elem.country === objOfCountry.country);
     if (additionObj === undefined) {
       objOfCountry.arrData = 0;
     } else {
      const arrOfCases = Object.values(additionObj.timeline[type]);
      if (period === false) {
       objOfCountry.arrData = arrOfCases[arrOfCases.length - 1];
      } else {
       objOfCountry.arrData = arrOfCases[1] - arrOfCases[0];
      }
      if (population) {
       objOfCountry.arrData = objOfCountry.arrData * 1000000 / arrDataWithFlags[i].population;
      }
    }
    countries.push(objOfCountry);
  }  
  return countries;
}