// jest introductory test file

const add = (a, b) => a + b;

// test function takes 2 args
// 1st is string for name of test/desc
// 2nd is arrow function
test('should add 2 numbers', () => {
	const result = add(3,4);

	// jest function to compare for assertion
	expect(result).toBe(7);
	// assertion
	// if (result !== 7) {
	// 	throw new Error(`You added 4 and 3. the result was ${result}. Expected 7`)
	// }
});


const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should be a string', () =>  {
	const result = generateGreeting('jordan');
	expect(result).toBe('Hello jordan!');
});


test('should generate greeting for no name', () => {
	const result = generateGreeting();
	expect(result).toBe('Hello Anonymous!');
})