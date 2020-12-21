import { setSettingToggleElement } from '../settings/Settings';
import params from '../../assets/icons/params.svg';
import fullScreen from '../../assets/icons/screen-full.svg';
import closeScreen from '../../assets/icons/screen-close.svg';

const toggleFullScreen = (value, el) => {
  if (value) el.innerHTML = closeScreen;
  if (!value) el.innerHTML = fullScreen;
  return el;
};

const getControlsBlockHTML = (wrapperForControls, mainEl) => {
  wrapperForControls.innerHTML += `<div class="controls-block">
  <button type="button" class="controls-block_params">${params}</button>
  <button type="button" class="controls-block_fullscreen">${fullScreen}</button>
</div>`;
  const toggle = wrapperForControls.querySelector('.controls-block_params');
  setSettingToggleElement(toggle);
  wrapperForControls.addEventListener('click', (ev) => {
    const { target } = ev;
    if (target.closest('.controls-block_fullscreen')) {
      const element = target.closest('.controls-block_fullscreen');
      if (document.querySelector('.popup').classList.contains('open')) {
        document.querySelector('.popup').classList.toggle('open');
      }
      toggleFullScreen(element.innerHTML === fullScreen, element);
      mainEl.classList.toggle('fullScreen');
      document.body
        .querySelector('.fullScreen-overlay')
        .classList.toggle('activeFullScreen');
    }
  });
};

export { getControlsBlockHTML };
