import Queries from '../queries/Queries';

export default function Countries(el) {
  // let getCounrty = null;

  // el.addEventListener('click', (event) => {
  //   const { target } = event;
  //   if (target === el) return;

  //   getCounrty(target.textContent, 30);
  // });

  // function setClick(fn) {
  //   getCounrty = fn;
  // }

  // return {
  //   handlers: {
  //     setClick
  //   },
  // };
  const query = Queries();

  function renderCountries(data) {
    console.log(data);
  }


  function getTestData() {
    const url = query.allWorldPerPeriod(5);
    // console.log(url);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        renderCountries(data);
      });
  }
  getTestData();

  el.innerHTML = `<div class="wrapper">
  <div class="title">Cases by country</div>
  <input type="text" class="input">
  <div class="list-countries"></div>
  <div class="toggle-cases">
    <button class="btn-cases arrow-left"></button>
    <div class="cases-title">All Cases</div>
    <button class="btn-cases arrow-right"></button>
  </div>
  <div class="toggle-number">
    <button class="btn-number arrow-left"></button>
    <div class="number-title">Absolute number</div>
    <button class="btn-number arrow-right"></button>
  </div>
  <div class="toggle-time">
    <button class="btn-time arrow-left"></button>
    <div class="time-title">All time</div>
    <button class="btn-time arrow-right"></button>
  </div>
</div>`;

  return  {
    renderCountries
  }

}
