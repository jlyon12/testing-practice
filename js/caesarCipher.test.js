/* eslint-disable no-undef */
import caesarCipher from './caesarCipher';

test('Throw Error if shift value is out of range', () => {
	expect(() => caesarCipher('foo', 26)).toThrow(RangeError);
	expect(() => caesarCipher('foo', 0)).toThrow(RangeError);
});
test('Throw TypeError if arg !== string', () => {
	expect(() => caesarCipher(434, 5)).toThrow(TypeError);
	expect(() => caesarCipher(true, 2)).toThrow(TypeError);
});
test('Encrypt a single word', () => {
	expect(caesarCipher('phish', 5)).toBe('umnxm');
});
test('Letter wrapping', () => {
	expect(caesarCipher('wxyza', 4)).toBe('abcde');
	expect(caesarCipher('WXYZA', 4)).toBe('ABCDE');
});
test('Encrypt a multiple words', () => {
	expect(caesarCipher('fly famous mockingbird', 3)).toBe(
		'iob idprxv prfnlqjelug'
	);
});
test('Encrypt string and retain letter case', () => {
	expect(caesarCipher('aBcDeFg', 2)).toBe('cDeFgHi');
	expect(caesarCipher('abc DEFG hi', 2)).toBe('cde FGHI jk');
});
test('Encrypt string with punctuation', () => {
	expect(caesarCipher('a.b.c.d.e.f', 3)).toBe('d.e.f.g.h.i');
});
