// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let result = []
  drivers.map(function(driver) {
    // debugger
    result.push(driver.toLowerCase())
  })
  return result
}

function nameToAttributes(drivers) {
  let result = []
  drivers.map(function(driver) {
    const name = driver.split(" ")
    const nameObject = { firstName: name[0],  lastName: name[1] }
    debugger
    result.push(nameObject)
  })
  return result
}

function attributesToPhrase(drivers) {
  let result = []
  drivers.map(function(driver) {
    const phrase = `${driver.name} is from ${driver.hometown}`
    // debugger
    result.push(phrase)
  })
  return result
}