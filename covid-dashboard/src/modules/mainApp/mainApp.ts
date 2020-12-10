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
import Status from '../status/Status';

const elementsDOM = initLayout();

const map = Map(elementsDOM['map']);
const chart = MyChar(elementsDOM['chart']);
const countryComponent = Countries(elementsDOM['countries']);
const defBlock = DefaultTemplate(elementsDOM['table']);
const status = Status(elementsDOM.status);


function clickTitle(): void {
  console.log('click title Default Block');
}

function clickImg(): void {
  console.log('click img Default Block');
}

function renderChart(country: string = 'All World') {
  let urlHistorical: string;
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
      let recovered: object = null;
      if (country && country === 'All World') {
        recovered = data.recovered;
      } else {
        recovered = data.timeline.recovered;
      }

      const label: string[] = Object.keys(recovered);
      const arrData: number[] = [];

      label.forEach(key => {
        arrData.push(recovered[key]);
      });
      chart.showRecovered(label, arrData, country || 'All World');
    });
}

function changeCountry(country): void {
  if (!country) return;

  status.setCountry(country);

  renderChart(country);
}

function renderMap() {
  const url: string = 'https://corona.lmao.ninja/v2/countries';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const infoForMap: object[] = [];

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
