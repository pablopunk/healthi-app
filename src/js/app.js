const path = require('path')
const {globalShortcut} = require('electron')
const menubar = require('menubar')

const mb = menubar({
  width: 200,
  height: 90,
  icon: path.join(__dirname, '/../../img/topbarTemplate.png'),
  dir: path.join(__dirname, '..'),
  showDockIcon: true
})

mb.on('ready', () => {
  console.log('app is ready')
  mb.showWindow()
  mb.app.dock.hide()
  globalShortcut.register('CommandOrControl+Alt+I', () => {
    mb.window.toggleDevTools()
  })
})

