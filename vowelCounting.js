const userInput = require('./userInput'); 

exports.performOneVowelCountingCalculation = function() {
    // Get input string
    str = userInput.getStringInput().toUpperCase();

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