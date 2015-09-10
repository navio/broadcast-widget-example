"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Widget = require("./Widget");

var _Widget2 = _interopRequireDefault(_Widget);

var Bootstrap = function Bootstrap(broadcast) {
   _classCallCheck(this, Bootstrap);

   this.widget = new _Widget2["default"]("widget-skeleton", broadcast, respond);
   this.widget.subscribeWidget();
};

function respond(message) {
   console.log("Widget listened:" + message);
};

exports["default"] = Bootstrap;
module.exports = exports["default"];