const readline = require('readline-sync');

const VALID_MODES = {
    'Arithmetic': '1',
    'Vowel counting': '2',
}
const VALID_OPERATIONS = ['+', '-', '*', '/'];

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
}

function getCalculationMode() {
    while (true) {
        // List the modes
        console.log('Which calculator mode do you want?');
        for (let mode of Object.keys(VALID_MODES)) {
            console.log(` ${VALID_MODES[mode]}) ${mode}`)
        }
        // Get and check input
        const str = readline.prompt();
        if (!isNaN(str) && Object.values(VALID_MODES).includes(str)) {
            return str;
        }
        console.log('Please enter the number of a valid mode');
    }
}

function performOneArithmeticCalculation() {

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
            if (VALID_OPERATIONS.indexOf(op) >= 0) {
                return op;
            }
            console.log(
                `Please enter a valid operator. Supports ${VALID_OPERATIONS}`);
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

function performOneVowelCountingCalculation() {
    // Get input
    console.log('Please enter a string:');
    var str = readline.prompt();
    str = str.toUpperCase();

    // Count character occurrences
    var counts = {};
    for (let i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (Object.keys(counts).includes(char)) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    // Print vowel counts
    console.log(`The vowel counts are:
 A: ${counts['A'] || '0'}
 E: ${counts['E'] || '0'}
 I: ${counts['I'] || '0'}
 O: ${counts['O'] || '0'}
 U: ${counts['U'] || '0'}`);
}

// Program starts here
printWelcomeMessage()

while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === VALID_MODES['Arithmetic']) {
        performOneArithmeticCalculation();
    } else if (calculationMode === VALID_MODES['Vowel counting']) {
        performOneVowelCountingCalculation();
    }
}