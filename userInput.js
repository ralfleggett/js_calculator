const readline = require('readline-sync');

/**
 * Prompts user to enter a string. Repeats until valid value received. Returns 
 * input
 * 
 * @param {string} [prompt='Please enter a string:'] - Prompt to display to 
 *     user. If validValues is set, you should describe what the regex accepts
 * @param {object} [validValues=null] - Regex describing valid values that are 
 *     accepted as input
 * @param {string} [invalidPrompt='User entered an invalid string'] - Prompt
 *     displayed when an invalid value is supplied
 * 
 * @returns {string} User's input
 */
exports.getStringInput = function(
    prompt = 'Please enter a string:', 
    validValues = null,
    invalidPrompt = 'User entered an invalid string'
){
    while (true) {
        // Prompt user and get input
        console.log(prompt);
        const str = readline.prompt();

        // If validValues is not null and the string does not match 
        // validValues, this code block runs and then the while loop is 
        // restarted
        if (validValues && !validValues.test(str)) {
            console.log(invalidPrompt);
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
 *     user. If validValues is set, you should describe what the regex accepts
 * @param {object} [validValues=null] - Regex describing valid values that are 
 *     accepted as input
 * @param {string} [invalidPrompt='User entered an invalid number'] - Prompt
 *     displayed when an invalid value is supplied
 * 
 * @returns {number} User's input
 */
exports.getNumberInput = function(
    prompt = 'Please enter a number:',
    validValues = null,
    invalidPrompt = 'User entered an invalid number'
){
    while (true) {
        // Prompt user and get input
        console.log(prompt);
        const str = readline.prompt();

        // Checks if number and, if validValues is not null, checks if the
        // number matches validValues
        if (!isNaN(str) && (!validValues || validValues.test(str))) {
            return +str;
        }

        // User entered invalid input so notify them and repeat
        console.log(invalidPrompt);
    }
}