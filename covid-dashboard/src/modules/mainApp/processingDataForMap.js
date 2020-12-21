export const processingDataForMap = (arr) => {
  return arr.map(obj => {
    const { countryInfo, country, cases, deaths, recovered } = obj;
    const { flag, lat, long, iso3 } = countryInfo;
    return {
      country,
      flag,
      cases,
      deaths,
      recovered,
      lat,
      long,
      iso3
    }
  });
};
