// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(function(item){
    return item.toLowerCase()
  })
}

function nameToAttributes(arr){
  return arr.map(function(item){
    let result = { firstName: null, lastName: null}
    let nameArray = item.split(" ")

    result.firstName = nameArray[0]
    result.lastName = nameArray[1]
    return result
  })
}

function attributesToPhrase(arr){
  return arr.map(function(item){
    return `${item.name} is from ${item.hometown}`
  })
}
