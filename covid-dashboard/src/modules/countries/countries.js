// import Queries from '../queries/Queries';
import { createCountriesHTML, getCountriesDomElement } from './countriesHTML';
import createCountryDOMElement from './createCountryDOMElement';
// import { properties } from '../Properties/Properties';


export default function Countries(el) {
  createCountriesHTML(el);
  const countriesElements = getCountriesDomElement(el);
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

  function renderCountries(countries) {
    countries.sort((a,b) => b.arrData - a.arrData);
    countriesElements.list.innerHTML = '';
    countries.forEach((country) => {
      const elem = createCountryDOMElement(country);   
      countriesElements.list.append(elem);  
    })
  }

  // function getTestData() {
  //   const url = 'https://disease.sh/v3/covid-19/countries';
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     }) 
  //     .then((data) => {
  //       return data.map((elem) => {
  //         return {
  //           country: elem.country,
  //           arrData: elem.cases,
  //           flag: elem.countryInfo.flag,
  //         };
  //       });
  //     })
  //     .then((countriesArray) => {
  //       renderCountries(countriesArray);
  //     });
  // }

  // getTestData();

  return  {
    setHandler: {
      setChangeView,
    },
    renderCountries
  }

}
