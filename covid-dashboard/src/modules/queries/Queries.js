/*
All countries population, flags, iso
[
  {
    "updated": 0,
    "country": "string",
    "countryInfo": {
      "_id": 0,
      "iso2": "string",
      "iso3": "string",
      "lat": 0,
      "long": 0,
      "flag": "string"
    },
    "cases": 0,
    "todayCases": 0,
    "deaths": 0,
    "todayDeaths": 0,
    "recovered": 0,
    "todayRecovered": 0,
    "active": 0,
    "critical": 0,
    "casesPerOneMillion": 0,
    "deathsPerOneMillion": 0,
    "tests": 0,
    "testsPerOneMillion": 0,
    "population": 0,
    "continent": 0,
    "oneCasePerPeople": 0,
    "oneDeathPerPeople": 0,
    "oneTestPerPeople": 0,
    "activePerOneMillion": 0,
    "recoveredPerOneMillion": 0,
    "criticalPerOneMillion": 0
  }
]
*/
/**
 *
 * @return {string} - url API
 *
 */
export const allCountriesGeneralData = () => {
  return 'https://disease.sh/v3/covid-19/countries';
};

/*
Time data per countries
{
  "country": "string",
  "province": [
    "string"
  ],
  "timeline": {
    "cases": {
      "date": 0
    },
    "deaths": {
      "date": 0
    },
    "recovered": {
      "date": 0
    }
  }
}
 */
/**
 *
 * @param country - name country: string or false: boolean - All world
 * @param period - days: number, false: boolean - all period or true: boolean - last 2 days
 * @return {string} - url API
 *
 */
export const countriesPerPeriod = (country, period) => {
  let locPeriod = period;

  if (typeof locPeriod === 'boolean') {
    if (locPeriod) {
      locPeriod = 2;
    } else {
      locPeriod = 'all';
    }
  }

  return `https://disease.sh/v3/covid-19/historical/${country || 'all'}?lastdays=${locPeriod}`;
};
