//
// Notice: I'm using AnimatedNumber for animating
// both the numbers and the text. This is a workaround
// for componentDidMount() not animating properly
//

import AnimatedNumber from 'react-animated-number'
import React from 'react'
import health from 'healthi'

const battery = {
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
}

const animatedStyle = {
  transition: '1s ease-out',
  transitionProperty: 'opacity'
}

export default class Status extends React.Component {
  constructor(props) {
    super(props)
    this.state = {health: undefined}
  }

  componentWillMount() {
    health(battery => {
      let batteryStatus
      if (battery.health < 80) {
        batteryStatus = 'replace'
      } else if (battery.health < 90) {
        batteryStatus = 'soon'
      } else {
        batteryStatus = 'good'
      }
      this.setState({
        health: batteryStatus,
        percentage: battery.health
      })
    })
  }

  render() {
    if (this.state.health === undefined) {
      return (
        <div id="status">
          <i className="fa fa-spinner fa-spin"/>
        </div>
      )
    }
    return (
      <div
        id="status"
        style={{backgroundColor: battery[this.state.health].color}}
        >
        <div id="battery-health">
          <AnimatedNumber
            component="text" value={Math.floor(this.state.percentage)}
            style={animatedStyle}
            frameStyle={perc => (
              perc ? {opacity: perc / 100} : {opacity: 0}
            )}
            duration={1000}
            formatValue={n => n + '%'}
            stepPrecision={0}
            />
        </div>
        <div id="battery-message">
          <AnimatedNumber
            component="text" value={Math.floor(this.state.percentage)}
            style={animatedStyle}
            frameStyle={perc => (
              perc ? {opacity: perc / 100} : {opacity: 0}
            )}
            duration={1000}
            formatValue={() => battery[this.state.health].message}
            />
        </div>
      </div>
    )
  }
}
