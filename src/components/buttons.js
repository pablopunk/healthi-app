import React from 'react'

export default class Buttons extends React.Component {
  render () {
    return (
      <div id='buttons'>
        <div className='button' onClick={() => this.props.app.quit()}>
          <img src='./img/close.svg' width='20px' />
        </div>
      </div>
    )
  }
}
