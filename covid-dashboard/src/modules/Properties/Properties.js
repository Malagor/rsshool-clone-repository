const properties = {
  country: false,
  iso3: null,
  period: false,
  population: false,
  type: 'cases'
};

const saveProperties = () => {
  localStorage.setItem('covid-dashboard', JSON.stringify(properties));
};

const loadProperties = () => {
  const loadData = JSON.parse(localStorage.getItem('covid-dashboard'));
  if (loadData) {
    properties.period = loadData.period;
    properties.country = loadData.country;
    properties.population = loadData.population;
    properties.type = loadData.type;
    properties.iso3 = loadData.iso3;
  }
};

const setProperties = (obj) => {
  properties.country = obj.country;
  properties.period = obj.period;
  properties.population = obj.population;
  properties.type = obj.type;
  properties.iso3 = obj.iso3;

  saveProperties();
};

export {
  properties,
  setProperties,
  saveProperties,
  loadProperties
};
