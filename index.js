const readline = require('readline-sync');

const validOps = ['+', '-', '*', '/'];

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
}

function performOneCalculation() {

    function getNumber(prompt='Please enter a number:') {
        while (true) {
            console.log(prompt);
            const str = readline.prompt();
            if (!isNaN(str)) {
                return +str;
            }
            console.log('Please enter a valid number');
        }
    }

    function getOperator() {
        while (true) {
            console.log('Please enter the operator:');
            const op = readline.prompt();
            if (validOps.indexOf(op) >= 0) {
                return op;
            }
            console.log(
                `Please enter a valid operator. Supports ${validOps}`);
        }
    }

    // Get operator
    const op = getOperator();

    // Get number of operands
    const num_operands = getNumber('How many numbers do you want to ' + op);

    // Get numbers
    const nums = new Array(num_operands)
    for (let i = 0; i < nums.length; i++) {
        nums[i] = getNumber();
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
}

// Program starts here
printWelcomeMessage()

while (true) {
    performOneCalculation();
}