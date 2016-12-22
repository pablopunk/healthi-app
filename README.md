# :green_heart::yellow_heart::heart: healthi :battery:

[![Build Status](https://travis-ci.org/pablopunk/healthi.svg?branch=master)](https://travis-ci.org/pablopunk/healthi)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

![img](https://raw.githubusercontent.com/pablopunk/healthi/master/img/biglogo.png)

##### Simple app to check your Mac Battery health.

_healthi_ shows a small icon in your topbar with the current battery health of your mac, which is the percentage of your battery capacity compared to the original one.

- **90% - 100%**: Battery is good
- **80% - 90%**:  Battery is ok but it should be replaced soon
- **0%  - 80%**:  Battery needs to be replaced

![shot](https://raw.githubusercontent.com/pablopunk/healthi/master/img/screenshot.gif)

### Download

There are two options to install this app:

1. Without Homebrew:

    Check the [realeases page](https://github.com/pablopunk/healthi/releases) for binaries.

2. With Homebrew:

    If you have [Homebrew](http://brew.sh/index_es.html) with the [Cask](https://caskroom.github.io/) extension, it's as simple as running:

    ```shell
    brew cask install healthi
    ```

### Run

```shell
npm install
npm start
```

### Build

```shell
npm install -g electron-packager
npm run build
```
