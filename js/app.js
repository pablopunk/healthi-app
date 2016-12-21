var menubar = require('menubar')
var mb = menubar({
  width: 200,
  height: 90,
  icon: __dirname+"/../img/topbarTemplate.png",
  dir: 'html'
})

mb.on('ready', function ready() {
	console.log('app is ready')
})
