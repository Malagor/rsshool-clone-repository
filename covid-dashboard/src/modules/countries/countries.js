export default function Countries(el) {
  let getCounrty = null;

  el.addEventListener('click', (event) => {
    const { target } = event;
    if (target === el) return;

    getCounrty(target.textContent);
  });

  function setClick(fn) {
    getCounrty = fn;
  }

  return {
    hendlers: {
      setClick
    },
  };
}
