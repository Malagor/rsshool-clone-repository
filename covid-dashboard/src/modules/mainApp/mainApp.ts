/*
*
* Author: Alex Malagor
*
* */

import initLayout from '../../js/initLayout';
import Map from '../map/map';
import MyChar from '../chart/chart';
import Countries from '../countries/countries';
import DefaultTemplate from '../default-template/default';

const elementsDOM = initLayout();

const map = Map(elementsDOM.map);
const chart = MyChar(elementsDOM.chart);
const countryComponent = Countries(elementsDOM.countries);
const defBlock = DefaultTemplate(elementsDOM.table);

function clickTitle() {
  console.log('click title Default Block');
}

function clickImg() {
  console.log('click img Default Block');
}

function renderChart(country = 'All World') {
  let urlHistorical;
  if (country === 'All World') {
    urlHistorical = 'https://disease.sh/v3/covid-19/historical/all?lastdays=30';
  } else if (country) {
    urlHistorical = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`;
  }
  fetch(urlHistorical)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let recovered = null;
      if (country && country === 'All World') {
        recovered = data.recovered;
      } else {
        recovered = data.timeline.recovered;
      }

      const label = Object.keys(recovered);
      const arrData = [];

      label.forEach(key => {
        arrData.push(recovered[key]);
      });
      chart.showRecovered(label, arrData, country || 'All World');
    });
}

function changeCountry(country) {
  if (!country) return;

  renderChart(country);
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

countryComponent.hendlers.setClick(changeCountry);
defBlock.setHandler.setClickTitle(clickTitle);
defBlock.setHandler.setClickImg(clickImg);

renderMap();
renderChart();
