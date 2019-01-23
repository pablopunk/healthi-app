const { app, BrowserWindow } = require('electron')

const DEV = process.env.NODE_ENV === 'development'

if (DEV) {
  require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/../node_modules/electron`)
  })
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 200,
    height: 80,
    frame: false,
    icon: `${__dirname}/res/icon_512px.png`
  })
  win.loadFile('src/index.html')
  if (DEV) {
    win.webContents.openDevTools({ mode: 'detach' })
  }
}

app.on('ready', createWindow)
app.on('window-all-closed', app.quit)
