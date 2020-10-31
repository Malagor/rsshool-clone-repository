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
    if (lang === 'eng') {

      if (shift) {

        if (this.shiftEng === '') {
          if (caps) {
            return `${this.eng.toLowerCase()}`;
          } else {
            return `${this.eng.toUpperCase()}`;
          }
        } else {
          return `${this.shiftEng}`;
        }

      } else { // !shift
        if (caps) {
          return `${this.eng.toUpperCase()}`;
        } else {
          return `${this.eng.toLowerCase()}`;
        }
      }
    } else { // ru

      if (shift) {

        if (this.shiftRu === '') {
          if (caps) {
            return `${this.ru.toLowerCase()}`;
          } else {
            return `${this.ru.toUpperCase()}`;
          }
        } else {
          return `${this.shiftRu}`;
        }

      } else { // !shift

        if (caps) { // caps
          return `${this.ru.toUpperCase()}`;
        } else { // !caps
          return `${this.ru.toLowerCase()}`;
        }
      }
    }


    //
    // if (lang === 'eng') {
    //
    //   if (shift) {
    //
    //     if (this.shiftEng === '') {
    //       return this.eng.toUpperCase();
    //     } else {
    //       return this.shiftEng;
    //     }
    //
    //   } else { // !shift
    //     return this.eng.toLowerCase();
    //   }
    // } else { // ru
    //
    //   if (shift) {
    //
    //     if (this.shiftRu === '') {
    //       return this.ru.toUpperCase();
    //     } else {
    //       return this.shiftRu;
    //     }
    //
    //   } else { // !shift
    //     return this.ru.toLowerCase();
    //   }
    // }

  };

  getElement = () => {
    return this.$key;
  };

  setContent = (lang = 'eng', shift = false, caps = false) => {
    if (lang === 'eng') {

      if (shift) {

        if (this.shiftEng === '') {
          if (caps) {
            this.$key.innerHTML = `${this.eng.toLowerCase()}<div class="shift">${this.shiftEng}</div>`;
          } else {
            this.$key.innerHTML = `${this.eng.toUpperCase()}<div class="shift">${this.shiftEng}</div>`;
          }
        } else {
          this.$key.innerHTML = `${this.shiftEng}<div class="shift">${this.eng.toUpperCase()}</div>`;
        }

      } else { // !shift
        if (caps) {
          this.$key.innerHTML = `${this.eng.toUpperCase()}<div class="shift">${this.shiftEng}</div>`;
        } else {
          this.$key.innerHTML = `${this.eng.toLowerCase()}<div class="shift">${this.shiftEng}</div>`;
        }
      }
    } else { // ru

      if (shift) {

        if (this.shiftRu === '') {
          if (caps) {
            this.$key.innerHTML = `${this.ru.toLowerCase()}<div class="shift">${this.shiftRu}</div>`;
          } else {
            this.$key.innerHTML = `${this.ru.toUpperCase()}<div class="shift">${this.shiftRu}</div>`;
          }
        } else {
          this.$key.innerHTML = `${this.shiftRu}<div class="shift">${this.ru.toUpperCase()}</div>`;
        }

      } else { // !shift

        if (caps) { // caps
          this.$key.innerHTML = `${this.ru.toUpperCase()}<div class="shift">${this.shiftRu}</div>`;
        } else { // !caps
          this.$key.innerHTML = `${this.ru.toLowerCase()}<div class="shift">${this.shiftRu}</div>`;
        }
      }
    }
  };

  // getContent() {
  //   this.$key.addEventListener('click', () => {
  //     return this.$key.textContent;
  //   })
  // }
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
    // this.events();

    return this.$key;
  }
}

class Keyboard {
  constructor(el) {
    this.fullKeys = [
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
        eng: 'caps',
        ru: 'caps',
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
        eng: 'arrowLeft',
        ru: '',
        shiftEng: '',
        shiftRu: ''
      }
      , {
        eng: 'arrowRight',
        ru: '',
        shiftEng: '',
        shiftRu: ''
      }
    ];

    this.sounds = {
      clickRu: 'click-ru.mp3',
      clickEng: 'click-eng.mp3',
      backspace: 'backspace.mp3',
      caps: 'caps.mp3',
      enter: 'enter.mp3',
      shift: 'shift.mp3',
      space: 'space.mp3'
    };

