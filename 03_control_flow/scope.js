//Global Scope
let userInput = null;

if(userInput === undefined || userInput === null){
    console.log('Please enter a valid user input')
} else {
    console.log('Thank you for submitting the form')
}

function tellMeSomething(){
    console.log(userInput);
}