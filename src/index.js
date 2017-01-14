import health from 'healthi'

const message = {
  replace: 'Replace battery :(',
  soon: 'Replace battery soon',
  good: 'Your battery is OK :)'
}

const color = {
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
}

function getColor(percentage) {
  if (percentage >= 90) {
    return color.good
  }
  if (percentage >= 80) {
    return color.soon
  }
  return color.replace
}

function updateBattery(percentage) {
  percentage = percentage.toFixed(0)
  const batteryColor = getColor(percentage).battery
  const bodyColor = getColor(percentage).body
  changeBodyColor(bodyColor)
  changeBatteryColor(batteryColor)
  changeBatteryPercentage(percentage)
  changeBatteryMessage(batteryColor)
}

function changeBodyColor(backgroundColor) {
  document.body.style.backgroundColor = backgroundColor
}

function changeBatteryColor(batteryColor) {
  document.getElementById('battery-color').style.backgroundColor = batteryColor
}

function changeBatteryPercentage(percentage) {
  document.getElementById('battery-health').innerHTML = percentage + '%'
  document.getElementById('battery-color').style.width = percentage + '%'
}

function changeBatteryMessage(batteryColor) {
  let newMessage
  if (batteryColor === color.good.battery) {
    newMessage = message.good
  } else if (batteryColor === color.soon.battery) {
    newMessage = message.soon
  } else if (batteryColor === color.replace.battery) {
    newMessage = message.replace
  }
  document.getElementById('message').innerHTML = newMessage
}

function main() {
  health(battery => {
    updateBattery(battery.health)
  })
}

module.exports = main
