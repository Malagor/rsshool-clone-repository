import callbacksToolTips from './chartDataForConfig';

export default function getChartConfig(lbls, dt, title) {
  return {
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
      responsive: true,
      maintainAspectRatio: false,
      scales: {
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
        callbacks: callbacksToolTips(),
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      legend: {
        onClick: () => {
          return null;
        },
        labels: {
          boxWidth: 0,
        },
      },
    },
  };
}
