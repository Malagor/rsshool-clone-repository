export const getPopupTextHTML = (obj) => {
  const { country, flag, cases } = obj;
  return `
    <div class="map-popup__flag-wrapper"><img src="${flag}" alt=""></div>
    <div class="map-popup__country">${country}</div>
    <div class="map-popup__data">
    <span class="map-popup__data-label">Cases</span>
    <span class="map-popup__data-count">${cases}</span>
    </div>`;
};

