export const createCountryDOMElement = (data) => {
  const {arrData, country, flag} = data;
  const countryDOMelem = document.createElement('div');
  countryDOMelem.classList.add('country-item');
  countryDOMelem.innerHTML = `
    <div class="country-flag"><img src=${flag} alt="flag"></div>
    <div class="country-name">${country}</div>  
    <div class="country-number number-cases">${arrData}</div> 
  `; 
  return countryDOMelem;
}
