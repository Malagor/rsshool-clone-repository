export const localStorageCountryList = (data, command = 'save') => {
  if (command === 'save') {
    if (!data) {
      throw new Error('Not transmitted or invalid data for saving.');
    }
    const countryList = data.map(item => {
      const { countryInfo, country } = item;
      const { iso3 } = countryInfo;
      return {
        country,
        iso3,
      };
    });
    localStorage.setItem('countryList', JSON.stringify(countryList));

    return countryList;
  }
  if (command === 'load') {
    try {
      return JSON.parse(localStorage.getItem('countryList'));
    } catch (e) {
      console.log('Can not load countryList from localStorage', e);
      return null;
    }
  }
  return null;
};
