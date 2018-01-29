// Code your solution in this file.

function lowerCaseDrivers(collection) {
  return collection.map(function(name) {return name.toLowerCase()});
}

function nameToAttributes(collection) {
  return collection.map(function(fullName) {
    return Object.assign({}, {firstName: fullName.split(" ")[0]}, {lastName: fullName.split(" ")[1]})
  })
};

function attributesToPhrase(collection) {
  return collection.map(function(drivers) {
    return `${drivers.name} is from ${drivers.hometown}`
  })
}
