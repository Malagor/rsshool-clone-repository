export const changeStylesOfCountries = (countriesElements, type) => {
  const btns = document.querySelectorAll('.btn-cases');
  const numbers = document.querySelectorAll('.country-number');
  if (type === 'cases') {
    btns.forEach((item) => item.classList.remove('btn-enabled'));
    countriesElements.btnAll.classList.add('btn-enabled');
    numbers.forEach((numb) => {
      numb.className = 'country-number number-cases';
    });   
  } else if (type === 'deaths') { 
    btns.forEach((item) => item.classList.remove('btn-enabled'));
    countriesElements.btnDeaths.classList.add('btn-enabled');
    numbers.forEach((numb) => {
      numb.className = 'country-number number-deaths';
    });   
  } else if (type === 'recovered') {
    btns.forEach((item) => item.classList.remove('btn-enabled'));
    countriesElements.btnRecovered.classList.add('btn-enabled');
    numbers.forEach((numb) => {
      numb.className = 'country-number number-recovered';
    });
  }
} 