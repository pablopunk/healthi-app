'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _electron = require('electron');

var _menubar = require('menubar');

var _menubar2 = _interopRequireDefault(_menubar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexPath = _path2.default.join(__dirname, '..');
var indexURL = 'file://' + indexPath + '/index.html';

var mb = (0, _menubar2.default)({
  width: 200,
  height: 90,
  icon: _path2.default.join(__dirname, '..', '..', 'img', 'topbarTemplate.png'),
  dir: indexPath,
  showDockIcon: true
});

mb.on('ready', function () {
  console.log('app is ready');
  mb.showWindow();
  mb.app.dock.hide();
  _electron.globalShortcut.register('CommandOrControl+Alt+I', function () {
    mb.window.toggleDevTools();
  });
});

mb.on('after-hide', function () {
  console.log('window hidden');
  mb.window.loadURL(indexURL);
});