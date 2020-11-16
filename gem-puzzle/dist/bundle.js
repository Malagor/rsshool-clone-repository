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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n    --padding: 2px;\n    --animationSpeed: 0.1s;\n    --size: 4;\n    --bgLeft: 1;\n    --bgTop: 1;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml{\n    font-size: 16px;\n}\n\n@media screen and (max-width: 480px){\n    html{\n        font-size: 12px;\n    }\n}\n\nbody {\n    position: relative;\n    height: 100vh;\n    width: 100%;\n    min-width: 320px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-image: linear-gradient(135deg, #006B54, #5EDDC1);\n    font-family: Roboto, sans-serif;\n    overflow: hidden;\n}\n\n/* Меню*/\n\n.menu {\n    position: absolute;\n    top: 0;\n    right: -100%;\n    /*right: 0;*/\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n\n    background: rgba(0, 107, 84, 0.8);\n    /*background: rgba(0,0,0,0.9);*/\n    color: #ffffff;\n    font-size: 3rem;\n    z-index: 100;\n    transition: 0.3s;\n}\n\n.menu.open {\n    right: 0;\n}\n\n.menu-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n\n    list-style: none;\n}\n\n.menu-list li {\n    margin: 1rem 0;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.menu-list li:hover {\n    color: #F96302;\n}\n\n.menu-toggle {\n    position: absolute;\n    top: 2rem;\n    right: 3rem;\n    width: 3rem;\n    height: 3rem;\n    cursor: pointer;\n    z-index: 1002;\n}\n\n.menu-toggle span {\n    position: absolute;\n    /*top: 50%;*/\n    width: 100%;\n    height: 0.3rem;\n    background: #ffffff;\n    transition: 0.3s;\n\n}\n\n.menu-toggle span:nth-child(1) {\n    top: 0;\n}\n\n.menu-toggle span:nth-child(2) {\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.menu-toggle span:nth-child(3) {\n    top: 50%;\n    transform: translateY(-50%);\n\n}\n\n.menu-toggle span:nth-child(4) {\n    bottom: 0;\n}\n\n.menu-toggle:hover span {\n    background: #F96302;\n}\n\n.menu-toggle.open span:nth-child(1) {\n    top: -100%;\n    opacity: 0;\n}\n\n.menu-toggle.open span:nth-child(2) {\n    transform: rotate(-45deg);\n}\n\n.menu-toggle.open span:nth-child(3) {\n    transform: rotate(45deg);\n}\n\n.menu-toggle.open span:nth-child(4) {\n    bottom: -100%;\n    opacity: 0;\n}\n\n\n.field {\n    position: relative;\n    /*width: 400px;*/\n    /*height: 400px;*/\n    /*min-width: 320px;*/\n    width: 70vmin;\n    height: 70vmin;\n    max-width: 700px;\n    /*min-height: 320px;*/\n    max-height: 700px;\n\n    /*height: 90%;*/\n    /*padding: 2rem;*/\n    border: 3px solid #006B54;\n    /*border-radius: 12px;*/\n    box-sizing: content-box;\n    background: #00B27A;\n\n    /*box-shadow: 0 0 4.5px rgba(0, 0, 0, 0.08),*/\n    /*0 0.4px 9.6px rgba(0, 0, 0, 0.101),*/\n    /*0 2.3px 15.6px rgba(0, 0, 0, 0.115),*/\n    /*0 9.3px 23.7px rgba(0, 0, 0, 0.128),*/\n    /*0 36.2px 37.6px rgba(0, 0, 0, 0.149),*/\n    /*0 100px 80px rgba(0, 0, 0, 0.2);*/\n\n    transition: 0.3s;\n\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    /*padding: 1rem;*/\n    padding: 3px;\n    border-radius: 4%;\n\n    box-shadow: inset 1px 1px 1px 1px black,\n    inset -1px -1px 1px 1px white,\n    0 0 0 1rem #006B54,\n    -1px -1px 2px 1rem white,\n    1px 1px 2px 1rem black,\n    0.5rem 0.5rem 1.5rem 1rem black;\n    /*background-image: url(../assets/images/1.jpg);*/\n}\n\n.blur {\n    filter: blur(10px);\n}\n\n.cell2 {\n    position: absolute;\n    width: 100px;\n    height: 100px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n\n\n    font-weight: bold;\n\n    border-radius: 10px;\n    border: 3px solid #A34402;\n    box-sizing: border-box;\n    background: #F96302;\n\n    cursor: pointer;\n\n    transition: 0.3s;\n}\n.statistic {\n    max-width: 400px;\n    width: 75vmin;\n}\n.stat {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-top: 5rem;\n    padding: 1rem;\n\n    border: 3px solid #006B54;\n    border-radius: 12px;\n\n    /*box-shadow: 0 0 4.5px rgba(0, 0, 0, 0.08),*/\n    /*0 0.4px 9.6px rgba(0, 0, 0, 0.101),*/\n    /*0 2.3px 15.6px rgba(0, 0, 0, 0.115),*/\n    /*0 9.3px 23.7px rgba(0, 0, 0, 0.128),*/\n    /*0 36.2px 37.6px rgba(0, 0, 0, 0.149),*/\n    /*0 100px 80px rgba(0, 0, 0, 0.2);*/\n\n    box-shadow: inset 1px 1px 1px 1px black,\n    inset -1px -1px 1px 1px white,\n    0 0 0 0.2rem #006B54,\n    -1px -1px 2px 0.2rem white,\n    1px 1px 2px 0.2rem black,\n    0.3rem 0.3rem 0.9rem 0.3rem black;\n\n    background: #00B27A;\n\n    font-size: 1.5rem;\n\n    z-index: 1;\n}\n\n.picture {\n    border-radius: 0;\n}\n\n.cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: bold;\n    padding: 2px;\n\n    /*border: 1px solid #006B54;*/\n    box-sizing: border-box;\n}\n@media screen and (max-width: 768px){\n    .cell{\n        font-size: 2rem;\n    }\n}\n\n@media screen and (max-width: 480px){\n    .cell{\n        font-size: 1rem;\n    }\n}\n\n.picture .cell {\n    padding: 0;\n}\n\n.square {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1em;\n\n    font-weight: bold;\n\n    border-radius: 10px;\n    /*border: 3px solid #A34402;*/\n    box-shadow: -1px -1px 1px 1px white,\n    1px 1px 1px 1px black,\n    2px 2px 5px 2px black;\n    box-sizing: border-box;\n    background: #F96302;\n\n    cursor: pointer;\n}\n\n@media screen and (max-width: 480px){\n    .square{\n        font-size: 1rem;\n    }\n}\n\n.picture .square {\n    border-radius: 0;\n    color: transparent;\n    font-size: 0;\n    background-size: calc(100% * var(--size));\n\n    background-position-x: calc(var(--bgTop) * -100%);\n    background-position-y: calc(var(--bgLeft) * -100%);\n}\n\n.moveUp {\n    animation: moveUp var(--animationSpeed) ease-in-out;\n}\n\n@keyframes moveUp {\n    100% {\n        transform: translateY(calc(-100% - var(--padding) - var(--padding)));\n    }\n}\n\n.moveDown {\n    animation: moveDown var(--animationSpeed) ease-in-out;\n}\n\n@keyframes moveDown {\n    100% {\n        transform: translateY(calc(100% + var(--padding) + var(--padding)));\n    }\n}\n\n.moveRight {\n    animation: moveRight var(--animationSpeed) ease-in-out;\n}\n\n@keyframes moveRight {\n    100% {\n        transform: translateX(calc(100% + var(--padding) + var(--padding)));\n    }\n}\n\n.moveLeft {\n    animation: moveLeft var(--animationSpeed) ease-in-out;\n}\n\n@keyframes moveLeft {\n    100% {\n        transform: translateX(calc(-100% - var(--padding) - var(--padding)));\n    }\n}\n\n\n.hide {\n    /*opacity: 0;*/\n    display: none;\n}\n\n.hovered {\n    background-color: #d1d8e2;\n}\n\n\n/* SCORE TABLE */\n.score-view,\n.settings {\n    font-size: 18px;\n}\n\nh2 {\n    text-align: center;\n}\n\n.menu__title {\n    font-size: 3em;\n    margin-top: 0.5em;\n}\n\na.back {\n    text-decoration: none;\n}\n\na.back h2 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #F96302;\n    transition: 0.3s;\n}\n\na.back h2:before {\n    width: 0;\n    display: inline-block;\n    content: \"\\279C\";\n    color: currentColor;\n    transform: rotate(180deg);\n    vertical-align: center;\n    opacity: 0;\n    transition: 0.3s;\n    /*font-size: ;*/\n}\n\na.back h2:hover {\n    color: white;\n}\n\na.back h2:hover::before {\n    transform: rotate(180deg);\n    opacity: 1;\n    animation: left 1s ease-in-out infinite;\n}\n\n@keyframes left {\n    50% {\n        transform: translateX(-0.5rem) rotate(180deg);\n    }\n}\n\n.score__labels {\n    display: flex;\n    justify-content: center;\n    margin-top: 2em;\n    list-style: none;\n}\n\n.score__item {\n    padding: 0.5em 1rem;\n    margin: 0 1em;\n    border: 0.2em solid #F96302;\n    border-radius: 1rem;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.score__item.active {\n    background: rgba(249, 99, 2, 0.51);\n}\n\n.score__content {\n    margin-top: 2em;\n}\n\n.score__table {\n    display: grid;\n    grid-row-gap: 0.5em;\n    grid-template-columns: 3rem 5em 5em 5rem;\n    list-style: none;\n}\n\n.group {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 1em;\n}\n\nlabel {\n    display: inline-block;\n    font-size: 2rem;\n    width: 8rem;\n}\n\n.input-label {\n    display: flex;\n    align-items: center;\n    font-size: 1em;\n    cursor: pointer;\n\n    width: 5em;\n}\n\nselect {\n    /*height: 2rem;*/\n    /*width: 5rem;*/\n    font-size: 1.5em;\n    padding: 0.2em 1em;\n}\n\ninput[type='radio'],\ninput[type='checkbox'] {\n    display: none;\n}\n\n.input-label:before {\n    content: '';\n    width: 1em;\n    height: 1em;\n    margin-right: 0.5em;\n    border-radius: 50%;\n    border: 2px solid #F96302;\n    transition: 0.3s;\n\n}\n\ninput[type='radio']:checked + .input-label:before {\n    background: #F96302;\n}\n\n\n.sound-label {\n    display: flex;\n    align-items: center;\n    /*margin-right: 1em;*/\n    cursor: pointer;\n    width: 100%;\n}\n\n.sound-label:after {\n    content: '';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 1em;\n    height: 1em;\n    border: 2px solid #F96302;\n    margin-left: 1em;\n}\n\ninput[type='checkbox']:checked + .sound-label:after {\n    content: '\\2714';\n    color: #F96302;\n    max-width: 1em;\n    height: 1em;\n}\n\n\n/* Модальное окно победы */\n.overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n\n    background: rgba(249, 146, 103, 0.9);\n\n    z-index: 99;\n}\n.win-modal {\n    font-size: 16px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    width: 90%;\n    max-width: 600px;\n\n    padding: 2rem;\n\n    color: #010D19;\n    background: #00B27A;\n    border: 1rem solid #006B54;\n\n    box-shadow: 0 0 4.5px rgba(0, 0, 0, 0.08),\n    0 0.4px 9.6px rgba(0, 0, 0, 0.101),\n    0 2.3px 15.6px rgba(0, 0, 0, 0.115),\n    0 9.3px 23.7px rgba(0, 0, 0, 0.128),\n    0 36.2px 37.6px rgba(0, 0, 0, 0.149),\n    0 100px 80px rgba(0, 0, 0, 0.2);\n    z-index: 99;\n}\n\n@media screen and (max-width: 480px){\n    .win-modal {\n        width: 95%;\n        padding: 1em;\n        font-size: 1em;\n\n    }\n}\n\n.win-modal .title {\n    font-size: 3em;\n    text-align: center;\n}\n\n.win-modal .text,\n.win-modal .record,\n.win-modal .question,\n.win-modal .next-game{\n    margin-top: 1em;\n    font-size: 1.3em;\n}\n\n.record-time,\n.record-turns,\n.record-size\n{\n    font-weight: bold;\n    font-style: italic;\n}\n\n.worm-words {\n    display: none;\n}\n.no-record .worm-words {\n    display: inline;\n}\n.no-record .reason {\n    display: none;\n}\n\n.no-record .question {\n    display: none;\n}\n\n.no-record .your-name-form {\n    display: none;\n}\n\n.your-name-form {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 100%;\n    margin-top: 1em;\n}\n\n.your-name-form .name {\n    flex-basis: 90%;\n    font-size: 1.5em;\n    padding: 0.3em;\n    text-align: center;\n}\n\ninput[type='submit'],\ninput[type='reset'] {\n    padding: 1em;\n    background: transparent;\n    border: 0.3em solid #006B54;\n\n    margin: 1rem 1rem 0;\n    font-size: 1.2em;\n\n    border-radius: 0.5em;\n    transition: 0.3s;\n    cursor: pointer;\n}\n\ninput[type='submit']:hover,\ninput[type='reset']:hover {\n    background: rgba(0, 107, 84, 0.5);\n    color: white;\n}\n\n.author {\n    margin-top: 2em;\n    font-size: 0.5em;\n    color: orange;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable import/extensions */



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

/* eslint-disable import/extensions */


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

      _this.$board.appendChild(fragment); // после отрисовки навешиваем возможность тягать клетки ТОЛЬКО рядом с пустой
      // this.setDraggable();


      _this.dragNDrop();
    });

    _defineProperty(this, "isSolution", function (arr) {
      // Проверка на четность
      // Если четный то вовзращает true
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

      var neighboursIndexes = _this.nextdoorNeighbours(top, left); // Массив соседних с пустой элементов


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

        var indexDropCell = _this.getIndexElementByTarget(evt.target); // изменяем массив клеток в свойстве класса


        _this.moveSquareInArray(indexDropCell, _this.draggableSquare);

        evt.target.append(_this.draggableSquare);
        evt.target.classList.remove('hovered'); // console.log('Индекс пустой ячейки:', this.getIndexEmpty());

        _this.cellArray.forEach(function (cell) {
          var target = cell.cell; // Удаляем старые слушатели

          target.removeEventListener('dragover', dragOver);
          target.removeEventListener('dragenter', dragEnter);
          target.removeEventListener('dragleave', dragLeave);
          target.removeEventListener('drop', dragDrop);
        });

        _this.createEventMove();

        _this.isFinish();

        _this.render(); // this.dragNDrop();

      }; // пустая ячейка в которую можно положить


      emptyCell.cell.addEventListener('dragover', dragOver);
      emptyCell.cell.addEventListener('dragenter', dragEnter);
      emptyCell.cell.addEventListener('dragleave', dragLeave);
      emptyCell.cell.addEventListener('drop', dragDrop); // Те которые можно тягать

      nextdoorNeighboursCell.forEach(function (cell) {
        cell.removeEventListener('dragstart', dragStart);
        cell.removeEventListener('dragend', dragEnd); // Устанавливаем клеткам новую возможность тягаться

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
      this.cellArray = []; // Если это новая игра, то получаем перемешанные индексы, иначе попорядку

      if (this.randIndexArray.length === 0) {
        this.randIndexArray = this.randIndex(this.countCells, !isInit);
      } // выюираем рандомную картинку


      if (this.isPic && this.imageIndex === null) {
        this.imageIndex = 1 + Math.floor(Math.random() * Math.floor(150));
      } // создаем массив клеток


      for (var i = 0; i < this.countCells; i += 1) {
        var cell = document.createElement('div');
        cell.className = 'cell';
        var left = i % this.size;
        var top = (i - left) / this.size;
        var square = null; // Создаем фишку в клетке

        if (this.randIndexArray[i] !== this.countCells - 1) {
          square = _Square_js__WEBPACK_IMPORTED_MODULE_0__["default"].create(this.randIndexArray[i], this.randIndexArray[i] + 1); // Если в настройках выбрана картинка, то формируем картинку для фишки

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
        } // Помещаем элемент в массив


        this.cellArray.push({
          top: top,
          // строка
          left: left,
          // рядок
          cell: cell,
          // DOM элемент клетки
          square: square // DOM  элемент фишки в клетке, или null

        });
      }

      this.render();
    }
  }, {
    key: "randIndex",
    // Поиск индексов фишек с решаемым результатом
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
    } // Проверка на решаемость

  }, {
    key: "createEventMove",
    value: function createEventMove() {
      var event = new Event('isMove', {
        bubbles: true
      });
      this.$board.dispatchEvent(event);
    } // Провека на окончание игры

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
    // Поиск индексов соседних фишек
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
      var square = cell.square; // возвращаем либо индекс, если фоишки нет, то последний индекс

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

/* eslint-disable import/extensions */






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
        var target = e.target; // Клик по клетке поля

        if (target.closest('.cell')) _this.board.move(target.closest('.cell')); // Клик по переключателю меню

        if (target.closest('.menu-toggle')) _this.menuToggle(e); // пункты меню

        if (target.closest('#new')) _this.newGame(e);
        if (target.closest('#resume')) _this.resume(e);
        if (target.closest('#score')) _this.viewScore();
        if (target.closest('#setting')) _this.viewSetting(); // Переключатель вида таблицы рекордов

        if (target.closest('#timeLabel')) _this.viewTimeScore();
        if (target.closest('#turnLabel')) _this.viewTurnsScore();
        if (target.closest('.back')) _this.viewMenu();
      }); // Пользовательские события

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
      var time = this.state.time; // const name = prompt('Your Name?');

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
      } // game.board.cellArray = loadGameObg.arrayCell;
      // game.board.render();


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
    // Сохранение таблицы рекордов в localStorage
    value: function saveTable() {
      if (this.scoreTable.length) {
        localStorage.setItem('scoreTable', JSON.stringify(this.scoreTable));
      } else {
        console.log('Таблица рекордов не сохранена. Таблица пуста');
      }
    } // Загрузка таблицы рекордов из localStorage

  }, {
    key: "sortByField",
    // Сортировка таблицы рекордов по времени или ходам
    value: function sortByField(field) {
      return this.scoreTable.sort(function (a, b) {
        return a[field] - b[field];
      }).filter(function (val, index) {
        return index < 10;
      });
    } // Возвращает таблицу рекордов отсортированную по времени

  }, {
    key: "getBestTime",
    value: function getBestTime() {
      return this.sortByField('time');
    } // Возвращает таблицу рекордов отсортированную по ходам

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
    } // findSquare(el) {
    //   if (el === this.$square) {
    //     return this;
    //   }
    // }

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

