// /*console.log("hi");
// let ac = 20;
// let bc = " hi";
// console.log(ac + bc);
// {
//   const a = 50;
//   console.log(a); //this will show the value of const a which is 50
// }
// console.log(typeof bc);
// const c ={
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };
// console.log (c);
// c ['friend'] = "Jane";
// delete c['age'];
// console.log(c) ;
// const Dictionary ={
//   appreciate:'Respect',
//   love :'Love',
//   peace :'Peace',
//   coward:'fear',
//   beaut̥iful:'pretty'
// }
// console.log("🚀 ~ Dictionary.beaut̥iful:", Dictionary.beaut̥iful)
// console.log(Dictionary['appreciate']);
// operators in js
// let a = 5;
// let b = 5;
// console.log("addition", a + b);
// console.log("subtraction", a - b);
// console.log("multiplication", a * b);
// console.log("division", a / b);
// console.log("modulus", a % b);
// console.log("increment", ++a);
// console.log("decrement", --a);
// console.log("idk", a++);
// console.log("idk too", a--); */
// const prompt = require('prompt-sync')();
// let a = prompt( "Enter your age:" );
// a = Number.parseInt(a);
// if (a>17){
//   console.log("You can apply for  voting");
// }
// else if(a<17 && a>9){
// console.log( "Your are not eligible to vote");
// }
// else {
//   console.log ("You are not old enough to vote");
// }
// console.log("you are a", a<10 ? 'child': a>12 && a<20 ? 'teenager': a>21?  'adult':'senior');
// // TODO do some tests
// /*
//  *i'm checking the extensions...
// */
// //TODO: fix this code
// //FIXME: fix this code
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// const prompt = require('prompt-sync')();
// let a = prompt( "Enter your age:" );
// console.log("You are a", a<11? "child":a>11 ||a< 21? "teenager" : "adult");
// const prompt = require('prompt-sync')();
// let age =prompt("What is your age: ");

// switch (age){
//     case '1':
//         console.log("your age is 15");
//         break;
//     case '2':
//         console.log("Your age is 17");
//         break;
//     case '3':
//         console.log("Your age is 25");
//         break;
//     default:
//         console.log("Invalid input")
// }
// let a = 6
// if (a % 2 ==0 || a%3==0) {
//     console.log("Number is Divisible by 2 or 3")
// }
// else{
//     console.log("Number is !Divisible by 2 and 3")
// }
// const prompt = require('prompt-sync')();
// let num = prompt("Enter your age:")
// console.log("you can",num>17? "drive":"not drive");
// for (let i =0;i<=50;i++){
//     console.log(i);
// }
// const prompt = require("prompt-sync")();
// let sum = 0;
// let n = prompt("Enter a number you want to sum:");
// n = Number.parseInt(n);
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log("Sum of first " + n + " natural numbers is " + sum);
// let students = {
//   Raktim: 45,
//   Sonam: 89,
//   Tsering: 76,
// };
// for (let a in students) {
//     console.log(students[a]);
//}
//While loop
// const prompt = require("prompt-sync")();
// let n = prompt("Enter the number:");
// n = Number.parseInt(n);
// let i = 0;
// while (i < n) {
//   console.log(i);
//   i++;
// }
// console.log("hello");

// Do While loop
// const prompt = require("prompt-sync")();
// let n = prompt("Enter the number:");
// n = Number.parseInt(n);
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<n);

// Functions
// function sayHello(){
//     console.log("Hello");
// }
// sayHello();

//String
// let name = "FrostFern"
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name[0]);
//Template Literals
// let boy1 = "John";
// let boy2 = "Doe";
// let friend = `boy1 is a friend of boy2`;
// let sentence = `${boy1} is a friend of ${boy2}`;
// console.log(sentence);
//Escape sequence characters
// let fruit = 'Bana\'na';
// console.log(fruit);

// String Methods
// let name = "FrostFern";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name[0]);
// console.log(name.indexOf('F'));
// console.log(name.lastIndexOf('F'));
// console.log(name.charAt(0));
// console.log(name.endsWith('n'));
// console.log(name.includes('F'));
// console.log(name.substring(0,5));
// console.log(name.slice(0,5));
// console.log(name.split(''));
// console.log(name.replace('Frost','Fern'));
// console.log(name.trim());

//Arrays
// let fruits = ['Apple','Banana','Mango','Orange'];
// console.log(fruits);
// console.log(fruits[3]);

//Arrays Methods
// let numbers = [1,2,3,4,5,6,7,8,9,10];

// console.log("Type conversion:")
// let result = numbers.toString();
// console.log(result);
// console.log(typeof result);

// console.log('\n');

// console.log("Join method:")
// let result1 = numbers.join('-');
// console.log(result1);

// console.log('\n');

// console.log("Pop method:")
// let result2 = numbers.pop();
// console.log(numbers);

// console.log('\n');

// console.log("Push method:")
// let result3 = numbers.push(11);
// console.log(numbers);

// console.log('\n');

// console.log("Shift method:")
// let result4 = numbers.shift();
// console.log(numbers);

// console.log('\n');

// console.log("Unshift method:")
// let result5 = numbers.unshift(85);
// console.log(numbers);

//Some more methods of arrays
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

console.log("Reverse method:");
console.log(numbers.reverse());

console.log('\n');

console.log("Concat method:");
let numbers2 = [11,12,13,14,15];
console.log(numbers.concat(numbers2));

console.log('\n');

console.log("Slice method:");
console.log(numbers.slice(2,5));

console.log('\n');

console.log("Delete method:");
delete numbers[2];
console.log(numbers);