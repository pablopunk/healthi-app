'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = _electron2.default.remote.app;

class Buttons extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      { id: 'buttons' },
      _react2.default.createElement(
        'div',
        { className: 'button', onClick: () => app.quit() },
        _react2.default.createElement('i', { className: 'fa fa-times', 'aria-hidden': 'true' })
      )
    );
  }
}
exports.default = Buttons;