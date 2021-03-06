import fs from 'fs';
import path from 'path';
import isPng from 'is-png';
import pify from 'pify';
import test from 'ava';
import m from '.';

const fsP = pify(fs);

test('skip optimizing a non-PNG file', async t => {
	const buf = await fsP.readFile(__filename);
	const data = await m()(buf);

	t.deepEqual(data, buf);
});

test('optimize a PNG', async t => {
	const filePath = path.join(__dirname, 'fixtures/test.png');
	const buf = await fsP.readFile(filePath);
	const data = await m()(buf);

	t.true(data.length < buf.length);
	t.true(isPng(data));
});

test('optimize a PNG that can’t be quantized', async t => {
	const filePath = path.join(__dirname, 'fixtures/test-noquant.png');
	const buf = await fsP.readFile(filePath);
	const data = await m()(buf);

	t.true(data.length < buf.length);
	t.true(isPng(data));
});
