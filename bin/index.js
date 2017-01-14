'use strict';

var _healthi = require('healthi');

var _healthi2 = _interopRequireDefault(_healthi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var message = {
  replace: 'Replace battery :(',
  soon: 'Replace battery soon',
  good: 'Your battery is OK :)'
};

var color = {
  replace: {
    body: '#DA4453',
    battery: '#ED5565'
  },
  soon: {
    body: '#F6BB42',
    battery: '#FFCE54'
  },
  good: {
    body: '#37BC9B',
    battery: '#48CFAD'
  }
};

var getColor = function getColor(percentage) {
  if (percentage >= 90) {
    return color.good;
  }
  if (percentage >= 80) {
    return color.soon;
  }
  return color.replace;
};

var updateBattery = function updateBattery(percentage) {
  percentage = percentage.toFixed(0);
  var batteryColor = getColor(percentage).battery;
  var bodyColor = getColor(percentage).body;
  changeBodyColor(bodyColor);
  changeBatteryColor(batteryColor);
  changeBatteryPercentage(percentage);
  changeBatteryMessage(batteryColor);
};

var changeBodyColor = function changeBodyColor(backgroundColor) {
  document.body.style.backgroundColor = backgroundColor;
};

var changeBatteryColor = function changeBatteryColor(batteryColor) {
  document.getElementById('battery-color').style.backgroundColor = batteryColor;
};

var changeBatteryPercentage = function changeBatteryPercentage(percentage) {
  document.getElementById('battery-health').innerHTML = percentage + '%';
  document.getElementById('battery-color').style.width = percentage + '%';
};

var changeBatteryMessage = function changeBatteryMessage(batteryColor) {
  var newMessage = void 0;
  if (batteryColor === color.good.battery) {
    newMessage = message.good;
  } else if (batteryColor === color.soon.battery) {
    newMessage = message.soon;
  } else if (batteryColor === color.replace.battery) {
    newMessage = message.replace;
  }
  document.getElementById('message').innerHTML = newMessage;
};

var main = function main() {
  (0, _healthi2.default)(function (battery) {
    updateBattery(battery.health);
  });
};

module.exports = main;