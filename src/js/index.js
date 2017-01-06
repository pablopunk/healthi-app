const exec = require('child_process').exec

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
  exec('ioreg -l | grep Capacity | cut -d\' \' -f19', (error, stdout) => {
    if (error !== null) {
      console.log('exec error: ' + error)
    }

    const lines = stdout.match(/[^\r\n]+/g)
    const capacityNow = parseInt(lines[0], 10)
    const capacityOriginal = parseInt(lines[3], 10)
    const health = (capacityNow * 100) / capacityOriginal
    updateBattery(health)
  })
}

module.exports = main
