// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const new_drivers = drivers.map(function(driver){ return driver.toLowerCase() })
  return new_drivers
}

function nameToAttributes(drivers){

  const new_obj = drivers.map(function(driver){

    return {
      firstName: driver.split(" ")[0],
      lastName: driver.split(" ")[1]
    }
  })
  return new_obj
}

// const drivers = [
//   { name: 'Bobby',   hometown: 'Pittsburgh'  },
//   { name: 'Sammy',   hometown: 'New York'    },
//   { name: 'Sally',   hometown: 'Cleveland'   },
//   { name: 'Annette', hometown: 'Los Angeles' },
//   { name: 'Bobby',   hometown: 'Tampa Bay'   }
// ]; 'Bobby is from Pittsburgh', 'Sammy is from New York'

function attributesToPhrase(drivers){
  new_obj = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
  return new_obj
}
