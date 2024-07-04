const convertToCelsius = function(temp) {
  let x = temp - 32 
    let y = 5 * x 
    let finalTemp = y / 9 
    if (finalTemp == 0)
      return 0 
    else 
      return Number(finalTemp.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  let x = temp * 9
  let y = x / 5 
  let finalTemp = y + 32 
  if (finalTemp == 0)
    return 0 
  else 
    return Number(finalTemp.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
