"use strict";
function add(n1, n2) {
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
const result = add(number1, number2);
console.log(result);
function add1(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const printResult = true;
const resultPhrase = "Result is: ";
add1(number1, number2, printResult, resultPhrase);
const person = {
    name: "Joao",
    age: 21,
};
const person1 = {
    name: "Joao",
    age: 21,
};
console.log(person1.name);
const product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!",
    },
};
let favoriteActivities;
let favoriteActivities1;
favoriteActivities = ["Sports", "Gaming"];
for (let hobby of favoriteActivities) {
    console.log(hobby.toLocaleUpperCase());
}
const person2 = {
    name: "Joao",
    age: 21,
    role: [1, "Student"],
};
person2.role[0] = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
const person3 = {
    name: 'Joao',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
let qualquer;
let qualquer1;
function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26);
console.log(combinedAges);
const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
function combined(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges1 = combined(30, 26, 'as-number');
console.log(combinedAges1);
const combinedNames1 = combined('30', '26', 'as-number');
console.log(combinedNames1);
function combined1(input1, input2, resultConversion) { }
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function add2(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log('Result: ' + num);
}
printResult1(add2(5, 10));
let combinedValues;
combinedValues = add;
console.log(combinedValues(8, 8));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let userInput;
let userName;
userInput = 5;
userName = 'Max';
function generateError(message, code) {
    throw { message: message, erorrCode: code };
}
generateError('An error ocurred!', 500);
