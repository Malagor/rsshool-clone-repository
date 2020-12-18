export const processingDataForChart = (data, country, population) => {
  let arrData;
  let locCountry;

  if (country) {
    const additionalArr = Object.entries(data.covidData);
    arrData = Object.entries(additionalArr[2][1]);
    locCountry = country;
  } else {
    locCountry = 'All World';
    arrData = Object.entries(data.covidData);
  }

  if (population) {
    const oneHundredThousand = 100000;
    const worldPopulation = data.flagAndPop.reduce(
      (a, b) => a + b.population,
      0,
    );
    let arr = arrData.map((it) => [it[0], Object.entries(it[1])]);
    if (locCountry === 'All World') {
      arr = arr.map((it) => [
        it[0],
        it[1].map((item) => [
          item[0],
          Math.trunc((item[1] * oneHundredThousand) / worldPopulation),
        ]),
      ]);
    } else {
      const countryPopulation = data.flagAndPop.find(
        (el) => el.name === country,
      ).population;
      arr = arr.map((it) => [
        it[0],
        it[1].map((item) => [
          item[0],
          Math.trunc((item[1] * oneHundredThousand) / countryPopulation),
        ]),
      ]);
    }
    arrData = arr.map((it) => [it[0], Object.fromEntries(it[1])]);
  }

  return { arrData, locCountry };
};
