//copy array using spread operator
let originalArray = [1,2,3];
let newArray = [...originalArray];
newArray.push(4);

// console.log(originalArray);
// console.log(newArray);

//combine 2 arrays using spread operator
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [...array1,...array2];
// console.log(array1);
// console.log(array2);
// console.log(array3);

//Use spread operator to create new object with extra property
let originalObject = {a : 1, b : 2};
let newObject = {...originalObject, c : 3};
// console.log(originalObject);
// console.log(newObject);

let basicInfo = {
    firstName: "John",
    secondName: "Doe",
    age: 30,
    gender: "Male"
};

let interests = {
    hobbies: ["reading","traveling","hikinh"],
    favoriteFood: "Sushi"
};

let userProfile = {...basicInfo,...interests};
console.log(userProfile);