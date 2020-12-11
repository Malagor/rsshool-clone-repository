export default function settingsHTML() {
  return '<div id="popup" class="popup">' +
    '<div class="settings">' +
    '<form id="settings-form" class="settings__form">' +
    '<label for="setting-population"><input id="setting-population" type="checkbox" name="population">All population</label>' +
    '<input type="submit" value="Apply">' +
    '</form>' +
    '</div>' +
    '</div>';
}
