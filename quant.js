const execBuffer = require('exec-buffer');
const bin = require('pngquant-bin');

module.exports = input => {
	const args = [
		execBuffer.input,
		'--quality=80-98',
		'--speed=1',
		'--output',
		execBuffer.output
	];

	return execBuffer({
		input,
		bin,
		args
	}).catch(err => {
		if ([98, 99].includes(err.code)) {
			// 98: output is bigger than input
			// 99: quality falls below the min value
			return input;
		}
		err.message = err.stderr || err.message;
		throw err;
	});
};
