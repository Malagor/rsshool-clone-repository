/*
*
* Author: Alex Malagor
*
* */

import initLayout from './mainHTML';
import Map from '../map/map';
import MyChar from '../chart/chart';
import Countries from '../countries/countries';
import DefaultTemplate from '../default-template/default';
import Status from '../status/Status';
import Settings from '../settings/Settings';
import Header from '../header/Header';
import Queries from '../queries/Queries';
import { setPropertis } from '../Properties/Properties';

const elementsDOM = initLayout();

const map = Map(elementsDOM.map);
const chart = MyChar(elementsDOM.chart);
const countryComponent = Countries(elementsDOM.countries);
const defBlock = DefaultTemplate(elementsDOM.table);
const status = Status(elementsDOM.status);
const settings = Settings();
const header = Header(elementsDOM.header);
const query = Queries();

function clickTitle() {
  console.log('click title Default Block');
}

function clickImg() {
  console.log('click img Default Block');
}

function renderChart(country = 'All World', day = 'all', type = 'cases') {
  // console.log(country);
  let url;
  if (country === 'All World') {
    url = query.allWorldPerPeriod(day);
  } else if (country) {
    url = query.countryDataPerPeriod(country, day);
  }

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('data', data);
      console.log('type', type);

      let typeData = null;
      if (country && country === 'All World') {
        typeData = data[type];
      } else {
        typeData = data.timeline[type];
      }
      console.log('typeData', typeData);
      const label = Object.keys(typeData);
      const arrData = [];

      label.forEach(key => {
        arrData.push(typeData[key]);
      });
      chart.showRecovered(label, arrData, `${(country || 'All World')} - ${type}`);
    });
}

function changeCountry(country, days, type) {
  if (!country) return;

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
  let { country, period /* population */ } = data;
  const { type } = data;
  country = country || 'All World';
  period = period ? 'all' : 30;

  status.setCountry(country);
  status.setPeriod(period);
  status.setType(type);

  const prop = {
    country,
    period,
    type,
    count: 'all'
  };
  setPropertis(prop);

  changeCountry(country, period, type);
}


countryComponent.hendlers.setClick(changeCountry);
header.setHandler.setShowSettings(showSettings);
settings.setHandler.setSendForm(sendFormSettings);

defBlock.setHandler.setClickTitle(clickTitle);
defBlock.setHandler.setClickImg(clickImg);


renderMap();
renderChart();
