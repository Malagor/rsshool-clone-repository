import Chart from 'chart.js';
import './chart.scss';
import chartHTML from './chartHTML';

export default function MyChar(el) {
  el.insertAdjacentHTML('afterbegin', chartHTML);
  // eslint-disable-next-line no-unused-vars
  let chart = null;

  const ctx = document.getElementById('myChart').getContext('2d');

  function showRecovered(lbls, dt, title) {
    // const dataSet = dt.map((it) => (it > 1000 ? it / 1000 : it));

    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: lbls,
        datasets: [
          {
            label: title,
            data: dt,
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgba(255, 0, 0, 1)',
            pointBackgroundColor: 'rgba(255, 0, 0, 1)',
            pointRadius: 2,
            pointHoverRadius: 5,
            borderWidth: 0.5,
          },
        ],
      },
      options: {
        scales: {
          stepSize: 10,
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'month',
                unitStepSize: 1,
                displayFormats: {
                  month: 'MMM YY',
                },
              },
              // ticks: {},
              scaleLabel: {
                display: true,
                labelString: 'Time',
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                maxTicksLimit: 7,
                beginAtZero: true,
                callback(value) {
                  if (value > 1000000) {
                    return `${value / 1000000} m`;
                  }
                  if (value > 1000 && value < 1000000) {
                    return `${value / 1000} k`;
                  }
                  return value;
                },
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 1)',
          caretSize: 0,
          titleAlign: 'center',
          footerAlign: 'center',
          displayColors: false,
          callbacks: {
            title(toolTipItems) {
              const titleT = toolTipItems[0].label;
              const year = `20${titleT.slice(-2)}`;
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
              const month =
                titleT[1] === '/' ? titleT.slice(0, 1) : titleT.slice(0, 2);
              const data =
                titleT[1] === '/' ? titleT.slice(2) : titleT.slice(3);
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
              const titleT = document.querySelector('.chart__category')
                .textContent;
              return titleT;
            },
          },
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        maintainAspectRatio: false,
        legend: {
          display: false,
          labels: {
            boxWidth: 0,
          },
        },
      },
    });
    console.log(chart);
  }

  return {
    showRecovered,
  };
}
