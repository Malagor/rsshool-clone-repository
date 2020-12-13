export default function Header(el) {
  const toggle = el.querySelector('.toggle-menu');

  let showSettings = null;

  function setShowSettings(fn) {
    showSettings = fn;
  }

  toggle.addEventListener('click', (ev) => {
        showSettings(ev.target.closest('.toggle-menu'));
  });

  return {
    setHandler: {
      setShowSettings,
    },
  };

}



