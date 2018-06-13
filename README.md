# `imagemin-crunch`

> An [imagemin](https://github.com/imagemin/imagemin) plugin to optimize PNGs using chained pngquant and zopfli. Inspired by [Chris Simpkins’](https://github.com/chrissimpkins) [Crunch](https://github.com/chrissimpkins/Crunch/)


## Installation

```
$ npm i -S imagemin-crunch
```


## Usage

```js
const imagemin = require('imagemin');
const imageminCrunch = require('imagemin-crunch');

imagemin(['images/*.png'], 'build/images', {
	use: [
		imageminCrunch()
	]
}).then(() => {
	console.log('Images optimized');
});
```
