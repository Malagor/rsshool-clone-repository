class Button {
  constructor(eng, ru, shiftEng, shiftRu) {
    this.$key = null;
    this.eng = eng;
    this.ru = ru;
    this.shiftEng = shiftEng;
    this.shiftRu = shiftRu;
  }

  init() {
    const key = document.createElement('button');
    key.setAttribute("type", "button");
    key.classList.add("keyboard__key");
    this.$key = key;
  }

  getSymbol = (lang, shift = false, caps = false) => {

    const langShift = lang === 'eng' ? 'shiftEng' : 'shiftRu';
    if (shift) {
      if (this[langShift] === '') {
        if (caps) {
          return `${this[lang].toLowerCase()}`;
        } else {
          return `${this[lang].toUpperCase()}`;
        }
      } else {
        return `${this[langShift]}`;
      }
    } else { // !shift
      if (caps) {
        return `${this[lang].toUpperCase()}`;
      } else {
        return `${this[lang].toLowerCase()}`;
      }
    }
  };

  getElement = () => {
    return this.$key;
  };

  setContent = (lang = 'eng', shift = false, caps = false) => {
    this.$key.innerHTML = this.getSymbol(lang, shift, caps);
  };
}

class SpecialButton extends Button {
  constructor(eng, ru, shiftEng, shiftRu, icon, classes = []) {
    super(eng, ru, shiftEng, shiftRu);

    this.icon = icon;
    this.extraClasses = this._setClasses(classes);
  }

  init = () => {
    super.init();

    this.extraClasses.forEach(cls => {
      this.$key.classList.add(cls);
    });

  };

  _createIconHTML = () => {
    return `<i class="material-icons">${this.icon}</i>`;
  };

  _setClasses(classes) {

    if (typeof classes === 'string') {
      return classes.split(' ');
    } else {
      return classes;
    }

  }

  setNewIcon(icon) {
    this.icon = icon;
  }

  setContent = () => {
    this.$key.innerHTML = this._createIconHTML();
  };

  getElement() {
    const key = document.createElement('button');

    key.setAttribute("type", "button");
    key.classList.add("keyboard__key");
    key.innerHTML = this._createIconHTML(this.icon);

    this.$key = key;

    return this.$key;
  }
}

