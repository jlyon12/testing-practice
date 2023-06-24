export default function analyzeArray(array) {
	if (!Array.isArray(array)) {
		throw new TypeError('Input must be === array');
	}
	if (!array.every(Number.isInteger)) {
		throw new TypeError('Array must only contain numbers');
	}

	const sortedArray = array.sort((a, b) => (a < b ? -1 : 1));

	const min = sortedArray[0];
	const max = sortedArray[sortedArray.length - 1];
	const { length } = array;
	const sum = array.reduce((total, currentNumber) => total + currentNumber, 0);
	const average = sum / length;
	return { min, max, length, average };
}
