export const loaderOn = (bool) => {
  const loader = document.querySelector('.loader');
  const wrapper = document.querySelector('.fullScreen-overlay');
  if (bool) {
    loader.classList.add('loader-in');
    wrapper.classList.add('activeFullScreen');
  } else {
    loader.classList.remove('loader-in');
    wrapper.classList.remove('activeFullScreen');
  }
};
