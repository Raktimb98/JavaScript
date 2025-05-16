const prompt = require('prompt-sync')();
//? Problem No 1
/*
let age = prompt("Enter your age: ");
age = parseInt(age);
if (age > 10 && age <=20){
    console.log("Your age is between 10 and 20");
}
else{
    console.log("Your age is not between 10 and 20");
}
*/
//? Problem No 2
/*
let age = prompt("Enter your age: ");
switch (age) {
    case 10:
        console.log("Your age is 10");
        break;
    case 20:
        console.log("Your age is 20");
        break;
    case 30:
        console.log("Your age is 30");
        break;
    default:
        console.log("Your age is not 10, 20 or 30");
}
*/
//? Problem No 3
/*
let number = prompt("Enter a number: ");
number = parseInt(number);
if (number % 2 == 0 && number % 3 == 0){
    console.log("The number is divisible by 2 and 3");
}
else if (number % 2 == 0){
    console.log("The number is divisible by 2");
}
else if (number % 3 == 0){
    console.log("The number is divisible by 3");
}
else{
    console.log("The number is not divisible by 2 or 3");
}
*/
//? Problem No 4
let age = prompt("Enter your age: ");
age = parseInt(age);
if (age => 18){
    console.log("You are eligible to Drive");
}
else{
    console.log("You are not eligible to Drive");
}