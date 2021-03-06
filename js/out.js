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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

document.addEventListener("DOMContentLoaded", function () {

  // menu opuszczane

  var menu = $('.header__left').find(".header__menu");
  var nav = $('.header__left').find("nav");
  var toggle = $('.header__left').find("#toggle");

  toggle.on('click', function () {
    menu.slideToggle(function () {
      menu.css("visibility", "visible");
    });
  });

  // animacja x

  toggle.on('mouseover', function () {
    toggle.find(".header__left--bar1").addClass("change--bar1");
    toggle.find(".header__left--bar2").addClass("change--bar2");
    toggle.find(".header__left--bar3").addClass("change--bar3");
  });

  toggle.on('mouseout', function () {
    toggle.find(".header__left--bar1").removeClass("change--bar1");
    toggle.find(".header__left--bar2").removeClass("change--bar2");
    toggle.find(".header__left--bar3").removeClass("change--bar3");
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "body {\n  background-color: black;\n  color: white;\n  font-family: 'Raleway', sans-serif;\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\na {\n  text-decoration: none;\n  color: white; }\n\na:hover {\n  color: #e6b842; }\n\nul {\n  list-style: none; }\n\nli {\n  margin-left: 40px;\n  margin-top: 20px; }\n\nh1,\nh2,\nh3 {\n  letter-spacing: 5px; }\n\n@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {\n  .wrapper {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 25% 25% 25% 25%;\n    grid-template-columns: 25% 25% 25% 25%;\n    -ms-grid-rows: 100px auto 80px;\n    grid-template-rows: 100px auto 80px;\n    height: 600px;\n    color: white; }\n  header {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 4;\n    grid-column: 1 / 5;\n    -ms-grid-row: 1;\n    grid-row: 1; }\n    header nav {\n      height: 100px;\n      width: 80px;\n      height: 80px;\n      font-size: 1rem;\n      color: #e6b842;\n      z-index: 10;\n      position: fixed; }\n    header #toggle {\n      display: inline-block;\n      cursor: pointer;\n      width: 35px;\n      height: 35px;\n      -webkit-transform: translate(20px, 35px);\n      -ms-transform: translate(20px, 35px);\n      transform: translate(20px, 35px);\n      position: fixed;\n      z-index: 1; }\n      header #toggle .header__left--bar1 {\n        width: 35px;\n        height: 5px;\n        background-color: #e6b842;\n        margin: 6px 0;\n        -webkit-transition: all 0.5s;\n        -o-transition: all 0.5s;\n        transition: all 0.5s;\n        z-index: 1;\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: -15px; }\n      header #toggle .header__left--bar2 {\n        width: 35px;\n        height: 5px;\n        background-color: #e6b842;\n        margin: 6px 0;\n        -webkit-transition: all 0.5s;\n        -o-transition: all 0.5s;\n        transition: all 0.5s;\n        z-index: 1;\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: -5px; }\n      header #toggle .header__left--bar3 {\n        width: 35px;\n        height: 5px;\n        background-color: #e6b842;\n        margin: 6px 0;\n        -webkit-transition: all 0.5s;\n        -o-transition: all 0.5s;\n        transition: all 0.5s;\n        z-index: 1;\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: 5px; }\n    header .change--bar1 {\n      -webkit-transform: rotate(-45deg) translate(-8px, 6px);\n      -ms-transform: rotate(-45deg) translate(-8px, 6px);\n      transform: rotate(-45deg) translate(-8px, 6px); }\n    header .change--bar2 {\n      opacity: 0; }\n    header .change--bar3 {\n      -webkit-transform: rotate(45deg) translate(-7px, -8px);\n      -ms-transform: rotate(45deg) translate(-7px, -8px);\n      transform: rotate(45deg) translate(-7px, -8px); }\n    header .header__menu {\n      top: 0;\n      left: 0;\n      color: #e6b842;\n      width: 50%;\n      height: 100%;\n      margin: auto;\n      text-align: left;\n      background-color: #679a9c;\n      -webkit-box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n      visibility: hidden;\n      z-index: 2;\n      position: fixed;\n      -ms-grid-row-align: center;\n      align-self: center;\n      justify-items: center;\n      display: -ms-grid;\n      display: grid; }\n      header .header__menu a {\n        font-size: 2rem;\n        text-decoration: none;\n        color: #679a9c; }\n      header .header__menu a:focus,\n      header .header__menu a:hover {\n        color: #e6b842; }\n      header .header__menu .header__menu--logo {\n        margin: 60px 0 20px 0;\n        font-size: 1.5rem; }\n      header .header__menu .header__menu--form input {\n        display: block;\n        width: 280px;\n        height: 50px;\n        margin-bottom: 10px;\n        color: #e6b842;\n        font-style: italic;\n        padding-left: 20px; }\n      header .header__menu .header__menu--form textarea {\n        display: block;\n        width: 280px;\n        height: 250px;\n        font-style: italic;\n        padding: 20px 0 0 20px; }\n      header .header__menu .header__menu--form button {\n        margin-top: 20px;\n        width: 280px;\n        height: 50px;\n        background-color: #e6b842;\n        border: none;\n        color: #679a9c;\n        font-weight: bold;\n        font-size: 1.1em; }\n  section {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-column: 1 / 3;\n    -ms-grid-row: 2;\n    grid-row: 2; }\n    section p {\n      color: white;\n      letter-spacing: 0.15em;\n      font-size: 1.2em;\n      margin: 10px 0 0 10px;\n      white-space: nowrap;\n      overflow: hidden;\n      width: 40em;\n      -webkit-animation: type 4s steps(60, end);\n      animation: type 4s steps(60, end); }\n    section p:nth-child(2) {\n      -webkit-animation: type2 8s steps(60, end);\n      animation: type2 8s steps(60, end); }\n    section p:nth-child(3) {\n      -webkit-animation: type3 16s steps(60, end);\n      animation: type3 16s steps(60, end); }\n    section p:nth-child(4) {\n      -webkit-animation: type4 30s steps(60, end);\n      animation: type4 30s steps(60, end); }\n    section span {\n      -webkit-animation: blink 1s infinite;\n      animation: blink 1s infinite; }\n  @-webkit-keyframes type {\n    from {\n      width: 0; } }\n  @keyframes type {\n    from {\n      width: 0; } }\n  @-webkit-keyframes type2 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @keyframes type2 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @-webkit-keyframes type3 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @keyframes type3 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @-webkit-keyframes type4 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @keyframes type4 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @-webkit-keyframes blink {\n    to {\n      opacity: .0; } }\n  @keyframes blink {\n    to {\n      opacity: .0; } }\n  aside {\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 2;\n    grid-column: 3 / 5;\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 2;\n    grid-row: 2 / 4; }\n    aside img {\n      width: 30%;\n      position: relative;\n      top: 30%;\n      left: 40%;\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n  footer {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-column: 1 / 3;\n    -ms-grid-row: 3;\n    grid-row: 3;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center;\n    -ms-grid-column-align: center;\n    justify-self: center; }\n    footer a {\n      margin: 0 0 0 25px;\n      text-decoration: none; }\n    footer .footer__name {\n      margin-top: 10px; }\n      footer .footer__name a {\n        margin: 0 0 0 0;\n        font-family: 'Special Elite';\n        text-decoration: none;\n        font-size: 1.2em; }\n      footer .footer__name a:hover {\n        color: #679a9c; } }\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .wrapper {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 25% 25% 25% 25%;\n    grid-template-columns: 25% 25% 25% 25%;\n    -ms-grid-rows: 100px auto 80px;\n    grid-template-rows: 100px auto 80px;\n    height: 600px;\n    color: white; }\n  header {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 4;\n    grid-column: 1 / 5;\n    -ms-grid-row: 1;\n    grid-row: 1; }\n    header nav {\n      height: 100px;\n      width: 80px;\n      height: 80px;\n      font-size: 1.2em;\n      color: #e6b842;\n      z-index: 10;\n      position: fixed; }\n    header #toggle {\n      display: inline-block;\n      cursor: pointer;\n      width: 35px;\n      height: 35px;\n      -webkit-transform: translate(20px, 35px);\n      -ms-transform: translate(20px, 35px);\n      transform: translate(20px, 35px);\n      position: fixed;\n      z-index: 1; }\n      header #toggle .header__left--bar1 {\n        width: 35px;\n        height: 5px;\n        background-color: #e6b842;\n        margin: 6px 0;\n        -webkit-transition: all 0.5s;\n        -o-transition: all 0.5s;\n        transition: all 0.5s;\n        z-index: 1;\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: -15px; }\n      header #toggle .header__left--bar2 {\n        width: 35px;\n        height: 5px;\n        background-color: #e6b842;\n        margin: 6px 0;\n        -webkit-transition: all 0.5s;\n        -o-transition: all 0.5s;\n        transition: all 0.5s;\n        z-index: 1;\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: -5px; }\n      header #toggle .header__left--bar3 {\n        width: 35px;\n        height: 5px;\n        background-color: #e6b842;\n        margin: 6px 0;\n        -webkit-transition: all 0.5s;\n        -o-transition: all 0.5s;\n        transition: all 0.5s;\n        z-index: 1;\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: 5px; }\n    header .change--bar1 {\n      -webkit-transform: rotate(-45deg) translate(-8px, 6px);\n      -ms-transform: rotate(-45deg) translate(-8px, 6px);\n      transform: rotate(-45deg) translate(-8px, 6px); }\n    header .change--bar2 {\n      opacity: 0; }\n    header .change--bar3 {\n      -webkit-transform: rotate(45deg) translate(-7px, -8px);\n      -ms-transform: rotate(45deg) translate(-7px, -8px);\n      transform: rotate(45deg) translate(-7px, -8px); }\n    header .header__menu {\n      top: 0;\n      left: 0;\n      color: #e6b842;\n      width: 100%;\n      height: 100%;\n      margin: auto;\n      text-align: left;\n      background-color: #679a9c;\n      -webkit-box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n      visibility: hidden;\n      z-index: 2;\n      position: fixed;\n      -ms-grid-row-align: center;\n      align-self: center;\n      justify-items: center;\n      display: -ms-grid;\n      display: grid; }\n      header .header__menu a {\n        font-size: 2em;\n        text-decoration: none;\n        color: #679a9c; }\n      header .header__menu a:focus,\n      header .header__menu a:hover {\n        color: #e6b842; }\n      header .header__menu .header__menu--logo {\n        margin: 60px 0 20px 0;\n        font-size: 1.5em; }\n      header .header__menu .header__menu--form input {\n        display: block;\n        width: 280px;\n        height: 50px;\n        margin-bottom: 10px;\n        color: #e6b842;\n        font-style: italic;\n        padding-left: 20px; }\n      header .header__menu .header__menu--form textarea {\n        display: block;\n        width: 280px;\n        height: 250px;\n        font-style: italic;\n        padding: 20px 0 0 20px; }\n      header .header__menu .header__menu--form button {\n        margin-top: 20px;\n        width: 280px;\n        height: 50px;\n        background-color: #e6b842;\n        border: none;\n        color: #679a9c;\n        font-weight: bold;\n        font-size: 1.1em; }\n  section {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-column: 1 / 3;\n    -ms-grid-row: 2;\n    grid-row: 2; }\n    section p {\n      color: white;\n      letter-spacing: 0.15em;\n      font-size: 1.1em;\n      margin: 10px 0 0 10px;\n      white-space: nowrap;\n      overflow: hidden;\n      width: 40em;\n      -webkit-animation: type 4s steps(60, end);\n      animation: type 4s steps(60, end); }\n    section p:nth-child(2) {\n      -webkit-animation: type2 8s steps(60, end);\n      animation: type2 8s steps(60, end); }\n    section p:nth-child(3) {\n      -webkit-animation: type3 16s steps(60, end);\n      animation: type3 16s steps(60, end); }\n    section p:nth-child(4) {\n      -webkit-animation: type4 30s steps(60, end);\n      animation: type4 30s steps(60, end); }\n    section span {\n      -webkit-animation: blink 1s infinite;\n      animation: blink 1s infinite; }\n  @-webkit-keyframes type {\n    from {\n      width: 0; } }\n  @keyframes type {\n    from {\n      width: 0; } }\n  @-webkit-keyframes type2 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @keyframes type2 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @-webkit-keyframes type3 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @keyframes type3 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @-webkit-keyframes type4 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @keyframes type4 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @-webkit-keyframes blink {\n    to {\n      opacity: .0; } }\n  @keyframes blink {\n    to {\n      opacity: .0; } }\n  aside {\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 2;\n    grid-column: 3 / 5;\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 2;\n    grid-row: 2 / 4; }\n    aside img {\n      width: 50%;\n      position: relative;\n      top: 30%;\n      left: 10%;\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n  footer {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-column: 1 / 3;\n    -ms-grid-row: 3;\n    grid-row: 3;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center;\n    -ms-grid-column-align: center;\n    justify-self: center; }\n    footer a {\n      margin: 0 0 0 25px;\n      text-decoration: none; }\n    footer .footer__name {\n      margin-top: 10px; }\n      footer .footer__name a {\n        margin: 0 0 0 0;\n        font-family: 'Special Elite';\n        text-decoration: none;\n        font-size: 1.2em; }\n      footer .footer__name a:hover {\n        color: #679a9c; } }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {\n  .wrapper {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 100%;\n    grid-template-columns: 100%;\n    -ms-grid-rows: 10% 20% auto 10%;\n    grid-template-rows: 10% 20% auto 10%;\n    height: 620px;\n    color: white; }\n  header {\n    -ms-grid-column: 1;\n    grid-column: 1;\n    -ms-grid-row: 1;\n    grid-row: 1; }\n    header nav {\n      height: 100px;\n      width: 70px;\n      height: 70px;\n      font-size: 1em;\n      color: #e6b842;\n      z-index: 10;\n      position: fixed; }\n    header #toggle {\n      display: inline-block;\n      cursor: pointer;\n      width: 35px;\n      height: 35px;\n      -webkit-transform: translate(20px, 35px);\n      -ms-transform: translate(20px, 35px);\n      transform: translate(20px, 35px);\n      position: fixed;\n      z-index: 1; }\n      header #toggle .header__left--bar1 {\n        width: 35px;\n        height: 5px;\n        background-color: #e6b842;\n        margin: 6px 0;\n        -webkit-transition: all 0.5s;\n        -o-transition: all 0.5s;\n        transition: all 0.5s;\n        z-index: 1;\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: -15px; }\n      header #toggle .header__left--bar2 {\n        width: 35px;\n        height: 5px;\n        background-color: #e6b842;\n        margin: 6px 0;\n        -webkit-transition: all 0.5s;\n        -o-transition: all 0.5s;\n        transition: all 0.5s;\n        z-index: 1;\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: -5px; }\n      header #toggle .header__left--bar3 {\n        width: 35px;\n        height: 5px;\n        background-color: #e6b842;\n        margin: 6px 0;\n        -webkit-transition: all 0.5s;\n        -o-transition: all 0.5s;\n        transition: all 0.5s;\n        z-index: 1;\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: 5px; }\n    header .change--bar1 {\n      -webkit-transform: rotate(-45deg) translate(-8px, 6px);\n      -ms-transform: rotate(-45deg) translate(-8px, 6px);\n      transform: rotate(-45deg) translate(-8px, 6px); }\n    header .change--bar2 {\n      opacity: 0; }\n    header .change--bar3 {\n      -webkit-transform: rotate(45deg) translate(-7px, -8px);\n      -ms-transform: rotate(45deg) translate(-7px, -8px);\n      transform: rotate(45deg) translate(-7px, -8px); }\n    header .header__menu {\n      top: 0;\n      left: 0;\n      color: #e6b842;\n      width: 100%;\n      height: 100%;\n      margin: 0 auto;\n      text-align: left;\n      background-color: #679a9c;\n      -webkit-box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n      visibility: hidden;\n      z-index: 2;\n      position: fixed;\n      -ms-grid-row-align: center;\n      align-self: center;\n      justify-items: center;\n      display: -ms-grid;\n      display: grid; }\n      header .header__menu a {\n        font-size: 2rem;\n        text-decoration: none;\n        color: #679a9c; }\n      header .header__menu a:focus,\n      header .header__menu a:hover {\n        color: #e6b842; }\n      header .header__menu .header__menu--logo {\n        margin: 60px 0 20px 0;\n        font-size: 1.5em; }\n      header .header__menu .header__menu--form input {\n        display: block;\n        width: 280px;\n        height: 50px;\n        margin-bottom: 10px;\n        color: #e6b842;\n        font-style: italic;\n        padding-left: 20px; }\n      header .header__menu .header__menu--form textarea {\n        display: block;\n        width: 280px;\n        height: 250px;\n        font-style: italic;\n        padding: 20px 0 0 20px; }\n      header .header__menu .header__menu--form button {\n        margin-top: 20px;\n        width: 280px;\n        height: 50px;\n        background-color: #e6b842;\n        border: none;\n        color: #679a9c;\n        font-weight: bold;\n        font-size: 1.1em; }\n  section {\n    -ms-grid-column: 1;\n    grid-column: 1;\n    -ms-grid-row: 2;\n    grid-row: 2; }\n    section p {\n      color: white;\n      letter-spacing: 0.15em;\n      font-size: 0.6em;\n      margin: 10px 0 0 10px;\n      white-space: nowrap;\n      overflow: hidden;\n      width: 33em;\n      -webkit-animation: type 4s steps(60, end);\n      animation: type 4s steps(60, end); }\n    section p:nth-child(2) {\n      -webkit-animation: type2 8s steps(60, end);\n      animation: type2 8s steps(60, end); }\n    section p:nth-child(3) {\n      -webkit-animation: type3 16s steps(60, end);\n      animation: type3 16s steps(60, end); }\n    section p:nth-child(4) {\n      -webkit-animation: type4 30s steps(60, end);\n      animation: type4 30s steps(60, end); }\n    section span {\n      -webkit-animation: blink 1s infinite;\n      animation: blink 1s infinite; }\n  @-webkit-keyframes type {\n    from {\n      width: 0; } }\n  @keyframes type {\n    from {\n      width: 0; } }\n  @-webkit-keyframes type2 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @keyframes type2 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @-webkit-keyframes type3 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @keyframes type3 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @-webkit-keyframes type4 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @keyframes type4 {\n    0% {\n      width: 0; }\n    50% {\n      width: 0; }\n    100% {\n      width: 100; } }\n  @-webkit-keyframes blink {\n    to {\n      opacity: .0; } }\n  @keyframes blink {\n    to {\n      opacity: .0; } }\n  aside {\n    -ms-grid-column: 1;\n    grid-column: 1;\n    -ms-grid-row: 3;\n    grid-row: 3; }\n    aside img {\n      width: 50%;\n      position: relative;\n      left: 30%;\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n  footer {\n    -ms-grid-column: 1;\n    grid-column: 1;\n    -ms-grid-row: 4;\n    grid-row: 4;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center;\n    -ms-grid-column-align: center;\n    justify-self: center;\n    font-size: 1em; }\n    footer a {\n      margin: 0 0 0 20px;\n      text-decoration: none; }\n    footer .footer__name {\n      margin-top: 10px;\n      font-size: 1em; }\n      footer .footer__name a {\n        margin: 0 0 0 0;\n        font-family: 'Special Elite';\n        text-decoration: none; }\n      footer .footer__name a:hover {\n        color: #679a9c; } }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);