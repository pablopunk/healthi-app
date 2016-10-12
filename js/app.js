var menubar = require('menubar')
var mb = menubar({
    width: 140,
    height: 80
})

mb.on('ready', function ready() {
	console.log('app is ready')
})
