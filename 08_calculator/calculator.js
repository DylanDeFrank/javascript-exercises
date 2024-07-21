const add = function(...args) {
  let sum = 0
  for (const number of args) {
    sum += number}
    return sum

	
};

const subtract = function(a,b) {
   let ans = a - b
   return ans
}; 

const sum = function(array) {
  if (array.length == 0) {
    return 0 }
  else {
  let sum = array.reduce((sum, current) => sum + current)
  return sum }
  }
;

const multiply = function(array) {
  let ans = array.reduce((prev, current) => prev * current )
  return ans

};

const power = function(a, b) {
  let ans = Math.pow(a, b)
  return ans
	
};

const factorial = function(number) {
  if (number == 0) {
    return 1
  } 
  let array = []
  for (i = 1; i <= number; i++) {
    array.push(i)
  } let result = array.reduce((a,b) => a * b)
    return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
