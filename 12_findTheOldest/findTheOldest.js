const findTheOldest = function(array) {
    const d = new Date()
    const indexAge = array.findIndex(array => array.yearOfDeath == undefined)
    array.map(array => array.age = array.yearOfDeath - array.yearOfBirth)
      if (indexAge >= 0) {
        array[indexAge].age = (d.getFullYear() - array[indexAge].yearOfBirth)
      }
      array.sort((a, b)=> a.age -b.age)
      array.reverse()
      return array[0]  
  };

// Do not edit below this line
module.exports = findTheOldest;
