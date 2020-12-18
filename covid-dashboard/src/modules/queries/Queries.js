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
// export const urlAllTimeByCountries = () => {
//   return 'https://disease.sh/v3/covid-19/jhucsse'
// };
//
// /*
//  answer
// {
//   "cases": {
//     "date": 0
//   },
//   "deaths": {
//     "date": 0
//   },
//   "recovered": {
//     "date": 0
//   }
// }
//  */
// export const urlAllWorldPerPeriod = (day) => {
//   return `https://disease.sh/v3/covid-19/historical/all?lastdays=${day || 'all'}`;
// };
//
// /*
//  answer
// {
//   "country": "string",
//   "province": [
//     "string"
//   ],
//   "timeline": {
//     "cases": {
//       "date": 0
//     },
//     "deaths": {
//       "date": 0
//     },
//     "recovered": {
//       "date": 0
//     }
//   }
// }
//  */
// export const getUrlAPICountryPerPeriod = (country, day) => {
//   if (country) {
//     return `https://disease.sh/v3/covid-19/historical/${country}?lastdays=${day || 'all'}`;
//   }
//
//   throw new Error('Not received the name of the country');
// };
//
// /*
//  answer
// [
// {
// "flag": string,
// "name":string,
// "population":number
// }
// ]
//  */
// export const getUrlAPIFlagAndPopulation = () => {
//   return 'https://restcountries.eu/rest/v2/all?fields=name;population;flag'
// };
//
// /*
//  answer
//  [
//   {
//     "country": "string",
//     "province": "string",
//     "timeline": {
//       "cases": {
//         "date": 0
//       },
//       "deaths": {
//         "date": 0
//       },
//       "recovered": {
//         "date": 0
//       }
//     }
//   }
// ]
//  */
// export const gerUrlAPIAllCountriesPerPeriod = (day) => {
//   return `https://disease.sh/v3/covid-19/historical?lastdays=${day || 'all'}`;
// };
//

/*
Данные за весь мир без разбиения на страны по датам
{
  "cases": {
    "12/16/20": 74219546,
    "12/17/20": 74952221
  },
  "deaths": {
    "12/16/20": 1648956,
    "12/17/20": 1662127
  },
  "recovered": {
    "12/16/20": 41977327,
    "12/17/20": 42349997
  }
}
 */
export const allWorldPerPeriod = (period) => {
  return `https://disease.sh/v3/covid-19/historical/all?lastdays=${period || 'all'}`;
};

/*
Данные по конкретной стране по датам
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
export const countryPerPeriod = (country, period) => {
  if (country) {
    return `https://disease.sh/v3/covid-19/historical/${country}?lastdays=${period || 'all'}`;
  }
  throw new Error('Not received the name of the country.');
};

/*
Данные по каждой стране по датам
[
  {
    "country": "string",
    "province": "string",
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
]
 */
export const allCountriesPerPeriod = (period) => {
  return `https://disease.sh/v3/covid-19/historical?lastdays=${period || 'all'}`;
};

/*
 Данные о названии страны, популяции и ссылка на флаг
[
{
"flag": string,
"name":string,
"population":number
}
]
 */
export const flagAndPopulation = () => {
  return 'https://restcountries.eu/rest/v2/all?fields=name;population;flag';
};
