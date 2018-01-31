//  Code your solution in this file.

// Be sure to run the tests to get a feel for the
// types of problems this lab is
// asking you to solve.

function lowerCaseDrivers(array) {
  let newArray = []
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i].toLowerCase())
    }
   return newArray;
  }

function nameToAttributes(array){
  let newArray = []
    for (let i = 0; i < array.length; i++) {
      newArray.push(Object.assign({}, { firstName: array[i].split(" ")[0]}, {lastName: array[i].split(" ")[1]}));
  }
  return newArray
}


function attributesToPhrase(array) {
return array.map(function(object) {
  return `${object.name} is from ${object.hometown}`
});
}
// ANOTHER WAY OF DOING IT:
  // function nameToAttributes(array){
  //  return array.map(function(element) {
  //   return Object.assign({}, { firstName: element.split(" ")[0]}, {lastName: element.split(" ")[1]})  })
  // }


// 3. attributesToPhrase - this function takes an array of
// drivers as JavaScript objects and returns a string
// saying "<NAME OF DRIVER> is from <HOMETOWN>" for each
//JavaScript object in the array. Note that between the
//< and > we are looking for the value stored in the name
//and hometown object attributes, not the strings "DRIVER"
//or "HOMETOWN".
