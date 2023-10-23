// let numOne = 10;
// let numTwo = 20;

// let total = numOne + numTwo;

// console.log(total);

function addNumbers(numOne,numTwo){
    let total = numOne + numTwo;
    console.log(total);
}

// addNumbers(10,20);

//To convert Fahrenheit to Celsius, you can use the following formula
//Celsius = (Fahrenheit - 32) * 5/9

function convertFahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit-32) * 5/9;
    console.log(`${fahrenheit}F is equal to ${celsius}C`);
}
convertFahrenheitToCelsius(90);