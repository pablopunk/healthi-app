import test from 'ava'
import {Application} from 'spectron'

test.beforeEach(t => {
  t.context.app = new Application({
    path: './node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron',
    args: ['./static/js/app.js']
  })

  return t.context.app.start()
})

test.afterEach(t => t.context.app.stop())

test('Test basic window stuff', t => {
  return t.context.app.client.waitUntilWindowLoaded()
    .getWindowCount().then(count => t.is(count, 1))
    .browserWindow.isMinimized().then(min => t.false(min))
    .browserWindow.isDevToolsOpened().then(opened => t.false(opened))
    .browserWindow.isVisible().then(visible => t.true(visible))
    .browserWindow.isFocused().then(focused => t.true(focused))
    .browserWindow.isFocused().then(focused => t.true(focused))
    .browserWindow.getBounds().then(bounds => {
      t.true(bounds.width === 200)
      t.true(bounds.height === 88)
    })
})
