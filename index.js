const readline = require('readline-sync');

console.log('Welcome to the calculator!');

// Get operator
console.log('Please enter the operator: ');
const op = readline.prompt();

// Get number of operands
console.log('How many numbers do you want to ' + op);
const num_operands = +readline.prompt();

// Get numbers
const nums = new Array(num_operands)
for (let i = 0; i < num_operands; i++) {
    console.log(`Please enter number ${i + 1}`);
    nums[i] = +readline.prompt();
}

// Perform operation
var answer;
switch(op) {
    case '+':
        answer = nums.reduce((accumulator, currVal) => accumulator + currVal);
        break;
    case '-':
        answer = nums.reduce((accumulator, currVal) => accumulator - currVal);
        break;
    case '*':
        answer = nums.reduce((accumulator, currVal) => accumulator * currVal);
        break;
    case '/':
        answer = nums.reduce((accumulator, currVal) => accumulator / currVal);
        break;
    default:
        console.log('Unrecognised operator!');
        break;
}

// Report the answer
console.log(`The answer is: ${answer}`);