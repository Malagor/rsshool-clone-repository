class Momentum {
  constructor(el) {
    this.$el = document.querySelector(el);
    this.dayTime = {
      night: "Доброй ночи",
      morning: "Доброе утро",
      day: "Добрый день",
      evening: "Добрый вечер"
    };

    this.init();
    this.showTime();
  }

  init() {
    this.$el.insertAdjacentHTML('beforeend',
      `
      <time id="time"></time>
  <time id="date" class="date"></time>

  <h1>
    <span id="greeting"></span>
    <span id="name" contenteditable="true"></span>
  </h1>

  <h2>Текущая задача:</h2>
  <h2 id="focus" contenteditable="true"></h2>`);

    this.$time = document.querySelector('#time');
    this.$date = document.querySelector('#date');
    this.$greeting = document.querySelector('#greeting');
    this.$name = document.querySelector('#name');
    this.$focus = document.querySelector('#focus');

    this.getName();
    this.getFocus();
    this.events();
  }

  addPrevZerros(num) {
    return (parseInt(num, 10) < 10 ? '0' : '') + num;
  }

  setGreetAndBackground(hour) {
    const $body = document.body;
    let greet;
    if (0 <= hour && hour < 6) {
      greet = this.dayTime.night;
      $body.style.backgroundImage = 'url(img/night.jpg)';
      $body.classList.add('night');
    } else if (hour < 12) {
      greet = this.dayTime.morning;
      $body.style.backgroundImage = 'url(img/morning.jpg)';
      $body.classList.remove('night');
    } else if (hour < 18) {
      greet = this.dayTime.day;
      $body.style.backgroundImage = 'url(img/day.jpg)';
      $body.classList.remove('night');
    } else {
      greet = this.dayTime.evening;
      $body.style.backgroundImage = 'url(img/evening.jpg)';
      $body.classList.add('night');
    }

    this.$greeting.innerHTML = `${greet},`;
  }

  getName = () => {
    const name = localStorage.getItem("name");
    if (name === null || name === '') {
      if (localStorage.getItem("oldName")) {
        this.$name.textContent = localStorage.getItem("oldName");
      } else {
        this.$name.textContent = '[ Введите имя ]';
      }
    } else {
      if (localStorage.getItem("oldName")) {
        this.$name.textContent = localStorage.getItem("oldName");
        localStorage.removeItem("oldName");
      } else {
      this.$name.textContent = localStorage.getItem('name');
      }
    }
  };

  getFocus = () => {
    const focus = localStorage.getItem("focus");
    if (focus === null || focus === '') {
      if (localStorage.getItem("oldFocus")) {
        this.$focus.textContent = localStorage.getItem("oldFocus");
      } else {
      this.$focus.textContent = '[ Введите задачу ]';
      }
    } else {
      if (localStorage.getItem("oldFocus")) {
        this.$focus.textContent = localStorage.getItem("oldFocus");
        localStorage.removeItem("oldFocus");
      } else {
      this.$focus.textContent = localStorage.getItem('focus');
      }
    }
  };

  setName = (event) =>{
    if (event.type === 'keypress' && event.key !== 'Enter') {
      return false;
    } else {
      localStorage.setItem('name', this.$name.textContent);
      this.$name.blur();
      this.getName();
    }
  };

  setFocus = (event) => {
    if (event.type === 'keypress' && event.key !== 'Enter') {
      return false;
    } else {
      localStorage.setItem('focus', this.$focus.textContent);
      this.$focus.blur();
      this.getFocus();
    }
  };

  showTime() {
    let today = new Date();
    // let today = new Date(2020, 4, 10, 5,13,22);
    let hour = today.getHours();
    let min = this.addPrevZerros(today.getMinutes());
    let sec = this.addPrevZerros(today.getSeconds());
    let day = today.getDate();
    let year = today.getFullYear();
    let month = today.toLocaleString('ru', {month: 'long'});
    let weekday = today.toLocaleString('ru', {weekday: 'long'});

    if (month === 'март' || month === 'август') {
      month += 'а';
    } else {
      month = month.slice(0, -1) + 'я';
    }

    this.$time.innerHTML = `${hour}:${min}:${sec}`;
    this.$date.innerHTML = `${weekday},  ${day} ${month} ${year} года`;

    this.setGreetAndBackground(hour);

    setTimeout(this.showTime.bind(this), 1000);
  }

  events() {
    this.$name.addEventListener('keypress', this.setName);
    this.$name.addEventListener('blur', this.setName);

    this.$focus.addEventListener('keypress', this.setFocus);
    this.$focus.addEventListener('blur', this.setFocus);

    this.$el.addEventListener('click', event => {
      const target = event.target;

      if (target.closest('#name')) {
        localStorage.setItem('oldName', this.$name.textContent);
        // this.$name.textContent = '';
      }

      if (target.closest('#focus')) {
        localStorage.setItem('oldFocus', this.$focus.textContent);
        // this.$focus.textContent = '';
      }
    })
  }
}

const momentum = new Momentum('#main-content');