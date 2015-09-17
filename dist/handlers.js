/*
  Handlers based on timestamps
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Handlers = {
  "10.00": function _() {
    console.log("Ten!");
  },

  "20.00": function _() {
    console.log("Twenty!");
  },

  "30.00": function _() {
    console.log("Thirty!");
  }
};

exports["default"] = Handlers;
module.exports = exports["default"];