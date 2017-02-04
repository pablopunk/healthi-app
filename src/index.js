import ReactDOM from 'react-dom'
import React from 'react'
import health from 'healthi'
import Status from '~/components/status'

const updateHealth = battery => {
  ReactDOM.render(
    <Status percentage={battery.health}/>,
    document.getElementById('status')
  )
}

health(updateHealth)
