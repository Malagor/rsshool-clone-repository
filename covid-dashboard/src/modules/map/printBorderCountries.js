import L from 'leaflet/dist/leaflet';
import { properties } from '../Properties/Properties';
// eslint-disable-next-line import/no-cycle
import { updateApp } from '../mainApp/updataApp';
import { updateStatusBar } from '../status/Status';


export const printBorderCountries = (map) => {
  const path = 'https://datahub.io/core/geo-countries/datapackage.json';

  fetch(path)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      fetch(data.resources[2].path)
        .then((response) => {
          return response.json();
        })
        .then((geodata) => {
          L.geoJSON(geodata, {
            style: {
              color: 'rgba(255,255,255,0.5)',
              weight: 1,
              // fill: false,
              fillOpacity: 0.0,
            },
            onEachFeature: (feature, layer) => {
              layer.on({
                mouseover: (e) => {
                  const l = e.target;

                  layer.setStyle({
                    weight: 2,
                    // color: '#666',
                    // dashArray: '',
                    // fill: '#ff0000',
                    fillOpacity: 0.3,
                  });

                  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                    l.bringToFront();
                  }
                },
                mouseout: (e) => {
                  const l = e.target;

                  layer.setStyle({
                    weight: 1,
                    // color: '#666',
                    // dashArray: '',
                    // fill: '#ff0000',
                    fillOpacity: 0.0,
                  });

                  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                    l.bringToFront();
                  }
                },
                click: () => {
                  properties.country = feature.properties.ADMIN;
                  properties.iso3 = feature.properties.ISO_A3;
                  updateStatusBar();
                  updateApp();
                }

              });
            },
          })
            // .bindPopup(layer => {
            //   // console.log('layer', layer);
            //   const { properties: props } = layer.feature;
            //   const { ISO_A3 } = props;
            //
            //   const arrCountry = arr.filter(c => {
            //     // console.log('c', c);
            //     const { iso3 } = c;
            //     return iso3 === ISO_A3;
            //   });
            //
            //   return getPopupTextHTML(arrCountry[0]);
            // })
            .addTo(map);
        })
        .catch((e) => {
          console.log('Error print borders countries.', e);
        });
    });
};

