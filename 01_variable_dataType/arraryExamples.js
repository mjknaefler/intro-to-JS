let planets = ['Mercury','Mars','Earth','Saturn','Jupiter','Neptune','Uranus','Venus'];
let otherPlanets = ['Foo','Bar'];
//Length or an array
//console.log(planets.length);

//Find value at given index
//console.log(planets[0]);

// let valueAtIndexOne = planets[1];
// console.log(valueAtIndexOne);

//Convert array into string
// let planetString = planets.toString();
// console.log(planetString);

//Usage of join function
// let planetJoinString = planets.join(' : ');
// console.log(planetJoinString);

//Remove last value of array
// console.log(planets);
// let poppedValue = planets.pop();
// console.log(poppedValue);
// console.log(planets);

//Remove first value
// console.log(planets);
// let poppedValue = planets.shift();
// console.log(poppedValue);
// console.log(planets);

//Add to end array
// console.log(planets);
// let poppedValue = planets.push('Pluto');
// console.log(poppedValue);
// console.log(planets);

//Add to start of array
// console.log(planets);
// let poppedValue = planets.unshift('Pluto');
// console.log(poppedValue);
// console.log(planets);

//Add to middle of array and delete after added index
// let newPlanets = planets.splice(2, 1, 'Pluto');
// console.log(newPlanets);
// console.log(planets);

//Add arrays together
// let combinedArray = planets.concat(otherPlanets);
// console.log(combinedArray);

//Find out if variable is an array
console.log(Array.isArray(planets));