/*
 *
 * Author: Alex Malagor
 *
 * */

import { mainHTML } from './mainHTML';
import { createMap } from '../map/map';
import { createChart } from '../chart/chart';
import { createStatusBar } from '../status/Status';
import { createSettings } from '../settings/Settings';
import { setHeaderSettingsToggle } from '../header/Header';
import { loadProperties } from '../Properties/Properties';
import { updateApp } from './updataApp';
import { createTable } from '../table/table';
import { createTableCountries } from '../countries/countries';
import { createFooter } from '../footer/footer';

const elementsDOM = mainHTML();
loadProperties();

createSettings();
setHeaderSettingsToggle(elementsDOM.header);
createTable(elementsDOM.table);
createTableCountries(elementsDOM.countries);

createMap(elementsDOM.map);
createChart(elementsDOM.chart);
createStatusBar(elementsDOM.status);
createFooter(elementsDOM.footer);

updateApp();
