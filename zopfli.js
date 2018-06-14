const execBuffer = require('exec-buffer');
const bin = require('zopflipng-chrissimpkins-bin');

module.exports = (input, isQuantized) => {
	const args = [
		'-y',
		isQuantized ? '--filters=0' : '--lossy_transparent',
		execBuffer.input,
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
