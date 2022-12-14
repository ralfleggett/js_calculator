const userInput = require('./userInput'); 

exports.performOneArithmeticCalculation = function() {
    // Get operator
    const op = userInput.getStringInput(
        prompt = 'Please enter the operator (+, -, /, *):',
        validValues = new RegExp(/^[+-/*]$/),
        invalidPrompt = 'User entered an invalid operator');

    // Get number of operands
    const num_operands = userInput.getNumberInput(
        prompt = 'How many numbers do you want to ' + op,
        validValues = new RegExp(/^\d*[1-9]$/),);

    // Get numbers
    const nums = new Array(num_operands)
    for (let i = 0; i < nums.length; i++) {
        nums[i] = userInput.getNumberInput();
    }

    // Perform operation
    answer = calculateAnswer(nums, op);

    // Report the answer
    console.log(`The answer is: ${answer}`);
}

function calculateAnswer(nums, op) {
    var answer;
    switch(op) {
        case '+':
            answer = nums.reduce((accVal, currVal) => accVal + currVal);
            break;
        case '-':
            answer = nums.reduce((accVal, currVal) => accVal - currVal);
            break;
        case '*':
            answer = nums.reduce((accVal, currVal) => accVal * currVal);
            break;
        case '/':
            // If first number is zero then answer is zero, else strip all 
            // zeroes from nums
            if (nums[0] === 0) {
                answer = 0;
            } else {
                nums = nums.filter(val => val !== 0);
                answer = nums.reduce((accVal, currVal) => accVal / currVal);
            }
            break;
        default:
            console.log('Unrecognised operator!');
            break;
    }
    return answer;
}