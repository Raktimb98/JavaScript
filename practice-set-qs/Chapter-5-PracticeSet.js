const prompt = require("prompt-sync")();
//* Problem No. 1
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = prompt("Enter a number:");
// a = Number.parseInt(a);
// array.push(a);
// console.log(array);

//* Problem No. 2
// let array = [];
// let a;
// do {
//     a = Number.parseInt(prompt("Enter a number:"));
//     if (a !== 0) array.push(a);
//     console.log(array);
// } while (a !== 0);
// console.log(array);

//* Problem No. 3
// let array = [10, 340, 20, 44, 25, 12, 45, 78, 65, 98, 100];
// let n = array.filter(num => num % 10 == 0);
// console.log(n);

//* Problem No. 4
// let array = [10, 340, 20, 44, 25, 12, 45, 78, 65, 98, 100];
// let n = array.map(num => num * num);
// console.log(n);

//* Problem No. 5
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = array.reduce((num1, num2) => num1 * num2);
console.log(n);