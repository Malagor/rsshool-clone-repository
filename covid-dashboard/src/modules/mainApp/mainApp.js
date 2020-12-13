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
import { properties, setPropertis } from '../Properties/Properties';

const elementsDOM = initLayout();

const map = Map(elementsDOM.map);
const chart = MyChar(elementsDOM.chart);
const countryComponent = Countries(elementsDOM.countries);
const status = Status(elementsDOM.status);
const settings = Settings();
const header = Header(elementsDOM.header);
const query = Queries();


// function updateApp(properties) {
//   const { country, period, count, type } = properties;
// }

function renderChart(country = false, day = 'all', type = 'cases') {
  let url;
  console.log('country - begin', country);

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
      console.log('country - in fetch', country);
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

function changeCountry() {
  // if (!country) return;

  const { country, days, type } = properties;

  status.setCountry(country);

  renderChart(country, days, type);
}

function renderMap() {
  const url = 'https://corona.lmao.ninja/v2/countries';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const infoForMap = [];

      data.forEach(el => {

        const { active, country, population } = el;
        const { lat, long, flag } = el.countryInfo;

        infoForMap.push({
          active,
          country,
          population,
          lat,
          long,
          flag,
        });
      });

      map.setMarks(infoForMap);
    });
}

function showSettings(top, left) {
  settings.showPopup(top, left);
}

function sendFormSettings(data) {
  let { period /* population */ } = data;
  const { country, type } = data;
  // country = country;
  period = period ? 'all' : 30;

  status.setCountry(country);
  status.setPeriod(period);
  status.setType(type);

  const prop = {
    country,
    period,
    type,
    count: 'all',
  };
  setPropertis(prop);

  changeCountry();
}

countryComponent.hendlers.setClick(changeCountry);
header.setHandler.setShowSettings(showSettings);
settings.setHandler.setSendForm(sendFormSettings);

renderMap();
renderChart();
