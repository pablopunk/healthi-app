'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _reactFade = require('react-fade')

var _reactFade2 = _interopRequireDefault(_reactFade)

var _status = require('./status')

var _status2 = _interopRequireDefault(_status)

var _buttons = require('./buttons')

var _buttons2 = _interopRequireDefault(_buttons)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

class Content extends _react2.default.Component {
  constructor (props) {
    super(props)
    this.state = { mouseEnter: false }
  }
  render () {
    return _react2.default.createElement(
      'div',
      {
        onMouseEnter: () => this.setState({ mouseEnter: true }),
        onMouseLeave: () => this.setState({ mouseEnter: false })
      },
      this.state.mouseEnter && _react2.default.createElement(
        _reactFade2.default,
        { duration: 0.1 },
        _react2.default.createElement(_buttons2.default, null)
      ),
      _react2.default.createElement(_status2.default, null)
    )
  }
}
exports.default = Content
