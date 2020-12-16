/*
*
* Author: Alex Malagor
*
* */

import { mainHTML } from './mainHTML';
import { createMap } from '../map/map';
import { createChart } from '../chart/chart';
import { createStatusBar } from '../status/Status';
import { createSettings, /* showPopup,  setSendFormHandler */} from '../settings/Settings';
import {setHeaderSettingsToggle} from '../header/Header';
import { loadProperties } from '../Properties/Properties';
import { updateApp } from './updataApp';

const elementsDOM = mainHTML();
loadProperties();

createSettings();
setHeaderSettingsToggle(elementsDOM.header);

createMap(elementsDOM.map);
createChart(elementsDOM.chart);
createStatusBar(elementsDOM.status);


updateApp();
