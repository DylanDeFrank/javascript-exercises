const removeFromArray = function(array, ...num) {
        for(const numCheck of num ) {
          for(const arrayCheck of array) {
          if (numCheck === arrayCheck) {
              let index = array.indexOf(numCheck)
              array.splice(index,1)}
            }}  for(const numCheck of num ) {
                  for(const arrayCheck of array) {
                  if (numCheck === arrayCheck) {
                    let index = array.indexOf(numCheck)
                    array.splice(index,1)}
    } return array}}
// Do not edit below this line
module.exports = removeFromArray;
