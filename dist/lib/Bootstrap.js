"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Widget = require("./Widget");

var _Widget2 = _interopRequireDefault(_Widget);

var Bootstrap = (function () {
  function Bootstrap(broadcast) {
    _classCallCheck(this, Bootstrap);

    var name = "widget-skeleton";
    this.widget = new _Widget2["default"](name, broadcast, this.handler);
    this.widget.subscribeWidget();
  }

  _createClass(Bootstrap, [{
    key: "getMainWidget",
    value: function getMainWidget() {
      return this.widget;
    }
  }, {
    key: "handler",
    value: function handler(message) {
      console.log("Widget default listened: " + message);
    }
  }]);

  return Bootstrap;
})();

exports["default"] = Bootstrap;
module.exports = exports["default"];