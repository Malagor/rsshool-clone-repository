// DOM Elements

const $time = document.querySelector('#time');
const $greeting = document.querySelector('#greeting');
const $name = document.querySelector('#name');
const $focus = document.querySelector('#focus');
const $body = document.body;


const dayTime = {
  night: "Доброй ночи",
  morning: "Доброе утро",
  day: "Добрый день",
  evening: "Добрый вечер"
};

function addPrevZerros(num) {
  return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

function setGreetAndBackground(hour) {
  let greet;
  if (0 <= hour && hour < 6) {
    greet = dayTime.night;
    $body.style.backgroundImage = 'url(img/night.jpg)';
  } else if (hour < 12) {
    greet = dayTime.morning;
    $body.style.backgroundImage = 'url(img/morning.jpg)';
  } else if (hour < 18) {
    greet = dayTime.day;
    $body.style.backgroundImage = 'url(img/day.jpg)';
  } else {
    greet = dayTime.evening;
    $body.style.backgroundImage = 'url(img/evening.jpg)';
  }

  $greeting.innerHTML = `${greet},`;
}


function getName() {

  const name = localStorage.getItem("name");
  if (name === null || name === '') {
    $name.textContent = '[ Введите имя ]';
  } else {
    $name.textContent = localStorage.getItem('name');
  }
}

function getFocus() {
  const focus = localStorage.getItem("focus");
  if (focus === null || focus === '') {
    $focus.textContent = '[ Введите задачу ]';
  } else {
    $focus.textContent = localStorage.getItem('focus');
  }
}

function setName(event) {
  console.log(event);
  if (event.type === 'keypress' && event.key !== 'Enter') {

    return false;
  } else {
    localStorage.setItem('name', $name.textContent);

    $name.blur();
    getName();
  }
}

function setFocus(event) {
  if (event.type === 'keypress' && event.key !== 'Enter') {
    return false;
  } else {
    localStorage.setItem('focus', $focus.textContent);
    $focus.blur();
  }
}

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  // hour = 100;
  let min = addPrevZerros(today.getMinutes());
  let sec = addPrevZerros(today.getSeconds());

  $time.innerHTML = `${hour}:${min}:${sec}`;

  setGreetAndBackground(hour);

  setTimeout(showTime, 1000)

}

getFocus();
getName();
showTime();

$body.addEventListener("click", event => {
  const target = event.target;
  console.log('Click');

  if (target.closest('#name')) {
    $name.textContent = '';
  }

  if (target.closest('#focus')) {
    $focus.textContent = '';
  }
});

$name.addEventListener('keypress', setName);
$name.addEventListener('blur', setName);
$focus.addEventListener('keypress', setFocus);
$focus.addEventListener('blur', setFocus);