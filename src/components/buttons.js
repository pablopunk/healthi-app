
import electron from 'electron'
import React from 'react'

const app = electron.remote.app

export default class Buttons extends React.Component {
  render () {
    return (
      <div id='buttons'>
        <div className='button' onClick={() => app.quit()}><i className='fa fa-times' aria-hidden='true' /></div>
      </div>
    )
  }
}
