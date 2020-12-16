import { setSettingToggleElement } from '../settings/Settings';
import params from '../../assets/icons/params.svg';
import fullScreen from '../../assets/icons/screen-full.svg';
import closeScreen from '../../assets/icons/screen-close.svg';

const toggleFullScreen = (value, el) => {
  if (value) el.innerHTML = closeScreen;
  if (!value) el.innerHTML = fullScreen;
  return el;
};

const getControlsBlockHTML = (el) => {
  el.innerHTML += `<div class="controls-block">
  <button type="button" class="controls-block_params">${params}</button>
  <button type="button" class="controls-block_fullscreen">${fullScreen}</button>
</div>`;
  const toggle = el.querySelector('.controls-block-params');
  setSettingToggleElement(toggle);
  el.addEventListener('click', (ev) => {
    const { target } = ev;
    if (target.closest('.controls-block_fullscreen')) {
      const element = target.closest('.controls-block_fullscreen');
      toggleFullScreen(element.innerHTML === fullScreen, element);
    }
  });
};

export { getControlsBlockHTML };
