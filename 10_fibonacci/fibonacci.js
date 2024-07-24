const fibonacci = function(number) {
    parseInt(number)
    if (number < 0) {
      return 'OOPS'
    } else {
    return Math.round((Math.pow((1 + Math.sqrt(5)), number) - Math.pow((1 - Math.sqrt(5)), number)) / (Math.pow(2, number) * Math.sqrt(5)))
    }

  };

// Do not edit below this line
module.exports = fibonacci;