class Keyboard {
  constructor(el) {
    this.fullKeys = [
      {
        eng: 'mic',
        ru: 'микрофон',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'sound',
        ru: 'звук',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: '1',
        ru: '1',
        shiftEng: '!',
        shiftRu: '!'
      },
      {
        eng: '2',
        ru: '2',
        shiftEng: '@',
        shiftRu: '"'
      },
      {
        eng: '3',
        ru: '3',
        shiftEng: '#',
        shiftRu: '№'
      },
      {
        eng: '4',
        ru: '4',
        shiftEng: '$',
        shiftRu: ';'
      },
      {
        eng: '5',
        ru: '5',
        shiftEng: '%',
        shiftRu: '%'
      },
      {
        eng: '6',
        ru: '6',
        shiftEng: '^',
        shiftRu: ':'
      },
      {
        eng: '7',
        ru: '7',
        shiftEng: '&',
        shiftRu: '?'
      },
      {
        eng: '8',
        ru: '8',
        shiftEng: '*',
        shiftRu: '*'
      },
      {
        eng: '9',
        ru: '9',
        shiftEng: '(',
        shiftRu: '('
      },
      {
        eng: '0',
        ru: '0',
        shiftEng: ')',
        shiftRu: ')'
      },
      {
        eng: 'backspace',
        ru: 'стереть',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'q',
        ru: 'й',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'w',
        ru: 'ц',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'e',
        ru: 'у',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'r',
        ru: 'к',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 't',
        ru: 'е',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'y',
        ru: 'н',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'u',
        ru: 'г',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'i',
        ru: 'ш',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'o',
        ru: 'щ',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'p',
        ru: 'з',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: '[',
        ru: 'х',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: ']',
        ru: 'ъ',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'capslock',
        ru: 'capslock',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'a',
        ru: 'ф',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 's',
        ru: 'ы',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'd',
        ru: 'в',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'f',
        ru: 'а',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'g',
        ru: 'п',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'h',
        ru: 'р',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'j',
        ru: 'о',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'k',
        ru: 'л',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'l',
        ru: 'д',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: ';',
        ru: 'ж',
        shiftEng: ':',
        shiftRu: ''
      },
      {
        eng: '\'',
        ru: 'э',
        shiftEng: '"',
        shiftRu: ''
      },
      {
        eng: '\\',
        ru: '\\',
        shiftEng: '|',
        shiftRu: '/'
      },
      {
        eng: 'shift',
        ru: 'shift',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'z',
        ru: 'я',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'x',
        ru: 'ч',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'c',
        ru: 'с',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'v',
        ru: 'м',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'b',
        ru: 'и',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'n',
        ru: 'т',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'm',
        ru: 'ь',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: ',',
        ru: 'б',
        shiftEng: '<',
        shiftRu: ''
      },
      {
        eng: '.',
        ru: 'ю',
        shiftEng: '>',
        shiftRu: ''
      },
      {
        eng: '/',
        ru: '.',
        shiftEng: '?',
        shiftRu: ','
      },
      {
        eng: 'enter',
        ru: 'ввод',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'done',
        ru: 'done',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'space',
        ru: 'пробел',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'eng',
        ru: 'ru',
        shiftEng: '',
        shiftRu: ''
      },
      {
        eng: 'arrowleft',
        ru: '',
        shiftEng: '',
        shiftRu: ''
      }
      , {
        eng: 'arrowright',
        ru: '',
        shiftEng: '',
        shiftRu: ''
      }
    ];

    this.sounds = {
      clickRu: 'click-ru.mp3',
      clickEng: 'click-eng.mp3',
      backspace: 'backspace.mp3',
      capslock: 'capslock.mp3',
      enter: 'enter.mp3',
      shift: 'shift.mp3',
      space: 'space.mp3'
    };

    this.elements = {
      $startScreen: null,
      $container: document.querySelector(el),
      $el: null,
      $keysContainer: null,
      keys: [],
      $screen: null,
      $pipBoy: null,
      $doneBtn: null,
      $soundBtn: null,
      $micBtn: null
    };

    this.property = {
      value: '',
      capsLock: false,
      shift: false,
      lang: 'eng',
      caretPosition: 0,
      startSelection: 0,
      endSelection: 0,
      isSelection: false,
      isPlaySound: true,
      isMicrophone: false,
      isDone: false,
      recognition: null,
      startPositionRecord: null,
      endPositionRecord: null
    };

    this.size = {
      pipboy: null,
      screenHeigth: null,
      keyboard: null,

    };

    this.init();
    this._events();
  }

  init() {
    this.elements.$container.insertAdjacentHTML('beforeend',
      `
      <div id="keyboard" class="keyboard">
        <div id="keyboardKeys" class="keyboard__keys">
        
        </div>
      </div>
      `);

    this.elements.$startScreen = document.querySelector('.start-screen');
    this.elements.$el = document.querySelector('#keyboard');
    this.elements.$el.classList.add('keyboard--hidden');
    this.elements.$keysContainer = document.querySelector('#keyboardKeys');

    this.elements.$screen = document.querySelector('#screen');

    this.elements.$pipBoy = document.querySelector('#pipBoy');
    this.elements.$doneBtn = document.querySelector('#done');
    this.elements.$soundBtn = document.querySelector('#mic');
    this.elements.$micBtn = document.querySelector('#sound');

    this.property.caretPosition = this.elements.$screen.value.length;
    this.property.startSelection = this.elements.$screen.value.length;
    this.property.endSelection = this.elements.$screen.value.length;

    this._createKeys();
    this.render();
    this._setScreenHeigth();
  }

