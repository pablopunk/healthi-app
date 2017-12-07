<p align="center">
	<img src="https://raw.githubusercontent.com/pablopunk/healthi/master/assets/biglogo.png" alt="Logo" />
	<a href="https://github.com/pablopunk/healthi-app#download"><img src="https://img.shields.io/github/downloads/pablopunk/healthi-app/total.svg" alt="Downloads" /></a>
	<a href="https://travis-ci.org/pablopunk/healthi-app"><img src="https://travis-ci.org/pablopunk/healthi-app.svg?branch=master" alt="Build Status" /></a>
	<a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Code Style" /></a>
	<p align="center">Simple app to check your Mac's Battery health.</p>
	<p align="center"><img src="https://github.com/pablopunk/art/raw/master/healthi/screenshot.gif" alt="screenshot" /></p>
</p>

_healthi_ shows a small icon in your topbar with the current battery health of your mac, which is the percentage of your battery capacity compared to the original one

![health](https://github.com/pablopunk/art/raw/master/healthi/health.png)

# download

You can install it with [Homebrew Cask](https://caskroom.github.io) `brew cask install healthi`

or

[▼ Download here](https://github.com/pablopunk/healthi/releases/latest)

# develop

```shell
npm install   # install dependencies
npm run build # build code with babel
npm start     # start app
npm run dist  # create .app inside dist/
```
# how

_healthi_ is built with web technologies in [electron](http://electron.atom.io) and [menubar](https://github.com/maxogden/menubar)

To retrieve the battery data I use the [healthi npm module](https://github.com/pablopunk/healthi-js)

# contribute

You can [open an issue][issues] to report any bug or improvement.

Also, you could fix/improve it yourself:

1. You can either have an idea to improve the app or search for [an issue][issues]
2. [Fork][fork] the repo
3. Code your changes and try them `npm start`
4. Run the tests `npm test`
5. Submit your [pull request][pr]

[issues]: https://github.com/pablopunk/healthi-app/issues
[fork]: https://help.github.com/articles/fork-a-repo/
[contributors]: https://github.com/pablopunk/healthi-app/graphs/contributors
[pr]: https://help.github.com/articles/creating-a-pull-request/

# author

© 2017 [Pablo Varela](https://twitter.com/pablopunk)

**Special thanks** to [the contributors][contributors]
