/* eslint-disable no-undef */
import caesarCipher from './caesarCipher';

test('Encrypt a single word', () => {
	expect(caesarCipher('phish', 5)).toBe('umnxm');
});
test('Letter wrapping', () => {
	expect(caesarCipher('wxyz', 4)).toBe('abcd');
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