/* eslint-disable import/extensions */


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

    _defineProperty(this, "pause", function () {
      clearTimeout(_this.timerID);
    });

    _defineProperty(this, "resume", function () {
      return _this.tick();
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
    this.init(el); // this.start();
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
// eslint-disable-next-line import/extensions

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
  var audio = new Audio(); // Создаём новый элемент Audio

  audio.src = _assets_sounds_move_mp3__WEBPACK_IMPORTED_MODULE_0___default.a; // Указываем путь к звуку "клика"

  audio.autoplay = true; // Автоматически запускаем
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZHMvbW92ZS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9TY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9TcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbC9tc1RvVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbC9zb3VuZC5qcyJdLCJuYW1lcyI6WyJCb2FyZCIsImVsZW1lbnQiLCJzaXplIiwic2l6ZUJvYXJkIiwiYXJyYXlDZWxsIiwiaXNQaWMiLCJpbWFnZUluZGV4IiwiJGJvYXJkIiwic3R5bGUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFRlbXBsYXRlUm93cyIsImlubmVySFRNTCIsImZyYWdtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2VsbEFycmF5IiwiZm9yRWFjaCIsImdyaWRFbGVtZW50Iiwic3F1YXJlIiwiJHNxdWFyZSIsInNldEF0dHJpYnV0ZSIsImNlbGwiLCJhcHBlbmRDaGlsZCIsImRyYWdORHJvcCIsImFyciIsImlzRXZlbiIsIm51bSIsImVtcHR5UG9zaXRpb24iLCJNYXRoIiwic3FydCIsImxlbmd0aCIsInN1bSIsInJlZHVjZSIsInN1bW0iLCJ2YWx1ZSIsImluZGV4IiwibGVmdCIsImkiLCJ0YXJnZXQiLCJjdXJJbmRleCIsImdldEluZGV4RWxlbWVudEJ5VGFyZ2V0IiwiZW1wdHlJbmRleCIsImdldEluZGV4RW1wdHkiLCJjdXJUb3AiLCJ0b3AiLCJjdXJMZWZ0IiwiZW1wdHlUb3AiLCJlbXB0eUxlZnQiLCJkZWx0YVRvcCIsImRlbHRhTGVmdCIsImFicyIsImRpcmVjdGlvbk1vdmUiLCJhbmltYXRpb25Nb3ZlIiwiY3JlYXRlRXZlbnRNb3ZlIiwiaXNGaW5pc2giLCJldmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJhbGxDZWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwiZW1wdHlDZWxsIiwibmVpZ2hib3Vyc0luZGV4ZXMiLCJuZXh0ZG9vck5laWdoYm91cnMiLCJuZXh0ZG9vck5laWdoYm91cnNDZWxsIiwibWFwIiwiZHJhZ1N0YXJ0Iiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsImRyYWdnYWJsZVNxdWFyZSIsImRyYWdFbmQiLCJyZW1vdmUiLCJkcmFnT3ZlciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiZHJhZ0VudGVyIiwiZHJhZ0xlYXZlIiwiZHJhZ0Ryb3AiLCJpbmRleERyb3BDZWxsIiwibW92ZVNxdWFyZUluQXJyYXkiLCJhcHBlbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld0NlbGxJbmRleCIsInNxdWFyZUVsZW1lbnQiLCJvbGRDZWxsIiwiZmlsdGVyIiwiZGlyZWN0aW9uIiwiaW5kZXhFbGVtZW50IiwiY2xzIiwiJGVsIiwiZSIsImZpbmRJbmRleCIsImN1ckVsZW1lbnQiLCJnZXRTcXVhcmVJbmRleCIsImNvdW50Q2VsbHMiLCJyYW5kSW5kZXhBcnJheSIsImlzSW5pdCIsInNldFByb3BlcnR5IiwicmFuZEluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiU3F1YXJlIiwiY3JlYXRlIiwic3FyIiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0QmciLCJ0b3BCZyIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwicHVzaCIsImlzU29ydCIsIkFycmF5Iiwia2V5cyIsInNvcnQiLCJpc1NvbHV0aW9uIiwiaXNGaW4iLCJldmVyeSIsImNyZWF0ZUV2ZW50RmluaXNoIiwiZ2V0TGVmdCIsImdldFJpZ2h0IiwiZ2V0VG9wIiwiZ2V0Qm90dG9tIiwiR2FtZSIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJzdGF0ZSIsIlN0YXRlIiwicmVhZHkiLCJzY29yZSIsIlNjb3JlIiwiZWxlbWVudHMiLCJib2FyZCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51VG9nZ2xlIiwibWVudUlubmVyIiwibWVudSIsIm5ld0dhbWUiLCJyZXN1bWUiLCJzZXR0aW5nIiwidmlld01lbnUiLCJjbG9zZXN0IiwibW92ZSIsInZpZXdTY29yZSIsInZpZXdTZXR0aW5nIiwidmlld1RpbWVTY29yZSIsInZpZXdUdXJuc1Njb3JlIiwiZXZlbnRGaW5pc2hHYW1lIiwiZXZlbnRJc01vdmUiLCJmaW5pc2hHYW1lIiwic2F2ZVN0YXRlR2FtZSIsInByb3BlcnRpZXMiLCJpc1NvdW5kIiwic291bmQiLCJ0dXJuIiwicmVtb3ZlQ2hpbGQiLCJpc1BpY3R1cmVzU3F1YXJlIiwic3RhcnQiLCJzdG9wIiwidGltZVRvZ2dsZSIsInR1cm5zVG9nZ2xlIiwiY29udGFpbnMiLCJzY29yZVRvZ2dsZSIsInRhYmxlIiwiYmVzdFRpbWUiLCJnZXRCZXN0VGltZSIsInJlcyIsIm5hbWUiLCJ0aW1lIiwidHVybnMiLCJtc1RvVGltZSIsImdldEJlc3RUdXJucyIsImxhc3RUaW1lIiwiZ2V0TGFzdFBvc2l0aW9uSW5TY29yZUJ5VGltZSIsImxhc3RUdXJucyIsImdldExhc3RQb3NpdGlvbkluU2NvcmVCeVR1cm5zIiwiaXNSZWNvcmQiLCJ0b2dnbGUiLCJtb2RhbCIsIm92ZXJsYXkiLCJnYW1lUHJvcGVydHlGb3JTYXZlIiwiaW1nSW5kZXgiLCJnZXRWYWx1ZVNxdWFyZUFycmF5IiwiZ2V0U3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWRPYmoiLCJwYXJzZSIsImdldEl0ZW0iLCJpbml0IiwiZXZlbnRzIiwic2VsZWN0IiwicmFkaW9zIiwiY2hlY2siLCJvcHRpb25zIiwic2VsZWN0ZWQiLCJjaGVja2VkIiwic2V0U2V0dGluZ3MiLCJyYWRpbyIsIl9zdGF0ZSIsImdldFR1cm5zIiwidmlld1dpbiIsInNldFJlc3VsdCIsImNsb3NlTW9kYWwiLCJnYW1lIiwibG9hZEdhbWVPYmoiLCJsb2FkU3RhdGVHYW1lIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsInNjb3JlVGFibGUiLCJzYXZlVGFibGUiLCJtYXhSZXN1bHRJblRhYmxlIiwic29ydEJ5RmllbGQiLCJsb2FkVGFibGUiLCJmaWVsZCIsImEiLCJiIiwidmFsIiwiaW5uZXJUZXh0IiwicGFyZW50RWwiLCIkdHVybnMiLCIkdGltZXMiLCJfdGltZSIsIl90dXJucyIsInRpY2siLCJjbGVhclRpbWVvdXQiLCJ0aW1lcklEIiwidGV4dENvbnRlbnQiLCJjcmVhdGVIVE1MIiwiZHVyYXRpb24iLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiYXVkaW8iLCJBdWRpbyIsInNyYyIsInNvdW5kTW92ZSIsImF1dG9wbGF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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QUFBQTtBQUFlLFNBQVMwQyxRQUFULENBQWtCOEQsUUFBbEIsRUFBNEI7QUFDekMsTUFBSUMsT0FBTyxHQUFHbk4sSUFBSSxDQUFDMkUsS0FBTCxDQUFZdUksUUFBUSxHQUFHLElBQVosR0FBb0IsRUFBL0IsQ0FBZDtBQUNBLE1BQUlFLE9BQU8sR0FBR3BOLElBQUksQ0FBQzJFLEtBQUwsQ0FBWXVJLFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBVCxHQUEyQixFQUF0QyxDQUFkO0FBQ0EsTUFBSUcsS0FBSyxHQUFHck4sSUFBSSxDQUFDMkUsS0FBTCxDQUFZdUksUUFBUSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQVQsR0FBZ0MsRUFBM0MsQ0FBWjtBQUVBRyxPQUFLLEdBQUlBLEtBQUssR0FBRyxFQUFULGNBQW1CQSxLQUFuQixJQUE2QkEsS0FBckM7QUFDQUQsU0FBTyxHQUFJQSxPQUFPLEdBQUcsRUFBWCxjQUFxQkEsT0FBckIsSUFBaUNBLE9BQTNDO0FBQ0FELFNBQU8sR0FBSUEsT0FBTyxHQUFHLEVBQVgsY0FBcUJBLE9BQXJCLElBQWlDQSxPQUEzQztBQUVBLG1CQUFVRSxLQUFWLGNBQW1CRCxPQUFuQixjQUE4QkQsT0FBOUI7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU2hGLEtBQVQsR0FBaUI7QUFDOUIsTUFBTW1GLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQWQsQ0FEOEIsQ0FDSDs7QUFDM0JELE9BQUssQ0FBQ0UsR0FBTixHQUFZQyw4REFBWixDQUY4QixDQUVQOztBQUN2QkgsT0FBSyxDQUFDSSxRQUFOLEdBQWlCLElBQWpCLENBSDhCLENBR1A7QUFDeEIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcGFkZGluZzogMnB4O1xcbiAgICAtLWFuaW1hdGlvblNwZWVkOiAwLjFzO1xcbiAgICAtLXNpemU6IDQ7XFxuICAgIC0tYmdMZWZ0OiAxO1xcbiAgICAtLWJnVG9wOiAxO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1se1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcXG4gICAgaHRtbHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAzMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDZCNTQsICM1RUREQzEpO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiDQnNC10L3RjiovXFxuXFxuLm1lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IC0xMDAlO1xcbiAgICAvKnJpZ2h0OiAwOyovXFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMDcsIDg0LCAwLjgpO1xcbiAgICAvKmJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45KTsqL1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5tZW51Lm9wZW4ge1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLm1lbnUtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1lbnUtbGlzdCBsaSB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5tZW51LWxpc3QgbGk6aG92ZXIge1xcbiAgICBjb2xvcjogI0Y5NjMwMjtcXG59XFxuXFxuLm1lbnUtdG9nZ2xlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDJyZW07XFxuICAgIHJpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDEwMDI7XFxufVxcblxcbi5tZW51LXRvZ2dsZSBzcGFuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKnRvcDogNTAlOyovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDAuM3JlbTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG5cXG59XFxuXFxuLm1lbnUtdG9nZ2xlIHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4ubWVudS10b2dnbGUgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4ubWVudS10b2dnbGUgc3BhbjpudGgtY2hpbGQoMykge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblxcbn1cXG5cXG4ubWVudS10b2dnbGUgc3BhbjpudGgtY2hpbGQoNCkge1xcbiAgICBib3R0b206IDA7XFxufVxcblxcbi5tZW51LXRvZ2dsZTpob3ZlciBzcGFuIHtcXG4gICAgYmFja2dyb3VuZDogI0Y5NjMwMjtcXG59XFxuXFxuLm1lbnUtdG9nZ2xlLm9wZW4gc3BhbjpudGgtY2hpbGQoMSkge1xcbiAgICB0b3A6IC0xMDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubWVudS10b2dnbGUub3BlbiBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5tZW51LXRvZ2dsZS5vcGVuIHNwYW46bnRoLWNoaWxkKDMpIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ubWVudS10b2dnbGUub3BlbiBzcGFuOm50aC1jaGlsZCg0KSB7XFxuICAgIGJvdHRvbTogLTEwMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcblxcbi5maWVsZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyp3aWR0aDogNDAwcHg7Ki9cXG4gICAgLypoZWlnaHQ6IDQwMHB4OyovXFxuICAgIC8qbWluLXdpZHRoOiAzMjBweDsqL1xcbiAgICB3aWR0aDogNzB2bWluO1xcbiAgICBoZWlnaHQ6IDcwdm1pbjtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgLyptaW4taGVpZ2h0OiAzMjBweDsqL1xcbiAgICBtYXgtaGVpZ2h0OiA3MDBweDtcXG5cXG4gICAgLypoZWlnaHQ6IDkwJTsqL1xcbiAgICAvKnBhZGRpbmc6IDJyZW07Ki9cXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwNkI1NDtcXG4gICAgLypib3JkZXItcmFkaXVzOiAxMnB4OyovXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDBCMjdBO1xcblxcbiAgICAvKmJveC1zaGFkb3c6IDAgMCA0LjVweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCovXFxuICAgIC8qMCAwLjRweCA5LjZweCByZ2JhKDAsIDAsIDAsIDAuMTAxKSwqL1xcbiAgICAvKjAgMi4zcHggMTUuNnB4IHJnYmEoMCwgMCwgMCwgMC4xMTUpLCovXFxuICAgIC8qMCA5LjNweCAyMy43cHggcmdiYSgwLCAwLCAwLCAwLjEyOCksKi9cXG4gICAgLyowIDM2LjJweCAzNy42cHggcmdiYSgwLCAwLCAwLCAwLjE0OSksKi9cXG4gICAgLyowIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyovXFxuXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxuICAgIC8qcGFkZGluZzogMXJlbTsqL1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcblxcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggYmxhY2ssXFxuICAgIGluc2V0IC0xcHggLTFweCAxcHggMXB4IHdoaXRlLFxcbiAgICAwIDAgMCAxcmVtICMwMDZCNTQsXFxuICAgIC0xcHggLTFweCAycHggMXJlbSB3aGl0ZSxcXG4gICAgMXB4IDFweCAycHggMXJlbSBibGFjayxcXG4gICAgMC41cmVtIDAuNXJlbSAxLjVyZW0gMXJlbSBibGFjaztcXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy8xLmpwZyk7Ki9cXG59XFxuXFxuLmJsdXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCk7XFxufVxcblxcbi5jZWxsMiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcblxcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0EzNDQwMjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZDogI0Y5NjMwMjtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uc3RhdGlzdGljIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgd2lkdGg6IDc1dm1pbjtcXG59XFxuLnN0YXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDA2QjU0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcblxcbiAgICAvKmJveC1zaGFkb3c6IDAgMCA0LjVweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCovXFxuICAgIC8qMCAwLjRweCA5LjZweCByZ2JhKDAsIDAsIDAsIDAuMTAxKSwqL1xcbiAgICAvKjAgMi4zcHggMTUuNnB4IHJnYmEoMCwgMCwgMCwgMC4xMTUpLCovXFxuICAgIC8qMCA5LjNweCAyMy43cHggcmdiYSgwLCAwLCAwLCAwLjEyOCksKi9cXG4gICAgLyowIDM2LjJweCAzNy42cHggcmdiYSgwLCAwLCAwLCAwLjE0OSksKi9cXG4gICAgLyowIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyovXFxuXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4IDFweCBibGFjayxcXG4gICAgaW5zZXQgLTFweCAtMXB4IDFweCAxcHggd2hpdGUsXFxuICAgIDAgMCAwIDAuMnJlbSAjMDA2QjU0LFxcbiAgICAtMXB4IC0xcHggMnB4IDAuMnJlbSB3aGl0ZSxcXG4gICAgMXB4IDFweCAycHggMC4ycmVtIGJsYWNrLFxcbiAgICAwLjNyZW0gMC4zcmVtIDAuOXJlbSAwLjNyZW0gYmxhY2s7XFxuXFxuICAgIGJhY2tncm91bmQ6ICMwMEIyN0E7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucGljdHVyZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDJweDtcXG5cXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCAjMDA2QjU0OyovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcXG4gICAgLmNlbGx7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xcbiAgICAuY2VsbHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbn1cXG5cXG4ucGljdHVyZSAuY2VsbCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAvKmJvcmRlcjogM3B4IHNvbGlkICNBMzQ0MDI7Ki9cXG4gICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAxcHggd2hpdGUsXFxuICAgIDFweCAxcHggMXB4IDFweCBibGFjayxcXG4gICAgMnB4IDJweCA1cHggMnB4IGJsYWNrO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kOiAjRjk2MzAyO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcXG4gICAgLnNxdWFyZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbn1cXG5cXG4ucGljdHVyZSAuc3F1YXJlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY2FsYygxMDAlICogdmFyKC0tc2l6ZSkpO1xcblxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGModmFyKC0tYmdUb3ApICogLTEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNhbGModmFyKC0tYmdMZWZ0KSAqIC0xMDAlKTtcXG59XFxuXFxuLm1vdmVVcCB7XFxuICAgIGFuaW1hdGlvbjogbW92ZVVwIHZhcigtLWFuaW1hdGlvblNwZWVkKSBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlVXAge1xcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKC0xMDAlIC0gdmFyKC0tcGFkZGluZykgLSB2YXIoLS1wYWRkaW5nKSkpO1xcbiAgICB9XFxufVxcblxcbi5tb3ZlRG93biB7XFxuICAgIGFuaW1hdGlvbjogbW92ZURvd24gdmFyKC0tYW5pbWF0aW9uU3BlZWQpIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVEb3duIHtcXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygxMDAlICsgdmFyKC0tcGFkZGluZykgKyB2YXIoLS1wYWRkaW5nKSkpO1xcbiAgICB9XFxufVxcblxcbi5tb3ZlUmlnaHQge1xcbiAgICBhbmltYXRpb246IG1vdmVSaWdodCB2YXIoLS1hbmltYXRpb25TcGVlZCkgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZVJpZ2h0IHtcXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlICsgdmFyKC0tcGFkZGluZykgKyB2YXIoLS1wYWRkaW5nKSkpO1xcbiAgICB9XFxufVxcblxcbi5tb3ZlTGVmdCB7XFxuICAgIGFuaW1hdGlvbjogbW92ZUxlZnQgdmFyKC0tYW5pbWF0aW9uU3BlZWQpIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVMZWZ0IHtcXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSAtIHZhcigtLXBhZGRpbmcpIC0gdmFyKC0tcGFkZGluZykpKTtcXG4gICAgfVxcbn1cXG5cXG5cXG4uaGlkZSB7XFxuICAgIC8qb3BhY2l0eTogMDsqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG92ZXJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQ4ZTI7XFxufVxcblxcblxcbi8qIFNDT1JFIFRBQkxFICovXFxuLnNjb3JlLXZpZXcsXFxuLnNldHRpbmdzIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbn1cXG5cXG5hLmJhY2sge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmEuYmFjayBoMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI0Y5NjMwMjtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuYS5iYWNrIGgyOmJlZm9yZSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjc5Q1xcXCI7XFxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIC8qZm9udC1zaXplOiA7Ki9cXG59XFxuXFxuYS5iYWNrIGgyOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5hLmJhY2sgaDI6aG92ZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGFuaW1hdGlvbjogbGVmdCAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBsZWZ0IHtcXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC41cmVtKSByb3RhdGUoMTgwZGVnKTtcXG4gICAgfVxcbn1cXG5cXG4uc2NvcmVfX2xhYmVscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zY29yZV9faXRlbSB7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDFyZW07XFxuICAgIG1hcmdpbjogMCAxZW07XFxuICAgIGJvcmRlcjogMC4yZW0gc29saWQgI0Y5NjMwMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uc2NvcmVfX2l0ZW0uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDksIDk5LCAyLCAwLjUxKTtcXG59XFxuXFxuLnNjb3JlX19jb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG5cXG4uc2NvcmVfX3RhYmxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjVlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDVlbSA1ZW0gNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbn1cXG5cXG4uaW5wdXQtbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICB3aWR0aDogNWVtO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICAvKmhlaWdodDogMnJlbTsqL1xcbiAgICAvKndpZHRoOiA1cmVtOyovXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHBhZGRpbmc6IDAuMmVtIDFlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT0ncmFkaW8nXSxcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlucHV0LWxhYmVsOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRjk2MzAyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcblxcbn1cXG5cXG5pbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQgKyAuaW5wdXQtbGFiZWw6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZDogI0Y5NjMwMjtcXG59XFxuXFxuXFxuLnNvdW5kLWxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyptYXJnaW4tcmlnaHQ6IDFlbTsqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc291bmQtbGFiZWw6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRjk2MzAyO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyAuc291bmQtbGFiZWw6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnXFxcXDI3MTQnO1xcbiAgICBjb2xvcjogI0Y5NjMwMjtcXG4gICAgbWF4LXdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbn1cXG5cXG5cXG4vKiDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0L/QvtCx0LXQtNGLICovXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNDYsIDEwMywgMC45KTtcXG5cXG4gICAgei1pbmRleDogOTk7XFxufVxcbi53aW4tbW9kYWwge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcblxcbiAgICBwYWRkaW5nOiAycmVtO1xcblxcbiAgICBjb2xvcjogIzAxMEQxOTtcXG4gICAgYmFja2dyb3VuZDogIzAwQjI3QTtcXG4gICAgYm9yZGVyOiAxcmVtIHNvbGlkICMwMDZCNTQ7XFxuXFxuICAgIGJveC1zaGFkb3c6IDAgMCA0LjVweCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxcbiAgICAwIDAuNHB4IDkuNnB4IHJnYmEoMCwgMCwgMCwgMC4xMDEpLFxcbiAgICAwIDIuM3B4IDE1LjZweCByZ2JhKDAsIDAsIDAsIDAuMTE1KSxcXG4gICAgMCA5LjNweCAyMy43cHggcmdiYSgwLCAwLCAwLCAwLjEyOCksXFxuICAgIDAgMzYuMnB4IDM3LjZweCByZ2JhKDAsIDAsIDAsIDAuMTQ5KSxcXG4gICAgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgei1pbmRleDogOTk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcXG4gICAgLndpbi1tb2RhbCB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxuXFxuICAgIH1cXG59XFxuXFxuLndpbi1tb2RhbCAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2luLW1vZGFsIC50ZXh0LFxcbi53aW4tbW9kYWwgLnJlY29yZCxcXG4ud2luLW1vZGFsIC5xdWVzdGlvbixcXG4ud2luLW1vZGFsIC5uZXh0LWdhbWV7XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLnJlY29yZC10aW1lLFxcbi5yZWNvcmQtdHVybnMsXFxuLnJlY29yZC1zaXplXFxue1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ud29ybS13b3JkcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5uby1yZWNvcmQgLndvcm0td29yZHMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5uby1yZWNvcmQgLnJlYXNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uby1yZWNvcmQgLnF1ZXN0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5vLXJlY29yZCAueW91ci1uYW1lLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ueW91ci1uYW1lLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4ueW91ci1uYW1lLWZvcm0gLm5hbWUge1xcbiAgICBmbGV4LWJhc2lzOiA5MCU7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J3N1Ym1pdCddLFxcbmlucHV0W3R5cGU9J3Jlc2V0J10ge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDAuM2VtIHNvbGlkICMwMDZCNTQ7XFxuXFxuICAgIG1hcmdpbjogMXJlbSAxcmVtIDA7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyLFxcbmlucHV0W3R5cGU9J3Jlc2V0J106aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEwNywgODQsIDAuNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmF1dGhvciB7XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgZm9udC1zaXplOiAwLjVlbTtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzU5Y2E1ZTJhOTA1N2UzMDI1NGRhYWQyYmU0ZDM1YTkubXAzXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCAnLi9qcy9zY3JpcHQuanMnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCBTcXVhcmUgZnJvbSAnLi9TcXVhcmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNpemUsIHNpemVCb2FyZCwgYXJyYXlDZWxsID0gW10sIGlzUGljID0gZmFsc2UsIGltYWdlSW5kZXggPSBudWxsKSB7XG4gICAgdGhpcy5zaXplID0gc2l6ZSB8fCA0O1xuICAgIHRoaXMuY291bnRDZWxscyA9IHNpemUgKiBzaXplO1xuICAgIHRoaXMuJGJvYXJkID0gZWxlbWVudDtcbiAgICB0aGlzLmNlbGxBcnJheSA9IG51bGw7XG4gICAgdGhpcy5pc1BpYyA9IGlzUGljO1xuICAgIHRoaXMuaW1hZ2VJbmRleCA9IGltYWdlSW5kZXg7XG4gICAgdGhpcy5kcmFnZ2FibGVTcXVhcmUgPSBudWxsO1xuICAgIHRoaXMucmFuZEluZGV4QXJyYXkgPSBhcnJheUNlbGw7XG4gICAgdGhpcy5zaXplQm9hcmQgPSBzaXplQm9hcmQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKGVsZW1lbnQsIHNpemUsIHNpemVCb2FyZCwgYXJyYXlDZWxsLCBpc1BpYywgaW1hZ2VJbmRleCkge1xuICAgIHJldHVybiBuZXcgQm9hcmQoZWxlbWVudCwgc2l6ZSwgc2l6ZUJvYXJkLCBhcnJheUNlbGwsIGlzUGljLCBpbWFnZUluZGV4KTtcbiAgfVxuXG4gIHN0YXJ0KGlzSW5pdCA9IGZhbHNlKSB7XG4gICAgdGhpcy4kYm9hcmQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2l6ZScsIGAke3RoaXMuc2l6ZX1gKTtcbiAgICB0aGlzLmNlbGxBcnJheSA9IFtdO1xuXG4gICAgLy8g0JXRgdC70Lgg0Y3RgtC+INC90L7QstCw0Y8g0LjQs9GA0LAsINGC0L4g0L/QvtC70YPRh9Cw0LXQvCDQv9C10YDQtdC80LXRiNCw0L3QvdGL0LUg0LjQvdC00LXQutGB0YssINC40L3QsNGH0LUg0L/QvtC/0L7RgNGP0LTQutGDXG4gICAgaWYgKHRoaXMucmFuZEluZGV4QXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnJhbmRJbmRleEFycmF5ID0gdGhpcy5yYW5kSW5kZXgodGhpcy5jb3VudENlbGxzLCAhaXNJbml0KTtcbiAgICB9XG5cbiAgICAvLyDQstGL0Y7QuNGA0LDQtdC8INGA0LDQvdC00L7QvNC90YPRjiDQutCw0YDRgtC40L3QutGDXG4gICAgaWYgKHRoaXMuaXNQaWMgJiYgKHRoaXMuaW1hZ2VJbmRleCA9PT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuaW1hZ2VJbmRleCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDE1MCkpO1xuICAgIH1cblxuICAgIC8vINGB0L7Qt9C00LDQtdC8INC80LDRgdGB0LjQsiDQutC70LXRgtC+0LpcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnRDZWxsczsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcblxuICAgICAgY29uc3QgbGVmdCA9IGkgJSB0aGlzLnNpemU7XG4gICAgICBjb25zdCB0b3AgPSAoaSAtIGxlZnQpIC8gdGhpcy5zaXplO1xuICAgICAgbGV0IHNxdWFyZSA9IG51bGw7XG5cbiAgICAgIC8vINCh0L7Qt9C00LDQtdC8INGE0LjRiNC60YMg0LIg0LrQu9C10YLQutC1XG4gICAgICBpZiAodGhpcy5yYW5kSW5kZXhBcnJheVtpXSAhPT0gKHRoaXMuY291bnRDZWxscykgLSAxKSB7XG4gICAgICAgIHNxdWFyZSA9IFNxdWFyZS5jcmVhdGUodGhpcy5yYW5kSW5kZXhBcnJheVtpXSwgdGhpcy5yYW5kSW5kZXhBcnJheVtpXSArIDEpO1xuXG4gICAgICAgIC8vINCV0YHQu9C4INCyINC90LDRgdGC0YDQvtC50LrQsNGFINCy0YvQsdGA0LDQvdCwINC60LDRgNGC0LjQvdC60LAsINGC0L4g0YTQvtGA0LzQuNGA0YPQtdC8INC60LDRgNGC0LjQvdC60YMg0LTQu9GPINGE0LjRiNC60LhcbiAgICAgICAgaWYgKHRoaXMuaXNQaWMpIHtcbiAgICAgICAgICBjb25zdCBzcXIgPSBzcXVhcmUuc3F1YXJlO1xuICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaXplQm9hcmQ7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zaXplQm9hcmQ7XG4gICAgICAgICAgY29uc3QgeyBzaXplIH0gPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IGxlZnRCZyA9IHRoaXMucmFuZEluZGV4QXJyYXlbaV0gJSBzaXplO1xuICAgICAgICAgIGNvbnN0IHRvcEJnID0gKHRoaXMucmFuZEluZGV4QXJyYXlbaV0gLSBsZWZ0QmcpIC8gc2l6ZTtcblxuICAgICAgICAgIHNxci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4vYXNzZXRzL2ltYWdlcy8ke3RoaXMuaW1hZ2VJbmRleH0uanBnKWA7XG4gICAgICAgICAgc3FyLnN0eWxlLmJhY2tncm91bmRTaXplID0gYCR7d2lkdGh9cHggJHtoZWlnaHR9cHhgO1xuICAgICAgICAgIHNxci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iZ1RvcCcsIGAke2xlZnRCZ31gKTtcbiAgICAgICAgICBzcXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmdMZWZ0JywgYCR7dG9wQmd9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8g0J/QvtC80LXRidCw0LXQvCDRjdC70LXQvNC10L3RgiDQsiDQvNCw0YHRgdC40LJcbiAgICAgIHRoaXMuY2VsbEFycmF5LnB1c2goe1xuICAgICAgICB0b3AsIC8vINGB0YLRgNC+0LrQsFxuICAgICAgICBsZWZ0LCAvLyDRgNGP0LTQvtC6XG4gICAgICAgIGNlbGwsIC8vIERPTSDRjdC70LXQvNC10L3RgiDQutC70LXRgtC60LhcbiAgICAgICAgc3F1YXJlLCAvLyBET00gINGN0LvQtdC80LXQvdGCINGE0LjRiNC60Lgg0LIg0LrQu9C10YLQutC1LCDQuNC70LggbnVsbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICB0aGlzLiRib2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke3RoaXMuc2l6ZX0sIDFmcilgO1xuICAgIHRoaXMuJGJvYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7dGhpcy5zaXplfSwgMWZyKWA7XG4gICAgdGhpcy4kYm9hcmQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIHRoaXMuY2VsbEFycmF5LmZvckVhY2goKGdyaWRFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHNxdWFyZSB9ID0gZ3JpZEVsZW1lbnQ7XG5cbiAgICAgIGlmIChzcXVhcmUpIHtcbiAgICAgICAgc3F1YXJlLiRzcXVhcmUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAnZmFsc2UnKTtcbiAgICAgICAgZ3JpZEVsZW1lbnQuY2VsbC5hcHBlbmRDaGlsZChzcXVhcmUuJHNxdWFyZSk7XG4gICAgICB9XG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChncmlkRWxlbWVudC5jZWxsKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGJvYXJkLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblxuICAgIC8vINC/0L7RgdC70LUg0L7RgtGA0LjRgdC+0LLQutC4INC90LDQstC10YjQuNCy0LDQtdC8INCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0YLRj9Cz0LDRgtGMINC60LvQtdGC0LrQuCDQotCe0JvQrNCa0J4g0YDRj9C00L7QvCDRgSDQv9GD0YHRgtC+0LlcbiAgICAvLyB0aGlzLnNldERyYWdnYWJsZSgpO1xuICAgIHRoaXMuZHJhZ05Ecm9wKCk7XG4gIH07XG5cbiAgLy8g0J/QvtC40YHQuiDQuNC90LTQtdC60YHQvtCyINGE0LjRiNC10Log0YEg0YDQtdGI0LDQtdC80YvQvCDRgNC10LfRg9C70YzRgtCw0YLQvtC8XG4gIHJhbmRJbmRleChudW0sIGlzU29ydCA9IHRydWUpIHtcbiAgICBsZXQgYXJyID0gWy4uLkFycmF5KG51bSkua2V5cygpXTtcblxuICAgIGRvIHtcbiAgICAgIGlmIChpc1NvcnQpIHtcbiAgICAgICAgYXJyID0gYXJyLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoIXRoaXMuaXNTb2x1dGlvbihhcnIpKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvLyDQn9GA0L7QstC10YDQutCwINC90LAg0YDQtdGI0LDQtdC80L7RgdGC0YxcbiAgaXNTb2x1dGlvbiA9IChhcnIpID0+IHtcbiAgICAvLyDQn9GA0L7QstC10YDQutCwINC90LAg0YfQtdGC0L3QvtGB0YLRjFxuICAgIC8vINCV0YHQu9C4INGH0LXRgtC90YvQuSDRgtC+INCy0L7QstC30YDQsNGJ0LDQtdGCIHRydWVcbiAgICBmdW5jdGlvbiBpc0V2ZW4obnVtKSB7XG4gICAgICByZXR1cm4gIShudW0gJSAyKTtcbiAgICB9XG5cbiAgICBsZXQgZW1wdHlQb3NpdGlvbiA9IG51bGw7XG4gICAgY29uc3Qgc2l6ZSA9IE1hdGguc3FydChhcnIubGVuZ3RoKTtcblxuICAgIGxldCBzdW0gPSBhcnIucmVkdWNlKChzdW1tLCB2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IGluZGV4ICUgc2l6ZTtcbiAgICAgICAgZW1wdHlQb3NpdGlvbiA9ICgoaW5kZXggLSBsZWZ0KSAvIHNpemUpICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleCArIDE7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPiBhcnJbaV0pIHtcbiAgICAgICAgICAgIHN1bW0gKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdW1tO1xuICAgIH0sIDApO1xuXG4gICAgaWYgKGlzRXZlbihhcnIubGVuZ3RoKSkge1xuICAgICAgc3VtICs9IGVtcHR5UG9zaXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRXZlbihzdW0pO1xuICB9O1xuXG4gIC8vINCf0LXRgNC10LzQtdGJ0LXQvdC40LUg0YTQuNGI0LrQuFxuICBtb3ZlID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IGN1ckluZGV4ID0gdGhpcy5nZXRJbmRleEVsZW1lbnRCeVRhcmdldCh0YXJnZXQpO1xuICAgIGNvbnN0IGVtcHR5SW5kZXggPSB0aGlzLmdldEluZGV4RW1wdHkoKTtcblxuICAgIGNvbnN0IHsgdG9wOiBjdXJUb3AsIGxlZnQ6IGN1ckxlZnQgfSA9IHRoaXMuY2VsbEFycmF5W2N1ckluZGV4XTtcbiAgICBjb25zdCB7IHRvcDogZW1wdHlUb3AsIGxlZnQ6IGVtcHR5TGVmdCB9ID0gdGhpcy5jZWxsQXJyYXlbZW1wdHlJbmRleF07XG5cbiAgICBjb25zdCBkZWx0YVRvcCA9IGN1clRvcCAtIGVtcHR5VG9wO1xuICAgIGNvbnN0IGRlbHRhTGVmdCA9IGN1ckxlZnQgLSBlbXB0eUxlZnQ7XG5cbiAgICBpZiAoKE1hdGguYWJzKGRlbHRhTGVmdCkgKyBNYXRoLmFicyhkZWx0YVRvcCkpID09PSAxKSB7XG4gICAgICAvLyBBbmltYXRpb24gbW92ZXNcbiAgICAgIGxldCBkaXJlY3Rpb25Nb3ZlO1xuICAgICAgaWYgKGRlbHRhTGVmdCA9PT0gLTEpIHtcbiAgICAgICAgZGlyZWN0aW9uTW92ZSA9ICdSaWdodCc7XG4gICAgICB9IGVsc2UgaWYgKGRlbHRhTGVmdCA9PT0gMSkge1xuICAgICAgICBkaXJlY3Rpb25Nb3ZlID0gJ0xlZnQnO1xuICAgICAgfSBlbHNlIGlmIChkZWx0YVRvcCA9PT0gLTEpIHtcbiAgICAgICAgZGlyZWN0aW9uTW92ZSA9ICdEb3duJztcbiAgICAgIH0gZWxzZSBpZiAoZGVsdGFUb3AgPT09IDEpIHtcbiAgICAgICAgZGlyZWN0aW9uTW92ZSA9ICdVcCc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uTW92ZShkaXJlY3Rpb25Nb3ZlLCBjdXJJbmRleCk7XG5cbiAgICAgIHRoaXMuY2VsbEFycmF5W2VtcHR5SW5kZXhdLnNxdWFyZSA9IHRoaXMuY2VsbEFycmF5W2N1ckluZGV4XS5zcXVhcmU7XG4gICAgICB0aGlzLmNlbGxBcnJheVtjdXJJbmRleF0uc3F1YXJlID0gbnVsbDtcblxuICAgICAgdGhpcy5jcmVhdGVFdmVudE1vdmUoKTtcbiAgICAgIHRoaXMuaXNGaW5pc2goKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjcmVhdGVFdmVudE1vdmUoKSB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2lzTW92ZScsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLiRib2FyZC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8vINCf0YDQvtCy0LXQutCwINC90LAg0L7QutC+0L3Rh9Cw0L3QuNC1INC40LPRgNGLXG4gIGlzRmluaXNoKCkge1xuICAgIGNvbnN0IGlzRmluID0gdGhpcy5jZWxsQXJyYXkuZXZlcnkoKGVsKSA9PiB7XG4gICAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWw7XG4gICAgICBsZXQgaW5kZXg7XG4gICAgICBpZiAoZWwuc3F1YXJlKSB7XG4gICAgICAgIGluZGV4ID0gZWwuc3F1YXJlLmluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSAodGhpcy5jb3VudENlbGxzKSAtIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAodG9wICogdGhpcy5zaXplICsgbGVmdCkgPT09IGluZGV4O1xuICAgIH0pO1xuXG4gICAgaWYgKGlzRmluKSB7XG4gICAgICB0aGlzLmNyZWF0ZUV2ZW50RmluaXNoKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY3JlYXRlRXZlbnRGaW5pc2ggPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2ZpbmlzaCcsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLiRib2FyZC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfTtcblxuICAvLyDQn9C10YDQtdC80LXRidC10L3QuNC1INGE0LjRiNC10Log0L/QtdGA0LXRgtGP0LPQuNCy0LDQvdC40LXQvFxuICBkcmFnTkRyb3AgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcbiAgICBhbGxDZWxsLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICdmYWxzZScpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZW1wdHlDZWxsID0gdGhpcy5jZWxsQXJyYXlbdGhpcy5nZXRJbmRleEVtcHR5KCldO1xuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBlbXB0eUNlbGw7XG5cbiAgICBjb25zdCBuZWlnaGJvdXJzSW5kZXhlcyA9IHRoaXMubmV4dGRvb3JOZWlnaGJvdXJzKHRvcCwgbGVmdCk7XG4gICAgLy8g0JzQsNGB0YHQuNCyINGB0L7RgdC10LTQvdC40YUg0YEg0L/Rg9GB0YLQvtC5INGN0LvQtdC80LXQvdGC0L7QslxuICAgIGNvbnN0IG5leHRkb29yTmVpZ2hib3Vyc0NlbGwgPSBuZWlnaGJvdXJzSW5kZXhlcy5tYXAoKGkpID0+IHtcbiAgICAgIGlmICh0aGlzLmNlbGxBcnJheVtpXS5zcXVhcmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbEFycmF5W2ldLnNxdWFyZS4kc3F1YXJlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgbmV4dGRvb3JOZWlnaGJvdXJzQ2VsbC5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKSk7XG5cbiAgICAvLyBkcmFnIG4gZHJvcCBldmVudHNcbiAgICBjb25zdCBkcmFnU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB0aGlzLmRyYWdnYWJsZVNxdWFyZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIH0sIDApO1xuICAgIH07XG5cbiAgICBjb25zdCBkcmFnRW5kID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH07XG5cbiAgICBjb25zdCBkcmFnT3ZlciA9IChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkcmFnRW50ZXIoKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnTGVhdmUoKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRHJvcCA9IChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgaW5kZXhEcm9wQ2VsbCA9IHRoaXMuZ2V0SW5kZXhFbGVtZW50QnlUYXJnZXQoZXZ0LnRhcmdldCk7XG5cbiAgICAgIC8vINC40LfQvNC10L3Rj9C10Lwg0LzQsNGB0YHQuNCyINC60LvQtdGC0L7QuiDQsiDRgdCy0L7QudGB0YLQstC1INC60LvQsNGB0YHQsFxuICAgICAgdGhpcy5tb3ZlU3F1YXJlSW5BcnJheShpbmRleERyb3BDZWxsLCB0aGlzLmRyYWdnYWJsZVNxdWFyZSk7XG5cbiAgICAgIGV2dC50YXJnZXQuYXBwZW5kKHRoaXMuZHJhZ2dhYmxlU3F1YXJlKTtcbiAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygn0JjQvdC00LXQutGBINC/0YPRgdGC0L7QuSDRj9GH0LXQudC60Lg6JywgdGhpcy5nZXRJbmRleEVtcHR5KCkpO1xuXG4gICAgICB0aGlzLmNlbGxBcnJheS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGNlbGwuY2VsbDtcbiAgICAgICAgLy8g0KPQtNCw0LvRj9C10Lwg0YHRgtCw0YDRi9C1INGB0LvRg9GI0LDRgtC10LvQuFxuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ0xlYXZlKTtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnRHJvcCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3JlYXRlRXZlbnRNb3ZlKCk7XG4gICAgICB0aGlzLmlzRmluaXNoKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgLy8gdGhpcy5kcmFnTkRyb3AoKTtcbiAgICB9O1xuXG4gICAgLy8g0L/Rg9GB0YLQsNGPINGP0YfQtdC50LrQsCDQsiDQutC+0YLQvtGA0YPRjiDQvNC+0LbQvdC+INC/0L7Qu9C+0LbQuNGC0YxcbiAgICBlbXB0eUNlbGwuY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICBlbXB0eUNlbGwuY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xuICAgIGVtcHR5Q2VsbC5jZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gICAgZW1wdHlDZWxsLmNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyYWdEcm9wKTtcblxuICAgIC8vINCi0LUg0LrQvtGC0L7RgNGL0LUg0LzQvtC20L3QviDRgtGP0LPQsNGC0YxcbiAgICBuZXh0ZG9vck5laWdoYm91cnNDZWxsLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbiAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmQpO1xuXG4gICAgICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQutC70LXRgtC60LDQvCDQvdC+0LLRg9GOINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0YLRj9Cz0LDRgtGM0YHRj1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnRW5kKTtcbiAgICB9KTtcbiAgfTtcblxuICBtb3ZlU3F1YXJlSW5BcnJheSA9IChuZXdDZWxsSW5kZXgsIHNxdWFyZUVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBvbGRDZWxsID0gdGhpcy5jZWxsQXJyYXlcbiAgICAgIC5maWx0ZXIoKGNlbGwpID0+IGNlbGwuc3F1YXJlICYmIGNlbGwuc3F1YXJlLiRzcXVhcmUgPT09IHNxdWFyZUVsZW1lbnQpO1xuICAgIHRoaXMuY2VsbEFycmF5W25ld0NlbGxJbmRleF0uc3F1YXJlID0gb2xkQ2VsbFswXS5zcXVhcmU7XG5cbiAgICBvbGRDZWxsWzBdLnNxdWFyZSA9IG51bGw7XG4gIH07XG5cbiAgLy8g0JDQvdC40LzQsNGG0LjRjyDQv9C10YDQtdC80LXRidC10L3QuNGPXG4gIGFuaW1hdGlvbk1vdmUgPSAoZGlyZWN0aW9uLCBpbmRleEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjbHMgPSBgbW92ZSR7ZGlyZWN0aW9ufWA7XG4gICAgY29uc3QgJGVsID0gdGhpcy5jZWxsQXJyYXlbaW5kZXhFbGVtZW50XS5zcXVhcmUuJHNxdWFyZTtcblxuICAgICRlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgdGhpcy4kYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgICRlbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAkZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyDQn9C+0LvRg9GH0LXQvdC40LUg0LjQvdC00LXQutGB0LAg0LrQu9C40LrQvdGD0YLQvtC5INGE0LjRiNC60Lgg0LIg0LzQsNGB0YHQuNCy0LVcbiAgZ2V0SW5kZXhFbGVtZW50QnlUYXJnZXQgPSAodGFyZ2V0KSA9PiB0aGlzLmNlbGxBcnJheVxuICAgIC5maW5kSW5kZXgoKGN1ckVsZW1lbnQpID0+IGN1ckVsZW1lbnQuY2VsbCA9PT0gdGFyZ2V0KTtcblxuICAvLyDQn9C+0LjRgdC6INC40L3QtNC10LrRgdCwINC/0YPRgdGC0L7QuSDRhNC40YjQutC4XG4gIGdldEluZGV4RW1wdHkgPSAoKSA9PiB0aGlzLmNlbGxBcnJheS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuc3F1YXJlID09PSBudWxsKTtcblxuICAvLyDQn9C+0LjRgdC6INC40L3QtNC10LrRgdC+0LIg0YHQvtGB0LXQtNC90LjRhSDRhNC40YjQtdC6XG4gIG5leHRkb29yTmVpZ2hib3Vycyh0b3AsIGxlZnQpIHtcbiAgICBjb25zdCBjdXJJbmRleCA9IHRvcCAqIHRoaXMuc2l6ZSArIGxlZnQ7XG5cbiAgICBjb25zdCBnZXRMZWZ0ID0gKCkgPT4ge1xuICAgICAgaWYgKGxlZnQgPT09IDApIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIGN1ckluZGV4IC0gMTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UmlnaHQgPSAoKSA9PiB7XG4gICAgICBpZiAobGVmdCA9PT0gdGhpcy5zaXplIC0gMSkgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gY3VySW5kZXggKyAxO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUb3AgPSAoKSA9PiB7XG4gICAgICBpZiAodG9wID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBjdXJJbmRleCAtIHRoaXMuc2l6ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm90dG9tID0gKCkgPT4ge1xuICAgICAgaWYgKHRvcCA9PT0gdGhpcy5zaXplIC0gMSkgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gY3VySW5kZXggKyB0aGlzLnNpemU7XG4gICAgfTtcblxuICAgIHJldHVybiBbXG4gICAgICBnZXRUb3AoKSxcbiAgICAgIGdldExlZnQoKSxcbiAgICAgIGdldFJpZ2h0KCksXG4gICAgICBnZXRCb3R0b20oKSxcbiAgICBdLmZpbHRlcigoaW5kZXgpID0+IGluZGV4ICE9PSBudWxsKTtcbiAgfVxuXG4gIGdldFNxdWFyZUluZGV4KGNlbGwpIHtcbiAgICBjb25zdCB7IHNxdWFyZSB9ID0gY2VsbDtcbiAgICAvLyDQstC+0LfQstGA0LDRidCw0LXQvCDQu9C40LHQviDQuNC90LTQtdC60YEsINC10YHQu9C4INGE0L7QuNGI0LrQuCDQvdC10YIsINGC0L4g0L/QvtGB0LvQtdC00L3QuNC5INC40L3QtNC10LrRgVxuICAgIHJldHVybiBzcXVhcmUgPyBzcXVhcmUuaW5kZXggOiB0aGlzLmNvdW50Q2VsbHMgLSAxO1xuICB9XG5cbiAgZ2V0VmFsdWVTcXVhcmVBcnJheSA9ICgpID0+IHRoaXMuY2VsbEFycmF5Lm1hcCgoY2VsbCkgPT4gdGhpcy5nZXRTcXVhcmVJbmRleChjZWxsKSk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQuanMnO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vU3RhdGUuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xuaW1wb3J0IHNvdW5kIGZyb20gJy4uL3V0aWwvc291bmQuanMnO1xuaW1wb3J0IG1zVG9UaW1lIGZyb20gJy4uL3V0aWwvbXNUb1RpbWUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0ge1xuICAgICAgc2l6ZTogNCxcbiAgICAgIGlzUGljdHVyZXNTcXVhcmU6IGZhbHNlLFxuICAgICAgaXNTb3VuZDogdHJ1ZSxcbiAgICAgIHNpemVCb2FyZDogbnVsbCxcbiAgICB9O1xuXG4gICAgdGhpcy5lbGVtZW50cyA9IHtcbiAgICAgIG1lbnVUb2dnbGU6IG51bGwsXG4gICAgICBtZW51SW5uZXI6IG51bGwsXG4gICAgICBtZW51OiBudWxsLFxuICAgICAgbmV3R2FtZTogbnVsbCxcbiAgICAgIHNjb3JlOiBudWxsLFxuICAgICAgc2V0dGluZzogbnVsbCxcbiAgICAgIHJlc3VtZTogbnVsbCxcbiAgICAgIHRpbWVUb2dnbGU6IG51bGwsXG4gICAgICB0dXJuc1RvZ2dsZTogbnVsbCxcbiAgICAgIGJvYXJkOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLmJvYXJkID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnNjb3JlID0gbnVsbDtcblxuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuZXZlbnRzKCk7XG4gIH1cblxuICBzdGF0aWMgcmVhZHkoKSB7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbiAgICBjb25zdCBsb2FkR2FtZU9iaiA9IGdhbWUubG9hZFN0YXRlR2FtZSgpO1xuXG4gICAgaWYgKGxvYWRHYW1lT2JqKSB7XG4gICAgICBnYW1lLnByb3BlcnRpZXMuc2l6ZSA9ICtsb2FkR2FtZU9iai5zaXplO1xuICAgICAgZ2FtZS5wcm9wZXJ0aWVzLmlzU291bmQgPSBsb2FkR2FtZU9iai5pc1NvdW5kO1xuICAgICAgZ2FtZS5wcm9wZXJ0aWVzLmlzUGljdHVyZXNTcXVhcmUgPSBsb2FkR2FtZU9iai5pc1BpYztcbiAgICAgIGlmIChnYW1lLnByb3BlcnRpZXMuaXNQaWN0dXJlc1NxdWFyZSkge1xuICAgICAgICBnYW1lLmVsZW1lbnRzLmJvYXJkLmNsYXNzTGlzdC5hZGQoJ3BpY3R1cmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWUuZWxlbWVudHMuYm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgncGljdHVyZScpO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBpbWdJbmRleCwgc3RhdGUsIGFycmF5Q2VsbCB9ID0gbG9hZEdhbWVPYmo7XG4gICAgICBnYW1lLnN0YXRlLnRpbWUgPSBzdGF0ZS50aW1lO1xuICAgICAgZ2FtZS5zdGF0ZS50dXJucyA9IHN0YXRlLnR1cm5zO1xuICAgICAgZ2FtZS5zdGF0ZS5zdGF0ZSA9IHN0YXRlLnN0YXRlO1xuICAgICAgZ2FtZS5ib2FyZCA9IEJvYXJkLmNyZWF0ZShnYW1lLmVsZW1lbnRzLmJvYXJkLCBnYW1lLnByb3BlcnRpZXMuc2l6ZSxcbiAgICAgICAgZ2FtZS5wcm9wZXJ0aWVzLnNpemVCb2FyZCwgYXJyYXlDZWxsLCBnYW1lLnByb3BlcnRpZXMuaXNQaWN0dXJlc1NxdWFyZSwgaW1nSW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lLmJvYXJkID0gQm9hcmQuY3JlYXRlKGdhbWUuZWxlbWVudHMuYm9hcmQsXG4gICAgICAgIGdhbWUucHJvcGVydGllcy5zaXplLCBnYW1lLnByb3BlcnRpZXMuc2l6ZUJvYXJkKTtcbiAgICB9XG5cbiAgICBnYW1lLmJvYXJkLnN0YXJ0KHRydWUpO1xuICAgIGlmIChnYW1lLnN0YXRlLnN0YXRlID09PSAncGxheScpIHtcbiAgICAgIGdhbWUuc3RhdGUuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvLyBnYW1lLmJvYXJkLmNlbGxBcnJheSA9IGxvYWRHYW1lT2JnLmFycmF5Q2VsbDtcbiAgICAvLyBnYW1lLmJvYXJkLnJlbmRlcigpO1xuXG4gICAgcmV0dXJuIGdhbWU7XG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgIDxkaXYgY2xhc3M9XCJtZW51LXRvZ2dsZVwiPlxuICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPHNwYW4+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZW51XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVudS1pbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgKTtcblxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzdGF0aXN0aWNcIj48L2Rpdj5cbiAgICBgKTtcblxuICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5yZWFkeSgnLnN0YXRpc3RpYycpO1xuICAgIHRoaXMuc2NvcmUgPSBTY29yZS5yZWFkeSgpO1xuXG4gICAgdGhpcy5lbGVtZW50cy5ib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZCcpO1xuXG4gICAgdGhpcy5lbGVtZW50cy5tZW51VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJyk7XG4gICAgdGhpcy5lbGVtZW50cy5tZW51SW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pbm5lcicpO1xuICAgIHRoaXMuZWxlbWVudHMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5cbiAgICB0aGlzLmVsZW1lbnRzLm5ld0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3Jyk7XG4gICAgdGhpcy5lbGVtZW50cy5yZXN1bWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdW1lJyk7XG4gICAgdGhpcy5lbGVtZW50cy5zY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpO1xuICAgIHRoaXMuZWxlbWVudHMuc2V0dGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5nJyk7XG5cbiAgICB0aGlzLnZpZXdNZW51KCk7XG4gIH07XG5cbiAgZXZlbnRzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG5cbiAgICAgIC8vINCa0LvQuNC6INC/0L4g0LrQu9C10YLQutC1INC/0L7Qu9GPXG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5jZWxsJykpIHRoaXMuYm9hcmQubW92ZSh0YXJnZXQuY2xvc2VzdCgnLmNlbGwnKSk7XG5cbiAgICAgIC8vINCa0LvQuNC6INC/0L4g0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70Y4g0LzQtdC90Y5cbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLm1lbnUtdG9nZ2xlJykpIHRoaXMubWVudVRvZ2dsZShlKTtcblxuICAgICAgLy8g0L/Rg9C90LrRgtGLINC80LXQvdGOXG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJyNuZXcnKSkgdGhpcy5uZXdHYW1lKGUpO1xuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcjcmVzdW1lJykpIHRoaXMucmVzdW1lKGUpO1xuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcjc2NvcmUnKSkgdGhpcy52aWV3U2NvcmUoKTtcbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnI3NldHRpbmcnKSkgdGhpcy52aWV3U2V0dGluZygpO1xuXG4gICAgICAvLyDQn9C10YDQtdC60LvRjtGH0LDRgtC10LvRjCDQstC40LTQsCDRgtCw0LHQu9C40YbRiyDRgNC10LrQvtGA0LTQvtCyXG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJyN0aW1lTGFiZWwnKSkgdGhpcy52aWV3VGltZVNjb3JlKCk7XG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJyN0dXJuTGFiZWwnKSkgdGhpcy52aWV3VHVybnNTY29yZSgpO1xuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuYmFjaycpKSB0aGlzLnZpZXdNZW51KCk7XG4gICAgfSk7XG5cbiAgICAvLyDQn9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQtSDRgdC+0LHRi9GC0LjRj1xuICAgIHRoaXMuZWxlbWVudHMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZmluaXNoJywgdGhpcy5ldmVudEZpbmlzaEdhbWUpO1xuICAgIHRoaXMuZWxlbWVudHMuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignaXNNb3ZlJywgdGhpcy5ldmVudElzTW92ZSk7XG4gIH07XG5cbiAgZXZlbnRGaW5pc2hHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMuZmluaXNoR2FtZSgpO1xuICAgIHRoaXMuc2F2ZVN0YXRlR2FtZSgpO1xuICB9O1xuXG4gIGV2ZW50SXNNb3ZlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaXNTb3VuZCkge1xuICAgICAgc291bmQoKTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS50dXJuKCk7XG4gICAgdGhpcy5zYXZlU3RhdGVHYW1lKCk7XG4gIH07XG5cbiAgbWVudVRvZ2dsZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgeyBtZW51LCBtZW51VG9nZ2xlIH0gPSB0aGlzLmVsZW1lbnRzO1xuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgIG1lbnVUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkJykuY2xhc3NMaXN0LnRvZ2dsZSgnYmx1cicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0JykuY2xhc3NMaXN0LnRvZ2dsZSgnYmx1cicpO1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tbW9kYWwnKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbi1tb2RhbCcpLmNsYXNzTGlzdC50b2dnbGUoJ2JsdXInKTtcbiAgICB9XG4gIH1cblxuICBuZXdHYW1lID0gKGUpID0+IHtcbiAgICB0aGlzLm1lbnVUb2dnbGUoZSk7XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbi1tb2RhbCcpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tbW9kYWwnKSk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcGVydGllcy5pc1BpY3R1cmVzU3F1YXJlKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmJvYXJkLmNsYXNzTGlzdC5hZGQoJ3BpY3R1cmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50cy5ib2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdwaWN0dXJlJyk7XG4gICAgfVxuICAgIHRoaXMuYm9hcmQgPSBCb2FyZC5jcmVhdGUodGhpcy5lbGVtZW50cy5ib2FyZCwgdGhpcy5wcm9wZXJ0aWVzLnNpemUsXG4gICAgICB0aGlzLnByb3BlcnRpZXMuc2l6ZUJvYXJkLCBbXSwgdGhpcy5wcm9wZXJ0aWVzLmlzUGljdHVyZXNTcXVhcmUpO1xuICAgIHRoaXMuYm9hcmQuc3RhcnQoKTtcbiAgICB0aGlzLnN0YXRlLnN0b3AoKTtcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCk7XG4gIH07XG5cbiAgcmVzdW1lKGUpIHtcbiAgICB0aGlzLm1lbnVUb2dnbGUoZSk7XG4gIH1cblxuICB2aWV3TWVudSgpIHtcbiAgICB0aGlzLmVsZW1lbnRzLm1lbnVJbm5lci5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmVsZW1lbnRzLm1lbnVJbm5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXG4gICAgICAgIDx1bCBjbGFzcz1cIm1lbnUtbGlzdFwiPlxuICAgICAgICAgIDxsaSBpZD1cInJlc3VtZVwiPtCf0YDQvtC00L7Qu9C20LjRgtGMPC9saT5cbiAgICAgICAgICA8bGkgaWQ9XCJuZXdcIj7QndC+0LLQsNGPINC40LPRgNCwPC9saT5cbiAgICAgICAgICA8bGkgaWQ9XCJzY29yZVwiPtCh0YfQtdGCPC9saT5cbiAgICAgICAgICA8bGkgaWQ9XCJzZXR0aW5nXCI+0J3QsNGB0YLRgNC+0LnQutC4PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5EaXNjb3JkOiBNYWxhZ29yIzY1MzU8L2Rpdj5cbiAgICBgKTtcbiAgfVxuXG4gIHZpZXdTZXR0aW5nKCkge1xuICAgIHRoaXMuZWxlbWVudHMubWVudUlubmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuZWxlbWVudHMubWVudUlubmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJzZXR0aW5nc1wiIG5hbWU9XCJzZXR0aW5nc1wiPlxuICAgICAgICA8YSBjbGFzcz1cImJhY2tcIiBocmVmPVwiI1wiPjxoMj5CYWNrPC9oMj48L2E+XG4gICAgICAgIDxoMiBjbGFzcz1cIm1lbnVfX3RpdGxlXCI+U2V0dGluZ3M8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInNpemVcIj5TaXplPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNpemVcIiBpZD1cInNpemVcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zeDM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40eDQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41eDU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42eDY8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43eDc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44eDg8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiaXNQaWN0dXJlXCI+RGVzaWduPC9sYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJpc1BpY3R1cmVcIiBpZD1cImlzUGljXCIgY2hlY2tlZCB2YWx1ZT1cImZhbHNlXCI+PGxhYmVsIGNsYXNzPVwiaW5wdXQtbGFiZWxcIiBmb3I9XCJpc1BpY1wiPkRpZ2l0PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiaXNQaWN0dXJlXCIgdmFsdWU9XCJ0cnVlXCIgaWQ9XCJpc0RpZ1wiICBjaGVja2VkPVwiY2hlY2tlZFwiPjxsYWJlbCBjbGFzcz1cImlucHV0LWxhYmVsXCIgZm9yPVwiaXNEaWdcIj5QaWN0dXJlPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzb3VuZFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInNvdW5kLWxhYmVsXCIgZm9yPVwic291bmRcIj5Tb3VuZDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgYCk7XG5cbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MgI3NpemUnKTtcbiAgICBjb25zdCByYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cImlzUGljdHVyZVwiXScpO1xuICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdW5kJyk7XG5cbiAgICBzZWxlY3Qub3B0aW9uc1t0aGlzLnByb3BlcnRpZXMuc2l6ZSAtIDNdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBjaGVjay5jaGVja2VkID0gdGhpcy5wcm9wZXJ0aWVzLmlzU291bmQ7XG5cbiAgICBjb25zdCBzZXRTZXR0aW5ncyA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcGVydGllcy5zaXplID0gc2VsZWN0LnZhbHVlO1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzLmlzU291bmQgPSBjaGVjay5jaGVja2VkO1xuXG4gICAgICBmb3IgKGNvbnN0IHJhZGlvIG9mIHJhZGlvcykge1xuICAgICAgICBpZiAocmFkaW8uY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMucHJvcGVydGllcy5pc1BpY3R1cmVzU3F1YXJlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0U2V0dGluZ3MpO1xuICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFNldHRpbmdzKTtcblxuICAgIGZvciAoY29uc3QgcmFkaW8gb2YgcmFkaW9zKSB7XG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW8udmFsdWUgPT09IGAke3RoaXMucHJvcGVydGllcy5pc1BpY3R1cmVzU3F1YXJlfWA7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRTZXR0aW5ncyk7XG4gICAgfVxuICB9XG5cbiAgdmlld1Njb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuZWxlbWVudHMubWVudUlubmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuZWxlbWVudHMubWVudUlubmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcbiAgICA8ZGl2IGNsYXNzPVwic2NvcmUtdmlld1wiPlxuICAgIDxhIGNsYXNzPVwiYmFja1wiIGhyZWY9XCIjXCI+PGgyPkJhY2s8L2gyPjwvYT5cbiAgICAgIDxoMiBjbGFzcz1cIm1lbnVfX3RpdGxlXCI+U2NvcmVzPC9oMj5cbiAgICAgIDx1bCBjbGFzcz1cInNjb3JlX19sYWJlbHNcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwic2NvcmVfX2l0ZW0gYWN0aXZlXCIgaWQ9XCJ0aW1lTGFiZWxcIj5UaW1lPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic2NvcmVfX2l0ZW1cIiBpZD1cInR1cm5MYWJlbFwiPlR1cm5zPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzPVwic2NvcmVfX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjb3JlX190YWJsZVwiPiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgYCk7XG5cbiAgICB0aGlzLmVsZW1lbnRzLnRpbWVUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZUxhYmVsJyk7XG4gICAgdGhpcy5lbGVtZW50cy50dXJuc1RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0dXJuTGFiZWwnKTtcblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLnRpbWVUb2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgdGhpcy52aWV3VGltZVNjb3JlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld1R1cm5zU2NvcmUoKTtcbiAgICB9XG4gIH07XG5cbiAgdmlld1RpbWVTY29yZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHMudGltZVRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICB0aGlzLnNjb3JlVG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfX3RhYmxlJyk7XG5cbiAgICB0YWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICB0YWJsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgICBgPGRpdiBjbGFzcz1cInBvc2l0aW9uXCI+UG9zPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPk5hbWU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+VGltZTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInR1cm5zXCI+VHVybnM8L2Rpdj4gYCk7XG5cbiAgICBjb25zdCBiZXN0VGltZSA9IHRoaXMuc2NvcmUuZ2V0QmVzdFRpbWUoKTtcbiAgICBiZXN0VGltZS5mb3JFYWNoKChyZXMsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUsIHRpbWUsIHR1cm5zIH0gPSByZXM7XG5cbiAgICAgIHRhYmxlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvblwiPiR7aW5kZXggKyAxfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHtuYW1lfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+JHttc1RvVGltZSh0aW1lKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHVybnNcIj4ke3R1cm5zfTwvZGl2PiAgICAgICBcbiAgICAgIGApO1xuICAgIH0pO1xuICB9O1xuXG4gIHZpZXdUdXJuc1Njb3JlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5lbGVtZW50cy50dXJuc1RvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICB0aGlzLnNjb3JlVG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfX3RhYmxlJyk7XG5cbiAgICB0YWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICB0YWJsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgICBgPGRpdiBjbGFzcz1cInBvc2l0aW9uXCI+UG9zPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPk5hbWU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0dXJuc1wiPlR1cm5zPC9kaXY+IFxuICAgICAgPGRpdiBjbGFzcz1cInRpbWVcIj5UaW1lPC9kaXY+YCk7XG5cbiAgICBjb25zdCBiZXN0VGltZSA9IHRoaXMuc2NvcmUuZ2V0QmVzdFR1cm5zKCk7XG4gICAgYmVzdFRpbWUuZm9yRWFjaCgocmVzLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lLCB0aW1lLCB0dXJucyB9ID0gcmVzO1xuXG4gICAgICB0YWJsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb25cIj4ke2luZGV4ICsgMX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7bmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHVybnNcIj4ke3R1cm5zfTwvZGl2PiAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPiR7bXNUb1RpbWUodGltZSl9PC9kaXY+XG4gICAgICBgKTtcbiAgICB9KTtcbiAgfTtcblxuICB2aWV3V2luID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhc3RUaW1lID0gdGhpcy5zY29yZS5nZXRMYXN0UG9zaXRpb25JblNjb3JlQnlUaW1lKCk7XG4gICAgY29uc3QgbGFzdFR1cm5zID0gdGhpcy5zY29yZS5nZXRMYXN0UG9zaXRpb25JblNjb3JlQnlUdXJucygpO1xuXG4gICAgY29uc3QgaXNSZWNvcmQgPSBsYXN0VGltZSA8IDAgfHwgbGFzdFR1cm5zIDwgMFxuICAgICAgfHwgKGxhc3RUaW1lID4gdGhpcy5zdGF0ZS50aW1lKSB8fCAobGFzdFR1cm5zID4gdGhpcy5zdGF0ZS50dXJucyk7XG5cbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcbiAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIndpbi1tb2RhbCAke2lzUmVjb3JkID8gJycgOiAnbm8tcmVjb3JkJ31cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+0JLQsNC8INGD0LTQsNC70L7RgdGMISEhPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+0J/QvtGB0LvQtSA8c3BhbiBjbGFzcz1cInJlY29yZC10aW1lXCI+JHttc1RvVGltZSh0aGlzLnN0YXRlLnRpbWUpfTwvc3Bhbj4g0LLRgNC10LzQtdC90Lgg0LggPHNwYW4gY2xhc3M9XCJyZWNvcmQtdHVybnNcIj4ke3RoaXMuc3RhdGUudHVybnN9PC9zcGFuPiDRhdC+0LTQvtCyINCy0Ysg0YHQvtCx0YDQsNC70Lgg0L/QsNC30Lsg0LjQtyA8c3BhbiBjbGFzcz1cInJlY29yZC1zaXplXCI+JHsodGhpcy5wcm9wZXJ0aWVzLnNpemUgKiB0aGlzLnByb3BlcnRpZXMuc2l6ZSkgLSAxfTwvc3Bhbj4g0LrQu9C10YLQvtC6LiDQn9C+0LfQtNGA0LDQstC70Y/RjiEhIVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlY29yZFwiPtCS0Ys8c3BhbiBjbGFzcz1cIndvcm0td29yZHNcIj4sINC6INGB0L7QttCw0LvQtdC90LjRjiDQvdC1PC9zcGFuPiDQv9C+0L/QsNC70Lgg0LIg0YLQsNCx0LvQuNGG0YMg0YDQtdC60L7RgNC00L7QsjxzcGFuIGNsYXNzPVwid29ybS13b3Jkc1wiPi4g0J3QviDRjdGC0L4g0L3QtSDQv9C+0LLQvtC0INGD0L3Ri9Cy0LDRgtGMLCDQstGLINCy0YHQtSDRgNCw0LLQvdC+INC80L7Qu9C+0LTQtdGGITwvc3Bhbj48c3BhbiBjbGFzcz1cInJlYXNvblwiPi48L3NwYW4+IDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb25cIj7QktC90LXRgdGC0Lgg0LLQsNGIINGA0LXQt9GD0LvRjNGC0LDRgiDQsiDRgtCw0LHQu9C40YbRgz8g0JXRgdC70LggXCLQlNCwXCIsINGC0L4g0LLQstC10LTQuNGC0LUg0LLQsNGI0LUg0LjQvNGPINC4INC+0YLQv9GA0LDQstGC0LUg0YTQvtGA0LzRgy4g0JXRgdC70Lgg0LLRiyDRgdC60YDQvtC80L3QuNGH0LDQtdGC0LUsINGC0L4g0YLQvtC20LUg0LjQvNC10LXRgtC1INC/0YDQsNCy0L4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV4dC1nYW1lXCI+0JTQu9GPINC90LDRh9Cw0LvQsCDQvdC+0LLQvtC5INC40LPRgNGLINC40LvQuCDQuNC30LzQtdC90LXQvdC40Y8g0L3QsNGB0YLRgNC+0LXQuiDQt9Cw0LnQtNC40YLQtSDQsiDQvNC10L3Rji4g0KLQsNC8INCy0YHQtSDQsdGD0LTQtdGCLjwvZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzcz1cInlvdXItbmFtZS1mb3JtXCI+XG4gICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIGNsYXNzPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktCw0YjQtSDQuNC80Y8/XCI+XG4gICAgICAgICAgPGlucHV0IGlkPVwiY2FuY2VsXCIgdHlwZT1cInJlc2V0XCIgdmFsdWU9XCLQryDRgdC60YDQvtC80L3Ri9C5XCI+XG4gICAgICAgICAgPGlucHV0IGlkPVwic2VuZFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cItCvINCf0J7QkdCV0JTQmNCi0JXQm9CsIVwiPlxuICAgICAgICA8L2Zvcm0+XG4gICAgXG4gICAgPC9kaXY+ICAgIFxuICAgIGApO1xuICB9O1xuXG4gIHNjb3JlVG9nZ2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdGltZVRvZ2dsZSwgdHVybnNUb2dnbGUgfSA9IHRoaXMuZWxlbWVudHM7XG4gICAgdGltZVRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB0dXJuc1RvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfTtcblxuICBmaW5pc2hHYW1lKCkge1xuICAgIHRoaXMuYm9hcmQucmFuZEluZGV4QXJyYXkgPSBbXTtcbiAgICB0aGlzLnN0YXRlLnN0b3AoKTtcbiAgICB0aGlzLnN0YXRlLl9zdGF0ZSA9ICdmaW5pc2gnO1xuICAgIGNvbnN0IHR1cm5zID0gdGhpcy5zdGF0ZS5nZXRUdXJucygpO1xuICAgIGNvbnN0IHsgdGltZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBjb25zdCBuYW1lID0gcHJvbXB0KCdZb3VyIE5hbWU/Jyk7XG5cbiAgICB0aGlzLnNhdmVTdGF0ZUdhbWUoKTtcbiAgICB0aGlzLnZpZXdXaW4oKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZW5kJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG5cbiAgICAgIGlmIChuYW1lID09PSAnJykgbmFtZSA9ICdHYW1lcic7XG5cbiAgICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgdHVybnMsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIG5hbWUsXG4gICAgICB9O1xuXG4gICAgICBpZiAodHVybnMgJiYgdGltZSkge1xuICAgICAgICB0aGlzLnNjb3JlLnNldFJlc3VsdChyZXMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tbW9kYWwgJyk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5ICcpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgfTtcblxuICBzYXZlU3RhdGVHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWVQcm9wZXJ0eUZvclNhdmUgPSB7XG4gICAgICBzaXplOiB0aGlzLnByb3BlcnRpZXMuc2l6ZSxcbiAgICAgIGlzUGljOiB0aGlzLnByb3BlcnRpZXMuaXNQaWN0dXJlc1NxdWFyZSxcbiAgICAgIGlzU291bmQ6IHRoaXMucHJvcGVydGllcy5pc1NvdW5kLFxuICAgICAgaW1nSW5kZXg6IHRoaXMuYm9hcmQuaW1hZ2VJbmRleCxcbiAgICAgIGFycmF5Q2VsbDogdGhpcy5ib2FyZC5nZXRWYWx1ZVNxdWFyZUFycmF5KCksXG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpLFxuICAgIH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2F2ZUdhbWUnLCBKU09OLnN0cmluZ2lmeShnYW1lUHJvcGVydHlGb3JTYXZlKSk7XG4gIH07XG5cbiAgbG9hZFN0YXRlR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBsb2FkT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2F2ZUdhbWUnKSk7XG4gICAgcmV0dXJuIGxvYWRPYmogfHwgbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNjb3JlVGFibGUgPSB0aGlzLmxvYWRUYWJsZSgpO1xuICB9XG5cbiAgc3RhdGljIHJlYWR5KCkge1xuICAgIHJldHVybiBuZXcgU2NvcmUoKTtcbiAgfVxuXG4gIC8vINCh0L7RhdGA0LDQvdC10L3QuNC1INGC0LDQsdC70LjRhtGLINGA0LXQutC+0YDQtNC+0LIg0LIgbG9jYWxTdG9yYWdlXG4gIHNhdmVUYWJsZSgpIHtcbiAgICBpZiAodGhpcy5zY29yZVRhYmxlLmxlbmd0aCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlVGFibGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnNjb3JlVGFibGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ9Ci0LDQsdC70LjRhtCwINGA0LXQutC+0YDQtNC+0LIg0L3QtSDRgdC+0YXRgNCw0L3QtdC90LAuINCi0LDQsdC70LjRhtCwINC/0YPRgdGC0LAnKTtcbiAgICB9XG4gIH1cblxuICAvLyDQl9Cw0LPRgNGD0LfQutCwINGC0LDQsdC70LjRhtGLINGA0LXQutC+0YDQtNC+0LIg0LjQtyBsb2NhbFN0b3JhZ2VcbiAgbG9hZFRhYmxlID0gKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmVUYWJsZScpKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmVUYWJsZScpKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ9Ci0LDQsdC70LjRhtCwINGA0LXQutC+0YDQtNC+0LIg0L3QtSDQt9Cw0LPRgNGD0LbQtdC90LAnKTtcbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgLy8g0JfQsNC/0LjRgdGMINC90L7QstC+0LPQviDRgNC10LrQvtGA0LTQsCDQsiDRgtCw0LHQu9C40YbRgywg0LjQu9C4INC90LXRgiwg0LXRgdC70Lgg0L7QvSDQvNCw0LvQtdC90YzQutC40LlcbiAgc2V0UmVzdWx0ID0gKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHsgdGltZSwgdHVybnMgfSA9IHJlc3VsdDtcblxuICAgIGNvbnN0IGxhc3RUaW1lID0gdGhpcy5nZXRMYXN0UG9zaXRpb25JblNjb3JlQnlUaW1lKCk7XG4gICAgY29uc3QgbGFzdFR1cm5zID0gdGhpcy5nZXRMYXN0UG9zaXRpb25JblNjb3JlQnlUdXJucygpO1xuXG4gICAgaWYgKHRpbWUgPCBsYXN0VGltZVxuICAgICAgfHwgdHVybnMgPCBsYXN0VHVybnNcbiAgICAgIHx8IGxhc3RUaW1lID09PSAtMVxuICAgICAgfHwgbGFzdFR1cm5zID09PSAtMSkge1xuICAgICAgdGhpcy5zY29yZVRhYmxlLnB1c2gocmVzdWx0KTtcblxuICAgICAgdGhpcy5zYXZlVGFibGUoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8g0J/QvtC70YPRh9C10L3QuNC1INCy0YDQtdC80LXQvdC4INC/0L7RgdC70LXQtNC90LXQs9C+INCyINGA0LDQvdCz0LUg0YDQtdC60L7RgNC00LAg0LIg0YLQsNCx0LvQuNGG0LUgKNCy0L7Qt9Cy0YDQsNGJ0LDQtdGCIDEwINGA0LXQt9GD0LvRjNGC0LDRgilcbiAgZ2V0TGFzdFBvc2l0aW9uSW5TY29yZUJ5VGltZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYXhSZXN1bHRJblRhYmxlID0gdGhpcy5zb3J0QnlGaWVsZCgndGltZScpO1xuXG4gICAgaWYgKG1heFJlc3VsdEluVGFibGUubGVuZ3RoIDwgMTApIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIG1heFJlc3VsdEluVGFibGVbbWF4UmVzdWx0SW5UYWJsZS5sZW5ndGggLSAxXS50aW1lO1xuICB9O1xuXG4gIC8vINCf0L7Qu9GD0YfQtdC90LjQtSDQutC+0LvQuNGH0YHRgtCy0LAg0YXQvtC00L7QsiDQv9C+0YHQu9C10LTQvdC10LPQviDQsiDRgNCw0L3Qs9C1INGA0LXQutC+0LTQtNCwXG4gIGdldExhc3RQb3NpdGlvbkluU2NvcmVCeVR1cm5zID0gKCkgPT4ge1xuICAgIGNvbnN0IG1heFJlc3VsdEluVGFibGUgPSB0aGlzLnNvcnRCeUZpZWxkKCd0dXJucycpO1xuXG4gICAgaWYgKG1heFJlc3VsdEluVGFibGUubGVuZ3RoIDwgMTApIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIG1heFJlc3VsdEluVGFibGVbbWF4UmVzdWx0SW5UYWJsZS5sZW5ndGggLSAxXS50dXJucztcbiAgfTtcblxuICAvLyDQodC+0YDRgtC40YDQvtCy0LrQsCDRgtCw0LHQu9C40YbRiyDRgNC10LrQvtGA0LTQvtCyINC/0L4g0LLRgNC10LzQtdC90Lgg0LjQu9C4INGF0L7QtNCw0LxcbiAgc29ydEJ5RmllbGQoZmllbGQpIHtcbiAgICByZXR1cm4gdGhpcy5zY29yZVRhYmxlXG4gICAgICAuc29ydCgoYSwgYikgPT4gYVtmaWVsZF0gLSBiW2ZpZWxkXSlcbiAgICAgIC5maWx0ZXIoKHZhbCwgaW5kZXgpID0+IGluZGV4IDwgMTApO1xuICB9XG5cbiAgLy8g0JLQvtC30LLRgNCw0YnQsNC10YIg0YLQsNCx0LvQuNGG0YMg0YDQtdC60L7RgNC00L7QsiDQvtGC0YHQvtGA0YLQuNGA0L7QstCw0L3QvdGD0Y4g0L/QviDQstGA0LXQvNC10L3QuFxuICBnZXRCZXN0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0QnlGaWVsZCgndGltZScpO1xuICB9XG5cbiAgLy8g0JLQvtC30LLRgNCw0YnQsNC10YIg0YLQsNCx0LvQuNGG0YMg0YDQtdC60L7RgNC00L7QsiDQvtGC0YHQvtGA0YLQuNGA0L7QstCw0L3QvdGD0Y4g0L/QviDRhdC+0LTQsNC8XG4gIGdldEJlc3RUdXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0QnlGaWVsZCgndHVybnMnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3F1YXJlIHtcbiAgY29uc3RydWN0b3IoaW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLiRzcXVhcmUgPSBudWxsO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKGluZGV4LCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgU3F1YXJlKGluZGV4LCB2YWx1ZSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy52YWx1ZTtcbiAgICAvLyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcblxuICAgIHRoaXMuJHNxdWFyZSA9IGVsZW1lbnQ7XG4gIH1cblxuICBnZXQgc3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLiRzcXVhcmU7XG4gIH1cblxuICAvLyBmaW5kU3F1YXJlKGVsKSB7XG4gIC8vICAgaWYgKGVsID09PSB0aGlzLiRzcXVhcmUpIHtcbiAgLy8gICAgIHJldHVybiB0aGlzO1xuICAvLyAgIH1cbiAgLy8gfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCBtc1RvVGltZSBmcm9tICcuLi91dGlsL21zVG9UaW1lLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHRoaXMuX3RpbWUgPSAwO1xuICAgIHRoaXMuX3R1cm5zID0gMDtcblxuICAgIHRoaXMuX3N0YXRlID0gJ3N0YXJ0JztcblxuICAgIHRoaXMudGltZXJJRCA9IG51bGw7XG5cbiAgICB0aGlzLiRlbCA9IG51bGw7XG4gICAgdGhpcy4kdHVybnMgPSBudWxsO1xuICAgIHRoaXMuJHRpbWVzID0gbnVsbDtcblxuICAgIHRoaXMuaW5pdChlbCk7XG4gICAgLy8gdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgc3RhdGljIHJlYWR5KGVsKSB7XG4gICAgcmV0dXJuIG5ldyBTdGF0ZShlbCk7XG4gIH1cblxuICBpbml0KGVsKSB7XG4gICAgdGhpcy4kZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICB0aGlzLmNyZWF0ZUhUTUwodGhpcy4kZWwpO1xuICB9XG5cbiAgY3JlYXRlSFRNTCA9IChwYXJlbnRFbCkgPT4ge1xuICAgIHBhcmVudEVsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcbiAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0dXJuc1wiPlR1cm5zOiAwPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lc1wiPlRpbWU6IDAwOjAwOjAwPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIGApO1xuICAgIHRoaXMuJHR1cm5zID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignLnR1cm5zJyk7XG4gICAgdGhpcy4kdGltZXMgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcudGltZXMnKTtcbiAgfTtcblxuICBzdGFydCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5fc3RhdGUgIT09ICdwbGF5Jykge1xuICAgICAgdGhpcy5fdGltZSA9IDA7XG4gICAgICB0aGlzLl90dXJucyA9IDA7XG4gICAgICB0aGlzLl9zdGF0ZSA9ICdwbGF5JztcbiAgICB9XG4gICAgdGhpcy4kdHVybnMuaW5uZXJUZXh0ID0gYFR1cm5zOiAke3RoaXMuX3R1cm5zfWA7XG4gICAgc2V0VGltZW91dCh0aGlzLnRpY2ssIDEwMDApO1xuICB9O1xuXG4gIHN0b3AgPSAoKSA9PiB7XG4gICAgdGhpcy5fc3RhdGUgPSAnc3RvcCc7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJJRCk7XG4gICAgdGhpcy50aW1lcklEID0gbnVsbDtcbiAgfTtcblxuICBwYXVzZSA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcklEKTtcbiAgfTtcblxuICByZXN1bWUgPSAoKSA9PiB0aGlzLnRpY2soKTtcblxuICB0dXJuID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gJ3BsYXknKSB7XG4gICAgICB0aGlzLl90dXJucyArPSAxO1xuICAgICAgdGhpcy4kdHVybnMuaW5uZXJUZXh0ID0gYFR1cm5zOiAke3RoaXMuX3R1cm5zfWA7XG4gICAgfVxuICB9O1xuXG4gIGdldFR1cm5zID0gKCkgPT4gdGhpcy5fdHVybnM7XG5cbiAgdGljayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5fc3RhdGUgPT09ICdwbGF5Jykge1xuICAgICAgdGhpcy5fdGltZSArPSAxMDAwO1xuICAgICAgdGhpcy4kdGltZXMudGV4dENvbnRlbnQgPSBgVGltZTogJHttc1RvVGltZSh0aGlzLnRpbWUpfWA7XG4gICAgICB0aGlzLnRpbWVySUQgPSBzZXRUaW1lb3V0KHRoaXMudGljaywgMTAwMCk7XG4gICAgfVxuICB9O1xuXG4gIGdldCB0aW1lKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG5cbiAgc2V0IHRpbWUodmFsdWUpIHtcbiAgICB0aGlzLl90aW1lID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG5cbiAgc2V0IHN0YXRlKHZhbHVlKSB7XG4gICAgdGhpcy5fc3RhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB0dXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVybnM7XG4gIH1cblxuICBzZXQgdHVybnModmFsdWUpIHtcbiAgICB0aGlzLl90dXJucyA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWU6IHRoaXMuX3RpbWUsXG4gICAgICB0dXJuczogdGhpcy5fdHVybnMsXG4gICAgICBzdGF0ZTogdGhpcy5fc3RhdGUsXG4gICAgfTtcbiAgfVxufVxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHRlbnNpb25zXG5pbXBvcnQgR2FtZSBmcm9tICcuL2NsYXNzZXMvR2FtZS5qcyc7XG5cbkdhbWUucmVhZHkoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1zVG9UaW1lKGR1cmF0aW9uKSB7XG4gIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZHVyYXRpb24gLyAxMDAwKSAlIDYwKTtcbiAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkdXJhdGlvbiAvICgxMDAwICogNjApKSAlIDYwKTtcbiAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcigoZHVyYXRpb24gLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KTtcblxuICBob3VycyA9IChob3VycyA8IDEwKSA/IGAwJHtob3Vyc31gIDogaG91cnM7XG4gIG1pbnV0ZXMgPSAobWludXRlcyA8IDEwKSA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzO1xuICBzZWNvbmRzID0gKHNlY29uZHMgPCAxMCkgPyBgMCR7c2Vjb25kc31gIDogc2Vjb25kcztcblxuICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWA7XG59XG4iLCJpbXBvcnQgc291bmRNb3ZlIGZyb20gJy4uLy4uL2Fzc2V0cy9zb3VuZHMvbW92ZS5tcDMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3VuZCgpIHtcbiAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKTsgLy8g0KHQvtC30LTQsNGR0Lwg0L3QvtCy0YvQuSDRjdC70LXQvNC10L3RgiBBdWRpb1xuICBhdWRpby5zcmMgPSBzb3VuZE1vdmU7IC8vINCj0LrQsNC30YvQstCw0LXQvCDQv9GD0YLRjCDQuiDQt9Cy0YPQutGDIFwi0LrQu9C40LrQsFwiXG4gIGF1ZGlvLmF1dG9wbGF5ID0gdHJ1ZTsgLy8g0JDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0LfQsNC/0YPRgdC60LDQtdC8XG59XG4iXSwic291cmNlUm9vdCI6IiJ9