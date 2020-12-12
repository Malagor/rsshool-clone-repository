export default function Header(el) {
  const toggle = el.querySelector('.toggle-menu');

  let showSettings = null;

  function setShowSettings(fn) {
    showSettings = fn;
  }

  toggle.addEventListener('click', (ev) => {
    const { offsetLeft, offsetTop, clientHeight } = ev.target.closest('.toggle-menu');

        showSettings(offsetTop + clientHeight, offsetLeft);
  });

  return {
    setHandler: {
      setShowSettings,
    },
  };

}



