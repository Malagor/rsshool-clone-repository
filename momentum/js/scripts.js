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
    let greet;
    if (0 <= hour && hour < 6) {
      greet = this.dayTime.night;
    } else if (hour < 12) {
      greet = this.dayTime.morning;
    } else if (hour < 18) {
      greet = this.dayTime.day;
    } else {
      greet = this.dayTime.evening;
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

  setName = (event) => {
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

class Images {
  constructor(arrImages) {
    this.images = arrImages;
    this.curImage = 0;
    this.countAllImages = arrImages.length;
    this.base = 'img/';

    this.timer();
  }

  changeImage = (event) => {
    document.querySelector('#prevImage').disabled = true;
    document.querySelector('#nextImage').disabled = true;


    if (this.timerHendler !== undefined) {
      this.stopTimer();
    }

    if (event.target.closest('#nextImage')) {
      (this.curImage + 1) < this.countAllImages
        ? ++this.curImage
        : this.curImage = 0;
    } else {
      (this.curImage - 1) > 0
        ? --this.curImage
        : this.curImage = this.countAllImages - 1;
    }

    document.body.style.backgroundImage = `url(${this.base + this.images[this.curImage]})`;

    setTimeout(() => {
      document.querySelector('#prevImage').disabled = false;
      document.querySelector('#nextImage').disabled = false;
    }, 1000);

  };

  stopTimer = () => {
    clearTimeout(this.timerHendler);
    this.timerHendler = undefined;
    setTimeout(this.timer, 60000);
  };

  timer = () => {
    const setBackground = (index) => {
      const $body = document.body;

      $body.style.backgroundImage = `url(${this.base}/${this.images[index]}`;

      if (index === 0 || index === 3) {
        $body.classList.add('night');
      } else {
        $body.classList.remove('night');
      }
    };

    const hour = new Date().getHours();

    if (0 <= hour && hour < 6) {
      setBackground(0);
    } else if (hour < 12) {
      setBackground(1);
    } else if (hour < 18) {
      setBackground(2);
    } else {
      setBackground(3);
    }

    this.timerHendler = setTimeout(this.timer.bind(this), 1000);
  }
}

// Порядок картинок: ночь, утро, день, вечер
const arrImages = [
  'night.jpg',
  'morning.jpg',
  'day.jpg',
  'evening.jpg'
];

const $prev = document.querySelector('#prevImage');
const $next = document.querySelector('#nextImage');


const images = new Images(arrImages);

$prev.addEventListener('click', images.changeImage);
$next.addEventListener('click', images.changeImage);