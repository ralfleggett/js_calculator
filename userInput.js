const readline = require('readline-sync');

/**
 * Prompts user to enter a string
 * 
 * @param {string} [prompt='Please enter a string:'] - Prompt to display to 
 *     user
 * @param {object} [validValues=null] - Regex describing valid values that are 
 *     accepted as input
 * 
 * @returns {string} User's input
 */
exports.getStringInput = function(
    prompt = 'Please enter a string:', 
    validValues = null
){
    // Prompt user and get input
    console.log(prompt);
    const str = readline.prompt();

    // If validValues is not null and the string does not match 
    // validValues, this code block runs
    if (validValues && !validValues.test(str)) {
        throw new Error('User entered an invalid string');
    }

    return str;
}

/**
 * Prompts user to enter a number
 * 
 * @param {string} [prompt='Please enter a number:'] - Prompt to display to 
 *     user
 * @param {object} [validValues=null] - Regex describing valid values that are 
 *     accepted as input
 * 
 * @returns {number} User's input
 */
exports.getNumberInput = function(
    prompt = 'Please enter a number:',
    validValues = null
){
    // Prompt user and get input
    console.log(prompt);
    const str = readline.prompt();

    // Checks if not a number or, if validValues is not null, checks if the
    // number does not match validValues
    if (isNaN(str) || (validValues && !validValues.test(str))) {
        throw new Error('User entered an invalid number');
    }

    return +str;
}