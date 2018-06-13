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
		err.message = err.stderr || err.message;
		throw err;
	});
};
