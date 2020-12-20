export const processingDataForMap = (arr) => {

  return arr.map(obj => {
    const { countryInfo, country, cases, deaths, recovered } = obj;
    const { flag, lat, long } = countryInfo;
    return {
      country,
      flag,
      cases,
      deaths,
      recovered,
      lat,
      long
    }
  });
};