  _events = () => {

    // говорилка
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    window.onresize = this._setScreenHeigth;

    // Events TextArea
    // this.elements.$screen.addEventListener('focus', () => {
    //   this.open();
    // });

    this.elements.$pipBoy.addEventListener('click', () => {
      this.open();
    });

    this.elements.$screen.addEventListener('click', () => {
      this.property.caretPosition = this.elements.$screen.selectionStart;
    });

    // Нажатия клавиш на клавиатуре
    window.addEventListener('keydown', event => {

      this._setFocusScreen(this.elements.$screen.selectionStart, this.elements.$screen.selectionEnd);

      let realChar = event.key.toLowerCase();
      realChar = (realChar === ' ') ? 'space' : realChar;

      this.elements.keys.forEach(keyboardKey => {
        const keysObject = [keyboardKey.eng, keyboardKey.ru, keyboardKey.shiftRu, keyboardKey.shiftEng];

        if (keysObject.includes(realChar)) {

          let sound;

          switch (realChar) {
            case 'backspace':
              sound = 'backspace';
              this._setCaretPosition(this.property.caretPosition - 1);
              this.property.isSelection = false;
              break;

            case 'space':
              sound = 'space';
              this._setCaretPosition(this.property.caretPosition + 1);
              this.property.isSelection = false;
              break;

            case 'enter':
              sound = 'enter';
              this._setCaretPosition(this.property.caretPosition + 1);
              this.property.isSelection = false;
              break;

            case 'shift':
              sound = 'shift';
              this._toggleCapsLock(this._findKey('shift').$key);
              this._setFocusScreen(this.property.startSelection, this.property.endSelection);
              break;

            case 'arrowleft':
              sound = '';

              this._actionArrowLeft();
              this._setFocusScreen(this.property.startSelection, this.property.endSelection);

              // this._setCaretPosition(this.property.caretPosition - 1);
              break;

            case 'arrowright':
              sound = '';
              // this._setCaretPosition(this.property.caretPosition + 1);
              this._actionArrowRight();

              this._setFocusScreen(this.property.startSelection, this.property.endSelection);

              break;

            case 'capslock':
              sound = 'capslock';

              this._toggleCapsLock(this._findKey('capslock').$key);
              this._setFocusScreen(this.property.startSelection, this.property.endSelection);
              break;

            default:
              sound = '';
              this._setCaretPosition(this.property.caretPosition + 1);
              this.property.isSelection = false;
              break;
          }

          this._playSoundKeyClick(sound);
          keyboardKey.$key.classList.add('click');
          setTimeout(() => {
            keyboardKey.$key.classList.remove('click');
          }, 100);
        }
      });
    });

    // Click To Buttons
    document.body.addEventListener('click', (event) => {

      const target = event.target;

      this.elements.keys.forEach(element => {

        if (element.$key === target.closest('.keyboard__key')) {
          switch (element.eng) {
            case 'space':
              this._playSoundKeyClick('space');
              this._addSymbol(' ');
              this.property.isSelection = false;
              this._setFocusScreen();

              break;

            case 'backspace':
              this._playSoundKeyClick('backspace');
              this._addSymbol('', true);
              this.property.isSelection = false;
              this._setFocusScreen();

              break;

            case 'enter':
              this._playSoundKeyClick('enter');
              this._addSymbol('\n');
              this.property.isSelection = false;
              this._setFocusScreen();

              break;

            case 'capslock':
              this._playSoundKeyClick('capslock');
              this._toggleCapsLock(element.$key);
              // this._setFocus();
              this._setFocusScreen(this.property.startSelection, this.property.endSelection);

              break;

            case 'shift':
              this._playSoundKeyClick('shift');
              this._toggleShift(element.$key);
              // this._setFocus();
              this._setFocusScreen(this.property.startSelection, this.property.endSelection);

              break;

            case 'eng':
              this._playSoundKeyClick();
              this._toggleLang();
              // this._setFocus();
              this._setFocusScreen(this.property.startSelection, this.property.endSelection);

              break;

            case 'done':
              this._toggleDone();
              this._playSoundKeyClick();
              this.close();

              break;

            case 'sound':
              this._playSoundKeyClick();
              this._toggleSound();
              this._setFocusScreen(this.property.startSelection, this.property.endSelection);

              break;

            case 'mic':
              this._playSoundKeyClick();
              this._toggleMic();
              this._setFocusScreen(this.property.startSelection, this.property.endSelection);

              break;

            case 'arrowleft':
              this._playSoundKeyClick();
              this._actionArrowLeft();

              break;

            case 'arrowright':
              this._playSoundKeyClick();
              this._actionArrowRight();

              break;


            default:
              this._playSoundKeyClick();
              this._addSymbol(element.getSymbol(this.property.lang, this.property.shift, this.property.capsLock));
              this.property.isSelection = false;
              this._setFocusScreen();

              break;
          }
        }
      })
    })
  };

