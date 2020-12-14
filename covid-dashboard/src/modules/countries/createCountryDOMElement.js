export default function createCountryDOMElement(data) {
  const {arrData, country, flag} = data;
  const countryDOMelem = document.createElement('div');
  countryDOMelem.classList.add('country-item');
  countryDOMelem.innerHTML = `
    <div class="country-text">
      <div class="country-cases">${arrData}</div>
      <div class="country-name">${country}</div>
    </div>
    <img src=${flag} alt="flag" class="country-flag" width="30px" height="20px">
  `; 
  return countryDOMelem;
}
