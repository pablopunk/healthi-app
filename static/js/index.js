'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

var _content = require('./../static/js/components/content');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = _electron2.default.remote.app;

_reactDom2.default.render(_react2.default.createElement(_content2.default, { app: app }), document.getElementById('content'));