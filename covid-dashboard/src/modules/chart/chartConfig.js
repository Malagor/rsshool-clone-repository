import callbacksToolTips from './chartDataForConfig';

export default function getChartConfig(data, title, type) {
  console.log(data);
  return {
    type: 'line',
    data: {
      labels: Object.keys(data[0][1]),
      datasets: [
        {
          label: title,
          data: Object.values(data[0][1]),
          borderColor: 'rgba(255, 0, 0, 1)',
          pointBackgroundColor: 'rgba(255, 0, 0, 1)',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          borderWidth: 0.5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: title,
      },
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'month',
              unitStepSize: 1,
              displayFormats: {
                month: 'MMM YYYY',
              },
            },
            ticks: {
              maxTicksLimit: 11,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              maxTicksLimit: 8,
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
        callbacks: callbacksToolTips(type),
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      legend: {
        display: false,
      },
    },
  };
}
