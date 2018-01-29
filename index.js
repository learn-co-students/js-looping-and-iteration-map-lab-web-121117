// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (d) {
    return d.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (d) {
    let splitNames = d.split(" ");
    return Object.assign({}, {firstName: splitNames[0], lastName: splitNames[1]});
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (d) {
    return `${d.name} is from ${d.hometown}`
  });
}
