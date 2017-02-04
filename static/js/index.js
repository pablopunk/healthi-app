'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _healthi = require('healthi');

var _healthi2 = _interopRequireDefault(_healthi);

var _status = require('./../static/js/components/status');

var _status2 = _interopRequireDefault(_status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateHealth = function updateHealth(battery) {
  _reactDom2.default.render(_react2.default.createElement(_status2.default, { percentage: battery.health }), document.getElementById('status'));
};

(0, _healthi2.default)(updateHealth);