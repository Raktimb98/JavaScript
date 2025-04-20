//* Make sure you link this file to 'index.html' file and open it in browser to see the output

//? Write a program to find the person can drive or not by checking age.

// const prompt = require("prompt-sync")({ sigint: true });
let age = prompt("Enter your age:");
age = parseInt(age);
// console.log("You can", age>=18 ? "drive":age<18 ? "not drive" : "Only numbers please!");

const canDrive = (age) => {
    return age >= 18 ? true : false;
}
if(canDrive(age)){
    alert("You can drive");
}
else{
    alert("You cannot drive");
}

//?
