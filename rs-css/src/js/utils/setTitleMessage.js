export default function setTitleMessage(doneTask, answerWithHint) {
  let message;
  if (answerWithHint) {
    message = 'Done with hint';
  } else if (doneTask) {
    message =  'Done!!!';
  } else {
    message =  'Not completed yet';
  }
  return message;
}
