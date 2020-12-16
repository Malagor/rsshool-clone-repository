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
 
const renderTable = (country, cases, recovered, deaths) => {
  tableElements.country.innerText = country;
  tableElements.numbOfCases.innerText = cases;
  tableElements.numbOfRecovered.innerText = recovered;
  tableElements.numbOfDeaths.innerText = deaths;
}

const setChangeView = (fn) => {
  changeView = fn;
}  

export {
  createTable,
  renderTable,
  setChangeView
}
