const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function callbacksToolTips() {
  return {
    title(toolTipItems) {
      const titleT = toolTipItems[0].label;
      const year = `20${titleT.slice(-2)}`;
      const month = titleT[1] === '/' ? titleT.slice(0, 1) : titleT.slice(0, 2);
      const data = titleT[1] === '/' ? titleT.slice(2) : titleT.slice(3);
      const day = data[1] === '/' ? data.slice(0, 1) : data.slice(0, 2);
      const result = `${day}, ${months[+month - 1]} ${year}`;
      return result;
    },
    label(_, data) {
      const result = `Where: ${data.datasets[0].label}`;
      return result;
    },
    afterLabel(toolTipItems) {
      const val = toolTipItems.value;
      if (val > 1000000) {
        return `Count: ${(val / 1000000).toFixed(1)} m`;
      }
      if (val > 1000 && val < 1000000) {
        return `Count: ${val / 1000} k`;
      }
      return `Count: ${val}`;
    },
    footer() {
      const titleT = 'Cases';
      return titleT;
    },
  };
}
