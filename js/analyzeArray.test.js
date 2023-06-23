/* eslint-disable no-undef */
import analyzeArray from './analyzeArray';

test('Throw TypeError if arg !== array', () => {
	expect(() => analyzeArray('foo')).toThrow(TypeError);
});

test('Calculate average', () => {
	const object = analyzeArray([1, 8, 3, 4, 2, 6]);
	expect(object.average).toEqual(4);
});

test('Calculate min', () => {
	const object = analyzeArray([1, 8, 3, 4, 2, 6]);
	expect(object.min).toEqual(1);
});

test('Calculate max', () => {
	const object = analyzeArray([1, 8, 3, 4, 2, 6]);
	expect(object.max).toEqual(8);
});

test('Calculate length', () => {
	const object = analyzeArray([1, 8, 3, 4, 2, 6]);
	expect(object.length).toEqual(6);
});
