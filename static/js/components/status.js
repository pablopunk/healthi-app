'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactAnimatedNumber = require('react-animated-number');

var _reactAnimatedNumber2 = _interopRequireDefault(_reactAnimatedNumber);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //
// Notice: I'm using AnimatedNumber for animating
// both the numbers and the text. This is a workaround
// for componentDidMount() not animating properly
//

var battery = {
  good: {
    message: 'your battery is ok',
    color: '#16a085'
  },
  soon: {
    message: 'replace battery soon',
    color: '#e67e22'
  },
  replace: {
    message: 'replace battery :(',
    color: '#e74c3c'
  }
};

var animatedStyle = {
  transition: '1s ease-out',
  transitionProperty: 'opacity'
};

var Status = function (_React$Component) {
  _inherits(Status, _React$Component);

  function Status() {
    _classCallCheck(this, Status);

    return _possibleConstructorReturn(this, (Status.__proto__ || Object.getPrototypeOf(Status)).apply(this, arguments));
  }

  _createClass(Status, [{
    key: 'render',
    value: function render() {
      var batteryStatus = '';

      if (this.props.percentage < 80) {
        batteryStatus = 'replace';
      } else if (this.props.percentage < 90) {
        batteryStatus = 'soon';
      } else {
        batteryStatus = 'good';
      }

      return _react2.default.createElement(
        'div',
        {
          id: 'status',
          style: { backgroundColor: battery[batteryStatus].color }
        },
        _react2.default.createElement(
          'div',
          { id: 'battery-health' },
          _react2.default.createElement(_reactAnimatedNumber2.default, {
            component: 'text', value: Math.floor(this.props.percentage),
            style: animatedStyle,
            frameStyle: function frameStyle(perc) {
              return perc ? { opacity: perc / 100 } : { opacity: 0 };
            },
            duration: 1000,
            formatValue: function formatValue(n) {
              return n + '%';
            },
            stepPrecision: 0
          })
        ),
        _react2.default.createElement(
          'div',
          { id: 'battery-message' },
          _react2.default.createElement(_reactAnimatedNumber2.default, {
            component: 'text', value: Math.floor(this.props.percentage),
            style: animatedStyle,
            frameStyle: function frameStyle(perc) {
              return perc ? { opacity: perc / 100 } : { opacity: 0 };
            },
            duration: 1000,
            formatValue: function formatValue() {
              return battery[batteryStatus].message;
            }
          })
        )
      );
    }
  }]);

  return Status;
}(_react2.default.Component);

exports.default = Status;