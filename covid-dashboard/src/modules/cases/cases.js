import { getControlsBlockHTML } from '../controls/controlsBlock';

export const createCasesBlock = (el) => {
  el.innerHTML = '<div class="settings-block"></div>';
  const toggle = el.querySelector('.settings-block');

  getControlsBlockHTML(toggle);
};
