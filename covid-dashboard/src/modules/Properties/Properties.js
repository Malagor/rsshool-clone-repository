// eslint-disable-next-line import/prefer-default-export
export const properties = {
  country: false,
  period: 'all',
  count: 'all',
  type: 'cases'
};

export function setPropertis(obj) {
  properties.country = obj.country;
  properties.period = obj.period;
  properties.count = obj.count;
  properties.type = obj.type;
}
