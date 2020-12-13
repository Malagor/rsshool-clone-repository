// import Queries from '../queries/Queries';
import { createCountriesHTML, createCountriesDOMEelements } from './countriesHTML';
// import { properties } from '../Properties/Properties';


export default function Countries(el) {
  createCountriesHTML(el);
  const countriesElements = createCountriesDOMEelements(el);
  // console.log('countriesElements', countriesElements);
  let changeView = null;
  // const query = Queries();
  
  el.addEventListener('click', (event) => {
    const { target } = event;
    if (target === el) return;
    // внести изменения в пропертис
    changeView();
  });

  function setChangeView(fn) {
    changeView = fn;
  }

  function createCountryDOMElement(cases, name, flag) {
    const countryDOMelem = document.createElement('div');
    countryDOMelem.classList.add('country-item');
    countryDOMelem.innerHTML = `
      <div class="country-text">
        <div class="country-cases">${cases}</div>
        <div class="country-name">${name}</div>
      </div>
      <img src=${flag} alt="flag" class="country-flag" width="30px" height="20px">
    `; 
    return countryDOMelem;
  }

  function renderCountries(countries) {
    countries.sort((a,b) => b.numbOfCases - a.numbOfCases);
    countriesElements.list.innerHTML = '';
    countries.forEach((country) => {
      const elem = createCountryDOMElement(country.numbOfCases, country.countryName, country.flag)   
      countriesElements.list.append(elem);  
    })
  }

  function getTestData() {
    const url = 'https://disease.sh/v3/covid-19/countries';
    fetch(url)
      .then((response) => {
        return response.json();
      }) 
      .then((data) => {
        return data.map((elem) => {
          const obj ={
            countryName: elem.country,
            numbOfCases: elem.cases,
            flag: elem.countryInfo.flag,
          };
          return obj;
        });
      })
      .then((countriesArray) => {
        renderCountries(countriesArray);
      });
  }

  getTestData();

  return  {
    setHandler: {
      setChangeView,
    },
    renderCountries
  }

}
