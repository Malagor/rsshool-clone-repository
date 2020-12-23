import L from 'leaflet/dist/leaflet';


export const setControlsToMap = () => {
  const controls = L.control({ position: 'topright' });
  controls.onAdd = () => {
    return L.DomUtil.create('div', 'map__controls');
  };
  return controls;
};
