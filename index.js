// Code your solution in this file.

function lowerCaseDrivers(arr) {
  return arr.map(function(driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(arr) {
  return newArr = arr.map(function (driver) {
    let splitDriver = driver.split(" ")
    return Object.assign({}, {firstName: splitDriver[0], lastName: splitDriver[1]})
  })
}

function attributesToPhrase(drivers) {
  return newArr = drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}



// lowerCaseDrivers - this function takes an array of drivers, and returns an array of the drivers names in lowercase.

// nameToAttributes - this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with firstName and lastName attributes.

// attributesToPhrase - this function takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we are looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN".
