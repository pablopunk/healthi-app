const exec = require('child_process').exec

const message = {
  replace: 'Replace battery :(',
  soon: 'Replace battery soon',
  good: 'Your battery is OK :)'
}

const bodyColor = {
  replace: '#DA4453',
  soon: '#F6BB42',
  good: '#37BC9B'
}

const loadColor = {
  replace: '#ED5565',
  soon: '#FFCE54',
  good: '#48CFAD'
}

function getColor(percentage, body = false) {
  if (percentage >= 90) {
    return body ? bodyColor.good : loadColor.good
  }
  if (percentage >= 80) {
    return body ? bodyColor.soon : loadColor.soon
  }
  return body ? bodyColor.replace : loadColor.replace
}

function updateBattery(percentage) {
  percentage = percentage.toFixed(0)
  document.getElementById('battery-health').innerHTML = percentage + '%'
  const lColor = getColor(percentage)
  const bColor = getColor(percentage, true)
  document.body.style.backgroundColor = bColor
  document.getElementById('battery-color').style.backgroundColor = lColor
  document.getElementById('battery-color').style.width = percentage + '%'
  if (lColor === loadColor.good) {
    document.getElementById('message').innerHTML = message.good
  } else if (lColor === loadColor.soon) {
    document.getElementById('message').innerHTML = message.soon
  } else if (lColor === loadColor.replace) {
    document.getElementById('message').innerHTML = message.replace
  }
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
