# 💚💛❤️ healthi ⚡️

[![Build Status](https://travis-ci.org/pablopunk/healthi-app.svg?branch=master)](https://travis-ci.org/pablopunk/healthi-app)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

![img](https://raw.githubusercontent.com/pablopunk/healthi/master/img/biglogo.png)

##### Simple app to check your Mac Battery health.

_healthi_ shows a small icon in your topbar with the current battery health of your mac, which is the percentage of your battery capacity compared to the original one.

- **90% - 100%**: Battery is good
- **80% - 90%**:  Battery is ok but it should be replaced soon
- **0%  - 80%**:  Battery needs to be replaced

![shot](https://raw.githubusercontent.com/pablopunk/healthi/master/img/screenshot.gif)

### Download

Option | Download |
-------|----------|
[Homebrew Cask](https://caskroom.github.io) | `brew cask install healthi` |
Manual Download | [▼ Download the latest realease](https://github.com/pablopunk/healthi/releases/latest) |


### Run

```shell
npm install
npm run build
npm start
```


### Distribution

```shell
npm run pack # creates the .app inside dist/healthi-darwin-x64
```

### Technologies

The app is written in html/css/js and it's built in [electron](http://electron.atom.io).

To use electron for creating a topbar app, I use [menubar](https://github.com/maxogden/menubar)

To retrieve the battery data I use the [healthi npm module](https://github.com/pablopunk/healthi.js)

### Contribute

Feel free to fork the repo and make a pull request. [Here's a list](https://github.com/pablopunk/healthi/issues?q=is%3Aissue+is%3Aopen+label%3Abeginner) of issues for beginners.

The only requirement is that you follow [XO code style](https://github.com/sindresorhus/xo) defined in `package.json`.

You can run `npm test` to make sure your code follows these rules and that the app runs without errors 😉.
