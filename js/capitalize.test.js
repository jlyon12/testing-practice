/* eslint-disable no-undef */
import capitalize from './capitalize';

test('Capitalize first letter in string - single word', () => {
	expect(capitalize('test')).toBe('Test');
});

test('Capitalize first letter in string - multiple words', () => {
	expect(capitalize('this is a test')).toBe('This is a test');
});

test('Capitalize first letter in string - multiple words and numbers', () => {
	expect(capitalize('this is a 2nd test')).toBe('This is a 2nd test');
});
test('Capitalize first letter in string - multiple words and punctuation', () => {
	expect(capitalize('here! This is a 3rd test.')).toBe(
		'Here! This is a 3rd test.'
	);
});
test('Capitalize first letter in string - first letter is already capitalized', () => {
	expect(capitalize('And a 4th test.')).toBe('And a 4th test.');
});
