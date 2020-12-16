import { setSettingToggleElement } from '../settings/Settings';

export const setHeaderSettingsToggle = (el) => {
  const toggle = el.querySelector('.toggle-menu');
  setSettingToggleElement(toggle);
};
