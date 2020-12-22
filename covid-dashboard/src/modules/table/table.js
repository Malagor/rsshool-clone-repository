import { createTableHTML, getTableDOMEelements } from './tableHTML';

let tableElements = null;

const createTable = (el) => {

  createTableHTML(el);
  tableElements = getTableDOMEelements(el);

};

const renderTable = (currentCountry)=> {
  tableElements.country.innerText = currentCountry.country;
  tableElements.numbOfCases.innerText = currentCountry.cases;
  tableElements.numbOfRecovered.innerText = currentCountry.recovered;
  tableElements.numbOfDeaths.innerText = currentCountry.deaths;
};

export {
  createTable,
  renderTable
}
