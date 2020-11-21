/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/css/style.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-2!./node_modules/postcss-loader/src??ref--4-3!./node_modules/sass-loader/dist/cjs.js??ref--4-4!./src/css/style.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/sounds/move.mp3":
/*!************************************!*\
  !*** ./src/assets/sounds/move.mp3 ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "359ca5e2a9057e30254daad2be4d35a9.mp3";

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--4-2!../../node_modules/postcss-loader/src??ref--4-3!../../node_modules/sass-loader/dist/cjs.js??ref--4-4!./style.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/css/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/script.js */ "./src/js/script.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/classes/Board.js":
/*!*********************************!*\
  !*** ./src/js/classes/Board.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _Square_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square.js */ "./src/js/classes/Square.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Board = /*#__PURE__*/function () {
  function Board(_element, _size, sizeBoard) {
    var _this = this;

    var arrayCell = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var isPic = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var imageIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

    _classCallCheck(this, Board);

    _defineProperty(this, "render", function () {
      _this.$board.style.gridTemplateColumns = "repeat(".concat(_this.size, ", 1fr)");
      _this.$board.style.gridTemplateRows = "repeat(".concat(_this.size, ", 1fr)");
      _this.$board.innerHTML = '';
      var fragment = document.createDocumentFragment();

      _this.cellArray.forEach(function (gridElement) {
        var square = gridElement.square;

        if (square) {
          square.$square.setAttribute('draggable', 'false');
          gridElement.cell.appendChild(square.$square);
        }

        fragment.appendChild(gridElement.cell);
      });

      _this.$board.appendChild(fragment);

      _this.dragNDrop();
    });

    _defineProperty(this, "isSolution", function (arr) {
      function isEven(num) {
        return !(num % 2);
      }

      var emptyPosition = null;
      var size = Math.sqrt(arr.length);
      var sum = arr.reduce(function (summ, value, index) {
        if (value === arr.length - 1) {
          var left = index % size;
          emptyPosition = (index - left) / size + 1;
        } else {
          for (var i = index + 1; i < arr.length; i += 1) {
            if (value > arr[i]) {
              summ += 1;
            }
          }
        }

        return summ;
      }, 0);

      if (isEven(arr.length)) {
        sum += emptyPosition;
      }

      return isEven(sum);
    });

    _defineProperty(this, "move", function (target) {
      var curIndex = _this.getIndexElementByTarget(target);

      var emptyIndex = _this.getIndexEmpty();

      var _this$cellArray$curIn = _this.cellArray[curIndex],
          curTop = _this$cellArray$curIn.top,
          curLeft = _this$cellArray$curIn.left;
      var _this$cellArray$empty = _this.cellArray[emptyIndex],
          emptyTop = _this$cellArray$empty.top,
          emptyLeft = _this$cellArray$empty.left;
      var deltaTop = curTop - emptyTop;
      var deltaLeft = curLeft - emptyLeft;

      if (Math.abs(deltaLeft) + Math.abs(deltaTop) === 1) {
        // Animation moves
        var directionMove;

        if (deltaLeft === -1) {
          directionMove = 'Right';
        } else if (deltaLeft === 1) {
          directionMove = 'Left';
        } else if (deltaTop === -1) {
          directionMove = 'Down';
        } else if (deltaTop === 1) {
          directionMove = 'Up';
        }

        _this.animationMove(directionMove, curIndex);

        _this.cellArray[emptyIndex].square = _this.cellArray[curIndex].square;
        _this.cellArray[curIndex].square = null;

        _this.createEventMove();

        _this.isFinish();

        return true;
      }

      return false;
    });

    _defineProperty(this, "createEventFinish", function () {
      var event = new Event('finish', {
        bubbles: true
      });

      _this.$board.dispatchEvent(event);
    });

    _defineProperty(this, "dragNDrop", function () {
      var allCell = document.querySelectorAll('.square');
      allCell.forEach(function (el) {
        el.setAttribute('draggable', 'false');
      });

      var emptyCell = _this.cellArray[_this.getIndexEmpty()];

      var top = emptyCell.top,
          left = emptyCell.left;

      var neighboursIndexes = _this.nextdoorNeighbours(top, left);

      var nextdoorNeighboursCell = neighboursIndexes.map(function (i) {
        if (_this.cellArray[i].square) {
          return _this.cellArray[i].square.$square;
        }

        return false;
      });
      nextdoorNeighboursCell.forEach(function (cell) {
        return cell.setAttribute('draggable', 'true');
      }); // drag n drop events

      var dragStart = function dragStart(event) {
        setTimeout(function () {
          event.target.classList.add('hide');
          _this.draggableSquare = event.target;
        }, 0);
      };

      var dragEnd = function dragEnd(event) {
        event.target.classList.remove('hide');
      };

      var dragOver = function dragOver(evt) {
        evt.preventDefault();
      };

      function dragEnter() {
        this.classList.add('hovered');
      }

      function dragLeave() {
        this.classList.remove('hovered');
      }

      var dragDrop = function dragDrop(evt) {
        evt.preventDefault();

        var indexDropCell = _this.getIndexElementByTarget(evt.target);

        _this.moveSquareInArray(indexDropCell, _this.draggableSquare);

        evt.target.append(_this.draggableSquare);
        evt.target.classList.remove('hovered');

        _this.cellArray.forEach(function (cell) {
          var target = cell.cell;
          target.removeEventListener('dragover', dragOver);
          target.removeEventListener('dragenter', dragEnter);
          target.removeEventListener('dragleave', dragLeave);
          target.removeEventListener('drop', dragDrop);
        });

        _this.createEventMove();

        _this.isFinish();

        _this.render();
      };

      emptyCell.cell.addEventListener('dragover', dragOver);
      emptyCell.cell.addEventListener('dragenter', dragEnter);
      emptyCell.cell.addEventListener('dragleave', dragLeave);
      emptyCell.cell.addEventListener('drop', dragDrop);
      nextdoorNeighboursCell.forEach(function (cell) {
        cell.removeEventListener('dragstart', dragStart);
        cell.removeEventListener('dragend', dragEnd);
        cell.addEventListener('dragstart', dragStart);
        cell.addEventListener('dragend', dragEnd);
      });
    });

    _defineProperty(this, "moveSquareInArray", function (newCellIndex, squareElement) {
      var oldCell = _this.cellArray.filter(function (cell) {
        return cell.square && cell.square.$square === squareElement;
      });

      _this.cellArray[newCellIndex].square = oldCell[0].square;
      oldCell[0].square = null;
    });

    _defineProperty(this, "animationMove", function (direction, indexElement) {
      var cls = "move".concat(direction);
      var $el = _this.cellArray[indexElement].square.$square;
      $el.classList.add(cls);

      _this.$board.addEventListener('click', function (e) {
        e.preventDefault();
      });

      $el.addEventListener('animationend', function () {
        $el.classList.remove(cls);

        _this.render();
      });
    });

    _defineProperty(this, "getIndexElementByTarget", function (target) {
      return _this.cellArray.findIndex(function (curElement) {
        return curElement.cell === target;
      });
    });

    _defineProperty(this, "getIndexEmpty", function () {
      return _this.cellArray.findIndex(function (element) {
        return element.square === null;
      });
    });

    _defineProperty(this, "getValueSquareArray", function () {
      return _this.cellArray.map(function (cell) {
        return _this.getSquareIndex(cell);
      });
    });

    this.size = _size || 4;
    this.countCells = _size * _size;
    this.$board = _element;
    this.cellArray = null;
    this.isPic = isPic;
    this.imageIndex = imageIndex;
    this.draggableSquare = null;
    this.randIndexArray = arrayCell;
    this.sizeBoard = sizeBoard;
  }

  _createClass(Board, [{
    key: "start",
    value: function start() {
      var isInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.$board.style.setProperty('--size', "".concat(this.size));
      this.cellArray = [];

      if (this.randIndexArray.length === 0) {
        this.randIndexArray = this.randIndex(this.countCells, !isInit);
      } // choosing an random image


      if (this.isPic && this.imageIndex === null) {
        this.imageIndex = 1 + Math.floor(Math.random() * Math.floor(150));
      } // create cell array


      for (var i = 0; i < this.countCells; i += 1) {
        var cell = document.createElement('div');
        cell.className = 'cell';
        var left = i % this.size;
        var top = (i - left) / this.size;
        var square = null; // create square in cell

        if (this.randIndexArray[i] !== this.countCells - 1) {
          square = _Square_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(this.randIndexArray[i], this.randIndexArray[i] + 1); // If an image is specified in the settings, then we create an image

          if (this.isPic) {
            var sqr = square.square;
            var width = this.sizeBoard;
            var height = this.sizeBoard;
            var size = this.size;
            var leftBg = this.randIndexArray[i] % size;
            var topBg = (this.randIndexArray[i] - leftBg) / size;
            sqr.style.backgroundImage = "url(./assets/images/".concat(this.imageIndex, ".jpg)");
            sqr.style.backgroundSize = "".concat(width, "px ").concat(height, "px");
            sqr.style.setProperty('--bgTop', "".concat(leftBg));
            sqr.style.setProperty('--bgLeft', "".concat(topBg));
          }
        }

        this.cellArray.push({
          top: top,
          // row
          left: left,
          // column
          cell: cell,
          // DOM cell element
          square: square // DOM square element in cell or null

        });
      }

      this.render();
    }
  }, {
    key: "randIndex",
    // shuffling indexes
    value: function randIndex(num) {
      var isSort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var arr = _toConsumableArray(Array(num).keys());

      do {
        if (isSort) {
          arr = arr.sort(function () {
            return Math.random() - 0.5;
          });
        }
      } while (!this.isSolution(arr));

      return arr;
    }
  }, {
    key: "createEventMove",
    value: function createEventMove() {
      var event = new Event('isMove', {
        bubbles: true
      });
      this.$board.dispatchEvent(event);
    } // IS FINISH GAME?

  }, {
    key: "isFinish",
    value: function isFinish() {
      var _this2 = this;

      var isFin = this.cellArray.every(function (el) {
        var top = el.top,
            left = el.left;
        var index;

        if (el.square) {
          index = el.square.index;
        } else {
          index = _this2.countCells - 1;
        }

        return top * _this2.size + left === index;
      });

      if (isFin) {
        this.createEventFinish();
        return true;
      }

      return false;
    }
  }, {
    key: "nextdoorNeighbours",
    value: function nextdoorNeighbours(top, left) {
      var _this3 = this;

      var curIndex = top * this.size + left;

      var getLeft = function getLeft() {
        if (left === 0) return null;
        return curIndex - 1;
      };

      var getRight = function getRight() {
        if (left === _this3.size - 1) return null;
        return curIndex + 1;
      };

      var getTop = function getTop() {
        if (top === 0) return null;
        return curIndex - _this3.size;
      };

      var getBottom = function getBottom() {
        if (top === _this3.size - 1) return null;
        return curIndex + _this3.size;
      };

      return [getTop(), getLeft(), getRight(), getBottom()].filter(function (index) {
        return index !== null;
      });
    }
  }, {
    key: "getSquareIndex",
    value: function getSquareIndex(cell) {
      var square = cell.square;
      return square ? square.index : this.countCells - 1;
    }
  }], [{
    key: "create",
    value: function create(element, size, sizeBoard, arrayCell, isPic, imageIndex) {
      return new Board(element, size, sizeBoard, arrayCell, isPic, imageIndex);
    }
  }]);

  return Board;
}();



/***/ }),

/***/ "./src/js/classes/Game.js":
/*!********************************!*\
  !*** ./src/js/classes/Game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ "./src/js/classes/Board.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State.js */ "./src/js/classes/State.js");