    this.elements = {
      $container: document.querySelector(el),
      $el: null,
      $keysContainer: null,
      keys: [],
      $screen: null
    };

    this.property = {
      value: '',
      capsLock: false,
      shift: false,
      lang: 'eng',
      // isLongShift: false,
      caretPosition: 0,
      startSelection: 0,
      endSelection: 0,
      isSelection: false,
      isPlaySound: true
      // caretPosition: null,
      // startSelection: null,
      // endSelection: null,
      // timeoutId: null
    };

    this.init();
    this.events();
  }

  init() {
    this.elements.$container.insertAdjacentHTML('beforeend',
      `
      <div id="keyboard" class="keyboard 111111-----keyboard--hidden">
        <div id="keyboardKeys" class="keyboard__keys">
        
        </div>
      </div>
      `);

    this.elements.$el = document.querySelector('#keyboard');
    this.elements.$keysContainer = document.querySelector('#keyboardKeys');

    this.elements.$screen = document.querySelector('#screen');

    this.property.caretPosition = this.elements.$screen.value.length;
    console.log('Каретка:', this.property.caretPosition);


    this._createKeys();
    this.render();
  }

  events = () => {

    /*
        Click To TextArea
     */

    this.elements.$screen.addEventListener('click', () => {
      this.property.caretPosition = this.elements.$screen.selectionStart;
      // console.log('Каретка', this.property.caretPosition);
    });


    /*
          Click To Buttons
     */
    this.elements.$keysContainer.addEventListener('click', (event) => {


      const target = event.target;

      this.elements.keys.forEach(element => {

        if (element.$key === target.closest('.keyboard__key')) {

          /*
              Add Symbol To Caret Position adn Delete Selection
           */
          const addSymbol = (symbol, backspace = false) => {

            const curChar = backspace ? '' : symbol;
            let beginStr;
            let endStr;

            if (this.elements.$screen.selectionStart === this.elements.$screen.selectionEnd) {

              beginStr = backspace
                ? this.elements.$screen.value.substring(0, this.property.caretPosition - 1)
                : this.elements.$screen.value.substring(0, this.property.caretPosition);
              endStr = this.elements.$screen.value.substring(this.property.caretPosition);

              backspace ? this._setCaret(this.property.caretPosition - 1) : this._setCaret(this.property.caretPosition + 1);

            } else {

              beginStr = this.elements.$screen.value.substring(0, this.elements.$screen.selectionStart);
              endStr = this.elements.$screen.value.substring(this.elements.$screen.selectionEnd);
              this.property.caretPosition = backspace ? this.elements.$screen.selectionStart : this._setCaret(this.elements.$screen.selectionStart + 1);

            }

            this.elements.$screen.value = beginStr + curChar + endStr;
          };

          switch (element.eng) {
            case 'space':
              this._clickSound('space');
              addSymbol(' ');
              this.property.isSelection = false;
              this._setFocus();

              break;

            case 'backspace':
              this._clickSound('backspace');
              addSymbol('', true);
              this.property.isSelection = false;
              this._setFocus();

              break;

            case 'enter':
              this._clickSound('enter');
              addSymbol('\n');
              this.property.isSelection = false;
              this._setFocus();

              break;

            case 'caps':
              this._clickSound('caps');
              this._toggleCapsLock(element.$key);
              // this._setFocus();
              this._setFocus(this.property.startSelection, this.property.endSelection);

              break;

            case 'shift':
              this._clickSound('shift');
              this._toggleShift(element.$key);
              // this._setFocus();
              this._setFocus(this.property.startSelection, this.property.endSelection);

              break;

            case 'eng':
              this._toggleLang();
              // this._setFocus();
              this._setFocus(this.property.startSelection, this.property.endSelection);

              break;

            case 'arrowLeft':

              if (this.property.shift) {

                if (this.property.isSelection === false) {

                  this.property.endSelection = this.property.caretPosition; // начальное значение
                  this._setCaret(this.property.caretPosition - 1);
                  this.property.startSelection = this.property.caretPosition;
                  this._setFocus(this.property.startSelection, this.property.endSelection);
                  this.property.isSelection = true;

                } else {
                  if (this.property.caretPosition > this.property.endSelection) {
                    this._setCaret(this.property.caretPosition - 1);
                    this._setFocus(this.property.startSelection, this.property.endSelection);

                  } else {
                    this._setCaret(this.property.caretPosition - 1);
                    this.property.startSelection = this.property.caretPosition;
                    this._setFocus(this.property.startSelection, this.property.endSelection);
                  }
                }
              } else { // тут работает
                this.property.isSelection = false;
                this._setCaret(this.property.caretPosition - 1);
                this._setFocus();
              }

              break;

            case 'arrowRight':

              if (this.property.shift) {

                if (this.property.isSelection === false) {

                  this.property.startSelection = this.property.caretPosition; // начальное значение
                  this._setCaret(this.property.caretPosition + 1);
                  this.property.endSelection = this.property.caretPosition;
                  this._setFocus(this.property.startSelection, this.property.endSelection);
                  this.property.isSelection = true;

                } else {
                  if (this.property.caretPosition < this.property.endSelection) {
                    this._setCaret(this.property.caretPosition + 1);
                    this._setFocus(this.property.startSelection, this.property.endSelection);

                  } else {
                    this._setCaret(this.property.caretPosition + 1);
                    this.property.endSelection = this.property.caretPosition;
                    this._setFocus(this.property.startSelection, this.property.endSelection);
                  }
                }
              } else { // тут работает
                this.property.isSelection = false;
                this._setCaret(this.property.caretPosition + 1);
                this._setFocus();
              }

              break;

            case 'sound':
              this._toggleSound();
              this._setFocus(this.property.startSelection, this.property.endSelection);

              break;


            default:
              this._clickSound();
              addSymbol(element.getSymbol(this.property.lang, this.property.shift, this.property.capsLock));
              this.property.isSelection = false;
              this._setFocus();

              break;
          }
        }
      })
    })
  };

  _setCaret = (num) => {
    if (num <= 0) {
      this.property.caretPosition = 0;
    } else if (num >= (this.elements.$screen.value.length + 1)) {
      this.property.caretPosition = this.elements.$screen.value.length + 1;
    } else {
      this.property.caretPosition = num;
    }
    return this.property.caretPosition;
  };

  _setFocus(start = undefined, finish = undefined) {
    this.elements.$screen.selectionStart = start ? start : this.property.caretPosition;
    this.elements.$screen.selectionEnd = finish ? finish : this.property.caretPosition;

    this.property.startSelection = start ? start : this.property.caretPosition;
    this.property.endSelection = finish ? finish : this.property.caretPosition;

    if (this.property.startSelection === this.property.endSelection) {
      this.property.isSelection = false;
    }
    this.elements.$screen.focus();
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

        case "caps":
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
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, 'check_circle', ['keyboard__key--wide', 'keyboard__key--dark']);
          $key.init();
          break;

        case "arrowLeft":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, 'arrow_back', ['offset-left']);
          $key.init();
          break;

        case "arrowRight":
          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, 'arrow_forward');
          $key.init();
          break;

        case "sound":

          $key = new SpecialButton(key.eng, key.ru, key.shiftEng, key.shiftRu, 'music_note', 'keyboard__key--extra');

          $key.init();
          return $key;


        default:
          $key = new Button(key.eng, key.ru, key.shiftEng, key.shiftRu);
          $key.init();
          break;
      }

      return $key;
    });
  }

  render() {
    const fragment = document.createDocumentFragment();

    this.elements.keys.forEach(key => {
      const insertLineBreak = ["backspace", "]", "enter", "\\", "sound"].indexOf(key.eng) !== -1;

      if (key.eng === 'sound') {
        if (this.property.isPlaySound) {
          key.setNewIcon('music_note')
        } else {
          key.setNewIcon('music_off')
        }
      }

      key.setContent(this.property.lang, this.property.shift, this.property.capsLock);

      fragment.appendChild(key.getElement());
      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }

    });

    this.elements.$keysContainer.innerHTML = '';
    this.elements.$keysContainer.appendChild(fragment);
  }

  _toggleSound() {
    this.property.isPlaySound = !this.property.isPlaySound;
    this.render();
  }

  _clickSound(key) {
    if (this.property.isPlaySound) {
      const audio = new Audio(); // Создаём новый элемент Audio

      if (['backspace', 'caps', 'enter', 'shift', 'space'].includes(key)){
        audio.src = `./sounds/${this.sounds[key]}`;
      } else {

        audio.src = this.property.lang === 'eng' ? `./sounds/${this.sounds['clickEng']}` : `./sounds/${this.sounds['clickRu']}`;
      }
      audio.autoplay = true;

    }
  }
}

