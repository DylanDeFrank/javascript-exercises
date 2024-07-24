const palindromes = function (word) {
    let letters = word.split('')
    let reverseLetters = letters.slice()
    reverseLetters.reverse()
    if (letters.localeCompare(reverseLetters, 'en', {sensitivity: 'base'} == 0) || letters.localeCompare(reverseLetters, 'en', {ignorePunctuation: true}) == 0) {
      return true 
    } return false 
}
 ;

// Do not edit below this line
module.exports = palindromes;
