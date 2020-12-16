export const allWorldPerPeriod = (day = 'all') => {
  return `https://disease.sh/v3/covid-19/historical/all?lastdays=${day}`;
};

export const allWorldDisease = () => {
  return 'https://disease.sh/v3/covid-19/all';
};

export const countryDataPerPeriod = (country, day = 'all') => {
  if (country) {
    return `https://disease.sh/v3/covid-19/historical/${country}?lastdays=${day}`;
  }

  return null;
};

export const getPopulation = () => {
  return 'https://restcountries.eu/rest/v2/all?fields=name;population;flag';
};
