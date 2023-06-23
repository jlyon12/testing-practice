/* eslint-disable no-use-before-define */
export default function caesarCipher(string, shiftFactor) {
	if (shiftFactor < 1 || shiftFactor > 25) {
		throw new RangeError('Invalid shift factor. Must be between 1 and 25');
	}
	if (typeof string !== 'string') {
		throw new TypeError('Invalid string - must be a string');
	}
	const array = [];
	let result = '';
	for (let i = 0; i < string.length; i += 1) {
		if (
			isLowerCaseLetter(string.charAt(i)) ||
			isUpperCaseLetter(string.charAt(i))
		) {
			array.push(string.charCodeAt(i));
		} else array.push(string.charAt(i));
	}
	for (let i = 0; i < array.length; i += 1) {
		const shiftedCharCode = array[i] + shiftFactor;
		if (typeof shiftedCharCode === 'number') {
			if (isLowerCaseCode(array[i])) {
				if (wrapLowerCase(shiftedCharCode)) {
					array[i] = String.fromCharCode(shiftedCharCode - 26);
				} else {
					array[i] = String.fromCharCode(shiftedCharCode);
				}
			}
			if (isUpperCaseCode(array[i])) {
				if (wrapUpperCase(shiftedCharCode)) {
					array[i] = String.fromCharCode(shiftedCharCode - 26);
				} else {
					array[i] = String.fromCharCode(shiftedCharCode);
				}
			}
		}
		result += array[i];
	}
	return result;
}

function isUpperCaseLetter(char) {
	if (char.charCodeAt(char) >= 65 && char.charCodeAt(char) <= 90) {
		return true;
	}
	return false;
}

function isLowerCaseLetter(char) {
	if (char.charCodeAt(char) >= 97 && char.charCodeAt(char) <= 122) {
		return true;
	}
	return false;
}

function isUpperCaseCode(charCode) {
	if (charCode >= 65 && charCode <= 90) {
		return true;
	}
	return false;
}

function isLowerCaseCode(charCode) {
	if (charCode >= 97 && charCode <= 122) {
		return true;
	}
	return false;
}

function wrapLowerCase(charCode) {
	if (charCode >= 123 && charCode <= 148) {
		return true;
	}
	return false;
}

function wrapUpperCase(charCode) {
	if (charCode >= 91 && charCode <= 117) {
		return true;
	}
	return false;
}
