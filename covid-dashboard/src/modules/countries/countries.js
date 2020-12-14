import { properties } from '../Properties/Properties';

export default function Countries(el) {
  let getCounrty = null;

  el.addEventListener('click', (event) => {
    const { target } = event;
    if (target === el) return;
    const country = target.textContent;

    properties.country = country === 'All World' ? false : country;
    getCounrty();
  });

  function setClick(fn) {
    getCounrty = fn;
  }

  return {
    hendlers: {
      setClick,
    },
  };
}
