import path from 'path'
import menubar from 'menubar'

const indexPath = path.join(__dirname, '..')
const indexURL = 'file://' + indexPath + '/index.html'

const mb = menubar({
  width: 200,
  height: 88,
  icon: path.join(__dirname, '..', '..', 'img', 'topbarTemplate.png'),
  dir: indexPath,
  showDockIcon: true
})

mb.on('ready', () => {
  console.log('app is ready')
  mb.showWindow()
  mb.app.dock.hide()
})

mb.on('after-hide', () => {
  console.log('window hidden')
  mb.window.loadURL(indexURL)
})
