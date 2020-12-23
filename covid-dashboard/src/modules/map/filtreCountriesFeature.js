import { localStorageCountryList } from '../mainApp/localStorageCountryList';

export const filtreCountriesFeature = (geodata) => {
  const countryList = localStorageCountryList(null, 'load');
  if (countryList) {
    geodata.features = geodata.features.map(item => {
      const hasCode = countryList.filter(code => {
        return code.iso3 === item.properties.ISO_A3;
      });

      if (hasCode.length) {
        item.properties.ADMIN = hasCode[0].country;
        return item;
      }

      return null;
    });

    geodata.features = geodata.features.filter(item => {
      return item !== null;
    });
  }

  return geodata;
};
