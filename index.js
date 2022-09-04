const userInput = require('./userInput'); 
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

const VALID_MODES = {
    'Arithmetic': 1,
    'Vowel counting': 2,
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
}

function getCalculationMode() {
    // Form the prompt
    var prompt = 'Which calculator mode do you want?';
    for (let mode of Object.keys(VALID_MODES)) {
        prompt += `\n ${VALID_MODES[mode]}) ${mode}`
    }
    
    // Get and return user input.
    return userInput.getNumberInput(
        prompt = prompt, 
        validValues = Object.values(VALID_MODES));
}

// Program starts here
printWelcomeMessage()

while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === VALID_MODES['Arithmetic']) {
        arithmetic.performOneArithmeticCalculation();
    } else if (calculationMode === VALID_MODES['Vowel counting']) {
        vowelCounting.performOneVowelCountingCalculation();
    }
}