'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helloWorld = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fp = require('lodash/fp');

var _fp2 = _interopRequireDefault(_fp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helloWorld = function helloWorld() {
  var myArray = ['world', 'library', 'pet project'];

  var listItem = function listItem(item) {
    return _react2.default.createElement(
      'li',
      { key: item },
      item
    );
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Hello!'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _fp2.default.map(listItem, myArray)
    )
  );
};

exports.helloWorld = helloWorld;