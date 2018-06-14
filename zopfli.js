const execBuffer = require('exec-buffer');
const bin = require('zopflipng-chrissimpkins-bin');

module.exports = input => {
	const args = [
		'-y',
		'-m',
		'--lossy_transparent',
		'--filters=0',
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
