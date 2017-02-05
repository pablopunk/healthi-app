# 💚💛❤️ healthi ⚡️

[![Build Status](https://travis-ci.org/pablopunk/healthi-app.svg?branch=master)](https://travis-ci.org/pablopunk/healthi-app)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

![img](https://raw.githubusercontent.com/pablopunk/healthi/master/img/biglogo.png)

##### Simple app to check your Mac Battery health.

![shot](https://github.com/pablopunk/art/raw/master/healthi/screenshot.gif)

_healthi_ shows a small icon in your topbar with the current battery health of your mac, which is the percentage of your battery capacity compared to the original one

![health](https://github.com/pablopunk/art/raw/master/healthi/health.png)

### download

You can install it with [Homebrew Cask](https://caskroom.github.io) `brew cask install healthi`

or

[▼ Download here](https://github.com/pablopunk/healthi/releases/latest)

### develop

```shell
npm install   # install dependencies
npm run build # build code with babel
npm start     # start app
npm run pack  # create .app inside dist
```
### how

_healthi_ is built with web technologies in [electron](http://electron.atom.io) and [menubar](https://github.com/maxogden/menubar)

To retrieve the battery data I use the [healthi npm module](https://github.com/pablopunk/healthi-js)

### contribute

Feel free to fork the repo and make a pull request. [Here's a list](https://github.com/pablopunk/healthi/issues?q=is%3Aissue+is%3Aopen+label%3Abeginner) of issues for beginners.

Special thanks to [the contributors](https://github.com/pablopunk/healthi-app/graphs/contributors)
