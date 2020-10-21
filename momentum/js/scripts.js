// DOM Elements

const $time = document.querySelector('#time');
const $date = document.querySelector('#date');
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

const daysOfWeek = {
  0: 'Понедельник'
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
    getFocus();
  }
}

function showTime() {

  let today = new Date();
  // let today = new Date(2020, 4, 10, 5,13,22);
  let hour = today.getHours();
  let min = addPrevZerros(today.getMinutes());
  let sec = addPrevZerros(today.getSeconds());
  let day = today.getDate();
  let year = today.getFullYear();
  let month = today.toLocaleString('ru', {month: 'long'});
  let weekday = today.toLocaleString('ru', {weekday: 'long'});

  if (month === 'март' || month === 'август') {
    month += 'а';
  } else {
    month = month.slice(0, -1) + 'я';
  }

  $time.innerHTML = `${hour}:${min}:${sec}`;
  $date.innerHTML = `${weekday},  ${day} ${month} ${year} года`;

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