import { updateStatusBar } from '../status/Status';
import { properties } from '../Properties/Properties';
import { renderChart } from './renderChart';
import { setMarksToMap } from '../map/map';

export const updateApp = () => {
  updateStatusBar();

  const { country, type, period } = properties;

  renderChart(country, period, type);

  setMarksToMap();
};
