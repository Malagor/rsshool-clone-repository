import 'leaflet/dist/leaflet.css';
import L from 'leaflet/dist/leaflet';
import { getPopupTextHTML } from '../mainApp/getPopupTextHTML';
// eslint-disable-next-line import/no-cycle
import { printBorderCountries } from './printBorderCountries';
import { getLegend } from './getLegend';
import { setControlsToMap } from './setControlsToMap';
import { getControlsBlockHTML } from '../controls/controlsBlock';


const TOKEN_API = 'pk.eyJ1IjoibWFsYWdvciIsImEiOiJja2loZnUwdDgwNmpyMnNwYnNwaDBnNjlmIn0.syPwz4D9ZNf8AIJ71a0aUQ';
let map = null;
let geoJsonLayers;

const initMap = (coordCenter, zoomRate) => {
  map.setView(coordCenter, zoomRate);


  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    minZoom: 2,
    id: 'mapbox/dark-v10',
    center: coordCenter,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: TOKEN_API,
    maxBounds: [
      [84.89, -181.40],
      [-85.06, 182.04],
    ],
  }).addTo(map);

  const bounds = L.latLngBounds([84.89, -200.00], [-85.06, 200.00]);
  map.setMaxBounds(bounds);
  map.on('drag', () => {
    map.panInsideBounds(bounds, { animate: false });
  });

  const mapControls = setControlsToMap();
  mapControls.addTo(map);

  const legend = getLegend();
  legend.addTo(map);
};


const setMarksToMap = (arr) => {

  const geoJson = {
    type: 'FeatureCollection',
    features: arr.map((country = {}) => {
      const { lat, long: lng } = country;
      return {
        type: 'Feature',
        properties: {
          ...country,
        },
        geometry: {
          type: 'Point',
          coordinates: [lng, lat],
        },
      };
    }),
  };

  geoJsonLayers = new L.GeoJSON(geoJson, {
    pointToLayer: (feature = {}, latlng) => {
      const html = getPopupTextHTML(feature);
      return L.marker(latlng, {
        icon: L.divIcon({
          className: 'icon',
          html,
        }),
        riseOnHover: true,
      });
    },
  });
  geoJsonLayers.remove(map);
  geoJsonLayers.addTo(map);
};

// const events = () => {
//   map.addEventListener('click', (ev) => {
//     console.log('Click to map', ev);
//   });
// };

const createMap = (el) => {
  map = L.map(el);

  // Init render map Center === Belarus
  initMap([53.88, 27.72], 2);
  const mapControlsBlock = document.querySelector('.map__controls');
  getControlsBlockHTML(mapControlsBlock, el);
  printBorderCountries(map);

  // events();
};


export {
  createMap,
  setMarksToMap,
};
