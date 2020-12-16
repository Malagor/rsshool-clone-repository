const allWorldPerPeriod = (day = 'all') => {
  return `https://disease.sh/v3/covid-19/historical/all?lastdays=${day}`;
};

const allWorldDisease = () =>{
  return 'https://disease.sh/v3/covid-19/all';
};

const countryDataPerPeriod = (country, day = 'all') => {
  if (country) {
    return `https://disease.sh/v3/covid-19/historical/${country}?lastdays=${day}`;
  }
  return new Error('Сountry name not passed');
};

export {
  countryDataPerPeriod,
  allWorldPerPeriod,
  allWorldDisease,
}

