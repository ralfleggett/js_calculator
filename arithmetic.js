const userInput = require('./userInput'); 

const VALID_OPERATIONS = ['+', '-', '*', '/'];

exports.performOneArithmeticCalculation = function() {
    // Get operator
    const op = userInput.getStringInput(
        prompt = 'Please enter the operator:',
        validValues = VALID_OPERATIONS
    );

    // Get number of operands
    const num_operands = userInput.getNumberInput(
        prompt = 'How many numbers do you want to ' + op);

    // Get numbers
    const nums = new Array(num_operands)
    for (let i = 0; i < nums.length; i++) {
        nums[i] = userInput.getNumberInput();
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