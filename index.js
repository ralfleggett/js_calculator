const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Enter first number: ');
const number_1 = Number(readline.prompt());
console.log('Enter second number: ');
const number_2 = Number(readline.prompt());

console.log(number_1 * number_2);