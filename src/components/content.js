import React from 'react'
import Fade from 'react-fade'
import Status from './status'
import Buttons from './buttons'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mouseEnter: false}
  }
  render() {
    return (
      <div
        onMouseEnter={() => this.setState({mouseEnter: true})}
        onMouseLeave={() => this.setState({mouseEnter: false})}
        >
        {this.state.mouseEnter &&
          <Fade duration={0.1}>
            <Buttons/>
          </Fade>
        }
        <Status/>
      </div>
    )
  }
}
