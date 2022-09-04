const readline = require('readline-sync');

/**
 * Prompts user to enter a string. Repeats until valid value received. Returns 
 * input
 * 
 * @param {string} [prompt='Please enter a string:'] - Prompt to display to 
 *     user
 * @param {string[]} [validValues=null] - Array of valid values that are 
 *     accepted as input
 * 
 * @returns {string} User's input
 */
exports.getStringInput = function(
    prompt = 'Please enter a string:', 
    validValues = null 
){
    while (true) {
        // Prompt user and get input
        console.log(prompt);
        const str = readline.prompt();

        // If validValues is not null and the string is not in validValues, 
        // this code block runs and then the while loop is restarted
        if (validValues && !validValues.includes(str)) {
            console.log(
                `Please enter a valid string. Valid strings: ${validValues}`);
            continue;
        }

        return str;
    }
}

/**
 * Prompts user to enter a number. Repeats until valid value received. Returns 
 * input
 * 
 * @param {string} [prompt='Please enter a number:'] - Prompt to display to 
 *     user
 * @param {number[]} [validValues=null] - Array of valid values that are 
 *     accepted as input
 * 
 * @returns {number} User's input
 */
exports.getNumberInput = function(
    prompt = 'Please enter a number:',
    validValues = null
){
    while (true) {
        // Prompt user and get input
        console.log(prompt);
        const str = readline.prompt();

        // Checks if number and, if validValues is not null, checks if the
        // number is in validValues
        if (!isNaN(str) && (!validValues || validValues.includes(+str))) {
            return +str;
        }

        // User entered invalid input so notify them and repeat. Display all
        // validValues if not null
        invalidPrompt = 'Please enter a valid number';
        if (validValues) {
            invalidPrompt += `. Valid numbers: ${validValues}`;
        }
        console.log(invalidPrompt);
    }
}