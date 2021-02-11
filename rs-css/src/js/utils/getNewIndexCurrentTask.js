export default function getNewIndexCurrentTask (cur, max) {
  let newIndex;
  if (max) {
    newIndex = (cur + 1) >= (max - 1) ? max - 1 : cur + 1;
    return +newIndex;
  }
  newIndex = (cur - 1) < 0 ? 0 : cur - 1;
  return +newIndex;
};
