import Settings from '../settings/Settings';
import params from '../../assets/icons/params.svg';
import fullScreen from '../../assets/icons/screen-full.svg';
import closeScreen from '../../assets/icons/screen-close.svg';

const settings = Settings();

const getControlsBlockHTML = () => {
  return `<div class="controls-block">
  <button type="button" class="controls-block_params">${params}</button>
  <button type="button" class="controls-block_fullscreen">${fullScreen}</button>
</div>`;
};

const setClickFullScreen = () => {
  const fullScreenButton = document.querySelector('.controls-block_fullscreen');
  fullScreenButton.addEventListener('click', () => {
    if (fullScreenButton.innerHTML === fullScreen) {
      fullScreenButton.innerHTML = closeScreen;
    } else {
      fullScreenButton.innerHTML = fullScreen;
    }
    return fullScreenButton;
  });
};

const setClickParams = () => {
  const paramsButton = document.querySelector('.controls-block_params');
  const controlsBlock = document.querySelector('.controls-block');
  paramsButton.addEventListener('click', () => {
    settings.showPopup(controlsBlock);
  });
};

export { getControlsBlockHTML, setClickFullScreen, setClickParams };
