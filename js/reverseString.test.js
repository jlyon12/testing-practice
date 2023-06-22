/* eslint-disable no-undef */
import reverseString from './reverseString';

test('Reverses a string - single word', () => {
	expect(reverseString('hello')).toBe('olleh');
});

test('Reverses a string - multiple words', () => {
	expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('Reverses a string - numbers', () => {
	expect(reverseString('hello world 123')).toBe('321 dlrow olleh');
});
test('Reverses a string - punctuation', () => {
	expect(reverseString('hello, world! 123.')).toBe('.321 !dlrow ,olleh');
});
test('Reverses a string - different cases', () => {
	expect(reverseString('HelLo, wOrlD! 123.')).toBe('.321 !DlrOw ,oLleH');
});
