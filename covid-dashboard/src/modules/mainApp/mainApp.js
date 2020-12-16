/*
*
* Author: Alex Malagor
*
* */

import { mainHTML } from './mainHTML';
import { /* setMarksToMap, */ setClickMapHandler, createMap } from '../map/map';
import { createStatusBar /* , updateStatusBar */} from '../status/Status';
// import { countryDataPerPeriod, allWorldPerPeriod } from '../queries/Queries';
import { loadProperties /* , properties */ } from '../Properties/Properties';
import { getHeaderTogglePopupButton, setHeaderToggleButtonHandler } from '../header/Header';
import { createChart } from '../chart/chart';
import { setSendFormHandler, showSettingsPopup } from '../settings/Settings';
import { updateApp } from './updataApp';


const elementsDOM = mainHTML();
loadProperties();

const clickMap = () => {
  console.log('Click Map');
};

// create components
createMap(elementsDOM.map);
// renderMap();

createStatusBar(elementsDOM.status);
getHeaderTogglePopupButton(elementsDOM.header);
createChart(elementsDOM.chart);

updateApp();

// set Handlers
setSendFormHandler(updateApp);
setClickMapHandler(clickMap);
setHeaderToggleButtonHandler(showSettingsPopup);

