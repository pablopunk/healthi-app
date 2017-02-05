'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAnimatedNumber = require('react-animated-number');

var _reactAnimatedNumber2 = _interopRequireDefault(_reactAnimatedNumber);

var _reactFade = require('react-fade');

var _reactFade2 = _interopRequireDefault(_reactFade);

var _healthi = require('healthi');

var _healthi2 = _interopRequireDefault(_healthi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var animationTime = 1;

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
  transition: animationTime + 's ease-out',
  transitionProperty: 'opacity'
};

var Status = function (_React$Component) {
  _inherits(Status, _React$Component);

  function Status(props) {
    _classCallCheck(this, Status);

    var _this = _possibleConstructorReturn(this, (Status.__proto__ || Object.getPrototypeOf(Status)).call(this, props));

    _this.state = { health: undefined };
    return _this;
  }

  _createClass(Status, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _healthi2.default)(function (battery) {
        var batteryStatus = void 0;
        if (battery.health < 80) {
          batteryStatus = 'replace';
        } else if (battery.health < 90) {
          batteryStatus = 'soon';
        } else {
          batteryStatus = 'good';
        }
        _this2.setState({
          health: batteryStatus,
          percentage: battery.health
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.health === undefined) {
        return _react2.default.createElement(
          'div',
          { id: 'status' },
          _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' })
        );
      }
      return _react2.default.createElement(
        'div',
        {
          id: 'status',
          style: { backgroundColor: battery[this.state.health].color }
        },
        _react2.default.createElement(
          _reactFade2.default,
          { id: 'battery-health', duration: animationTime },
          _react2.default.createElement(_reactAnimatedNumber2.default, {
            component: 'text', value: Math.floor(this.state.percentage),
            style: animatedStyle,
            duration: animationTime * 1000,
            formatValue: function formatValue(n) {
              return n + '%';
            },
            stepPrecision: 0
          })
        ),
        _react2.default.createElement(
          _reactFade2.default,
          { id: 'battery-message', duration: animationTime },
          battery[this.state.health].message
        )
      );
    }
  }]);

  return Status;
}(_react2.default.Component);

exports.default = Status;