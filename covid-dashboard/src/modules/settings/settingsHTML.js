import { properties } from '../Properties/Properties';

export default function settingsHTML() {

  let { country, period, population } = properties;
  const { type } = properties;

  period = period ? 'checked' : '';
  population = population ? 'checked' : '';
  country = country || 'All World';

  return '<div id="popup" class="popup">' +
    '<div class="settings">' +
    '<form name="settings" id="settings-form" class="settings__form">' +
    `<label for="setting-country">Country<input id="setting-country" class="setting__country" type="text" name="country" value="${country}"></label>` +
    `<label for="setting-population"><input id="setting-population" class="setting__population" type="checkbox" name="population" ${population}>Per 100k population</label>` +
    `<label for="setting-period"><input id="setting-period" class="setting__period" type="checkbox" name="period" ${period}>For last day</label>` +
    '<fieldset>' +
    '<legend>Type of data</legend>' +
    `<label for="setting-case"><input id="setting-case" class="setting__case" type="radio" name="type" value="cases" ${type === "cases"? "checked": ''}>Cases</label>` +
    `<label for="setting-deaths"><input id="setting-deaths" class="setting__deaths" type="radio" name="type" value="deaths" ${type === "deaths"? "checked": ''}>Deaths</label>` +
    `<label for="setting-recoveres"><input id="setting-recoveres" class="setting__recoveres" type="radio" name="type" value="recovered" ${type === "recovered"? "checked": ''}>Recovered</label>` +
    '</fieldset>' +
    '<input type="submit" value="Apply">' +
    '</form>' +
    '</div>' +
    '</div>';
}
