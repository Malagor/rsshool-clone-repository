export const processingDataForChart = (data, country) => {
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

  return { arrData, locCountry };
};
