//?const prompt = require('prompt-sync')();
let marks = {
    Student_one: 34,
    Student_two: 45,
    Student_three: 67,
    Student_four: 89
};

let keys = Object.keys(marks);

//? Problem No. 1

// for (let i = 0; i < keys.length; i++) {
//     console.log("The marks of " + keys[i] + " are " + marks[keys[i]]);
// }

//? Problem No. 2
// for (let key in marks) {
//     console.log("The marks of " + key + " are " + marks[key]);
// }

//? Problem No. 3
// const cn = 45;
// let i;

// while (i !== cn) {
//     i = parseInt(prompt("Enter the correct number: "), 10);
// }

// console.log("You have entered the correct number");

//? Problem No. 4
const mean = (a,b,c,d) => {
    return (a+b+c+d)/4;
}
console.log(mean(1,2,3,4));