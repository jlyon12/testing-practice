import capitalize from './capitalize';

test('capitalizes the first letter of a string', () => {
	expect(capitalize('this is a test.')).toEqual('This is a test');
});
