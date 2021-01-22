# <img src="https://github.com/pablopunk/art/raw/master/healthi/icon50.png" width="25" /> Healthi


<p align="center">Check your laptops's battery health.</p>

<p align="center">
	<a href="https://github.com/pablopunk/healthi-app#download"><img src="https://img.shields.io/github/downloads/pablopunk/healthi-app/total.svg" alt="Downloads" /></a>
	<a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Code Style" /></a>
</p>

<p align="center">
  <img width="150" src="https://github.com/pablopunk/art/raw/master/healthi/bad.png" alt="">
  <img width="170" src="https://github.com/pablopunk/art/raw/master/healthi/medium.png" alt="">
  <br>
  <img width="200" src="https://github.com/pablopunk/art/raw/master/healthi/good.png" alt="">
</p>


## Download

### macOS

You can download the [latest release][releases] or install it with [homebrew cask](https://caskroom.io/): `brew cask install healthi`.

### Linux

If you're on Debian you can download a `.deb` file from the [latest release][releases].

If you want other packages to be available open a [pull request][pr] to include it. The targets are inside `package.json > build > linux > target`.

## Develop

```shell
npm install
npm run dev  # Start app and watch for changes
npm test
```

## Build

### macOS/Debian

```shell
npm run icns # generate icons from res/icon.svg (requires inkscape)
npm run dist # build app into dist/ folder
```

## Contribute

You can [open an issue][issues] to report any bug or improvement.

Also, you could fix/improve it yourself:

1. You can either have an idea to improve the app or search for [an issue][issues]
2. [Fork][fork] the repo
3. Code your changes and try them `npm start`
4. Run the tests `npm test`
5. Submit your [pull request][pr]

## Author

© 2019 [Pablo Varela](https://pablo.life)

**Special thanks** to [the contributors][contributors]

[issues]: https://github.com/pablopunk/healthi-app/issues
[fork]: https://help.github.com/articles/fork-a-repo/
[contributors]: https://github.com/pablopunk/healthi-app/graphs/contributors
[pr]: https://help.github.com/articles/creating-a-pull-request/
[releases]: https://github.com/pablopunk/healthi-app/releases
