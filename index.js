// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(element) {
    return element.toLowerCase();
  });
}

function nameToAttributes(array) {
  let output = [];
  array.map(function(element) {
    let current_element = element.split(" ");
    let current_object = {
      firstName: current_element[0],
      lastName: current_element[1]
    };
    output.push(current_object);
  });
  return output;
}

function attributesToPhrase(array) {
  return array.map(function(element) {
    return `${element.name} is from ${element.hometown}`;
  });
}
