import { properties } from '../Properties/Properties';

export const processingDataForCountries = (data) => {
  const { population, type, period } = properties;
  
  return data.map((item) => {
    const country = {
      country: item.country,
      flag: item.countryInfo.flag,
    };
    if (period) {
      country.arrData = population ? item[`${type}TodayPer100k`] : item[`${type}Today`];
    } else {
      country.arrData = population ? item[`${type}Per100k`] : item[type];
    }
    return country;
  });
}
