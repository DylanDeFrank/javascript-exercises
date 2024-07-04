const sumAll = function(start, stop) {
    let finalSum = 0;
    if (Number.isInteger(start) == false || Number.isInteger(stop) == false) {
        return 'ERROR'
    }
    else if (String(start).includes('-') == true || String(stop).includes('-') == true) {
        return 'ERROR'
    }
    else if (start > stop) {
      for(let i = stop; i <= start; i++) {
        finalSum += i}
    } 
    else
      for(let i = start; i <= stop; i++) {
        finalSum += i
    } return finalSum
  }
// Do not edit below this line
module.exports = sumAll;