const Keyboard2 = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
    screen: null,
    shift: null
  },

  eventHandlers: {
    oninput: null,
    onclose: null
  },

  properties: {
    value: '',
    capsLock: false,
    shift: false,
    isLongShift: false,
    isSelection: false,
    caretPosition: null,
    startSelection: null,
    endSelection: null,
    timeoutId: null
  },

  init(screen) {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // Setup main elements
    this.elements.main.classList.add('keyboard', '111111-----keyboard--hidden');
    this.elements.main.id = 'keyboard';

    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.id = 'keyboardKeys';
    this.elements.keysContainer.appendChild(this._createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');
    this.elements.shift = this.elements.keysContainer.querySelector('#shift');

    this.elements.screen = document.querySelector(screen);

    // Add to DOM

    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    this._events();
  },

  _events() {
    // Automatically use keyboard for elements with .use-keyboard-input
    this.elements.screen.addEventListener('focus', () => {
      this._getCaret();
      this.open(this.elements.screen.value, currentValue => {
        this.elements.screen.value = currentValue;
      })
    });


    this.elements.screen.addEventListener('blur', event => {
      event.preventDefault();
      this.elements.screen.focus();

    });

    this.elements.screen.addEventListener('click', () => {
      console.log(this._getCaret());
    });

    this.elements.screen.addEventListener('mousedown', () => {
      this._startSelection();
    });

    this.elements.screen.addEventListener('mouseup', () => {
      this._endSelection();
    });

    window.addEventListener('keydown', event => {
      const code = event.code;
      if (code === 'ArrowLeft') {
        this.properties.caretPosition--;
      } else if (code === 'ArrowRight') {
        this.properties.caretPosition++;
      }
      console.log(this.properties.caretPosition);
    });
  },

  _startSelection() {
    this.properties.startSelection = this.elements.screen.selectionStart
  },

  _endSelection() {
    this.properties.endSelection = this.elements.screen.selectionEnd;
    this.properties.startSelection = this.elements.screen.selectionStart;

    this.properties.isSelection = this.properties.startSelection !== this.properties.endSelection;

  },

  _createKeys: function () {

    const fragment = document.createDocumentFragment();

    const fullKeys = [
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
        shiftRu: '!'
      },
      {
        eng: '4',
        ru: '4',
        shiftEng: '$',
        shiftRu: '!'
      },
      {
        eng: '5',
        ru: '5',
        shiftEng: '%',
        shiftRu: '!'
      },
      {
        eng: '6',
        ru: '6',
        shiftEng: '^',
        shiftRu: '!'
      },
      {
        eng: '7',
        ru: '7',
        shiftEng: '&',
        shiftRu: '!'
      },
      {
        eng: '8',
        ru: '8',
        shiftEng: '*',
        shiftRu: '!'
      },
      {
        eng: '9',
        ru: '9',
        shiftEng: '(',
        shiftRu: '!'
      },
      {
        eng: '0',
        ru: '0',
        shiftEng: ')',
        shiftRu: '!'
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
        eng: 'caps',
        ru: 'caps',
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
        shiftEng: '?',
        shiftRu: ','
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
      }
    ];


    // Create HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    fullKeys.forEach(key => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ["backspace", "]", "enter", "\\"].indexOf(key.eng) !== -1;

      // Add Attributes/Classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");


      switch (key.eng) {

        case 'backspace':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('backspace');

          keyElement.addEventListener('click', () => {
            if (this.elements.screen.selectionStart === this.elements.screen.selectionEnd) {
              this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
              this.properties.caretPosition--;

            } else {
              this.properties.value = this.properties.value.substring(0, this.elements.screen.selectionStart) + this.properties.value.substring(this.elements.screen.selectionEnd);
              this.properties.caretPosition = this.elements.screen.selectionStart;
              this.properties.isSelection = false;
            }
            this._triggerEvents("oninput");

          });

          break;

        case 'caps':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
          keyElement.innerHTML = createIconHTML('keyboard_capslock');

          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle('keyboard__key--active');
          });

          break;

        case 'shift':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
          keyElement.id = 'shift';
          keyElement.innerHTML = createIconHTML('arrow_upward ');

          keyElement.addEventListener('click', () => {
            this._toggleShift(event);
            // keyElement.classList.toggle('keyboard__key--active');
          });

          keyElement.addEventListener('dblclick', () => {
            this.properties.isLongShift = true;
            this._toggleShift(event);
            // keyElement.classList.toggle('keyboard__key--active');
          });

          break;


        case 'enter':
          keyElement.classList.add('keyboard__key', 'keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('keyboard_return');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this.properties.caretPosition++;
            this._triggerEvents('oninput');
          });

          break;

        case 'space':
          keyElement.classList.add('keyboard__key--extra-wide');
          keyElement.innerHTML = createIconHTML('space_bar');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.properties.caretPosition++;
            this._triggerEvents('oninput');
          });

          break;

        case 'done':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--dark');
          keyElement.innerHTML = createIconHTML('check_circle');

          keyElement.addEventListener('click', () => {
            this.close();
            this._triggerEvents('onclose');
          });

          break;

        default:
          keyElement.textContent = key.eng.toLowerCase();

          keyElement.addEventListener('click', () => {
            this._addSymbolToScreen(key);
            this._triggerEvents('oninput');
          });

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  },

  _addSymbolToScreen(key) {
    const print = (startCaret, endCaret) => {
      const startPartStr = this.properties.value.slice(0, startCaret);
      const lastPartStr = this.properties.value.slice(endCaret);
      const curKey = (this.properties.capsLock || this.properties.shift) ? key.eng.toUpperCase() : key.eng.toLowerCase();

      if (this.properties.shift) {
        this.properties.timeoutId = null;
        // this.elements.shift.classList.toggle('keyboard__key--active');
        if (!this.properties.isLongShift) {
          this.properties.shift = false;
          // this.elements.shift.classList.remove('keyboard__key--active');
          this._toggleShift();
        }
      }

      this.properties.value = startPartStr + curKey + lastPartStr;
      this.properties.caretPosition++;
    };

    if (this.properties.isSelection) {
      print(this.properties.startSelection, this.properties.endSelection);
    } else {
      print(this.properties.caretPosition, this.properties.caretPosition);
    }
    this.properties.isSelection = false;

    // this.elements.screen.focus();
    // this.elements.screen.startSelection = this.properties.startSelection;
    // this.elements.screen.endSelection = this.properties.endSelection;

    // const start = this.elements.screen.selectionStart;
    // const finish = this.elements.screen.selectionEnd;
    // print(start, finish);
  },

  _triggerEvents(handlerName) {
    if (typeof this.eventHandlers[handlerName] === 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },

  _toggleShift(event) {
    if (!event) {
      this.elements.shift.classList.toggle('keyboard__key--active');

      for (const key of this.elements.keys) {
        if (key.childElementCount === 0) {
          key.textContent = this.properties.shift ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        }
      }
      return;
    }

    const type = event.type;

    if (type === 'click') {
      // console.log('Клик в Click');
      if (!this.properties.timeoutId) {
        this.properties.timeoutId = setTimeout(() => {
          // console.log('Внутри setTimeout');
          this.properties.shift = !this.properties.shift;

          if (this.properties.isLongShift) {
            this.properties.isLongShift = false;
          }

          this.elements.shift.classList.toggle('keyboard__key--active');

          for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
              key.textContent = this.properties.shift ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
          }

        }, 100);
        // this.properties.timeoutId = null;
      }
    }

    // TODO: Не отрабатывает отключение двойной клик. и не отключается shift после печати символа
    if (type === 'dblclick') {

      clearTimeout(this.properties.timeoutId);
      // console.log('Внутри dblclick. timeoutId: ', this.properties.timeoutId);
      this.properties.shift = true;
      this.properties.isLongShift = true;
      this.properties.timeoutId = null;

      this.elements.shift.classList.toggle('keyboard__key--active');

      for (const key of this.elements.keys) {
        if (key.childElementCount === 0) {
          key.textContent = this.properties.shift ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        }
      }
    }


  },


  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;

    this.elements.main.classList.remove('keyboard--hidden');
  },

  close() {
    this.properties.value = "";
    // this.eventHandlers.oninput = oninput;
    // this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add('keyboard--hidden');
  },

  _getCaret() {
    this.properties.caretPosition = this.elements.screen.selectionStart;
    return this.properties.caretPosition;
  }
};


window.addEventListener('DOMContentLoaded', () => {
  // Keyboard.init();
  new Keyboard('#app');
});
