/* eslint-disable no-undef */
import calculator from './calculator';

test('Add two numbers', () => {
	expect(calculator.add(1, 2)).toBe(3);
});
test('Subtract two numbers', () => {
	expect(calculator.subtract(11, 6)).toBe(5);
});
test('Multiply two numbers', () => {
	expect(calculator.multiply(20, 6)).toBe(120);
});
test('Divide two numbers', () => {
	expect(calculator.divide(200, 10)).toBe(20);
});

test('Throw Error on invalid input ', () => {
	expect(() => calculator.add('f', 10)).toThrow(TypeError);
	expect(() => calculator.subtract(true, 10)).toThrow(TypeError);
	expect(() => calculator.multiply('f', false)).toThrow(TypeError);
	expect(() => calculator.divide('10', 'd')).toThrow(TypeError);
});
