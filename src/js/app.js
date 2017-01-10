const path = require('path')
const {globalShortcut} = require('electron')
const menubar = require('menubar')

const indexPath = path.join(__dirname, '..')
const indexURL = 'file://' + indexPath + '/index.html'

const mb = menubar({
  width: 200,
  height: 90,
  icon: path.join(__dirname, '..', '..', 'img', 'topbarTemplate.png'),
  dir: indexPath,
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

mb.on('after-hide', () => {
  console.log('window hidden')
  mb.window.loadURL(indexURL)
})

