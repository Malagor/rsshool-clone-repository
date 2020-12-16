// import { showSettingsPopup } from '../settings/Settings';

let toggle = null;
let onShowSettingPopup = null;

const getHeaderTogglePopupButton = (el) => {
  toggle = el.querySelector('.toggle-menu');

  toggle.addEventListener('click', (ev) => {
    onShowSettingPopup(ev.target.closest('.toggle-menu'));
  });
};

const setHeaderToggleButtonHandler = (fn) => {
  onShowSettingPopup = fn;
};

export {
  getHeaderTogglePopupButton,
  setHeaderToggleButtonHandler
}

