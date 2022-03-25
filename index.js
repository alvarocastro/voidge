#!/usr/bin/env node
const path = require('path');
const asciify = require('asciify-image');
const size = Math.min(process.stdout.rows, Math.floor(process.stdout.columns / 2));
const img = path.join(__dirname, 'img.png');
asciify(img, {
	fit: 'box',
	width: size,
	height: size
}, function (err, result) {
	if (err) throw err;
	console.log(result);
});
