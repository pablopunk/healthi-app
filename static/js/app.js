'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _menubar = require('menubar');

var _menubar2 = _interopRequireDefault(_menubar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexPath = _path2.default.join(__dirname, '..');
const indexURL = 'file://' + indexPath + '/index.html';

const mb = (0, _menubar2.default)({
  width: 200,
  height: 88,
  icon: _path2.default.join(__dirname, '..', '..', 'img', 'topbarTemplate.png'),
  dir: indexPath,
  showDockIcon: true
});

mb.on('ready', () => {
  console.log('app is ready');
  mb.showWindow();
  mb.app.dock.hide();
});

mb.on('after-hide', () => {
  console.log('window hidden');
  mb.window.loadURL(indexURL);
});