/* harmony import */ var _Score_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Score.js */ "./src/js/classes/Score.js");
/* harmony import */ var _util_sound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/sound.js */ "./src/js/util/sound.js");
/* harmony import */ var _util_msToTime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/msToTime.js */ "./src/js/util/msToTime.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Game = /*#__PURE__*/function () {
  function Game() {
    var _this = this;

    _classCallCheck(this, Game);

    _defineProperty(this, "init", function () {
      document.body.insertAdjacentHTML('afterbegin', "\n    <div class=\"menu-toggle\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"menu\">\n      <div class=\"menu-inner\">\n        <div class=\"score\"></div>\n        <div class=\"settings\"></div>\n      </div>\n    </div>\n    ");
      document.body.insertAdjacentHTML('afterbegin', "\n    <div class=\"field\"></div>\n    <div class=\"statistic\"></div>\n    ");
      _this.state = _State_js__WEBPACK_IMPORTED_MODULE_1__["default"].ready('.statistic');
      _this.score = _Score_js__WEBPACK_IMPORTED_MODULE_2__["default"].ready();
      _this.elements.board = document.querySelector('.field');
      _this.elements.menuToggle = document.querySelector('.menu-toggle');
      _this.elements.menuInner = document.querySelector('.menu-inner');
      _this.elements.menu = document.querySelector('.menu');
      _this.elements.newGame = document.querySelector('#new');
      _this.elements.resume = document.querySelector('#resume');
      _this.elements.score = document.querySelector('#score');
      _this.elements.setting = document.querySelector('#setting');

      _this.viewMenu();
    });

    _defineProperty(this, "events", function () {
      document.body.addEventListener('click', function (e) {
        var target = e.target;
        if (target.closest('.cell')) _this.board.move(target.closest('.cell'));
        if (target.closest('.menu-toggle')) _this.menuToggle(e);
        if (target.closest('#new')) _this.newGame(e);
        if (target.closest('#resume')) _this.resume(e);
        if (target.closest('#score')) _this.viewScore();
        if (target.closest('#setting')) _this.viewSetting();
        if (target.closest('#timeLabel')) _this.viewTimeScore();
        if (target.closest('#turnLabel')) _this.viewTurnsScore();
        if (target.closest('.back')) _this.viewMenu();
      });

      _this.elements.board.addEventListener('finish', _this.eventFinishGame);

      _this.elements.board.addEventListener('isMove', _this.eventIsMove);
    });

    _defineProperty(this, "eventFinishGame", function () {
      _this.finishGame();

      _this.saveStateGame();
    });

    _defineProperty(this, "eventIsMove", function () {
      if (_this.properties.isSound) {
        Object(_util_sound_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      }

      _this.state.turn();

      _this.saveStateGame();
    });

    _defineProperty(this, "newGame", function (e) {
      _this.menuToggle(e);

      if (document.querySelector('.win-modal')) {
        document.body.removeChild(document.querySelector('.win-modal'));
      }

      if (document.querySelector('.overlay')) {
        document.body.removeChild(document.querySelector('.overlay'));
      }

      if (_this.properties.isPicturesSquare) {
        _this.elements.board.classList.add('picture');
      } else {
        _this.elements.board.classList.remove('picture');
      }

      _this.board = _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(_this.elements.board, _this.properties.size, _this.properties.sizeBoard, [], _this.properties.isPicturesSquare);

      _this.board.start();

      _this.state.stop();

      _this.state.start();
    });

    _defineProperty(this, "viewScore", function () {
      _this.elements.menuInner.innerHTML = '';

      _this.elements.menuInner.insertAdjacentHTML('afterbegin', "\n    <div class=\"score-view\">\n    <a class=\"back\" href=\"#\"><h2>Back</h2></a>\n      <h2 class=\"menu__title\">Scores</h2>\n      <ul class=\"score__labels\">\n        <li class=\"score__item active\" id=\"timeLabel\">Time</li>\n        <li class=\"score__item\" id=\"turnLabel\">Turns</li>\n      </ul>\n      <div class=\"score__content\">\n        <div class=\"score__table\">                   \n        </div>\n      </div>\n    </div>\n  </div>\n    ");

      _this.elements.timeToggle = document.querySelector('#timeLabel');
      _this.elements.turnsToggle = document.querySelector('#turnLabel');

      if (_this.elements.timeToggle.classList.contains('active')) {
        _this.viewTimeScore();
      } else {
        _this.viewTurnsScore();
      }
    });

    _defineProperty(this, "viewTimeScore", function () {
      if (!_this.elements.timeToggle.classList.contains('active')) {
        _this.scoreToggle();
      }

      var table = document.querySelector('.score__table');
      table.innerHTML = '';
      table.insertAdjacentHTML('beforeend', "<div class=\"position\">Pos</div>\n      <div class=\"name\">Name</div>\n      <div class=\"time\">Time</div>\n      <div class=\"turns\">Turns</div> ");

      var bestTime = _this.score.getBestTime();

      bestTime.forEach(function (res, index) {
        var name = res.name,
            time = res.time,
            turns = res.turns;
        table.insertAdjacentHTML('beforeend', "\n          <div class=\"position\">".concat(index + 1, "</div>\n          <div class=\"name\">").concat(name, "</div>\n          <div class=\"time\">").concat(Object(_util_msToTime_js__WEBPACK_IMPORTED_MODULE_4__["default"])(time), "</div>\n          <div class=\"turns\">").concat(turns, "</div>       \n      "));
      });
    });

    _defineProperty(this, "viewTurnsScore", function () {
      if (!_this.elements.turnsToggle.classList.contains('active')) {
        _this.scoreToggle();
      }

      var table = document.querySelector('.score__table');
      table.innerHTML = '';
      table.insertAdjacentHTML('beforeend', "<div class=\"position\">Pos</div>\n      <div class=\"name\">Name</div>\n      <div class=\"turns\">Turns</div> \n      <div class=\"time\">Time</div>");

      var bestTime = _this.score.getBestTurns();

      bestTime.forEach(function (res, index) {
        var name = res.name,
            time = res.time,
            turns = res.turns;
        table.insertAdjacentHTML('beforeend', "\n          <div class=\"position\">".concat(index + 1, "</div>\n          <div class=\"name\">").concat(name, "</div>\n          <div class=\"turns\">").concat(turns, "</div>       \n          <div class=\"time\">").concat(Object(_util_msToTime_js__WEBPACK_IMPORTED_MODULE_4__["default"])(time), "</div>\n      "));
      });
    });

    _defineProperty(this, "viewWin", function () {
      var lastTime = _this.score.getLastPositionInScoreByTime();

      var lastTurns = _this.score.getLastPositionInScoreByTurns();

      var isRecord = lastTime < 0 || lastTurns < 0 || lastTime > _this.state.time || lastTurns > _this.state.turns;
      document.body.insertAdjacentHTML('afterbegin', "\n    <div class=\"overlay\"></div>\n      <div class=\"win-modal ".concat(isRecord ? '' : 'no-record', "\">\n        <div class=\"title\">\u0412\u0430\u043C \u0443\u0434\u0430\u043B\u043E\u0441\u044C!!!</div>\n        <div class=\"text\">\u041F\u043E\u0441\u043B\u0435 <span class=\"record-time\">").concat(Object(_util_msToTime_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.state.time), "</span> \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0438 <span class=\"record-turns\">").concat(_this.state.turns, "</span> \u0445\u043E\u0434\u043E\u0432 \u0432\u044B \u0441\u043E\u0431\u0440\u0430\u043B\u0438 \u043F\u0430\u0437\u043B \u0438\u0437 <span class=\"record-size\">").concat(_this.properties.size * _this.properties.size - 1, "</span> \u043A\u043B\u0435\u0442\u043E\u043A. \u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E!!!\n        </div>\n        <div class=\"record\">\u0412\u044B<span class=\"worm-words\">, \u043A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E \u043D\u0435</span> \u043F\u043E\u043F\u0430\u043B\u0438 \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432<span class=\"worm-words\">. \u041D\u043E \u044D\u0442\u043E \u043D\u0435 \u043F\u043E\u0432\u043E\u0434 \u0443\u043D\u044B\u0432\u0430\u0442\u044C, \u0432\u044B \u0432\u0441\u0435 \u0440\u0430\u0432\u043D\u043E \u043C\u043E\u043B\u043E\u0434\u0435\u0446!</span><span class=\"reason\">.</span> </div>\n        <div class=\"question\">\u0412\u043D\u0435\u0441\u0442\u0438 \u0432\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0443? \u0415\u0441\u043B\u0438 \"\u0414\u0430\", \u0442\u043E \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0442\u0435 \u0444\u043E\u0440\u043C\u0443. \u0415\u0441\u043B\u0438 \u0432\u044B \u0441\u043A\u0440\u043E\u043C\u043D\u0438\u0447\u0430\u0435\u0442\u0435, \u0442\u043E \u0442\u043E\u0436\u0435 \u0438\u043C\u0435\u0435\u0442\u0435 \u043F\u0440\u0430\u0432\u043E.\n        </div>\n        <div class=\"next-game\">\u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u043E\u0439 \u0438\u0433\u0440\u044B \u0438\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u043C\u0435\u043D\u044E. \u0422\u0430\u043C \u0432\u0441\u0435 \u0431\u0443\u0434\u0435\u0442.</div>\n        <form class=\"your-name-form\">\n          <input id=\"name\" class=\"name\" type=\"text\" placeholder=\"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F?\">\n          <input id=\"cancel\" type=\"reset\" value=\"\u042F \u0441\u043A\u0440\u043E\u043C\u043D\u044B\u0439\">\n          <input id=\"send\" type=\"submit\" value=\"\u042F \u041F\u041E\u0411\u0415\u0414\u0418\u0422\u0415\u041B\u042C!\">\n        </form>\n    \n    </div>    \n    "));
    });

    _defineProperty(this, "scoreToggle", function () {
      var _this$elements = _this.elements,
          timeToggle = _this$elements.timeToggle,
          turnsToggle = _this$elements.turnsToggle;
      timeToggle.classList.toggle('active');
      turnsToggle.classList.toggle('active');
    });

    _defineProperty(this, "closeModal", function () {
      var modal = document.querySelector('.win-modal ');
      var overlay = document.querySelector('.overlay ');
      document.body.removeChild(modal);
      document.body.removeChild(overlay);
    });

    _defineProperty(this, "saveStateGame", function () {
      var gamePropertyForSave = {
        size: _this.properties.size,
        isPic: _this.properties.isPicturesSquare,
        isSound: _this.properties.isSound,
        imgIndex: _this.board.imageIndex,
        arrayCell: _this.board.getValueSquareArray(),
        state: _this.state.getState()
      };
      localStorage.setItem('saveGame', JSON.stringify(gamePropertyForSave));
    });

    _defineProperty(this, "loadStateGame", function () {
      var loadObj = JSON.parse(localStorage.getItem('saveGame'));
      return loadObj || null;
    });

    this.properties = {
      size: 4,
      isPicturesSquare: false,
      isSound: true,
      sizeBoard: null
    };
    this.elements = {
      menuToggle: null,
      menuInner: null,
      menu: null,
      newGame: null,
      score: null,
      setting: null,
      resume: null,
      timeToggle: null,
      turnsToggle: null,
      board: null
    };
    this.board = null;
    this.state = null;
    this.score = null;
    this.init();
    this.events();
  }

  _createClass(Game, [{
    key: "menuToggle",
    value: function menuToggle(e) {
      e.preventDefault();
      var _this$elements2 = this.elements,
          menu = _this$elements2.menu,
          menuToggle = _this$elements2.menuToggle;
      menu.classList.toggle('open');
      menuToggle.classList.toggle('open');
      document.querySelector('.field').classList.toggle('blur');
      document.querySelector('.stat').classList.toggle('blur');

      if (document.querySelector('.win-modal')) {
        document.querySelector('.win-modal').classList.toggle('blur');
      }
    }
  }, {
    key: "resume",
    value: function resume(e) {
      this.menuToggle(e);
    }
  }, {
    key: "viewMenu",
    value: function viewMenu() {
      this.elements.menuInner.innerHTML = '';
      this.elements.menuInner.insertAdjacentHTML('afterbegin', "\n        <ul class=\"menu-list\">\n          <li id=\"resume\">\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C</li>\n          <li id=\"new\">\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430</li>\n          <li id=\"score\">\u0421\u0447\u0435\u0442</li>\n          <li id=\"setting\">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</li>\n        </ul>\n        \n        <div class=\"author\">Discord: Malagor#6535</div>\n    ");
    }
  }, {
    key: "viewSetting",
    value: function viewSetting() {
      var _this2 = this;

      this.elements.menuInner.innerHTML = '';
      this.elements.menuInner.insertAdjacentHTML('afterbegin', "\n        <form class=\"settings\" name=\"settings\">\n        <a class=\"back\" href=\"#\"><h2>Back</h2></a>\n        <h2 class=\"menu__title\">Settings</h2>\n        <div class=\"group\">\n        <label for=\"size\">Size</label>\n            <select name=\"size\" id=\"size\">\n              <option value=\"3\">3x3</option>\n              <option value=\"4\">4x4</option>\n              <option value=\"5\">5x5</option>\n              <option value=\"6\">6x6</option>\n              <option value=\"7\">7x7</option>\n              <option value=\"8\">8x8</option>\n            </select>\n         </div>\n        <div class=\"group\">\n        <label for=\"isPicture\">Design</label>\n        <div>\n        <input type=\"radio\" name=\"isPicture\" id=\"isPic\" checked value=\"false\"><label class=\"input-label\" for=\"isPic\">Digit</label>\n        </div>\n        <div>\n        <input type=\"radio\" name=\"isPicture\" value=\"true\" id=\"isDig\"  checked=\"checked\"><label class=\"input-label\" for=\"isDig\">Picture</label>\n        </div>\n        </div>\n        <div class=\"group\">\n          <input type=\"checkbox\" id=\"sound\">\n          <label class=\"sound-label\" for=\"sound\">Sound</label>\n        </div>\n        </form>\n    ");
      var select = document.querySelector('.settings #size');
      var radios = document.querySelectorAll('input[type="radio"][name="isPicture"]');
      var check = document.querySelector('#sound');
      select.options[this.properties.size - 3].selected = true;
      check.checked = this.properties.isSound;

      var setSettings = function setSettings() {
        _this2.properties.size = select.value;
        _this2.properties.isSound = check.checked;

        var _iterator = _createForOfIteratorHelper(radios),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var radio = _step.value;

            if (radio.checked) {
              _this2.properties.isPicturesSquare = radio.value === 'true';
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };

      select.addEventListener('change', setSettings);
      check.addEventListener('change', setSettings);

      var _iterator2 = _createForOfIteratorHelper(radios),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var radio = _step2.value;
          radio.checked = radio.value === "".concat(this.properties.isPicturesSquare);
          radio.addEventListener('change', setSettings);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "finishGame",
    value: function finishGame() {
      var _this3 = this;

      this.board.randIndexArray = [];
      this.state.stop();
      this.state._state = 'finish';
      var turns = this.state.getTurns();
      var time = this.state.time;
      this.saveStateGame();
      this.viewWin();
      document.querySelector('#send').addEventListener('click', function () {
        var name = document.querySelector('#name').value;
        if (name === '') name = 'Gamer';
        var res = {
          turns: turns,
          time: time,
          name: name
        };

        if (turns && time) {
          _this3.score.setResult(res);
        }

        _this3.closeModal();
      });
      document.querySelector('#cancel').addEventListener('click', function () {
        _this3.closeModal();
      });
    }
  }], [{
    key: "ready",
    value: function ready() {
      var game = new Game();
      var loadGameObj = game.loadStateGame();

      if (loadGameObj) {
        game.properties.size = +loadGameObj.size;
        game.properties.isSound = loadGameObj.isSound;
        game.properties.isPicturesSquare = loadGameObj.isPic;

        if (game.properties.isPicturesSquare) {
          game.elements.board.classList.add('picture');
        } else {
          game.elements.board.classList.remove('picture');
        }

        var imgIndex = loadGameObj.imgIndex,
            state = loadGameObj.state,
            arrayCell = loadGameObj.arrayCell;
        game.state.time = state.time;
        game.state.turns = state.turns;
        game.state.state = state.state;
        game.board = _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(game.elements.board, game.properties.size, game.properties.sizeBoard, arrayCell, game.properties.isPicturesSquare, imgIndex);
      } else {
        game.board = _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(game.elements.board, game.properties.size, game.properties.sizeBoard);
      }

      game.board.start(true);

      if (game.state.state === 'play') {
        game.state.start();
      }

      return game;
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/js/classes/Score.js":
/*!*********************************!*\
  !*** ./src/js/classes/Score.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Score; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Score = /*#__PURE__*/function () {
  function Score() {
    var _this = this;

    _classCallCheck(this, Score);

    _defineProperty(this, "loadTable", function () {
      if (localStorage.getItem('scoreTable')) {
        return JSON.parse(localStorage.getItem('scoreTable'));
      }

      console.log('Таблица рекордов не загружена');
      return [];
    });

    _defineProperty(this, "setResult", function (result) {
      var time = result.time,
          turns = result.turns;

      var lastTime = _this.getLastPositionInScoreByTime();

      var lastTurns = _this.getLastPositionInScoreByTurns();

      if (time < lastTime || turns < lastTurns || lastTime === -1 || lastTurns === -1) {
        _this.scoreTable.push(result);

        _this.saveTable();

        return true;
      }

      return false;
    });

    _defineProperty(this, "getLastPositionInScoreByTime", function () {
      var maxResultInTable = _this.sortByField('time');

      if (maxResultInTable.length < 10) {
        return -1;
      }

      return maxResultInTable[maxResultInTable.length - 1].time;
    });

    _defineProperty(this, "getLastPositionInScoreByTurns", function () {
      var maxResultInTable = _this.sortByField('turns');

      if (maxResultInTable.length < 10) {
        return -1;
      }

      return maxResultInTable[maxResultInTable.length - 1].turns;
    });

    this.scoreTable = this.loadTable();
  }

  _createClass(Score, [{
    key: "saveTable",
    // save in localStorage
    value: function saveTable() {
      if (this.scoreTable.length) {
        localStorage.setItem('scoreTable', JSON.stringify(this.scoreTable));
      } else {
        console.log('Таблица рекордов не сохранена. Таблица пуста');
      }
    } // load from localStorage

  }, {
    key: "sortByField",
    value: function sortByField(field) {
      return this.scoreTable.sort(function (a, b) {
        return a[field] - b[field];
      }).filter(function (val, index) {
        return index < 10;
      });
    }
  }, {
    key: "getBestTime",
    value: function getBestTime() {
      return this.sortByField('time');
    }
  }, {
    key: "getBestTurns",
    value: function getBestTurns() {
      return this.sortByField('turns');
    }
  }], [{
    key: "ready",
    value: function ready() {
      return new Score();
    }
  }]);

  return Score;
}();



/***/ }),

/***/ "./src/js/classes/Square.js":
/*!**********************************!*\
  !*** ./src/js/classes/Square.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Square; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square = /*#__PURE__*/function () {
  function Square(index, value) {
    _classCallCheck(this, Square);

    this.index = index;
    this.value = value;
    this.$square = null;
    this.init();
  }

  _createClass(Square, [{
    key: "init",
    value: function init() {
      var element = document.createElement('div');
      element.className = 'square';
      element.innerText = this.value; // element.setAttribute('draggable', 'true');

      this.$square = element;
    }
  }, {
    key: "square",
    get: function get() {
      return this.$square;
    }
  }], [{
    key: "create",
    value: function create(index, value) {
      return new Square(index, value);
    }
  }]);

  return Square;
}();



/***/ }),

/***/ "./src/js/classes/State.js":
/*!*********************************!*\
  !*** ./src/js/classes/State.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
/* harmony import */ var _util_msToTime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/msToTime.js */ "./src/js/util/msToTime.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var State = /*#__PURE__*/function () {
  function State(el) {
    var _this = this;

    _classCallCheck(this, State);

    _defineProperty(this, "createHTML", function (parentEl) {
      parentEl.insertAdjacentHTML('afterbegin', "\n    <div class=\"stat\">\n      <span class=\"turns\">Turns: 0</span>\n      <span class=\"times\">Time: 00:00:00</span>\n    </div>\n    ");
      _this.$turns = _this.$el.querySelector('.turns');
      _this.$times = _this.$el.querySelector('.times');
    });

    _defineProperty(this, "start", function () {
      if (_this._state !== 'play') {
        _this._time = 0;
        _this._turns = 0;
        _this._state = 'play';
      }

      _this.$turns.innerText = "Turns: ".concat(_this._turns);
      setTimeout(_this.tick, 1000);
    });

    _defineProperty(this, "stop", function () {
      _this._state = 'stop';
      clearTimeout(_this.timerID);
      _this.timerID = null;
    });

    _defineProperty(this, "turn", function () {
      if (_this._state === 'play') {
        _this._turns += 1;
        _this.$turns.innerText = "Turns: ".concat(_this._turns);
      }
    });

    _defineProperty(this, "getTurns", function () {
      return _this._turns;
    });

    _defineProperty(this, "tick", function () {
      if (_this._state === 'play') {
        _this._time += 1000;
        _this.$times.textContent = "Time: ".concat(Object(_util_msToTime_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.time));
        _this.timerID = setTimeout(_this.tick, 1000);
      }
    });

    this._time = 0;
    this._turns = 0;
    this._state = 'start';
    this.timerID = null;
    this.$el = null;
    this.$turns = null;
    this.$times = null;
    this.init(el);
  }

  _createClass(State, [{
    key: "init",
    value: function init(el) {
      this.$el = document.querySelector(el);
      this.createHTML(this.$el);
    }
  }, {
    key: "getState",
    value: function getState() {
      return {
        time: this._time,
        turns: this._turns,
        state: this._state
      };
    }
  }, {
    key: "time",
    get: function get() {
      return this._time;
    },
    set: function set(value) {
      this._time = value;
    }
  }, {
    key: "state",
    get: function get() {
      return this._state;
    },
    set: function set(value) {
      this._state = value;
    }
  }, {
    key: "turns",
    get: function get() {
      return this._turns;
    },
    set: function set(value) {
      this._turns = value;
    }
  }], [{
    key: "ready",
    value: function ready(el) {
      return new State(el);
    }
  }]);

  return State;
}();



/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Game.js */ "./src/js/classes/Game.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../css/style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


_classes_Game_js__WEBPACK_IMPORTED_MODULE_0__["default"].ready();

/***/ }),

