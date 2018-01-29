// Code your solution in this file.
function lowerCaseDrivers(array) {
  result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(array[i].toLowerCase());
  }
  return result;
}

function nameToAttributes(array) {
  result = [];
  for (var i = 0; i < array.length; i++) {
    let name = array[i].split(" ");
    result.push({ firstName: name[0], lastName: name[1] });
  }
  return result;
}

function attributesToPhrase(array) {
  result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(`${array[i].name} is from ${array[i].hometown}`);
  }
  return result;
}
