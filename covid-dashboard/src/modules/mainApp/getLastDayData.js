export const getLastDayData = (arr) => {
  const { length } = arr;
  const lastDay = arr[length - 1];
  const pastLastDay = arr[length - 2];

  return lastDay[1] - pastLastDay[1];
};
