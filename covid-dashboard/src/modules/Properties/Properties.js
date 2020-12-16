const properties = {
  country: false,
  period: false,
  count: false,
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
    properties.count = loadData.count;
    properties.type = loadData.type;
  }
};

const setProperties = (obj) => {
  properties.country = obj.country;
  properties.period = obj.period;
  properties.count = obj.count;
  properties.type = obj.type;

  saveProperties();
};

export {
  properties,
  setProperties,
  saveProperties,
  loadProperties
};
