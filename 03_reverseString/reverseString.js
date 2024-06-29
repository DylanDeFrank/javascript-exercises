const reverseString = function(string) {
    let arrayLetters = string.split('')
    arrayLetters.reverse('');
    let stringReverse = arrayLetters.join('')
    return stringReverse


};

// Do not edit below this line
module.exports = reverseString;
