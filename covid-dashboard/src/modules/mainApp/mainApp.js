/*
*
* Author: Alex Malagor
*
* */

import initLayout from './mainHTML';
import Map from '../map/map';
import MyChar from '../chart/chart';

import Countries from '../countries/countries';
import Status from '../status/Status';
import Settings from '../settings/Settings';
import Header from '../header/Header';
import Queries from '../queries/Queries';
import { properties, loadProperties } from '../Properties/Properties';

const elementsDOM = initLayout();

loadProperties();

const map = Map(elementsDOM.map);
const chart = MyChar(elementsDOM.chart);
const countries = Countries(elementsDOM.countries);
const status = Status(elementsDOM.status);
const settings = Settings();
const header = Header(elementsDOM.header);
const query = Queries();


function renderChart(country = false, day = 'all', type = 'cases') {
  let url;

  if (country) {
    url = query.countryDataPerPeriod(country, day);
  } else {
    url = query.allWorldPerPeriod(day);
  }

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let typeData = null;
      if (country) {
        typeData = data.timeline[type];
      } else {
        typeData = data[type];
      }
      const label = Object.keys(typeData);
      const arrData = [];

      label.forEach(key => {
        arrData.push(typeData[key]);
      });
      chart.showRecovered(label, arrData, `${(country || 'All World')} - ${type}`);
    });
}

function renderMap() {
  const url = 'https://corona.lmao.ninja/v2/countries';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const dataForMap = [];
      const dataForCountriesTable = [];

      data.forEach(el => {
        console.log(el);

        const { active, country, population, cases } = el;
        const { lat, long, flag } = el.countryInfo;

        dataForMap.push({
          active,
          country,
          population,
          lat,
          long,
          flag,
        });

        dataForCountriesTable.push({
          flag,
          country,
          arrData: cases
        })
      });

      map.setMarks(dataForMap);
      countries.renderCountries(dataForCountriesTable);
    });
}

function showSettings(top, left) {
  settings.showPopup(top, left);
}

function updateApp() {
  status.updateStatusBar();

  const { country, type, period } = properties;

  renderChart(country, period, type);
  renderMap();
}

header.setHandler.setShowSettings(showSettings);
settings.setHandler.setSendForm(updateApp);

updateApp();
