import 'leaflet/dist/leaflet.css';
import L from 'leaflet/dist/leaflet';
import { properties } from '../Properties/Properties';
// import { getPopupTextHTML } from '../mainApp/getPopupTextHTML';


const TOKEN_API = 'pk.eyJ1IjoibWFsYWdvciIsImEiOiJja2loZnUwdDgwNmpyMnNwYnNwaDBnNjlmIn0.syPwz4D9ZNf8AIJ71a0aUQ';
let map = null;

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
  }).addTo(map);
};


const setMarksToMap = (arr) => {
  const { type } = properties;
  console.log('setMarksToMap()', arr[0]);

  // просто желтые кружки
  // arr.forEach(val => {
  //   const { lat, long , cases } = val;
  //   console.log(cases);
  //   const geojsonMarkerOptions = {
  //     radius: 20,
  //     fillColor: '#ff7800',
  //     color: '#000',
  //     weight: 1,
  //     opacity: 1,
  //     fillOpacity: 0.8,
  //   };
  //   const marker = L.circleMarker([lat, long], geojsonMarkerOptions);
  //   marker.bindPopup(getPopupTextHTML(val));
  //   marker.addTo(map);
  // });


  const geoJson = {
    type: 'FeatureCollection',
    features: arr.map((country = {}) => {
      // const { countryInfo = {} } = country;
      const { lat, long: lng } = country;
      return {
        type: 'Feature',
        properties: {
          ...country,
        },
        geometry: {
          type: 'Point',
          coordinates: [ lng, lat ]
        }
      }
    })
  };

  const geoJsonLayers = new L.GeoJSON(geoJson, {
    'pointToLayer': (feature = {}, latlng) => {
      const { properties: props = {} } = feature;
      let casesString;

      const {
        country,
        cases,
        deaths,
        recovered
      } = props;

      casesString = `${cases}`;

      if ( cases > 1000 ) {
        casesString = `${casesString.slice(0, -3)}k+`
      }

      const html = `
      <span class="icon-marker ${type}">
        <span class="icon-marker-tooltip">
          <h2>${country}</h2>
          <ul>
            <li><strong>Confirmed:</strong> ${cases}</li>
            <li><strong>Deaths:</strong> ${deaths}</li>
            <li><strong>Recovered:</strong> ${recovered}</li>
          </ul>
        </span>
        ${ casesString }
      </span>
    `;

      return L.marker( latlng, {
        icon: L.divIcon({
          className: 'icon',
          html
        }),
        riseOnHover: true
      });
    }
  });

  geoJsonLayers.addTo(map);
  // console.log('geoJsonLayers', geoJsonLayers);











  // const path = 'https://datahub.io/core/geo-countries/datapackage.json';
  //
  // fetch(path)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log('data\n', data.resources[2].path);
  //     fetch(data.resources[2].path)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((geodata) => {
  //         console.log('Данные из файла\n', geodata);
  //
  //         L.geoJSON(geodata, {
  //           style: {
  //             color: '#7171ff',
  //             weight: 1,
  //           },
  //         })
  //           .bindPopup(layer => {
  //             // console.log('layer', layer);
  //             const { properties } = layer.feature;
  //             const { ISO_A3 } = properties;
  //
  //             const arrCountry = arr.filter(c => {
  //               // console.log('c', c);
  //               const { iso3 } = c;
  //               return iso3 === ISO_A3;
  //             });
  //
  //             return getPopupTextHTML(arrCountry[0]);
  //           })
  //           .addTo(map);
  //       })
  //       .catch((e) => {
  //         console.log('Данные не загружены', e);
  //       });
  //   });


  // console.log(geodata);

  // const geoJson = {
  //   type: 'FeatureCollection',
  //   features: arr.map((country = {}) => {
  //     const [lat, lng] = country.latlng;
  //     return {
  //       type: 'Feature',
  //       properties: {
  //         ...country,
  //       },
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [lng, lat],
  //       },
  //     };
  //   }),
  // };
  //
  // console.log('geoJson.features', geoJson.features);
  //
  // // geoJsonLayers = new L.GeoJSON(geoJson, {
  // // eslint-disable-next-line no-new
  // new L.GeoJSON(geoJson, {
  //   pointToLayer: (feature = {}, latlng) => {
  //     const { properties = {} } = feature;
  //     let casesString;
  //
  //     const {
  //       // name,
  //       population,
  //       // flag
  //     } = properties;
  //
  //     casesString = `${population}`;
  //
  //     if (population > 1000) {
  //       casesString = `${casesString.slice(0, -3)}k+`;
  //     }
  //
  //     const html = `
  //     <span class="icon-marker">${casesString}</span>
  //   `;
  //
  //     return L.marker(latlng, {
  //       icon: L.divIcon({
  //         className: 'icon',
  //         html,
  //       }),
  //       riseOnHover: true,
  //     });
  //   },
  // });


  // arr.forEach(data => {
  //   const { name: country, population: count, flag } = data;
  //   const [lat, long] = data.latlng;
  //
  //   if (lat && long) {
  //     const circle = L.circle([lat, long], {
  //       color: 'red',
  //       fillColor: '#f03',
  //       fillOpacity: 0.5,
  //       radius: count / 1000,
  //       weight: 1,
  //       opacity: 0.8,
  //     }).addTo(map);
  //
  //     circle.bindPopup(`<img class="flag" src="${flag}" alt="${country}-flag"><div><b>${country}</b></div><div>${count}`);
  //   }
  // });


  // const someFeatures = [{
  //   "type": "Feature",
  //   "properties": {
  //     "name": "Coors Field",
  //     "show_on_map": true
  //   },
  //   "geometry": {
  //     "type": "Point",
  //     "coordinates": [-104.99404, 39.75621]
  //   }
  // }];
  //
  // L.geoJSON(someFeatures, {
  //   filter(feature) {
  //     return feature.properties.show_on_map;
  //   }
  // }).addTo(map);

};

const events = () => {
  map.addEventListener('click', (ev) => {
    console.log('Click to map', ev);
    // clickMap();
  });
};

const createMap = (el) => {
  map = L.map(el);

  // Init render map Center === Belarus
  initMap([53.88, 27.72], 2);
  events();
};


export {
  // setClickMapHandler,
  createMap,
  setMarksToMap,
};
