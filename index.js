const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Please enter the operator: ');
const op = readline.prompt();

console.log('Enter first number: ');
const number_1 = Number(readline.prompt());
console.log('Enter second number: ');
const number_2 = +readline.prompt();    // Unary operator converts to number

switch(op) {
    case '+':
        console.log(number_1 + number_2);
        break;
    case '-':
        console.log(number_1 - number_2);
        break;
    case '*':
        console.log(number_1 * number_2);
        break;
    case '/':
        console.log(number_1 / number_2);
        break;
    default:
        console.log('Unrecognised operator!');
        break;
}