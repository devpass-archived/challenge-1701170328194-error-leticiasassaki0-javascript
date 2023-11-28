const { divideNumbers } = require('./errorHandling');

test('Divide numbers successfully', () => {
  const result = divideNumbers(10, 2);
  expect(result).toBe(5);
});

test('Throw error for invalid number input', () => {
  expect(() => divideNumbers('abc', 2)).toThrow('Invalid number input');
  expect(() => divideNumbers(10, 'def')).toThrow('Invalid number input');
});

test('Throw error for division by zero', () => {
  expect(() => divideNumbers(10, 0)).toThrow('Attempted to divide by zero');
});