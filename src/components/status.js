import React from 'react'
import AnimatedNumber from 'react-animated-number'
import Fade from 'react-fade'
import health from 'healthi'
import {ThreeBounce} from 'better-react-spinkit'

const animationTime = 1

const battery = {
  good: {
    message: 'Good Condition',
    color: '#16a085'
  },
  medium: {
    message: 'Moderate Condition',
    color: '#e67e22'
  },
  bad: {
    message: 'Poor Condition',
    color: '#e74c3c'
  }
}

const animatedStyle = {
  transition: `${animationTime}s ease-out`,
  transitionProperty: 'opacity'
}

export default class Status extends React.Component {
  constructor (props) {
    super(props)
    this.state = {health: undefined}
  }

  componentDidMount () {
    health(battery => {
      let batteryStatus
      if (battery.health > 80) {
        batteryStatus = 'good'
      } else if (battery.health <= 80 && battery.health > 50) {
        batteryStatus = 'medium'
      } else {
        batteryStatus = 'bad'
      }
      this.setState({
        health: batteryStatus,
        percentage: battery.health
      })
    })
  }

  render () {
    if (this.state.health === undefined) {
      return (
        <div id='status'>
          <ThreeBounce gutter={10} color='white' />
        </div>
      )
    }
    return (
      <div>
        <div
          id='status'
          style={{backgroundColor: battery[this.state.health].color}}
          >
          <Fade id='battery-health' duration={animationTime}>
            <AnimatedNumber
              component='text'
              value={Math.floor(this.state.percentage)}
              style={animatedStyle}
              duration={animationTime * 1000}
              formatValue={n => n + '%'}
              stepPrecision={0}
              />
          </Fade>
        </div>
        <div id='battery-message'>
          <Fade duration={animationTime}>
            {battery[this.state.health].message}
          </Fade>
        </div>
      </div>
    )
  }
}
