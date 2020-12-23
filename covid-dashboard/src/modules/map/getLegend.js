import L from 'leaflet/dist/leaflet';

export const getLegend = () => {
  const legend = L.control({ position: 'bottomleft' });

  legend.onAdd = () => {

    const block = L.DomUtil.create('div', 'info legend');
    block.innerHTML +=
      '<h3>Legend</h3>' +
      '<div class="legend__item">' +
      '<div class="icon-marker cases">123k+</div><div>Cases</div>' +
      '</div>' +
      '<div class="legend__item">' +
      '<div class="icon-marker recovered">98k+</div><div>Recovered</div>' +
      '</div>' +
      '<div class="legend__item">' +
      '<div class="icon-marker deaths">20k+</div><div>Deaths</div>' +
      '</div>';

    return block;
  };
  return legend;
};
