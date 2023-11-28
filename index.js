const { divideNumbers } = require('./errorHandling');

try {
  const result = divideNumbers(10, 2);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message);
}