const userInput = require('./userInput');

exports.performOneVowelCountingCalculation = function() {
    // Get input string
    str = userInput.getStringInput().toUpperCase();

    // Filter out non-vowel characters. This results in 2 loops through the
    // array, but I want to try out some other methods
    str = str.split('').filter(char => /[AEIOU]/.test(char));

    // Count character occurrences
    var counts = {'A': 0, 'E': 0, 'I': 0, 'O': 0, 'U': 0};
    str.forEach(char => counts[char]++);

    // Print vowel counts
    var output = 'The vowel counts are:';
    for (vowel in counts) {
        output += `\n ${vowel}: ${counts[vowel]}`
    }
    console.log(output);
}