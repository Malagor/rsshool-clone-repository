export function showTooltip(element, top, left) {
  const tooltip = element;
  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;
  tooltip.classList.toggle('open');
}

export function calculateTooltipsPosition(node) {
  let top = 0;
  let left = 0;
  let offsetTop = 0;
  let offsetLeft = 0;

  function getPosition(n) {
    const style = window.getComputedStyle(n);
    if (style.position === 'absolute') {
      offsetTop += n.offsetHeight;
      offsetLeft += n.offsetLeft;
      const parent = n.parentNode;
      getPosition(parent);
    } else {
      top = n.offsetTop;
      left = n.offsetLeft;
    }
  }

  getPosition(node);

  // top -= offsetTop;
  top -= 20 + offsetTop;
  left += 10 + offsetLeft;

  return {top, left};
}


