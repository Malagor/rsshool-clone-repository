import { createTableHTML, getTableDOMEelements } from './tableHTML';

let tableElements = null;
let changeView = null;

const createTable = (el) => {

  createTableHTML(el);
  tableElements = getTableDOMEelements(el);

  
  el.addEventListener('click', (event) => {
    const { target } = event;
    if (target === el) return;
    changeView();
  });
}
 
const renderTable = (currentCountry)=> {
  tableElements.country.innerText = currentCountry.country;
  tableElements.numbOfCases.innerText = currentCountry.cases;
  tableElements.numbOfRecovered.innerText = currentCountry.recovered;
  tableElements.numbOfDeaths.innerText = currentCountry.deaths;
}

const setChangeViewTable = (fn) => {
  changeView = fn;
}  

export {
  createTable,
  renderTable,
  setChangeViewTable
}
