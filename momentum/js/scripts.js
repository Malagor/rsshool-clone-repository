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
        this.$name.textContent = '';
      }

      if (target.closest('#focus')) {
        localStorage.setItem('oldFocus', this.$focus.textContent);
        this.$focus.textContent = '';
      }
    })
  }
}

new Momentum('#main-content');


/*
*   ИЗМЕНЕНИЕ БЕКГРАУНДА
*/
class Images {
  constructor(arrImages) {
    this.images = arrImages;
    this.curImage = 0;
    this.countAllImages = arrImages.length;
    this.base = 'img/';

    this.init();
    this.events();
    this.timer();
  }

  init() {
    this.$prev = document.querySelector('#prevImage');
    this.$next = document.querySelector('#nextImage');
  }

  events() {
    this.$prev.addEventListener('click', this.changeImage);
    this.$next.addEventListener('click', this.changeImage);
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

new Images(arrImages);


/*
*     WEATHER - WIDGET
*/

class Weather {
  constructor(city = 'Минск') {
    this.place = city;
    this.APIKEY = '96d5eb69ebe60b8b01559d76fe7d43c1';
    this.APIURL = 'api.openweathermap.org/data/2.5/weather?q=';

    this.init();
    this.events();

    this.getCity();
    // this.getWeather();
  }

  init() {
    document.body.insertAdjacentHTML('beforeend', `
    <div id="weather">
      <div id="city" contenteditable="true">[ Введите город ]</div>
      <div class="weather__info">
        <div>Темп: <span id="temp"></span> ℃</div>
        <div>По ощущениям: <span id="feels_like"></span> ℃</div>
        <div><span id="description"></span></div>
        <div>Давление: <span id="pressure"></span> мм\р.с</div>
        <div>Влажность: <span id="humidity"></span> %</div>
        <div id="sun">
          <div>Восход: <span id="sunrise"></span></div>
          <div>Закат: <span id="sunset"></span></div>
        </div>        
        <div><i id="icon" class="weather-icon owf"></i></div>       
      </div>     
    </div>
    `);

    this.$widget = document.querySelector('#weather');
    this.$city = document.querySelector('#city');

  }

  events() {
    this.$city.addEventListener('keypress', this.setCity);
    this.$city.addEventListener('blur', this.setCity);


    // CLICK
    this.$widget.addEventListener('click', event => {
      const target = event.target;

      if (target.closest('#city')) {
        localStorage.setItem('oldCity', this.$city.textContent);
        this.$city.textContent = '';
      }

    })
  }

  getCity = () => {
    const city = localStorage.getItem("city");
    if (city === null || city === '') {
      if (localStorage.getItem("oldCity")) {
        this.$city.textContent = localStorage.getItem("oldCity");
        this.place = localStorage.getItem("oldCity");
      } else {
        this.$city.textContent = '[ Введите местоположение ]';
        this.place = '';
      }
    } else {
      if (localStorage.getItem("oldCity")) {
        this.$city.textContent = localStorage.getItem("oldCity");
        this.place = localStorage.getItem("oldCity");
        localStorage.removeItem("oldCity");
      } else {
        this.$city.textContent = localStorage.getItem('city');
        this.place = localStorage.getItem('city');
      }
    }
    this.getWeather();
  };

  setCity = (event) => {
    if (event.type === 'keypress' && event.key !== 'Enter') {
      return false;
    } else {
      localStorage.setItem('city', this.$city.textContent);
      this.$city.blur();
      this.getCity();
    }
  };


  getWeather = async () => {
    if (this.place === '' || !this.place) return;

    const url = `https://${this.APIURL}${this.place}&lang=ru&appid=${this.APIKEY}&units=metric`;

    const data = await fetch(url)
      .then(res => res.json())
      .catch(e => console.log('Ошибка в получении погоды: ', e));

    // console.log(data);
    this.render(data);
  };

  render(data) {
    const $temp = document.querySelector('#temp');
    const $pressure = document.querySelector('#pressure');
    const $humidity = document.querySelector('#humidity');
    const $feelsLike = document.querySelector('#feels_like');
    const $sunrise = document.querySelector('#sunrise');
    const $sunset = document.querySelector('#sunset');
    const $description = document.querySelector('#description');
    const $icon = document.querySelector('#icon');

    const {temp, pressure, humidity, feels_like,} = data['main'];
    const {sunrise, sunset} = data['sys'];
    const {description, icon} = data['weather'][0];

    function textContent(el, data) {
      el.textContent = data;
    }

    function addPrevZerros(num) {
      return (parseInt(num, 10) < 10 ? '0' : '') + num;
    }

    function formatDataStr(date) {
      const newDate = new Date(date);
      let hour = newDate.getHours();
      let min = addPrevZerros(newDate.getMinutes());
      let sec = addPrevZerros(newDate.getSeconds());
      return `${hour} : ${min} : ${sec}`;
    }

    textContent($temp, temp);
    textContent($pressure, pressure);
    textContent($humidity, humidity);
    textContent($feelsLike, feels_like);
    textContent($sunrise, formatDataStr(sunrise));
    textContent($sunset, formatDataStr(sunset));
    textContent($description, description);
    $icon.className = 'weather-icon owf ' + icon;
  }
}

const weather = new Weather();


class Quote {
  constructor() {
    this.url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru`;

    this.init();
    this.getQuote();
  }

  init() {
    document.body.insertAdjacentHTML('beforeend', `
    <div id="blockquote">
      <div class="blockquote__text">
        <blockquote></blockquote>
        <figcaption></figcaption>
      </div>
      <button id="blockquote__change">
        <svg class="icon icon-exchange">
          <use xlink:href="icons/symbol-defs.svg#icon-exchange"></use>
        </svg>
      </button>
    </div>
    
    `);

    this.$el = document.querySelector('#blockquote');
    this.$blockquote = document.querySelector('blockquote');
    this.$figcaption = document.querySelector('figcaption');
    this.$changeBtn = document.querySelector('#blockquote__change');

    this.events();
  }

  events() {
    this.$changeBtn.addEventListener('click', this.getQuote);
  }

  render = (data) => {
    this.$el.classList.remove('show');
    const {quoteText, quoteAuthor} = data;
    console.log(quoteAuthor);
    console.log(quoteText);

    this.$blockquote.textContent = quoteText;
    this.$figcaption.textContent = quoteAuthor;

    setTimeout(() => {
      this.$el.classList.add('show');
    }, 300);
  };

  getQuote = async () => {
    this.$changeBtn.disabled = true;
    const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru`;
    const res = await fetch(url).catch(e => console.log('Ошибка при получении цитаты: ', e));
    const data = await res.json()
      .then(data => {
        this.$changeBtn.disabled = false;
        return data;
      });

    this.render(data);
  };
}

const quote = new Quote();