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
    // We're not expecting many modes so sorting is fine
    var modes = Object.values(VALID_MODES).sort() 
    var regex = '^[' + modes[0] + '-' + modes[modes.length - 1] + ']$';
    var selectedMode;
    inputLoop: while (true) {
        try {
            selectedMode = userInput.getNumberInput(
                prompt = prompt,
                validValues = new RegExp(regex));
            break inputLoop;
        } catch(err) {
            console.error(err.message);
        }
    }

    return selectedMode;
}

// Program starts here
printWelcomeMessage();

while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === VALID_MODES['Arithmetic']) {
        arithmetic.performOneArithmeticCalculation();
    } else if (calculationMode === VALID_MODES['Vowel counting']) {
        vowelCounting.performOneVowelCountingCalculation();
    }
}