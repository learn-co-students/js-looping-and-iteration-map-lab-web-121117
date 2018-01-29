function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    let dArr = driver.split(" ");
    return Object.assign({},{firstName: dArr[0], lastName: dArr[1]});
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
