const properties = {
  country: false,
  period: 'all',
  count: 'all',
  type: 'cases'
};

function saveProperties() {
  localStorage.setItem('covid-dashboard', JSON.stringify(properties));
}
function loadProperties() {
  const loadData = JSON.parse(localStorage.getItem('covid-dashboard'));
  if (loadData) {
    properties.period = loadData.period;
    properties.country = loadData.country;
    properties.count = loadData.count;
    properties.type = loadData.type;
  }
}

function setPropertis(obj) {
  properties.country = obj.country;
  properties.period = obj.period;
  properties.count = obj.count;
  properties.type = obj.type;

  saveProperties();
}

export {
  properties,
  setPropertis,
  saveProperties,
  loadProperties
};
