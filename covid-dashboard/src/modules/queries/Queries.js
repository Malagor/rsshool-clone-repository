/*
answer
[
{
  "country": "string",
  "county": "string",
  "updatedAt": "string",
  "stats": {
    "confirmed": 0,
    "deaths": 0,
    "recovered": 0
  },
  "coordinates": {
    "latitude": "string",
    "longitude": "string"
  },
  "province": "string"
}
]
 */
export const urlAllTimeByCountries = () => {
  return 'https://disease.sh/v3/covid-19/jhucsse'
};

/*
 answer
{
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
 */
export const urlAllWorldPerPeriod = (day = 'all') => {
  return `https://disease.sh/v3/covid-19/historical/all?lastdays=${day}`;
};

/*
 answer
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
export const urlCountryDataPerPeriod = (country, day = 'all') => {
  if (country) {
    return `https://disease.sh/v3/covid-19/historical/${country}?lastdays=${day}`;
  }

  throw new Error('Not received the name of the country');
};

/*
 answer
[
{
"flag": string,
"name":string,
"population":number
}
]
 */
export const urlFlagAndPopulation = () => {
  return 'https://restcountries.eu/rest/v2/all?fields=name;population;flag'
};
