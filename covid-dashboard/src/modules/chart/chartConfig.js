export function getChartConfig() {
  return {
    type: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
      },
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unitStepSize: 1,
              displayFormats: {},
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