/***/ "./src/js/util/msToTime.js":
/*!*********************************!*\
  !*** ./src/js/util/msToTime.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return msToTime; });
function msToTime(duration) {
  var seconds = Math.floor(duration / 1000 % 60);
  var minutes = Math.floor(duration / (1000 * 60) % 60);
  var hours = Math.floor(duration / (1000 * 60 * 60) % 24);
  hours = hours < 10 ? "0".concat(hours) : hours;
  minutes = minutes < 10 ? "0".concat(minutes) : minutes;
  seconds = seconds < 10 ? "0".concat(seconds) : seconds;
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}

/***/ }),

/***/ "./src/js/util/sound.js":
/*!******************************!*\
  !*** ./src/js/util/sound.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sound; });
/* harmony import */ var _assets_sounds_move_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/sounds/move.mp3 */ "./src/assets/sounds/move.mp3");
/* harmony import */ var _assets_sounds_move_mp3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_sounds_move_mp3__WEBPACK_IMPORTED_MODULE_0__);

function sound() {
  var audio = new Audio();
  audio.src = _assets_sounds_move_mp3__WEBPACK_IMPORTED_MODULE_0___default.a;
  audio.autoplay = true;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzc5MWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc291bmRzL21vdmUubXAzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuc2Nzcz9kZjlmIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9HYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1Njb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1NxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsL21zVG9UaW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsL3NvdW5kLmpzIl0sIm5hbWVzIjpbIkJvYXJkIiwiZWxlbWVudCIsInNpemUiLCJzaXplQm9hcmQiLCJhcnJheUNlbGwiLCJpc1BpYyIsImltYWdlSW5kZXgiLCIkYm9hcmQiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkVGVtcGxhdGVSb3dzIiwiaW5uZXJIVE1MIiwiZnJhZ21lbnQiLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjZWxsQXJyYXkiLCJmb3JFYWNoIiwiZ3JpZEVsZW1lbnQiLCJzcXVhcmUiLCIkc3F1YXJlIiwic2V0QXR0cmlidXRlIiwiY2VsbCIsImFwcGVuZENoaWxkIiwiZHJhZ05Ecm9wIiwiYXJyIiwiaXNFdmVuIiwibnVtIiwiZW1wdHlQb3NpdGlvbiIsIk1hdGgiLCJzcXJ0IiwibGVuZ3RoIiwic3VtIiwicmVkdWNlIiwic3VtbSIsInZhbHVlIiwiaW5kZXgiLCJsZWZ0IiwiaSIsInRhcmdldCIsImN1ckluZGV4IiwiZ2V0SW5kZXhFbGVtZW50QnlUYXJnZXQiLCJlbXB0eUluZGV4IiwiZ2V0SW5kZXhFbXB0eSIsImN1clRvcCIsInRvcCIsImN1ckxlZnQiLCJlbXB0eVRvcCIsImVtcHR5TGVmdCIsImRlbHRhVG9wIiwiZGVsdGFMZWZ0IiwiYWJzIiwiZGlyZWN0aW9uTW92ZSIsImFuaW1hdGlvbk1vdmUiLCJjcmVhdGVFdmVudE1vdmUiLCJpc0ZpbmlzaCIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiZGlzcGF0Y2hFdmVudCIsImFsbENlbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJlbXB0eUNlbGwiLCJuZWlnaGJvdXJzSW5kZXhlcyIsIm5leHRkb29yTmVpZ2hib3VycyIsIm5leHRkb29yTmVpZ2hib3Vyc0NlbGwiLCJtYXAiLCJkcmFnU3RhcnQiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZHJhZ2dhYmxlU3F1YXJlIiwiZHJhZ0VuZCIsInJlbW92ZSIsImRyYWdPdmVyIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJkcmFnRW50ZXIiLCJkcmFnTGVhdmUiLCJkcmFnRHJvcCIsImluZGV4RHJvcENlbGwiLCJtb3ZlU3F1YXJlSW5BcnJheSIsImFwcGVuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJhZGRFdmVudExpc3RlbmVyIiwibmV3Q2VsbEluZGV4Iiwic3F1YXJlRWxlbWVudCIsIm9sZENlbGwiLCJmaWx0ZXIiLCJkaXJlY3Rpb24iLCJpbmRleEVsZW1lbnQiLCJjbHMiLCIkZWwiLCJlIiwiZmluZEluZGV4IiwiY3VyRWxlbWVudCIsImdldFNxdWFyZUluZGV4IiwiY291bnRDZWxscyIsInJhbmRJbmRleEFycmF5IiwiaXNJbml0Iiwic2V0UHJvcGVydHkiLCJyYW5kSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJTcXVhcmUiLCJjcmVhdGUiLCJzcXIiLCJ3aWR0aCIsImhlaWdodCIsImxlZnRCZyIsInRvcEJnIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJwdXNoIiwiaXNTb3J0IiwiQXJyYXkiLCJrZXlzIiwic29ydCIsImlzU29sdXRpb24iLCJpc0ZpbiIsImV2ZXJ5IiwiY3JlYXRlRXZlbnRGaW5pc2giLCJnZXRMZWZ0IiwiZ2V0UmlnaHQiLCJnZXRUb3AiLCJnZXRCb3R0b20iLCJHYW1lIiwiYm9keSIsImluc2VydEFkamFjZW50SFRNTCIsInN0YXRlIiwiU3RhdGUiLCJyZWFkeSIsInNjb3JlIiwiU2NvcmUiLCJlbGVtZW50cyIsImJvYXJkIiwicXVlcnlTZWxlY3RvciIsIm1lbnVUb2dnbGUiLCJtZW51SW5uZXIiLCJtZW51IiwibmV3R2FtZSIsInJlc3VtZSIsInNldHRpbmciLCJ2aWV3TWVudSIsImNsb3Nlc3QiLCJtb3ZlIiwidmlld1Njb3JlIiwidmlld1NldHRpbmciLCJ2aWV3VGltZVNjb3JlIiwidmlld1R1cm5zU2NvcmUiLCJldmVudEZpbmlzaEdhbWUiLCJldmVudElzTW92ZSIsImZpbmlzaEdhbWUiLCJzYXZlU3RhdGVHYW1lIiwicHJvcGVydGllcyIsImlzU291bmQiLCJzb3VuZCIsInR1cm4iLCJyZW1vdmVDaGlsZCIsImlzUGljdHVyZXNTcXVhcmUiLCJzdGFydCIsInN0b3AiLCJ0aW1lVG9nZ2xlIiwidHVybnNUb2dnbGUiLCJjb250YWlucyIsInNjb3JlVG9nZ2xlIiwidGFibGUiLCJiZXN0VGltZSIsImdldEJlc3RUaW1lIiwicmVzIiwibmFtZSIsInRpbWUiLCJ0dXJucyIsIm1zVG9UaW1lIiwiZ2V0QmVzdFR1cm5zIiwibGFzdFRpbWUiLCJnZXRMYXN0UG9zaXRpb25JblNjb3JlQnlUaW1lIiwibGFzdFR1cm5zIiwiZ2V0TGFzdFBvc2l0aW9uSW5TY29yZUJ5VHVybnMiLCJpc1JlY29yZCIsInRvZ2dsZSIsIm1vZGFsIiwib3ZlcmxheSIsImdhbWVQcm9wZXJ0eUZvclNhdmUiLCJpbWdJbmRleCIsImdldFZhbHVlU3F1YXJlQXJyYXkiLCJnZXRTdGF0ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZE9iaiIsInBhcnNlIiwiZ2V0SXRlbSIsImluaXQiLCJldmVudHMiLCJzZWxlY3QiLCJyYWRpb3MiLCJjaGVjayIsIm9wdGlvbnMiLCJzZWxlY3RlZCIsImNoZWNrZWQiLCJzZXRTZXR0aW5ncyIsInJhZGlvIiwiX3N0YXRlIiwiZ2V0VHVybnMiLCJ2aWV3V2luIiwic2V0UmVzdWx0IiwiY2xvc2VNb2RhbCIsImdhbWUiLCJsb2FkR2FtZU9iaiIsImxvYWRTdGF0ZUdhbWUiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0Iiwic2NvcmVUYWJsZSIsInNhdmVUYWJsZSIsIm1heFJlc3VsdEluVGFibGUiLCJzb3J0QnlGaWVsZCIsImxvYWRUYWJsZSIsImZpZWxkIiwiYSIsImIiLCJ2YWwiLCJpbm5lclRleHQiLCJwYXJlbnRFbCIsIiR0dXJucyIsIiR0aW1lcyIsIl90aW1lIiwiX3R1cm5zIiwidGljayIsImNsZWFyVGltZW91dCIsInRpbWVySUQiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZUhUTUwiLCJkdXJhdGlvbiIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJhdWRpbyIsIkF1ZGlvIiwic3JjIiwic291bmRNb3ZlIiwiYXV0b3BsYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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ImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzU5Y2E1ZTJhOTA1N2UzMDI1NGRhYWQyYmU0ZDM1YTkubXAzXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNC0zIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTQhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgJy4vanMvc2NyaXB0LmpzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGUuc2Nzcyc7XG4iLCJpbXBvcnQgU3F1YXJlIGZyb20gJy4vU3F1YXJlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzaXplLCBzaXplQm9hcmQsIGFycmF5Q2VsbCA9IFtdLCBpc1BpYyA9IGZhbHNlLCBpbWFnZUluZGV4ID0gbnVsbCkge1xuICAgIHRoaXMuc2l6ZSA9IHNpemUgfHwgNDtcbiAgICB0aGlzLmNvdW50Q2VsbHMgPSBzaXplICogc2l6ZTtcbiAgICB0aGlzLiRib2FyZCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jZWxsQXJyYXkgPSBudWxsO1xuICAgIHRoaXMuaXNQaWMgPSBpc1BpYztcbiAgICB0aGlzLmltYWdlSW5kZXggPSBpbWFnZUluZGV4O1xuICAgIHRoaXMuZHJhZ2dhYmxlU3F1YXJlID0gbnVsbDtcbiAgICB0aGlzLnJhbmRJbmRleEFycmF5ID0gYXJyYXlDZWxsO1xuICAgIHRoaXMuc2l6ZUJvYXJkID0gc2l6ZUJvYXJkO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShlbGVtZW50LCBzaXplLCBzaXplQm9hcmQsIGFycmF5Q2VsbCwgaXNQaWMsIGltYWdlSW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IEJvYXJkKGVsZW1lbnQsIHNpemUsIHNpemVCb2FyZCwgYXJyYXlDZWxsLCBpc1BpYywgaW1hZ2VJbmRleCk7XG4gIH1cblxuICBzdGFydChpc0luaXQgPSBmYWxzZSkge1xuICAgIHRoaXMuJGJvYXJkLnN0eWxlLnNldFByb3BlcnR5KCctLXNpemUnLCBgJHt0aGlzLnNpemV9YCk7XG4gICAgdGhpcy5jZWxsQXJyYXkgPSBbXTtcblxuICAgIGlmICh0aGlzLnJhbmRJbmRleEFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5yYW5kSW5kZXhBcnJheSA9IHRoaXMucmFuZEluZGV4KHRoaXMuY291bnRDZWxscywgIWlzSW5pdCk7XG4gICAgfVxuXG4gICAgLy8gY2hvb3NpbmcgYW4gcmFuZG9tIGltYWdlXG4gICAgaWYgKHRoaXMuaXNQaWMgJiYgKHRoaXMuaW1hZ2VJbmRleCA9PT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuaW1hZ2VJbmRleCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDE1MCkpO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBjZWxsIGFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50Q2VsbHM7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG5cbiAgICAgIGNvbnN0IGxlZnQgPSBpICUgdGhpcy5zaXplO1xuICAgICAgY29uc3QgdG9wID0gKGkgLSBsZWZ0KSAvIHRoaXMuc2l6ZTtcbiAgICAgIGxldCBzcXVhcmUgPSBudWxsO1xuXG4gICAgICAvLyBjcmVhdGUgc3F1YXJlIGluIGNlbGxcbiAgICAgIGlmICh0aGlzLnJhbmRJbmRleEFycmF5W2ldICE9PSAodGhpcy5jb3VudENlbGxzKSAtIDEpIHtcbiAgICAgICAgc3F1YXJlID0gU3F1YXJlLmNyZWF0ZSh0aGlzLnJhbmRJbmRleEFycmF5W2ldLCB0aGlzLnJhbmRJbmRleEFycmF5W2ldICsgMSk7XG5cbiAgICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc3BlY2lmaWVkIGluIHRoZSBzZXR0aW5ncywgdGhlbiB3ZSBjcmVhdGUgYW4gaW1hZ2VcbiAgICAgICAgaWYgKHRoaXMuaXNQaWMpIHtcbiAgICAgICAgICBjb25zdCBzcXIgPSBzcXVhcmUuc3F1YXJlO1xuICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplQm9hcmQ7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplQm9hcmQ7XG4gICAgICAgICAgY29uc3QgeyBzaXplIH0gPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IGxlZnRCZyA9IHRoaXMucmFuZEluZGV4QXJyYXlbaV0gJSBzaXplO1xuICAgICAgICAgIGNvbnN0IHRvcEJnID0gKHRoaXMucmFuZEluZGV4QXJyYXlbaV0gLSBsZWZ0QmcpIC8gc2l6ZTtcblxuICAgICAgICAgIHNxci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4vYXNzZXRzL2ltYWdlcy8ke3RoaXMuaW1hZ2VJbmRleH0uanBnKWA7XG4gICAgICAgICAgc3FyLnN0eWxlLmJhY2tncm91bmRTaXplID0gYCR7d2lkdGh9cHggJHtoZWlnaHR9cHhgO1xuICAgICAgICAgIHNxci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iZ1RvcCcsIGAke2xlZnRCZ31gKTtcbiAgICAgICAgICBzcXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmdMZWZ0JywgYCR7dG9wQmd9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jZWxsQXJyYXkucHVzaCh7XG4gICAgICAgIHRvcCwgLy8gcm93XG4gICAgICAgIGxlZnQsIC8vIGNvbHVtblxuICAgICAgICBjZWxsLCAvLyBET00gY2VsbCBlbGVtZW50XG4gICAgICAgIHNxdWFyZSwgLy8gRE9NIHNxdWFyZSBlbGVtZW50IGluIGNlbGwgb3IgbnVsbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICB0aGlzLiRib2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke3RoaXMuc2l6ZX0sIDFmcilgO1xuICAgIHRoaXMuJGJvYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7dGhpcy5zaXplfSwgMWZyKWA7XG4gICAgdGhpcy4kYm9hcmQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIHRoaXMuY2VsbEFycmF5LmZvckVhY2goKGdyaWRFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHNxdWFyZSB9ID0gZ3JpZEVsZW1lbnQ7XG5cbiAgICAgIGlmIChzcXVhcmUpIHtcbiAgICAgICAgc3F1YXJlLiRzcXVhcmUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAnZmFsc2UnKTtcbiAgICAgICAgZ3JpZEVsZW1lbnQuY2VsbC5hcHBlbmRDaGlsZChzcXVhcmUuJHNxdWFyZSk7XG4gICAgICB9XG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChncmlkRWxlbWVudC5jZWxsKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGJvYXJkLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblxuICAgIHRoaXMuZHJhZ05Ecm9wKCk7XG4gIH07XG5cbiAgLy8gc2h1ZmZsaW5nIGluZGV4ZXNcbiAgcmFuZEluZGV4KG51bSwgaXNTb3J0ID0gdHJ1ZSkge1xuICAgIGxldCBhcnIgPSBbLi4uQXJyYXkobnVtKS5rZXlzKCldO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKGlzU29ydCkge1xuICAgICAgICBhcnIgPSBhcnIuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgICAgIH1cbiAgICB9IHdoaWxlICghdGhpcy5pc1NvbHV0aW9uKGFycikpO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGlzU29sdXRpb24gPSAoYXJyKSA9PiB7XG4gICAgZnVuY3Rpb24gaXNFdmVuKG51bSkge1xuICAgICAgcmV0dXJuICEobnVtICUgMik7XG4gICAgfVxuXG4gICAgbGV0IGVtcHR5UG9zaXRpb24gPSBudWxsO1xuICAgIGNvbnN0IHNpemUgPSBNYXRoLnNxcnQoYXJyLmxlbmd0aCk7XG5cbiAgICBsZXQgc3VtID0gYXJyLnJlZHVjZSgoc3VtbSwgdmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBpbmRleCAlIHNpemU7XG4gICAgICAgIGVtcHR5UG9zaXRpb24gPSAoKGluZGV4IC0gbGVmdCkgLyBzaXplKSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID4gYXJyW2ldKSB7XG4gICAgICAgICAgICBzdW1tICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3VtbTtcbiAgICB9LCAwKTtcblxuICAgIGlmIChpc0V2ZW4oYXJyLmxlbmd0aCkpIHtcbiAgICAgIHN1bSArPSBlbXB0eVBvc2l0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBpc0V2ZW4oc3VtKTtcbiAgfTtcblxuICAvLyBNT1ZFIFNRVUFSRVNcbiAgbW92ZSA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCBjdXJJbmRleCA9IHRoaXMuZ2V0SW5kZXhFbGVtZW50QnlUYXJnZXQodGFyZ2V0KTtcbiAgICBjb25zdCBlbXB0eUluZGV4ID0gdGhpcy5nZXRJbmRleEVtcHR5KCk7XG5cbiAgICBjb25zdCB7IHRvcDogY3VyVG9wLCBsZWZ0OiBjdXJMZWZ0IH0gPSB0aGlzLmNlbGxBcnJheVtjdXJJbmRleF07XG4gICAgY29uc3QgeyB0b3A6IGVtcHR5VG9wLCBsZWZ0OiBlbXB0eUxlZnQgfSA9IHRoaXMuY2VsbEFycmF5W2VtcHR5SW5kZXhdO1xuXG4gICAgY29uc3QgZGVsdGFUb3AgPSBjdXJUb3AgLSBlbXB0eVRvcDtcbiAgICBjb25zdCBkZWx0YUxlZnQgPSBjdXJMZWZ0IC0gZW1wdHlMZWZ0O1xuXG4gICAgaWYgKChNYXRoLmFicyhkZWx0YUxlZnQpICsgTWF0aC5hYnMoZGVsdGFUb3ApKSA9PT0gMSkge1xuICAgICAgLy8gQW5pbWF0aW9uIG1vdmVzXG4gICAgICBsZXQgZGlyZWN0aW9uTW92ZTtcbiAgICAgIGlmIChkZWx0YUxlZnQgPT09IC0xKSB7XG4gICAgICAgIGRpcmVjdGlvbk1vdmUgPSAnUmlnaHQnO1xuICAgICAgfSBlbHNlIGlmIChkZWx0YUxlZnQgPT09IDEpIHtcbiAgICAgICAgZGlyZWN0aW9uTW92ZSA9ICdMZWZ0JztcbiAgICAgIH0gZWxzZSBpZiAoZGVsdGFUb3AgPT09IC0xKSB7XG4gICAgICAgIGRpcmVjdGlvbk1vdmUgPSAnRG93bic7XG4gICAgICB9IGVsc2UgaWYgKGRlbHRhVG9wID09PSAxKSB7XG4gICAgICAgIGRpcmVjdGlvbk1vdmUgPSAnVXAnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFuaW1hdGlvbk1vdmUoZGlyZWN0aW9uTW92ZSwgY3VySW5kZXgpO1xuXG4gICAgICB0aGlzLmNlbGxBcnJheVtlbXB0eUluZGV4XS5zcXVhcmUgPSB0aGlzLmNlbGxBcnJheVtjdXJJbmRleF0uc3F1YXJlO1xuICAgICAgdGhpcy5jZWxsQXJyYXlbY3VySW5kZXhdLnNxdWFyZSA9IG51bGw7XG5cbiAgICAgIHRoaXMuY3JlYXRlRXZlbnRNb3ZlKCk7XG4gICAgICB0aGlzLmlzRmluaXNoKCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY3JlYXRlRXZlbnRNb3ZlKCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdpc01vdmUnLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgdGhpcy4kYm9hcmQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICAvLyBJUyBGSU5JU0ggR0FNRT9cbiAgaXNGaW5pc2goKSB7XG4gICAgY29uc3QgaXNGaW4gPSB0aGlzLmNlbGxBcnJheS5ldmVyeSgoZWwpID0+IHtcbiAgICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBlbDtcbiAgICAgIGxldCBpbmRleDtcbiAgICAgIGlmIChlbC5zcXVhcmUpIHtcbiAgICAgICAgaW5kZXggPSBlbC5zcXVhcmUuaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9ICh0aGlzLmNvdW50Q2VsbHMpIC0gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICh0b3AgKiB0aGlzLnNpemUgKyBsZWZ0KSA9PT0gaW5kZXg7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNGaW4pIHtcbiAgICAgIHRoaXMuY3JlYXRlRXZlbnRGaW5pc2goKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjcmVhdGVFdmVudEZpbmlzaCA9ICgpID0+IHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnZmluaXNoJywgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuJGJvYXJkLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9O1xuXG4gIC8vIERSQUcgTiBEUk9QIFNRVUFSRVNcbiAgZHJhZ05Ecm9wID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG4gICAgYWxsQ2VsbC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAnZmFsc2UnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IHRoaXMuY2VsbEFycmF5W3RoaXMuZ2V0SW5kZXhFbXB0eSgpXTtcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZW1wdHlDZWxsO1xuXG4gICAgY29uc3QgbmVpZ2hib3Vyc0luZGV4ZXMgPSB0aGlzLm5leHRkb29yTmVpZ2hib3Vycyh0b3AsIGxlZnQpO1xuICAgIGNvbnN0IG5leHRkb29yTmVpZ2hib3Vyc0NlbGwgPSBuZWlnaGJvdXJzSW5kZXhlcy5tYXAoKGkpID0+IHtcbiAgICAgIGlmICh0aGlzLmNlbGxBcnJheVtpXS5zcXVhcmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbEFycmF5W2ldLnNxdWFyZS4kc3F1YXJlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgbmV4dGRvb3JOZWlnaGJvdXJzQ2VsbC5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKSk7XG5cbiAgICAvLyBkcmFnIG4gZHJvcCBldmVudHNcbiAgICBjb25zdCBkcmFnU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB0aGlzLmRyYWdnYWJsZVNxdWFyZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIH0sIDApO1xuICAgIH07XG5cbiAgICBjb25zdCBkcmFnRW5kID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH07XG5cbiAgICBjb25zdCBkcmFnT3ZlciA9IChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkcmFnRW50ZXIoKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnTGVhdmUoKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRHJvcCA9IChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgaW5kZXhEcm9wQ2VsbCA9IHRoaXMuZ2V0SW5kZXhFbGVtZW50QnlUYXJnZXQoZXZ0LnRhcmdldCk7XG5cbiAgICAgIHRoaXMubW92ZVNxdWFyZUluQXJyYXkoaW5kZXhEcm9wQ2VsbCwgdGhpcy5kcmFnZ2FibGVTcXVhcmUpO1xuXG4gICAgICBldnQudGFyZ2V0LmFwcGVuZCh0aGlzLmRyYWdnYWJsZVNxdWFyZSk7XG4gICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcblxuICAgICAgdGhpcy5jZWxsQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBjZWxsLmNlbGw7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyYWdEcm9wKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jcmVhdGVFdmVudE1vdmUoKTtcbiAgICAgIHRoaXMuaXNGaW5pc2goKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcblxuICAgIGVtcHR5Q2VsbC5jZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgIGVtcHR5Q2VsbC5jZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgZW1wdHlDZWxsLmNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ0xlYXZlKTtcbiAgICBlbXB0eUNlbGwuY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJhZ0Ryb3ApO1xuXG4gICAgbmV4dGRvb3JOZWlnaGJvdXJzQ2VsbC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnRW5kKTtcblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ0VuZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgbW92ZVNxdWFyZUluQXJyYXkgPSAobmV3Q2VsbEluZGV4LCBzcXVhcmVFbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgb2xkQ2VsbCA9IHRoaXMuY2VsbEFycmF5XG4gICAgICAuZmlsdGVyKChjZWxsKSA9PiBjZWxsLnNxdWFyZSAmJiBjZWxsLnNxdWFyZS4kc3F1YXJlID09PSBzcXVhcmVFbGVtZW50KTtcbiAgICB0aGlzLmNlbGxBcnJheVtuZXdDZWxsSW5kZXhdLnNxdWFyZSA9IG9sZENlbGxbMF0uc3F1YXJlO1xuXG4gICAgb2xkQ2VsbFswXS5zcXVhcmUgPSBudWxsO1xuICB9O1xuXG4gIGFuaW1hdGlvbk1vdmUgPSAoZGlyZWN0aW9uLCBpbmRleEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjbHMgPSBgbW92ZSR7ZGlyZWN0aW9ufWA7XG4gICAgY29uc3QgJGVsID0gdGhpcy5jZWxsQXJyYXlbaW5kZXhFbGVtZW50XS5zcXVhcmUuJHNxdWFyZTtcblxuICAgICRlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgdGhpcy4kYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgICRlbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAkZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRJbmRleEVsZW1lbnRCeVRhcmdldCA9ICh0YXJnZXQpID0+IHRoaXMuY2VsbEFycmF5XG4gICAgLmZpbmRJbmRleCgoY3VyRWxlbWVudCkgPT4gY3VyRWxlbWVudC5jZWxsID09PSB0YXJnZXQpO1xuXG4gIGdldEluZGV4RW1wdHkgPSAoKSA9PiB0aGlzLmNlbGxBcnJheS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuc3F1YXJlID09PSBudWxsKTtcblxuICBuZXh0ZG9vck5laWdoYm91cnModG9wLCBsZWZ0KSB7XG4gICAgY29uc3QgY3VySW5kZXggPSB0b3AgKiB0aGlzLnNpemUgKyBsZWZ0O1xuXG4gICAgY29uc3QgZ2V0TGVmdCA9ICgpID0+IHtcbiAgICAgIGlmIChsZWZ0ID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBjdXJJbmRleCAtIDE7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFJpZ2h0ID0gKCkgPT4ge1xuICAgICAgaWYgKGxlZnQgPT09IHRoaXMuc2l6ZSAtIDEpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIGN1ckluZGV4ICsgMTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG9wID0gKCkgPT4ge1xuICAgICAgaWYgKHRvcCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gY3VySW5kZXggLSB0aGlzLnNpemU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEJvdHRvbSA9ICgpID0+IHtcbiAgICAgIGlmICh0b3AgPT09IHRoaXMuc2l6ZSAtIDEpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIGN1ckluZGV4ICsgdGhpcy5zaXplO1xuICAgIH07XG5cbiAgICByZXR1cm4gW1xuICAgICAgZ2V0VG9wKCksXG4gICAgICBnZXRMZWZ0KCksXG4gICAgICBnZXRSaWdodCgpLFxuICAgICAgZ2V0Qm90dG9tKCksXG4gICAgXS5maWx0ZXIoKGluZGV4KSA9PiBpbmRleCAhPT0gbnVsbCk7XG4gIH1cblxuICBnZXRTcXVhcmVJbmRleChjZWxsKSB7XG4gICAgY29uc3QgeyBzcXVhcmUgfSA9IGNlbGw7XG4gICAgcmV0dXJuIHNxdWFyZSA/IHNxdWFyZS5pbmRleCA6IHRoaXMuY291bnRDZWxscyAtIDE7XG4gIH1cblxuICBnZXRWYWx1ZVNxdWFyZUFycmF5ID0gKCkgPT4gdGhpcy5jZWxsQXJyYXkubWFwKChjZWxsKSA9PiB0aGlzLmdldFNxdWFyZUluZGV4KGNlbGwpKTtcbn1cbiIsImltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL1N0YXRlLmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcbmltcG9ydCBzb3VuZCBmcm9tICcuLi91dGlsL3NvdW5kLmpzJztcbmltcG9ydCBtc1RvVGltZSBmcm9tICcuLi91dGlsL21zVG9UaW1lLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHtcbiAgICAgIHNpemU6IDQsXG4gICAgICBpc1BpY3R1cmVzU3F1YXJlOiBmYWxzZSxcbiAgICAgIGlzU291bmQ6IHRydWUsXG4gICAgICBzaXplQm9hcmQ6IG51bGwsXG4gICAgfTtcblxuICAgIHRoaXMuZWxlbWVudHMgPSB7XG4gICAgICBtZW51VG9nZ2xlOiBudWxsLFxuICAgICAgbWVudUlubmVyOiBudWxsLFxuICAgICAgbWVudTogbnVsbCxcbiAgICAgIG5ld0dhbWU6IG51bGwsXG4gICAgICBzY29yZTogbnVsbCxcbiAgICAgIHNldHRpbmc6IG51bGwsXG4gICAgICByZXN1bWU6IG51bGwsXG4gICAgICB0aW1lVG9nZ2xlOiBudWxsLFxuICAgICAgdHVybnNUb2dnbGU6IG51bGwsXG4gICAgICBib2FyZDogbnVsbCxcbiAgICB9O1xuXG4gICAgdGhpcy5ib2FyZCA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5zY29yZSA9IG51bGw7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLmV2ZW50cygpO1xuICB9XG5cbiAgc3RhdGljIHJlYWR5KCkge1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuXG4gICAgY29uc3QgbG9hZEdhbWVPYmogPSBnYW1lLmxvYWRTdGF0ZUdhbWUoKTtcblxuICAgIGlmIChsb2FkR2FtZU9iaikge1xuICAgICAgZ2FtZS5wcm9wZXJ0aWVzLnNpemUgPSArbG9hZEdhbWVPYmouc2l6ZTtcbiAgICAgIGdhbWUucHJvcGVydGllcy5pc1NvdW5kID0gbG9hZEdhbWVPYmouaXNTb3VuZDtcbiAgICAgIGdhbWUucHJvcGVydGllcy5pc1BpY3R1cmVzU3F1YXJlID0gbG9hZEdhbWVPYmouaXNQaWM7XG4gICAgICBpZiAoZ2FtZS5wcm9wZXJ0aWVzLmlzUGljdHVyZXNTcXVhcmUpIHtcbiAgICAgICAgZ2FtZS5lbGVtZW50cy5ib2FyZC5jbGFzc0xpc3QuYWRkKCdwaWN0dXJlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lLmVsZW1lbnRzLmJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3BpY3R1cmUnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgaW1nSW5kZXgsIHN0YXRlLCBhcnJheUNlbGwgfSA9IGxvYWRHYW1lT2JqO1xuICAgICAgZ2FtZS5zdGF0ZS50aW1lID0gc3RhdGUudGltZTtcbiAgICAgIGdhbWUuc3RhdGUudHVybnMgPSBzdGF0ZS50dXJucztcbiAgICAgIGdhbWUuc3RhdGUuc3RhdGUgPSBzdGF0ZS5zdGF0ZTtcbiAgICAgIGdhbWUuYm9hcmQgPSBCb2FyZC5jcmVhdGUoZ2FtZS5lbGVtZW50cy5ib2FyZCwgZ2FtZS5wcm9wZXJ0aWVzLnNpemUsXG4gICAgICAgIGdhbWUucHJvcGVydGllcy5zaXplQm9hcmQsIGFycmF5Q2VsbCwgZ2FtZS5wcm9wZXJ0aWVzLmlzUGljdHVyZXNTcXVhcmUsIGltZ0luZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZS5ib2FyZCA9IEJvYXJkLmNyZWF0ZShnYW1lLmVsZW1lbnRzLmJvYXJkLFxuICAgICAgICBnYW1lLnByb3BlcnRpZXMuc2l6ZSwgZ2FtZS5wcm9wZXJ0aWVzLnNpemVCb2FyZCk7XG4gICAgfVxuXG4gICAgZ2FtZS5ib2FyZC5zdGFydCh0cnVlKTtcbiAgICBpZiAoZ2FtZS5zdGF0ZS5zdGF0ZSA9PT0gJ3BsYXknKSB7XG4gICAgICBnYW1lLnN0YXRlLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdhbWU7XG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgIDxkaXYgY2xhc3M9XCJtZW51LXRvZ2dsZVwiPlxuICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPHNwYW4+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZW51XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudS1pbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgKTtcblxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzdGF0aXN0aWNcIj48L2Rpdj5cbiAgICBgKTtcblxuICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5yZWFkeSgnLnN0YXRpc3RpYycpO1xuICAgIHRoaXMuc2NvcmUgPSBTY29yZS5yZWFkeSgpO1xuXG4gICAgdGhpcy5lbGVtZW50cy5ib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZCcpO1xuXG4gICAgdGhpcy5lbGVtZW50cy5tZW51VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJyk7XG4gICAgdGhpcy5lbGVtZW50cy5tZW51SW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pbm5lcicpO1xuICAgIHRoaXMuZWxlbWVudHMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5cbiAgICB0aGlzLmVsZW1lbnRzLm5ld0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3Jyk7XG4gICAgdGhpcy5lbGVtZW50cy5yZXN1bWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdW1lJyk7XG4gICAgdGhpcy5lbGVtZW50cy5zY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpO1xuICAgIHRoaXMuZWxlbWVudHMuc2V0dGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5nJyk7XG5cbiAgICB0aGlzLnZpZXdNZW51KCk7XG4gIH07XG5cbiAgZXZlbnRzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG5cbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLmNlbGwnKSkgdGhpcy5ib2FyZC5tb3ZlKHRhcmdldC5jbG9zZXN0KCcuY2VsbCcpKTtcblxuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcubWVudS10b2dnbGUnKSkgdGhpcy5tZW51VG9nZ2xlKGUpO1xuXG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJyNuZXcnKSkgdGhpcy5uZXdHYW1lKGUpO1xuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcjcmVzdW1lJykpIHRoaXMucmVzdW1lKGUpO1xuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcjc2NvcmUnKSkgdGhpcy52aWV3U2NvcmUoKTtcbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnI3NldHRpbmcnKSkgdGhpcy52aWV3U2V0dGluZygpO1xuXG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJyN0aW1lTGFiZWwnKSkgdGhpcy52aWV3VGltZVNjb3JlKCk7XG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJyN0dXJuTGFiZWwnKSkgdGhpcy52aWV3VHVybnNTY29yZSgpO1xuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuYmFjaycpKSB0aGlzLnZpZXdNZW51KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnRzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZpbmlzaCcsIHRoaXMuZXZlbnRGaW5pc2hHYW1lKTtcbiAgICB0aGlzLmVsZW1lbnRzLmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2lzTW92ZScsIHRoaXMuZXZlbnRJc01vdmUpO1xuICB9O1xuXG4gIGV2ZW50RmluaXNoR2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLmZpbmlzaEdhbWUoKTtcbiAgICB0aGlzLnNhdmVTdGF0ZUdhbWUoKTtcbiAgfTtcblxuICBldmVudElzTW92ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmlzU291bmQpIHtcbiAgICAgIHNvdW5kKCk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUudHVybigpO1xuICAgIHRoaXMuc2F2ZVN0YXRlR2FtZSgpO1xuICB9O1xuXG4gIG1lbnVUb2dnbGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHsgbWVudSwgbWVudVRvZ2dsZSB9ID0gdGhpcy5lbGVtZW50cztcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICBtZW51VG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZCcpLmNsYXNzTGlzdC50b2dnbGUoJ2JsdXInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdCcpLmNsYXNzTGlzdC50b2dnbGUoJ2JsdXInKTtcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luLW1vZGFsJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tbW9kYWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdibHVyJyk7XG4gICAgfVxuICB9XG5cbiAgbmV3R2FtZSA9IChlKSA9PiB7XG4gICAgdGhpcy5tZW51VG9nZ2xlKGUpO1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tbW9kYWwnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luLW1vZGFsJykpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaXNQaWN0dXJlc1NxdWFyZSkge1xuICAgICAgdGhpcy5lbGVtZW50cy5ib2FyZC5jbGFzc0xpc3QuYWRkKCdwaWN0dXJlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuYm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgncGljdHVyZScpO1xuICAgIH1cbiAgICB0aGlzLmJvYXJkID0gQm9hcmQuY3JlYXRlKHRoaXMuZWxlbWVudHMuYm9hcmQsIHRoaXMucHJvcGVydGllcy5zaXplLFxuICAgICAgdGhpcy5wcm9wZXJ0aWVzLnNpemVCb2FyZCwgW10sIHRoaXMucHJvcGVydGllcy5pc1BpY3R1cmVzU3F1YXJlKTtcbiAgICB0aGlzLmJvYXJkLnN0YXJ0KCk7XG4gICAgdGhpcy5zdGF0ZS5zdG9wKCk7XG4gICAgdGhpcy5zdGF0ZS5zdGFydCgpO1xuICB9O1xuXG4gIHJlc3VtZShlKSB7XG4gICAgdGhpcy5tZW51VG9nZ2xlKGUpO1xuICB9XG5cbiAgdmlld01lbnUoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5tZW51SW5uZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5lbGVtZW50cy5tZW51SW5uZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgICAgICA8dWwgY2xhc3M9XCJtZW51LWxpc3RcIj5cbiAgICAgICAgICA8bGkgaWQ9XCJyZXN1bWVcIj7Qn9GA0L7QtNC+0LvQttC40YLRjDwvbGk+XG4gICAgICAgICAgPGxpIGlkPVwibmV3XCI+0J3QvtCy0LDRjyDQuNCz0YDQsDwvbGk+XG4gICAgICAgICAgPGxpIGlkPVwic2NvcmVcIj7QodGH0LXRgjwvbGk+XG4gICAgICAgICAgPGxpIGlkPVwic2V0dGluZ1wiPtCd0LDRgdGC0YDQvtC50LrQuDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+RGlzY29yZDogTWFsYWdvciM2NTM1PC9kaXY+XG4gICAgYCk7XG4gIH1cblxuICB2aWV3U2V0dGluZygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLm1lbnVJbm5lci5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmVsZW1lbnRzLm1lbnVJbm5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXG4gICAgICAgIDxmb3JtIGNsYXNzPVwic2V0dGluZ3NcIiBuYW1lPVwic2V0dGluZ3NcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJiYWNrXCIgaHJlZj1cIiNcIj48aDI+QmFjazwvaDI+PC9hPlxuICAgICAgICA8aDIgY2xhc3M9XCJtZW51X190aXRsZVwiPlNldHRpbmdzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJzaXplXCI+U2l6ZTwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzaXplXCIgaWQ9XCJzaXplXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+M3gzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NHg0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NXg1PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Nng2PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+N3g3PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+OHg4PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImlzUGljdHVyZVwiPkRlc2lnbjwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiaXNQaWN0dXJlXCIgaWQ9XCJpc1BpY1wiIGNoZWNrZWQgdmFsdWU9XCJmYWxzZVwiPjxsYWJlbCBjbGFzcz1cImlucHV0LWxhYmVsXCIgZm9yPVwiaXNQaWNcIj5EaWdpdDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImlzUGljdHVyZVwiIHZhbHVlPVwidHJ1ZVwiIGlkPVwiaXNEaWdcIiAgY2hlY2tlZD1cImNoZWNrZWRcIj48bGFiZWwgY2xhc3M9XCJpbnB1dC1sYWJlbFwiIGZvcj1cImlzRGlnXCI+UGljdHVyZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic291bmRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzb3VuZC1sYWJlbFwiIGZvcj1cInNvdW5kXCI+U291bmQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIGApO1xuXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzICNzaXplJyk7XG4gICAgY29uc3QgcmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJpc1BpY3R1cmVcIl0nKTtcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZCcpO1xuXG4gICAgc2VsZWN0Lm9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzLnNpemUgLSAzXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgY2hlY2suY2hlY2tlZCA9IHRoaXMucHJvcGVydGllcy5pc1NvdW5kO1xuXG4gICAgY29uc3Qgc2V0U2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BlcnRpZXMuc2l6ZSA9IHNlbGVjdC52YWx1ZTtcbiAgICAgIHRoaXMucHJvcGVydGllcy5pc1NvdW5kID0gY2hlY2suY2hlY2tlZDtcblxuICAgICAgZm9yIChjb25zdCByYWRpbyBvZiByYWRpb3MpIHtcbiAgICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnByb3BlcnRpZXMuaXNQaWN0dXJlc1NxdWFyZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFNldHRpbmdzKTtcbiAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRTZXR0aW5ncyk7XG5cbiAgICBmb3IgKGNvbnN0IHJhZGlvIG9mIHJhZGlvcykge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvLnZhbHVlID09PSBgJHt0aGlzLnByb3BlcnRpZXMuaXNQaWN0dXJlc1NxdWFyZX1gO1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0U2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHZpZXdTY29yZSA9ICgpID0+IHtcbiAgICB0aGlzLmVsZW1lbnRzLm1lbnVJbm5lci5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmVsZW1lbnRzLm1lbnVJbm5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXG4gICAgPGRpdiBjbGFzcz1cInNjb3JlLXZpZXdcIj5cbiAgICA8YSBjbGFzcz1cImJhY2tcIiBocmVmPVwiI1wiPjxoMj5CYWNrPC9oMj48L2E+XG4gICAgICA8aDIgY2xhc3M9XCJtZW51X190aXRsZVwiPlNjb3JlczwvaDI+XG4gICAgICA8dWwgY2xhc3M9XCJzY29yZV9fbGFiZWxzXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cInNjb3JlX19pdGVtIGFjdGl2ZVwiIGlkPVwidGltZUxhYmVsXCI+VGltZTwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInNjb3JlX19pdGVtXCIgaWQ9XCJ0dXJuTGFiZWxcIj5UdXJuczwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzcz1cInNjb3JlX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY29yZV9fdGFibGVcIj4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgIGApO1xuXG4gICAgdGhpcy5lbGVtZW50cy50aW1lVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWVMYWJlbCcpO1xuICAgIHRoaXMuZWxlbWVudHMudHVybnNUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHVybkxhYmVsJyk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy50aW1lVG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIHRoaXMudmlld1RpbWVTY29yZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdUdXJuc1Njb3JlKCk7XG4gICAgfVxuICB9O1xuXG4gIHZpZXdUaW1lU2NvcmUgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzLnRpbWVUb2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgdGhpcy5zY29yZVRvZ2dsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX190YWJsZScpO1xuXG4gICAgdGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgdGFibGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJwb3NpdGlvblwiPlBvczwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5OYW1lPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPlRpbWU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0dXJuc1wiPlR1cm5zPC9kaXY+IGApO1xuXG4gICAgY29uc3QgYmVzdFRpbWUgPSB0aGlzLnNjb3JlLmdldEJlc3RUaW1lKCk7XG4gICAgYmVzdFRpbWUuZm9yRWFjaCgocmVzLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lLCB0aW1lLCB0dXJucyB9ID0gcmVzO1xuXG4gICAgICB0YWJsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb25cIj4ke2luZGV4ICsgMX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7bmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPiR7bXNUb1RpbWUodGltZSl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInR1cm5zXCI+JHt0dXJuc308L2Rpdj4gICAgICAgXG4gICAgICBgKTtcbiAgICB9KTtcbiAgfTtcblxuICB2aWV3VHVybnNTY29yZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHMudHVybnNUb2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgdGhpcy5zY29yZVRvZ2dsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX190YWJsZScpO1xuXG4gICAgdGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgdGFibGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJwb3NpdGlvblwiPlBvczwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5OYW1lPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidHVybnNcIj5UdXJuczwvZGl2PiBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+VGltZTwvZGl2PmApO1xuXG4gICAgY29uc3QgYmVzdFRpbWUgPSB0aGlzLnNjb3JlLmdldEJlc3RUdXJucygpO1xuICAgIGJlc3RUaW1lLmZvckVhY2goKHJlcywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgdGltZSwgdHVybnMgfSA9IHJlcztcblxuICAgICAgdGFibGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uXCI+JHtpbmRleCArIDF9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke25hbWV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInR1cm5zXCI+JHt0dXJuc308L2Rpdj4gICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVcIj4ke21zVG9UaW1lKHRpbWUpfTwvZGl2PlxuICAgICAgYCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmlld1dpbiA9ICgpID0+IHtcbiAgICBjb25zdCBsYXN0VGltZSA9IHRoaXMuc2NvcmUuZ2V0TGFzdFBvc2l0aW9uSW5TY29yZUJ5VGltZSgpO1xuICAgIGNvbnN0IGxhc3RUdXJucyA9IHRoaXMuc2NvcmUuZ2V0TGFzdFBvc2l0aW9uSW5TY29yZUJ5VHVybnMoKTtcblxuICAgIGNvbnN0IGlzUmVjb3JkID0gbGFzdFRpbWUgPCAwIHx8IGxhc3RUdXJucyA8IDBcbiAgICAgIHx8IChsYXN0VGltZSA+IHRoaXMuc3RhdGUudGltZSkgfHwgKGxhc3RUdXJucyA+IHRoaXMuc3RhdGUudHVybnMpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3aW4tbW9kYWwgJHtpc1JlY29yZCA/ICcnIDogJ25vLXJlY29yZCd9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPtCS0LDQvCDRg9C00LDQu9C+0YHRjCEhITwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPtCf0L7RgdC70LUgPHNwYW4gY2xhc3M9XCJyZWNvcmQtdGltZVwiPiR7bXNUb1RpbWUodGhpcy5zdGF0ZS50aW1lKX08L3NwYW4+INCy0YDQtdC80LXQvdC4INC4IDxzcGFuIGNsYXNzPVwicmVjb3JkLXR1cm5zXCI+JHt0aGlzLnN0YXRlLnR1cm5zfTwvc3Bhbj4g0YXQvtC00L7QsiDQstGLINGB0L7QsdGA0LDQu9C4INC/0LDQt9C7INC40LcgPHNwYW4gY2xhc3M9XCJyZWNvcmQtc2l6ZVwiPiR7KHRoaXMucHJvcGVydGllcy5zaXplICogdGhpcy5wcm9wZXJ0aWVzLnNpemUpIC0gMX08L3NwYW4+INC60LvQtdGC0L7Qui4g0J/QvtC30LTRgNCw0LLQu9GP0Y4hISFcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWNvcmRcIj7QktGLPHNwYW4gY2xhc3M9XCJ3b3JtLXdvcmRzXCI+LCDQuiDRgdC+0LbQsNC70LXQvdC40Y4g0L3QtTwvc3Bhbj4g0L/QvtC/0LDQu9C4INCyINGC0LDQsdC70LjRhtGDINGA0LXQutC+0YDQtNC+0LI8c3BhbiBjbGFzcz1cIndvcm0td29yZHNcIj4uINCd0L4g0Y3RgtC+INC90LUg0L/QvtCy0L7QtCDRg9C90YvQstCw0YLRjCwg0LLRiyDQstGB0LUg0YDQsNCy0L3QviDQvNC+0LvQvtC00LXRhiE8L3NwYW4+PHNwYW4gY2xhc3M9XCJyZWFzb25cIj4uPC9zcGFuPiA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uXCI+0JLQvdC10YHRgtC4INCy0LDRiCDRgNC10LfRg9C70YzRgtCw0YIg0LIg0YLQsNCx0LvQuNGG0YM/INCV0YHQu9C4IFwi0JTQsFwiLCDRgtC+INCy0LLQtdC00LjRgtC1INCy0LDRiNC1INC40LzRjyDQuCDQvtGC0L/RgNCw0LLRgtC1INGE0L7RgNC80YMuINCV0YHQu9C4INCy0Ysg0YHQutGA0L7QvNC90LjRh9Cw0LXRgtC1LCDRgtC+INGC0L7QttC1INC40LzQtdC10YLQtSDQv9GA0LDQstC+LlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5leHQtZ2FtZVwiPtCU0LvRjyDQvdCw0YfQsNC70LAg0L3QvtCy0L7QuSDQuNCz0YDRiyDQuNC70Lgg0LjQt9C80LXQvdC10L3QuNGPINC90LDRgdGC0YDQvtC10Log0LfQsNC50LTQuNGC0LUg0LIg0LzQtdC90Y4uINCi0LDQvCDQstGB0LUg0LHRg9C00LXRgi48L2Rpdj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJ5b3VyLW5hbWUtZm9ybVwiPlxuICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBjbGFzcz1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQsNGI0LUg0LjQvNGPP1wiPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImNhbmNlbFwiIHR5cGU9XCJyZXNldFwiIHZhbHVlPVwi0K8g0YHQutGA0L7QvNC90YvQuVwiPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInNlbmRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQryDQn9Ce0JHQldCU0JjQotCV0JvQrCFcIj5cbiAgICAgICAgPC9mb3JtPlxuICAgIFxuICAgIDwvZGl2PiAgICBcbiAgICBgKTtcbiAgfTtcblxuICBzY29yZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRpbWVUb2dnbGUsIHR1cm5zVG9nZ2xlIH0gPSB0aGlzLmVsZW1lbnRzO1xuICAgIHRpbWVUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgdHVybnNUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH07XG5cbiAgZmluaXNoR2FtZSgpIHtcbiAgICB0aGlzLmJvYXJkLnJhbmRJbmRleEFycmF5ID0gW107XG4gICAgdGhpcy5zdGF0ZS5zdG9wKCk7XG4gICAgdGhpcy5zdGF0ZS5fc3RhdGUgPSAnZmluaXNoJztcbiAgICBjb25zdCB0dXJucyA9IHRoaXMuc3RhdGUuZ2V0VHVybnMoKTtcbiAgICBjb25zdCB7IHRpbWUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICB0aGlzLnNhdmVTdGF0ZUdhbWUoKTtcbiAgICB0aGlzLnZpZXdXaW4oKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZW5kJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG5cbiAgICAgIGlmIChuYW1lID09PSAnJykgbmFtZSA9ICdHYW1lcic7XG5cbiAgICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgdHVybnMsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIG5hbWUsXG4gICAgICB9O1xuXG4gICAgICBpZiAodHVybnMgJiYgdGltZSkge1xuICAgICAgICB0aGlzLnNjb3JlLnNldFJlc3VsdChyZXMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tbW9kYWwgJyk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5ICcpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgfTtcblxuICBzYXZlU3RhdGVHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWVQcm9wZXJ0eUZvclNhdmUgPSB7XG4gICAgICBzaXplOiB0aGlzLnByb3BlcnRpZXMuc2l6ZSxcbiAgICAgIGlzUGljOiB0aGlzLnByb3BlcnRpZXMuaXNQaWN0dXJlc1NxdWFyZSxcbiAgICAgIGlzU291bmQ6IHRoaXMucHJvcGVydGllcy5pc1NvdW5kLFxuICAgICAgaW1nSW5kZXg6IHRoaXMuYm9hcmQuaW1hZ2VJbmRleCxcbiAgICAgIGFycmF5Q2VsbDogdGhpcy5ib2FyZC5nZXRWYWx1ZVNxdWFyZUFycmF5KCksXG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpLFxuICAgIH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2F2ZUdhbWUnLCBKU09OLnN0cmluZ2lmeShnYW1lUHJvcGVydHlGb3JTYXZlKSk7XG4gIH07XG5cbiAgbG9hZFN0YXRlR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBsb2FkT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2F2ZUdhbWUnKSk7XG4gICAgcmV0dXJuIGxvYWRPYmogfHwgbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNjb3JlVGFibGUgPSB0aGlzLmxvYWRUYWJsZSgpO1xuICB9XG5cbiAgc3RhdGljIHJlYWR5KCkge1xuICAgIHJldHVybiBuZXcgU2NvcmUoKTtcbiAgfVxuXG4gIC8vIHNhdmUgaW4gbG9jYWxTdG9yYWdlXG4gIHNhdmVUYWJsZSgpIHtcbiAgICBpZiAodGhpcy5zY29yZVRhYmxlLmxlbmd0aCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlVGFibGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnNjb3JlVGFibGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ9Ci0LDQsdC70LjRhtCwINGA0LXQutC+0YDQtNC+0LIg0L3QtSDRgdC+0YXRgNCw0L3QtdC90LAuINCi0LDQsdC70LjRhtCwINC/0YPRgdGC0LAnKTtcbiAgICB9XG4gIH1cblxuICAvLyBsb2FkIGZyb20gbG9jYWxTdG9yYWdlXG4gIGxvYWRUYWJsZSA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlVGFibGUnKSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlVGFibGUnKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCfQotCw0LHQu9C40YbQsCDRgNC10LrQvtGA0LTQvtCyINC90LUg0LfQsNCz0YDRg9C20LXQvdCwJyk7XG4gICAgcmV0dXJuIFtdO1xuICB9O1xuXG4gIC8vIHNldCBuZXcgcmVjb3JkIHRvIHNjb3JlIHRhYmxlXG4gIHNldFJlc3VsdCA9IChyZXN1bHQpID0+IHtcbiAgICBjb25zdCB7IHRpbWUsIHR1cm5zIH0gPSByZXN1bHQ7XG5cbiAgICBjb25zdCBsYXN0VGltZSA9IHRoaXMuZ2V0TGFzdFBvc2l0aW9uSW5TY29yZUJ5VGltZSgpO1xuICAgIGNvbnN0IGxhc3RUdXJucyA9IHRoaXMuZ2V0TGFzdFBvc2l0aW9uSW5TY29yZUJ5VHVybnMoKTtcblxuICAgIGlmICh0aW1lIDwgbGFzdFRpbWVcbiAgICAgIHx8IHR1cm5zIDwgbGFzdFR1cm5zXG4gICAgICB8fCBsYXN0VGltZSA9PT0gLTFcbiAgICAgIHx8IGxhc3RUdXJucyA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2NvcmVUYWJsZS5wdXNoKHJlc3VsdCk7XG5cbiAgICAgIHRoaXMuc2F2ZVRhYmxlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGdldExhc3RQb3NpdGlvbkluU2NvcmVCeVRpbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWF4UmVzdWx0SW5UYWJsZSA9IHRoaXMuc29ydEJ5RmllbGQoJ3RpbWUnKTtcblxuICAgIGlmIChtYXhSZXN1bHRJblRhYmxlLmxlbmd0aCA8IDEwKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiBtYXhSZXN1bHRJblRhYmxlW21heFJlc3VsdEluVGFibGUubGVuZ3RoIC0gMV0udGltZTtcbiAgfTtcblxuICBnZXRMYXN0UG9zaXRpb25JblNjb3JlQnlUdXJucyA9ICgpID0+IHtcbiAgICBjb25zdCBtYXhSZXN1bHRJblRhYmxlID0gdGhpcy5zb3J0QnlGaWVsZCgndHVybnMnKTtcblxuICAgIGlmIChtYXhSZXN1bHRJblRhYmxlLmxlbmd0aCA8IDEwKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiBtYXhSZXN1bHRJblRhYmxlW21heFJlc3VsdEluVGFibGUubGVuZ3RoIC0gMV0udHVybnM7XG4gIH07XG5cbiAgc29ydEJ5RmllbGQoZmllbGQpIHtcbiAgICByZXR1cm4gdGhpcy5zY29yZVRhYmxlXG4gICAgICAuc29ydCgoYSwgYikgPT4gYVtmaWVsZF0gLSBiW2ZpZWxkXSlcbiAgICAgIC5maWx0ZXIoKHZhbCwgaW5kZXgpID0+IGluZGV4IDwgMTApO1xuICB9XG5cbiAgZ2V0QmVzdFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc29ydEJ5RmllbGQoJ3RpbWUnKTtcbiAgfVxuXG4gIGdldEJlc3RUdXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0QnlGaWVsZCgndHVybnMnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3F1YXJlIHtcbiAgY29uc3RydWN0b3IoaW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLiRzcXVhcmUgPSBudWxsO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKGluZGV4LCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgU3F1YXJlKGluZGV4LCB2YWx1ZSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy52YWx1ZTtcbiAgICAvLyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcblxuICAgIHRoaXMuJHNxdWFyZSA9IGVsZW1lbnQ7XG4gIH1cblxuICBnZXQgc3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLiRzcXVhcmU7XG4gIH1cbn1cbiIsImltcG9ydCBtc1RvVGltZSBmcm9tICcuLi91dGlsL21zVG9UaW1lLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHRoaXMuX3RpbWUgPSAwO1xuICAgIHRoaXMuX3R1cm5zID0gMDtcblxuICAgIHRoaXMuX3N0YXRlID0gJ3N0YXJ0JztcblxuICAgIHRoaXMudGltZXJJRCA9IG51bGw7XG5cbiAgICB0aGlzLiRlbCA9IG51bGw7XG4gICAgdGhpcy4kdHVybnMgPSBudWxsO1xuICAgIHRoaXMuJHRpbWVzID0gbnVsbDtcblxuICAgIHRoaXMuaW5pdChlbCk7XG4gIH1cblxuICBzdGF0aWMgcmVhZHkoZWwpIHtcbiAgICByZXR1cm4gbmV3IFN0YXRlKGVsKTtcbiAgfVxuXG4gIGluaXQoZWwpIHtcbiAgICB0aGlzLiRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgIHRoaXMuY3JlYXRlSFRNTCh0aGlzLiRlbCk7XG4gIH1cblxuICBjcmVhdGVIVE1MID0gKHBhcmVudEVsKSA9PiB7XG4gICAgcGFyZW50RWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgIDxkaXYgY2xhc3M9XCJzdGF0XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInR1cm5zXCI+VHVybnM6IDA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInRpbWVzXCI+VGltZTogMDA6MDA6MDA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgYCk7XG4gICAgdGhpcy4kdHVybnMgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcudHVybnMnKTtcbiAgICB0aGlzLiR0aW1lcyA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lcycpO1xuICB9O1xuXG4gIHN0YXJ0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gJ3BsYXknKSB7XG4gICAgICB0aGlzLl90aW1lID0gMDtcbiAgICAgIHRoaXMuX3R1cm5zID0gMDtcbiAgICAgIHRoaXMuX3N0YXRlID0gJ3BsYXknO1xuICAgIH1cbiAgICB0aGlzLiR0dXJucy5pbm5lclRleHQgPSBgVHVybnM6ICR7dGhpcy5fdHVybnN9YDtcbiAgICBzZXRUaW1lb3V0KHRoaXMudGljaywgMTAwMCk7XG4gIH07XG5cbiAgc3RvcCA9ICgpID0+IHtcbiAgICB0aGlzLl9zdGF0ZSA9ICdzdG9wJztcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcklEKTtcbiAgICB0aGlzLnRpbWVySUQgPSBudWxsO1xuICB9O1xuXG4gIHR1cm4gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSAncGxheScpIHtcbiAgICAgIHRoaXMuX3R1cm5zICs9IDE7XG4gICAgICB0aGlzLiR0dXJucy5pbm5lclRleHQgPSBgVHVybnM6ICR7dGhpcy5fdHVybnN9YDtcbiAgICB9XG4gIH07XG5cbiAgZ2V0VHVybnMgPSAoKSA9PiB0aGlzLl90dXJucztcblxuICB0aWNrID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gJ3BsYXknKSB7XG4gICAgICB0aGlzLl90aW1lICs9IDEwMDA7XG4gICAgICB0aGlzLiR0aW1lcy50ZXh0Q29udGVudCA9IGBUaW1lOiAke21zVG9UaW1lKHRoaXMudGltZSl9YDtcbiAgICAgIHRoaXMudGltZXJJRCA9IHNldFRpbWVvdXQodGhpcy50aWNrLCAxMDAwKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0IHRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gIH1cblxuICBzZXQgdGltZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cblxuICBzZXQgc3RhdGUodmFsdWUpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHR1cm5zKCkge1xuICAgIHJldHVybiB0aGlzLl90dXJucztcbiAgfVxuXG4gIHNldCB0dXJucyh2YWx1ZSkge1xuICAgIHRoaXMuX3R1cm5zID0gdmFsdWU7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGltZTogdGhpcy5fdGltZSxcbiAgICAgIHR1cm5zOiB0aGlzLl90dXJucyxcbiAgICAgIHN0YXRlOiB0aGlzLl9zdGF0ZSxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2NsYXNzZXMvR2FtZS5qcyc7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xuXG5HYW1lLnJlYWR5KCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtc1RvVGltZShkdXJhdGlvbikge1xuICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGR1cmF0aW9uIC8gMTAwMCkgJSA2MCk7XG4gIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcigoZHVyYXRpb24gLyAoMTAwMCAqIDYwKSkgJSA2MCk7XG4gIGxldCBob3VycyA9IE1hdGguZmxvb3IoKGR1cmF0aW9uIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCk7XG5cbiAgaG91cnMgPSAoaG91cnMgPCAxMCkgPyBgMCR7aG91cnN9YCA6IGhvdXJzO1xuICBtaW51dGVzID0gKG1pbnV0ZXMgPCAxMCkgPyBgMCR7bWludXRlc31gIDogbWludXRlcztcbiAgc2Vjb25kcyA9IChzZWNvbmRzIDwgMTApID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHM7XG5cbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufVxuIiwiaW1wb3J0IHNvdW5kTW92ZSBmcm9tICcuLi8uLi9hc3NldHMvc291bmRzL21vdmUubXAzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc291bmQoKSB7XG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCk7XG4gIGF1ZGlvLnNyYyA9IHNvdW5kTW92ZTtcbiAgYXVkaW8uYXV0b3BsYXkgPSB0cnVlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==