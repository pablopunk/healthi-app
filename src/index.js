import ReactDOM from 'react-dom'
import React from 'react'
import electron from 'electron'
import Content from '~/components/content'

const app = electron.remote.app

ReactDOM.render(
  <Content app={app} />,
  document.getElementById('content')
)
