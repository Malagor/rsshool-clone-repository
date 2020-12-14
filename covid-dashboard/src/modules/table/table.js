import { createTableHTML, createTableDOMEelements } from './tableHTML';
// import { properties } from '../Properties/Properties';


export default function Table(el) {
  createTableHTML(el);
  const table = createTableDOMEelements(el);
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

  function renderTable(country, cases, recovered, deaths) {
    table.country.innerText = country;
    table.numbOfCases.innerText = cases;
    table.numbOfRecovered.innerText = recovered;
    table.numbOfDeaths.innerText = deaths;
  }

  function getTestData() {
    const url = 'https://disease.sh/v3/covid-19/countries/Belarus';
    // const url = 'https://disease.sh/v3/covid-19/all';
    fetch(url)
      .then((response) => {
        return response.json();
      })   
      .then((data) => {
        const {country, cases, recovered, deaths} = data;
        renderTable(country, cases, recovered, deaths);
      });
  }

  getTestData();

  return  {
    setHandler: {
      setChangeView,
    },
    renderTable
  }
}
