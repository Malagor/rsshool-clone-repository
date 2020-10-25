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
      <div class="controls">
        <button id="prevImage"><svg class="icon icon-arrow">
              <use xlink:href="assets/icons/symbol-defs.svg#icon-arrow"></use>
            </svg></button>
        <button id="nextImage"><svg class="icon icon-arrow">
              <use xlink:href="assets/icons/symbol-defs.svg#icon-arrow"></use>
            </svg></button>
      </div>
      <time id="time"></time>
      <time id="date" class="date"></time>

      <h1>
        <span id="greeting"></span>
        <span class="name" id="name" contenteditable="true"></span>
      </h1>

      <h2>Текущая задача:</h2>
      <h2 class="focus" id="focus" contenteditable="true"></h2>
  `);

    this.$time = document.querySelector('#time');
    this.$date = document.querySelector('#date');
    this.$greeting = document.querySelector('#greeting');
    this.$name = document.querySelector('#name');
    this.$focus = document.querySelector('#focus');

    this.getName();
    this.getFocus();
    this.events();
  }

  static addPrevZerros(num) {
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
    let hour = today.getHours();
    let min = Momentum.addPrevZerros(today.getMinutes());
    let sec = Momentum.addPrevZerros(today.getSeconds());
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


/*
*   ИЗМЕНЕНИЕ БЕКГРАУНДА
*/
class Images {
  constructor() {
    this.init();
    this.events();
    this.timer();
  }

  init() {
    this.$prev = document.querySelector('#prevImage');
    this.$next = document.querySelector('#nextImage');

    this.getImages();

    this.setImage(new Date().getHours());
  }


  getImages = () => {
    function randomIndex(num = 6, max = 19) {
      const curArray = [];

      while (curArray.length < num) {
        const index = 1 + Math.floor(Math.random() * Math.floor(max));
        if (!curArray.includes(index)) {
          curArray.push(index);
        }
      }

      return curArray;
    }

    const folders = ['night', 'morning', 'day', 'evening'];
    const url = 'assets/images';
    const images = [];

    folders.forEach(folder => {
      const index = randomIndex();
      index.forEach(i => {
        const filename = `${Momentum.addPrevZerros(i)}.jpg`;
        const urlToImg = `${url}/${folder}/${filename}`;
        images.push(urlToImg);
      })
    });

    this.images = images;
    this.countAllImages = images.length;
  };


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

    const src = this.images[this.curImage];
    document.body.style.backgroundImage = `url(${src})`;

    setTimeout(() => {
      document.querySelector('#prevImage').disabled = false;
      document.querySelector('#nextImage').disabled = false;
    }, 1000);

  };

  setImage = (index) => {
    const $body = document.body;
    const src = `${this.images[index]}`;
    const img = document.createElement('img');
    this.curImage = index;
    img.src = src;

    img.onload = () => {
      $body.style.backgroundImage = `url(${src})`;
    };

    $body.style.backgroundImage = `url(${this.images[index]})`;

  };

  stopTimer = () => {
    clearTimeout(this.timerHendler);
    this.timerHendler = undefined;
    setTimeout(this.timer, 60000);
  };


  timer = () => {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    if (min === 0 && sec === 0) {
      // setBackground(sec);
      this.curImage = hour;
      this.setImage(hour);
    }

    this.timerHendler = setTimeout(this.timer.bind(this), 1000);
  }
}

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
    this.timer();
  }

  init() {
    document.body.insertAdjacentHTML('beforeend', `
    <div id="weather">
      <div id="city" contenteditable="true">[ Введите город ]</div>
      <div id="weather__error"></div>
      <div class="weather__info">
        <div class="temp"><span id="temp"></span> °C</div>
        <div class="icon-weather__wrapper"><i id="icon" class="weather-icon owf"></i></div>
      </div>     
        <div id="description"></div>
        <div class="humidity">Влажность: <span id="humidity"></span> %</div>
        <div class="wind" id="wind">
        <div class="wind__label">Ветер:</div>
          <div class="wind__direction" id="direction">
            <svg class="icon icon-down-arrow">
              <use xlink:href="assets/icons/symbol-defs.svg#icon-down-arrow"></use>
            </svg>
          </div>
          <div class="wind__direction-name" id="directionName"></div>
          <span class="wind__speed" id="speed"></span><span> m/c</span>
        </div> 
    </div>
    `);

    this.$widget = document.querySelector('#weather');
    this.$city = document.querySelector('#city');
    this.$btn = document.querySelector('#openWeather');
    this.$weather__error = document.querySelector('#weather__error');
  }

  timer() {
    this.getWeather().catch(e => console.log('Ошибка получения погоды:', e));
    setTimeout(this.timer, 60 * 60 * 1000);
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

      if (target.closest('#openWeather')) this.openWidget();
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
    this.getWeather().catch(e => console.log('Ошибка получения погоды', e));
  };

  openWidget() {
    this.$btn.disabled = true;
    this.$widget.classList.toggle('open');

    setTimeout(() => {
      this.$btn.disabled = false;
    }, 500)
  }

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

    const res = await fetch(url);
    const data = await res.json();

    if (data['cod'] >= 400) {
      this.$widget.classList.add('error');
      this.$weather__error.innerHTML = `Ошибка обновления<br> "${data['message']}"`;
    } else {
      this.$widget.classList.remove('error');
      this.render(data);
    }
  };

  render(data) {
    if (data['cod'] > 400) return;

    const $temp = document.querySelector('#temp');
    const $humidity = document.querySelector('#humidity');
    const $direction = document.querySelector('#direction .icon-down-arrow');
    const $directionName = document.querySelector('#directionName');
    const $speed = document.querySelector('#speed');
    const $description = document.querySelector('#description');
    const $icon = document.querySelector('#icon');


    const {temp, humidity} = data['main'];
    const {description, id: icon} = data['weather'][0];

    const {deg: direction, speed} = data['wind'];

    function textContent(el, data) {
      el.textContent = data;
    }

    function isNight() {
      const date = new Date();
      const hour = date.getHours();

      return hour < 6
    }

    function setDirection(deg) {
      $direction.style.transform = `rotate(${deg}deg)`;

      let dir = '';
      if (deg < 22.5) {
        dir = 'С';
      } else if (deg < 67.5) {
        dir = 'СВ';
      } else if (deg < 112.5) {
        dir = 'С';
      } else if (deg < 157.5) {
        dir = 'ЮВ';
      } else if (deg < 202.5) {
        dir = 'Ю';
      } else if (deg < 247.5) {
        dir = 'ЮЗ';
      } else if (deg < 292.5) {
        dir = 'СЗ';
      } else if (deg < 360) {
        dir = 'C'
      }

      return dir;
    }

    $icon.className = 'weather-icon owf owf-' + icon + (isNight() ? '-n' : '-d');
    textContent($temp, temp);
    textContent($description, description);
    textContent($humidity, humidity);
    textContent($directionName, `${direction}° (${setDirection(direction)}) `);
    textContent($speed, ' ' + speed);

  }
}

class Quote {
  constructor() {
    this.url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru`;

    this.init();
    this.getQuote().catch(e => console.log('Ошибка получения цитаты:', e));
  }

  init() {
    document.body.insertAdjacentHTML('beforeend', `
    <div id="blockquote">
    <div class="blockquote__error"></div>
      <div class="blockquote__text">
        <blockquote></blockquote>
        <figcaption></figcaption>
      </div>
      <button id="blockquote__change">
        <svg class="icon icon-exchange">
          <use xlink:href="assets/icons/symbol-defs.svg#icon-exchange"></use>
        </svg>
      </button>
    </div>    
    `);

    this.$el = document.querySelector('#blockquote');
    this.$blockquote = document.querySelector('blockquote');
    this.$figcaption = document.querySelector('figcaption');
    this.$changeBtn = document.querySelector('#blockquote__change');
    this.$error = document.querySelector('.blockquote__error');

    this.events();
  }

  events() {
    this.$changeBtn.addEventListener('click', this.getQuote);
  }

  render = (data) => {
    this.$el.classList.remove('show');

    const {quoteText, quoteAuthor} = data;
    this.$blockquote.textContent = quoteText;
    this.$figcaption.textContent = quoteAuthor;

    setTimeout(() => {
      this.$el.classList.add('show');
    }, 300);
  };

  getQuote = async () => {
    this.$changeBtn.disabled = true;
    const res = await fetch(this.url).catch(e => console.log('Ошибка при получении цитаты: ', e));
    const data = await res.json()
      .then(data => {
        this.$changeBtn.disabled = false;
        return data;
      });

    if (data['cod'] >= 400) {
      this.$el.classList.add('error');
      this.$error.innerHTML = `Ошибка обновления`
    } else {
      this.$el.classList.remove('error');
      this.render(data);
    }
  };
}


new Momentum('#main-content');
new Images();
new Weather();
new Quote();