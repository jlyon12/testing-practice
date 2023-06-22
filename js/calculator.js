const validateInput = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return false;
	}
	return true;
};

const add = (a, b) => {
	if (validateInput(a, b)) {
		return a + b;
	}
	throw new TypeError('Only inputs of number types are allowed.');
};
const subtract = (a, b) => {
	if (validateInput(a, b)) {
		return a - b;
	}
	throw new TypeError('Only inputs of number types are allowed.');
};
const multiply = (a, b) => {
	if (validateInput(a, b)) {
		return a * b;
	}
	throw new TypeError('Only inputs of number types are allowed.');
};
const divide = (a, b) => {
	if (validateInput(a, b)) {
		return a / b;
	}
	throw new TypeError('Only inputs of number types are allowed.');
};

const calculator = {
	add,
	subtract,
	multiply,
	divide,
};

export default calculator;
