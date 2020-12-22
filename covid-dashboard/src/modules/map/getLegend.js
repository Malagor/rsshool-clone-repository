import L from 'leaflet/dist/leaflet';

function getColor(d) {
  let color = '#FFEDA0';
  if (d > 10) {
    color = '#FED976';
  }
  if (d > 20) {
    color = '#FEB24C';
  }
  if (d > 50) {
    color = '#FD8D3C';
  }
  if (d > 100) {
    color = '#FC4E2A';
  }
  if (d > 200) {
    color = '#E31A1C';
  }
  if (d > 500) {
    color = '#BD0026';
  }
  if (d > 1000) {
    color = '#800026';
  }

  return color;
}

export const getLegend = () => {
  const legend = L.control({ position: 'bottomleft' });

  legend.onAdd = () => {

    const block = L.DomUtil.create('div', 'info legend');
    const grades = [0, 10, 20, 50, 100, 200, 500, 1000];

    for (let i = 0; i < grades.length; i += 1) {
      block.innerHTML +=
        `<i style="background:${getColor(grades[i] + 1)}"></i> ${grades[i]}${grades[i + 1] ? `&ndash;${grades[i + 1]}<br>` : '+'}`;
    }

    return block;
  };
  return legend;
};
