'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _reactAnimatedNumber = require('react-animated-number')

var _reactAnimatedNumber2 = _interopRequireDefault(_reactAnimatedNumber)

var _reactFade = require('react-fade')

var _reactFade2 = _interopRequireDefault(_reactFade)

var _healthi = require('healthi')

var _healthi2 = _interopRequireDefault(_healthi)

var _betterReactSpinkit = require('better-react-spinkit')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

const animationTime = 1

const battery = {
  good: {
    message: 'Good condition',
    color: '#16a085'
  },
  medium: {
    message: 'Moderate condition',
    color: '#e67e22'
  },
  bad: {
    message: 'Poor condition',
    color: '#e74c3c'
  }
}

const animatedStyle = {
  transition: `${animationTime}s ease-out`,
  transitionProperty: 'opacity'
}

class Status extends _react2.default.Component {
  constructor (props) {
    super(props)
    this.state = { health: undefined }
  }

  componentDidMount () {
    (0, _healthi2.default)().then(({ health }) => {
      let batteryStatus
      if (health > 80) {
        batteryStatus = 'good'
      } else if (health < 80 && health >= 50) {
        batteryStatus = 'medium'
      } else {
        batteryStatus = 'bad'
      }
      this.setState({
        health: batteryStatus,
        percentage: health
      })
    })
  }

  render () {
    if (this.state.health === undefined) {
      return _react2.default.createElement(
        'div',
        { id: 'status' },
        _react2.default.createElement(_betterReactSpinkit.ThreeBounce, { gutter: 10, color: 'white' })
      )
    }
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        {
          id: 'status',
          style: { backgroundColor: battery[this.state.health].color } },
        _react2.default.createElement(
          _reactFade2.default,
          { id: 'battery-health', duration: animationTime },
          _react2.default.createElement(_reactAnimatedNumber2.default, {
            component: 'text',
            value: Math.floor(this.state.percentage),
            style: animatedStyle,
            duration: animationTime * 1000,
            formatValue: n => n + '%',
            stepPrecision: 0
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { id: 'battery-message' },
        _react2.default.createElement(
          _reactFade2.default,
          { duration: animationTime },
          battery[this.state.health].message
        )
      )
    )
  }
}
exports.default = Status
