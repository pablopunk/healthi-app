//
// Notice: I'm using AnimatedNumber for animating
// both the numbers and the text. This is a workaround
// for componentDidMount() not animating properly
//

import AnimatedNumber from 'react-animated-number'
import React from 'react'

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
  render() {
    let batteryStatus = ''

    if (this.props.percentage < 80) {
      batteryStatus = 'replace'
    } else if (this.props.percentage < 90) {
      batteryStatus = 'soon'
    } else {
      batteryStatus = 'good'
    }

    return (
      <div
        id="status"
        style={{backgroundColor: battery[batteryStatus].color}}
        >
        <div id="battery-health">
          <AnimatedNumber
            component="text" value={Math.floor(this.props.percentage)}
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
            component="text" value={Math.floor(this.props.percentage)}
            style={animatedStyle}
            frameStyle={perc => (
              perc ? {opacity: perc / 100} : {opacity: 0}
            )}
            duration={1000}
            formatValue={() => battery[batteryStatus].message}
            />
        </div>
      </div>
    )
  }
}
