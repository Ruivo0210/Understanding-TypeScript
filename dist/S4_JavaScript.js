"use strict";
const a = 3;
let b = "Oi!";
var c = 6;
function sum(num1, num2) {
    var num3 = num1 + num2;
    return (num3);
}
const add = (a, b) => {
    return a + b;
};
const add1 = (a, b) => a + b;
console.log(add1(2, 4));
const add2 = (a, b = 1) => a + b;
console.log(add2(1));
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    firstName: 'Max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = person;
console.log(userName, age, person);
