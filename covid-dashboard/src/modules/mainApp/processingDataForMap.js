import { properties } from '../Properties/Properties';


export const processingDataForMap = (arr) => {
  const { population, period } = properties;

  function getTypeData(obj, typeStr) {
    if (period) {
      return population ? obj[`${typeStr}TodayPer100k`] : obj[`${typeStr}Today`];
    }
    return population ? obj[`${typeStr}Per100k`] : obj[typeStr];
  }

  return arr.map(obj => {
    const { countryInfo, country } = obj;
    const { flag, lat, long, iso3 } = countryInfo;

    const cases = getTypeData(obj, 'cases');
    const deaths = getTypeData(obj, 'deaths');
    const recovered = getTypeData(obj, 'recovered');

    return {
      country,
      flag,
      cases,
      deaths,
      recovered,
      lat,
      long,
      iso3,
    };
  });
};
