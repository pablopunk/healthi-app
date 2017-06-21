'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Buttons extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      { id: 'buttons' },
      _react2.default.createElement(
        'div',
        { className: 'button', onClick: () => this.props.app.quit() },
        _react2.default.createElement('img', { src: './img/close.svg', width: '20px' })
      )
    );
  }
}
exports.default = Buttons;