import Chart from 'chart.js';
import './chart.scss';
import leftButton from '../../assets/img/left_button.svg';
import rightButton from '../../assets/img/right_button.svg';

export default function MyChar(el) {
  el.insertAdjacentHTML(
    'afterbegin',
    `<canvas id="myChart" height="80%"></canvas>
  <div class="cart__buttons">
    <button type="button" class="button">${leftButton}</button>
    <button type="button" class="button">${rightButton}</button>
  </div>`,
  );
  // eslint-disable-next-line no-unused-vars
  let chart = null;

  const ctx = document.getElementById('myChart').getContext('2d');

  function showRecovered(lbls, dt, title) {
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: lbls,
        datasets: [
          {
            label: title,
            data: dt,
            // backgroundColor: [
            //   'rgba(255, 99, 132, 0.2)',
            //   'rgba(54, 162, 235, 0.2)',
            //   'rgba(255, 206, 86, 0.2)',
            //   'rgba(75, 192, 192, 0.2)',
            //   'rgba(153, 102, 255, 0.2)',
            //   'rgba(255, 159, 64, 0.2)'
            // ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        tooltips: {
          mode: 'index',
        },
      },
    });
    // console.log(chart);
  }

  return {
    showRecovered,
  };
}
