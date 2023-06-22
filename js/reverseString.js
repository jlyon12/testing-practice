export default function reverseString(string) {
	const array = [];
	let result = '';
	for (let i = 0; i < string.length; i += 1) {
		array.push(string.split('')[i]);
	}
	array.reverse();
	for (let i = 0; i < array.length; i += 1) {
		result += array[i];
	}
	return result;
}
