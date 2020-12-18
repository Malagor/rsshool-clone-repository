import 'leaflet/dist/leaflet.css';
import L from 'leaflet/dist/leaflet';
// import { onClickMap } from '../onEvents/onEvents';

let map = null;
let clickMap = null;

const setClickMapHandler = (fn) => {
  clickMap = fn;
};

const renderMap = (coordCenter, zoomRate) => {
  map.setView(coordCenter, zoomRate);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    minZoom: 2,
    id: 'mapbox/dark-v10',
    center: coordCenter,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFsYWdvciIsImEiOiJja2loZnUwdDgwNmpyMnNwYnNwaDBnNjlmIn0.syPwz4D9ZNf8AIJ71a0aUQ',
  }).addTo(map);
};

const setMarksToMap = (arr) => {
  console.log('Data to map', arr);
  arr.forEach(data => {
    const {name: country, population: count, flag } = data;
    const [lat, long] = data.latlng;
    console.log(lat, long);

    const circle = L.circle([lat, long], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: count / 1000,
      weight: 1,
      opacity: 1,
    }).addTo(map);

    circle.bindPopup(`<img class="flag" src="${flag}" alt="${country}-flag"><div><b>${country}</b></div><div>${count}`);
  });
};

const events = () => {
  map.addEventListener('click', (ev) => {
    console.log(ev);
    clickMap();
  });
};

const createMap = (el) => {
  map = L.map(el);

  // Init render map Center === Belarus
  renderMap([53.88, 27.72], 2);
  events();
};


export {
  setClickMapHandler,
  createMap,
  setMarksToMap
}
