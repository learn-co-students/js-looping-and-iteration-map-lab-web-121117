// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let newDrivers = drivers.map(driver => driver.toLowerCase())
  return newDrivers
}

function nameToAttributes(drivers) {
  let newDrivers = drivers.map(driver => Object.assign({firstName: (driver.split(' ')[0])}, {lastName: (driver.split(' ')[1])}) )
  return newDrivers
}

function attributesToPhrase(drivers) {
  let newDrivers = drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
  return newDrivers
}
