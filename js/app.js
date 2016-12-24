const path = require('path')
const menubar = require('menubar')

const mb = menubar({
  width: 200,
  height: 90,
  icon: path.join(__dirname, '/../img/topbarTemplate.png'),
  dir: path.join(__dirname, '../html')
})

mb.on('ready', () => {
  console.log('app is ready')
  mb.showWindow()
})