  _createKeys() {
    this.elements.keys = this.fullKeys.map(key => {
      let $key;

      switch (key.eng) {
        case "space":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, 'space_bar', 'keyboard__key--extra-wide');
          $key.init();
          return $key;

        case "enter":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, 'keyboard_return', ['keyboard__key--wide', "keyboard__key--light"]);
          $key.init();
          break;

        case "capslock":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, 'keyboard_capslock', ['keyboard__key--wide', 'keyboard__key--activatable']);
          $key.init();
          break;

        case "shift":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, 'arrow_upward', ['keyboard__key--wide', 'keyboard__key--activatable']);
          $key.init();
          break;

        case "backspace":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, 'backspace', 'keyboard__key--wide');
          $key.init();
          break;

        case "done":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, '', ['keyboard__key--wide', 'keyboard__key--dark']);
          $key.init();
          break;

        case "arrowleft":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, 'arrow_back', ['offset-left']);
          $key.init();
          break;

        case "arrowright":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, 'arrow_forward');
          $key.init();
          break;

        case "sound":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, '', 'keyboard__key--wide');
          $key.init();
          break;

        case "mic":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, '', ['keyboard__key--wide', 'keyboard__key--activatable']);
          $key.init();
          break;

        case "eng":
          $key = new Button(key.eng, key.ru, key.shiftEng, key.shiftRu);
          $key.init();
          $key.$key.classList.add('keyboard__key--wide');
          break;

        default:
          $key = new Button(key.eng, key.ru, key.shiftEng, key.shiftRu);
          $key.init();
          break;
      }
      return $key;
    });
  }

  _addSymbol = (symbol, backspace = false) => {

    const curChar = backspace ? '' : symbol;
    let beginStr;
    let endStr;

    if (this.elements.$screen.selectionStart === this.elements.$screen.selectionEnd) {
      beginStr = backspace
        ? this.elements.$screen.value.substring(0, this.property.caretPosition - 1)
        : this.elements.$screen.value.substring(0, this.property.caretPosition);
      endStr = this.elements.$screen.value.substring(this.property.caretPosition);
      backspace ? this._setCaretPosition(this.property.caretPosition - 1) : this._setCaretPosition(this.property.caretPosition + 1);

    } else {

      beginStr = this.elements.$screen.value.substring(0, this.elements.$screen.selectionStart);
      endStr = this.elements.$screen.value.substring(this.elements.$screen.selectionEnd);
      this.property.caretPosition = backspace ? this.elements.$screen.selectionStart : this._setCaretPosition(this.elements.$screen.selectionStart + 1);
    }

    this.elements.$screen.value = beginStr + curChar + endStr;
  };

  // находит соответствие реальной и фиртуальной кнопки
  _findKey = (findK) => {
    const arrKeys = this.elements.keys.filter(key => {
      return key.eng === findK;
    });
    return arrKeys[0];
  };

  // Устанавливает высоту экрана
  _setScreenHeigth = () => {
    const pipboyHeigth = this.elements.$pipBoy.clientHeight;
    const keyboardHeight = this.elements.$keysContainer.clientHeight;
    const screenHeigth = pipboyHeigth - keyboardHeight;

    this.elements.$screen.style.height = (screenHeigth - 10) + 'px';
  };

  // Устанавливает позицию каретки. Проверяет на пограничные значения
  _setCaretPosition = (num) => {
    if (num <= 0) {
      this.property.caretPosition = 0;
    } else if (num >= (this.elements.$screen.value.length + 1)) {
      this.property.caretPosition = this.elements.$screen.value.length + 1;
    } else {
      this.property.caretPosition = num;
    }
    return this.property.caretPosition;
  };

  // Возвращает фокус на экран и устанавливает положение катерики и границ выделения текста
  _setFocusScreen(start = undefined, finish = undefined) {
    this.elements.$screen.selectionStart = start ? start : this.property.caretPosition;
    this.elements.$screen.selectionEnd = finish ? finish : this.property.caretPosition;

    this.property.startSelection = start ? start : this.property.caretPosition;
    this.property.endSelection = finish ? finish : this.property.caretPosition;

    if (this.property.startSelection === this.property.endSelection) {
      this.property.isSelection = false;
    }
    this.elements.$screen.focus();
  }

  _actionArrowLeft() {
    if (this.property.shift) {

      if (this.property.isSelection === false) {

        this.property.endSelection = this.property.caretPosition; // начальное значение
        this._setCaretPosition(this.property.caretPosition - 1);
        this.property.startSelection = this.property.caretPosition;
        this._setFocusScreen(this.property.startSelection, this.property.endSelection);
        this.property.isSelection = true;

      } else {
        if (this.property.caretPosition > this.property.endSelection) {
          this._setCaretPosition(this.property.caretPosition - 1);
          this._setFocusScreen(this.property.startSelection, this.property.endSelection);

        } else {
          this._setCaretPosition(this.property.caretPosition - 1);
          this.property.startSelection = this.property.caretPosition;
          this._setFocusScreen(this.property.startSelection, this.property.endSelection);
        }
      }
    } else { // тут работает
      this.property.isSelection = false;
      this._setCaretPosition(this.property.caretPosition - 1);
      this._setFocusScreen();
    }
  }

  _actionArrowRight() {
    if (this.property.shift) {

      if (this.property.isSelection === false) {

        this.property.startSelection = this.property.caretPosition; // начальное значение
        this._setCaretPosition(this.property.caretPosition + 1);
        this.property.endSelection = this.property.caretPosition;
        this._setFocusScreen(this.property.startSelection, this.property.endSelection);
        this.property.isSelection = true;

      } else {
        if (this.property.caretPosition < this.property.endSelection) {
          this._setCaretPosition(this.property.caretPosition + 1);
          this._setFocusScreen(this.property.startSelection, this.property.endSelection);

        } else {
          this._setCaretPosition(this.property.caretPosition + 1);
          this.property.endSelection = this.property.caretPosition;
          this._setFocusScreen(this.property.startSelection, this.property.endSelection);
        }
      }
    } else { // тут работает
      this.property.isSelection = false;
      this._setCaretPosition(this.property.caretPosition + 1);
      this._setFocusScreen();
    }
  }

  // проигрывает звут нажатой клавиши
  _playSoundKeyClick(key) {
    if (this.property.isPlaySound) {
      const audio = new Audio(); // Создаём новый элемент Audio

      if (['backspace', 'capslock', 'enter', 'shift', 'space'].includes(key)) {
        audio.src = `./sounds/${this.sounds[key]}`;
      } else {
        audio.src = this.property.lang === 'eng' ? `./sounds/${this.sounds['clickEng']}` : `./sounds/${this.sounds['clickRu']}`;
      }
      audio.autoplay = true;
    }
  }

  /*
    ПЕРЕКЛЮЧАТЕЛИ
   */

  // Переключает кнопку звука клавиш
  _toggleSound() {
    this.property.isPlaySound = !this.property.isPlaySound;
    this.render();
  }

  _toggleCapsLock($key) {
    this.property.capsLock = !this.property.capsLock;
    $key.classList.toggle('keyboard__key--active');
    this.render();
  }

  _toggleShift($key) {
    this.property.shift = !this.property.shift;
    $key.classList.toggle('keyboard__key--active');
    this.render();
  }

  _toggleLang() {
    if (this.property.lang === 'eng') {
      this.property.lang = 'ru';
    } else {
      this.property.lang = 'eng'
    }
    this.render();
  }

  _toggleDone() {
    this.property.isDone = !this.property.isDone;
    this.render();
  }

  _toggleMic() {
    this.property.isMicrophone = !this.property.isMicrophone;
    this.render();
    this._speechRecord();
  }

  // Записывает речь пользователя
  _speechRecord() {
    if (this.property.isMicrophone) {
      this.property.recognition = new SpeechRecognition();

      this.property.recognition.interimResults = true;
      this.property.recognition.lang = this.property.lang === 'eng' ? 'en-US' : 'ru-RU';


      this.property.recognition.addEventListener('result', this._printResultRecordToScreen);


      this.property.recognition.addEventListener('end', () => {
        if (this.property.isMicrophone) {
          this.property.recognition.start();
        }
      });

      this.property.recognition.start();

    } else { // Остановка записи
      this.property.recognition.abort();
      this.property.recognition.stop();
      this.property.recognition = null;
    }
  }

  // Помещает записанную речь на экран в место каретки
  _printResultRecordToScreen = (e) => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

    if (e.results[0].isFinal) {
      // this.__printCursorsPosition();
      this._addSymbol(transcript);
      this.property.caretPosition = this._setCaretPosition(this.property.caretPosition + transcript.length - 1);

      // В конце фразу добавляем пробел
      this._addSymbol(' ');
      this._setCaretPosition(this.property.caretPosition);
      this._setFocusScreen();
    }
  };

  // Выводит в консоль позицию каретки и границ выделения текста
  __printCursorsPosition() {
    console.log('Start Selection:', this.property.startSelection);
    console.log('End Selection:', this.property.endSelection);
    console.log('Caret:', this.property.caretPosition);
    console.log('-------');
  }


  // Перерисовывае все кнопки клавиатуры
  render() {
    const fragment = document.createDocumentFragment();

    this.elements.keys.forEach(key => {
      const insertLineBreak = ["backspace", "]", "enter", "\\"].indexOf(key.eng) !== -1;

      if (key.eng === 'sound') {
        if (this.property.isPlaySound) {
          // key.setNewIcon('music_note');
          key.$key.classList.add('keyboard__key--active');

        } else {
          // key.setNewIcon('music_off');
          key.$key.classList.remove('keyboard__key--active');
        }
      }
      if (key.eng === 'done') {
        if (this.property.isDone) {
          key.$key.classList.add('keyboard__key--active');
        } else {
          key.$key.classList.remove('keyboard__key--active');
        }
      }


      if (key.eng === 'mic') {
        if (this.property.isMicrophone) {
          // key.setNewIcon('mic');
          key.$key.classList.add('keyboard__key--active-red');
        } else {
          key.$key.classList.remove('keyboard__key--active-red');
          // key.setNewIcon('mic_none');
        }
      }

      key.setContent(this.property.lang, this.property.shift, this.property.capsLock);

      if (['done', 'mic', 'sound'].includes(key.eng)) {
        switch (key.eng) {
          case 'done':
            this.elements.$doneBtn.appendChild(key.getElement());
            break;

          case 'mic':
            this.elements.$micBtn.appendChild(key.getElement());

            break;

          case 'sound':
            this.elements.$soundBtn.appendChild(key.getElement());

            break;

          default:
            break;
        }
      } else {
        fragment.appendChild(key.getElement());
      }

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    this.elements.$keysContainer.innerHTML = '';
    this.elements.$keysContainer.appendChild(fragment);
  }

  // Скрывает клавиатуру и экран. Показывает стартовый э
  close() {
    this.elements.$el.classList.toggle('keyboard--hidden');
    this.elements.$screen.classList.toggle('screen--hidden');
    this.elements.$startScreen.classList.toggle('start-screen--hidden');
  }

  // Показывает клавиатуру и экран
  open() {
    this.elements.$el.classList.remove('keyboard--hidden');
    this.elements.$screen.classList.remove('screen--hidden');
    this.elements.$startScreen.classList.add('start-screen--hidden');
    this._findKey('done').$key.classList.add('keyboard__key--active');
    this.property.isDone = true;
  }
}

// Когда DOM готов, поехали
window.addEventListener('DOMContentLoaded', () => {
  new Keyboard('#app');
});
