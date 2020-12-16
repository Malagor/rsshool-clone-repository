import { createTableHTML, getTableDOMEelements } from './tableHTML';

const createTable = (el) => {
  createTableHTML(el);
  const table = getTableDOMEelements(el);
  let changeView = null;

  el.addEventListener('click', (event) => {
    const { target } = event;
    if (target === el) return;
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

  return  {
    setHandler: {
      setChangeView,
    },
    renderTable
  }
}

export {createTable};
