export function getChartConfig() {
  return {
    type: 'LineWithLine',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 1.8,
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
                if (value >= 1000000) {
                  return `${value / 1000000} m`;
                }
                if (value >= 1000 && value < 1000000) {
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
        position: 'nearest',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 1)',
        caretSize: 0,
        titleAlign: 'center',
        titleMarginBottom: 10,
        bodySpacing: 5,
        footerAlign: 'center',
        footerMarginTop: 10,
        caretPadding: 10,
        xPadding: 10,
        displayColors: false,
      },
      hover: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
  };
}
