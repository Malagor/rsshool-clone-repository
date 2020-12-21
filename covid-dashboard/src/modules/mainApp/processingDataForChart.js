import { properties } from '../Properties/Properties';

export const processingDataForChart = (data) => {
  const { country, population } = properties;
  let arrData;
  let locCountry;

  if (country) {
    arrData = data.find((it) => it.country === country).timeData;
    locCountry = country;
  }
  if (!country) {
    locCountry = 'All World';
    arrData = {
      cases: data[0].timeData.cases.map((it, ind) => [
        it[0],
        data.reduce((a, b) => a + b.timeData.cases[ind][1], 0),
      ]),
      deaths: data[0].timeData.deaths.map((it, ind) => [
        it[0],
        data.reduce((a, b) => a + b.timeData.deaths[ind][1], 0),
      ]),
      recovered: data[0].timeData.recovered.map((it, ind) => [
        it[0],
        data.reduce((a, b) => a + b.timeData.recovered[ind][1], 0),
      ]),
    };
  }

  if (population) {
    const ONE_HUNDRED_THOUSAND = 100000;
    const WORLD_POPULATION = data.reduce((a, b) => a + b.population, 0);
    let addArr = Object.entries(arrData);
    if (locCountry === 'All World') {
      addArr = addArr.map((item) => [
        item[0],
        item[1].map((it) => [
          it[0],
          Math.trunc((it[1] * ONE_HUNDRED_THOUSAND) / WORLD_POPULATION),
        ]),
      ]);
    } else {
      const countryPopulation = data.find((el) => el.country === country)
        .population;
      addArr = addArr.map((item) => [
        item[0],
        item[1].map((it) => [
          it[0],
          Math.trunc((it[1] * ONE_HUNDRED_THOUSAND) / countryPopulation),
        ]),
      ]);
    }
    arrData = Object.fromEntries(addArr);
  }
  const resultArr = Object.entries(arrData).map((elem) => [
    elem[0],
    Object.fromEntries(elem[1]),
  ]);
  return { resultArr, locCountry };
};
