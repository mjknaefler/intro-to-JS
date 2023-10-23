//Number data type
let age = 27;
//Boolean
let isDoorClosed = true;
//String
let fullName = 'John Doe';
//Null
let time = null;
//Undeclared
let x;
//Object
let person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 27
};
//Array
let cities = ['London','Paris','New York'];
console.log(typeof cities);

//Classic way of building a string output
console.log('My name is ' + fullName);

//Template string approach of building a string output
console.log(`My name is ${fullName}`);