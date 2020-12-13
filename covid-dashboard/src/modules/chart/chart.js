import Chart from 'chart.js';
import './chart.scss';


export default function MyChar(el) {
  el.insertAdjacentHTML('afterbegin', '<canvas id="myChart" height="100%"></canvas>');
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
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',

          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1
        },
          {
            label: "title",
            data: dt,
            backgroundColor: [
              'rgba(40,255,138,0.2)',

            ],
            borderColor: [
              'rgb(22,70,255)',
            ],
            borderWidth: 1
          }


        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
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

