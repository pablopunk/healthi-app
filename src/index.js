/* global alert */
const battery = require('healthi')
const {
  parseBatteryStatus
} = require('./health')

const setGradient = ({ from, to }) => {
  const main = document.querySelector('main')
  main.style.backgroundImage = `linear-gradient(to right, ${from}, ${to})`
}

const setMessage = (msg) => {
  document.querySelector('#message').innerText = msg
}

const updateUi = (n) => {
  const el = document.querySelector('#health')
  const uiState = parseBatteryStatus({ health: n })
  setGradient(uiState.gradient)
  setMessage(uiState.message)
  el.innerText = uiState.percentage
}

function listeners () {
  document.querySelector('svg.close').addEventListener('click', () => window.close())
}

function init () {
  listeners()
  battery()
    .then(({ health }) => updateUi(health))
    .catch(err => alert(err.message))
}

init()
