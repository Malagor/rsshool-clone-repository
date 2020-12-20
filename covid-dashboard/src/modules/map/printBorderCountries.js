import L from 'leaflet/dist/leaflet';

export const printBorderCountries = (map) => {
  const path = 'https://datahub.io/core/geo-countries/datapackage.json';

  fetch(path)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('data\n', data.resources[2].path);
      fetch(data.resources[2].path)
        .then((response) => {
          return response.json();
        })
        .then((geodata) => {

          L.geoJSON(geodata, {
            style: {
              color: 'rgba(255,255,255,0.8)',
              weight: 1,
              fill: false,
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
