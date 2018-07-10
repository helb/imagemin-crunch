const isPng = require('is-png');
const runZopfli = require('./zopfli');
const runQuant = require('./quant.js');

module.exports = () => input => {
	if (!Buffer.isBuffer(input)) {
		return Promise.reject(new TypeError('Expected a buffer'));
	}

	if (!isPng(input)) {
		return Promise.resolve(input);
	}

	return runQuant(input).then(intermed =>
		runZopfli(intermed, intermed !== input)
	);
};
