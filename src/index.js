/* global alert */
const battery = require('healthi')

const GOOD = 100
const MID = 80
const BAD = 50

const messages = {
  [GOOD]: 'Looking good',
  [MID]: 'It could be better',
  [BAD]: 'Poor condition'
}

const gradients = {
  [GOOD]: { from: '#452981', to: '#7239b3' },
  [MID]: { from: '#f37329', to: '#cc3b02' },
  [BAD]: { from: '#a10705', to: '#7a0000' }
}

const setGradient = ({ from, to }) => {
  const main = document.querySelector('main')
  main.style.backgroundImage = `linear-gradient(to right, ${from}, ${to})`
}

const setMessage = (msg) => {
  document.querySelector('#message').innerText = msg
}

const updateUi = (n) => {
  const el = document.querySelector('#health')
  if (n < BAD) {
    setGradient(gradients[BAD])
    setMessage(messages[BAD])
  } else if (n < MID) {
    setGradient(gradients[MID])
    setMessage(messages[MID])
  } else {
    setGradient(gradients[GOOD])
    setMessage(messages[GOOD])
  }
  el.innerText = parseInt(n) + '%'
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
