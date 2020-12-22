export const countPer100k = (count, population) => {
  return +(count / population * 100000).toFixed(1);
};
