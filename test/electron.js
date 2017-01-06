import test from 'ava'
import {Application} from 'spectron'

let app

test.before(async () => {
  app = new Application({
    path: './node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron',
    args: ['./src/js/app.js']
  })

  await app.start()
})

test.after(async () => {
  await app.stop()
})

test('check window count', async t => {
  t.is(await app.client.waitUntilWindowLoaded().getWindowCount(), 1)
})

test('check window size', async t => {
  app.client.waitUntilWindowLoaded().browserWindow.getBounds().then(bounds => {
    t.true(bounds.width > 0)
    t.true(bounds.height > 0)
  })
})

test('check window content', async t => {
  app.client.browserWindow.isVisible().then(() => {
    app.client.getText('#battery-health').then(text => {
      t.true(text === '')
    })
  })
})
