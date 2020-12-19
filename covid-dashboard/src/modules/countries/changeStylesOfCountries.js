export const changeStylesOfCountries = (countriesElements, type) => {
  const btns = document.querySelectorAll('.btn-cases');
  const numbers = document.querySelectorAll('.country-number');
  if (type === 'cases') {
    btns.forEach((item) => item.classList.remove('btn-enabled'));
    countriesElements.btnAll.classList.add('btn-enabled');
    numbers.forEach((numb) => {
      numb.classList.add('number-cases');
      numb.classList.remove('number-deaths', 'number-recovered');
    });   
  } else if (type === 'deaths') { 
    btns.forEach((item) => item.classList.remove('btn-enabled'));
    countriesElements.btnDeaths.classList.add('btn-enabled');
    numbers.forEach((numb) => {
      numb.classList.add('number-deaths');
      numb.classList.remove('number-cases', 'number-recovered');
    });   
  } else if (type === 'recovered') {
    btns.forEach((item) => item.classList.remove('btn-enabled'));
    countriesElements.btnRecovered.classList.add('btn-enabled');
    numbers.forEach((numb) => {
      numb.classList.add('number-recovered');
      numb.classList.remove('number-cases', 'number-deaths');
    });
  }
} 