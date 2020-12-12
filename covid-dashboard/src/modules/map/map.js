import 'leaflet/dist/leaflet.css';
import L from 'leaflet/dist/leaflet';

export default function Map(el) {
  const map = L.map(el);


  // handler events Listener
  let clickMap = null;


  function setClickMap(fn) {
    clickMap = fn;
  }

  function renderMap(coordCenter, zoomRate) {
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
  }

  function setMarks(arr) {
    arr.forEach(data => {
      const {active, country, population, lat, long, flag } = data;

      const circle = L.circle([lat, long], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: active / 10,
        weight: 1,
        opacity: 1,
      }).addTo(map);

      circle.bindPopup(`<img class="flag" src="${flag}" alt="${country}-flag"><div><b>${country}</b></div><div>${population}`);
    });
  }

  function events() {
    map.addEventListener('click', clickMap);
  }

  // Init render map Center === Belarus
  renderMap([53.88, 27.72], 2);
  events();

  return {
    renderMap,
    setMarks,
    setHandler: {
      setClickMap,
    },
  };
}
