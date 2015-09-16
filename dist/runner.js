"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _broadcastjs = require("broadcastjs");

var _broadcastjs2 = _interopRequireDefault(_broadcastjs);

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

var Runner = function Runner(amount) {
  _classCallCheck(this, Runner);

  var dispatch = new _broadcastjs2["default"]();
  var boot = new _index2["default"](dispatch);
  var counter = 0;
  var play = function play() {
    counter++;
    if (counter >= amount) clearInterval(interval);
    dispatch.pushMessage(counter);
  };

  var interval = setInterval(function () {
    play();
  }, 10);
};

var run = new Runner(50);