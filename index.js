// Code your solution in this file.
// })
// let result = array.map(x => x.toLowerCase());
// return result;

function lowerCaseDrivers(array){
  return array.map( function(element){ return element.toLowerCase() } )
}

function nameToAttributes(array) {
  return array.map(function(element) {
     return Object.assign({}, {firstName: element.split(" ")[0]}, {lastName: element.split(" ")[1]})  })
}

function attributesToPhrase(array){
  return array.map(function(name_hash) {
    return `${name_hash.name} is from ${name_hash.hometown}`
  });
}
