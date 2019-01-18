/* global alert */
const battery = require('healthi')

const gradients = {
  100: {
    from: '#452981',
    to: '#7239b3'
  },
  80: {
    from: '#f37329',
    to: '#cc3b02'
  },
  50: {
    from: '#a10705',
    to: '#7a0000'
  }
}

const setGradient = ({ from, to }) => {
  const main = document.querySelector('main')
  main.style.backgroundImage = `linear-gradient(to right, ${from}, ${to})`
}

const updateUi = (n) => {
  const el = document.querySelector('#health')
  if (n < 50) {
    setGradient(gradients[50])
  } else if (n < 80) {
    setGradient(gradients[80])
  } else {
    setGradient(gradients[100])
  }
  el.innerText = n + '%'
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
