var menubar = require('menubar')
var mb = menubar({
  width: 200,
  height: 80,
  icon: __dirname+"/../img/topbar.png"
})

mb.on('ready', function ready() {
	console.log('app is ready')
})
