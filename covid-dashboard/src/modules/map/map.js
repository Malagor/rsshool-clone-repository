import 'leaflet/dist/leaflet.css';
import L from 'leaflet/dist/leaflet';


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
  console.log('Data to map', arr);

  // fetch('https://github.com/agricolamz/DS_for_DH/raw/master/data/countries.geojson')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch(e => {
  //     console.log("Ошибка получения", e);
  //   });

//   const myIcon = L.divIcon({ className: 'my-div-icon' });
// // you can set .my-div-icon styles in CSS
//
//   L.marker([53.88, 27.72], {
//     icon: myIcon,
//     iconSize: [50, 50],
//   }).addTo(map);


  const path = 'https://datahub.io/core/geo-countries/datapackage.json';

   fetch(path)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('data\n', data.resources[2].path);
      // fetch(data.resources[2]["dpp:streamedFrom"])
      fetch(data.resources[2].path)
        .then((response) => {
          return response.json();
        })
        .then((geodata) => {
          console.log('Данные из файла\n', geodata);

          L.geoJSON(geodata, {
            style:{
              color: '#7171ff',
              weight: 1,
            },
          })
            .bindPopup(layer => {
              const name = layer.feature.properties.ADMIN;
              const arrCountry = arr.filter(c => {
                // console.log(c.name, name);
                 return c.name === name;
              });
              console.log(arrCountry);
              return `${name}`;
            })
            .addTo(map);
        })
        .catch((e) => {
          console.log('Данные не загружены', e);
        });
    });

// We're using self-invoking function here as we want to use async-await syntax:
//   ;(async () => {
//     const dataset = await Dataset.load(path);
//     // get list of all resources:
//     for (const id in dataset.resources) {
//       console.log(dataset.resources[id]._descriptor.name);
//     }
//     // get all tabular data(if exists any)
//     for (const id in dataset.resources) {
//       if (dataset.resources[id]._descriptor.format === 'csv') {
//         const file = dataset.resources[id];
//         // Get a raw stream
//         const stream = await file.stream();
//         const buffer = await file.buffer;
//         // print data
//         stream.pipe(process.stdout);
//       }
//     }
//   })();

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
