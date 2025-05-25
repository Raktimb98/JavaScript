//* operators in js
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
//* While loop
// const prompt = require("prompt-sync")();
// let n = prompt("Enter the number:");
// n = Number.parseInt(n);
// let i = 0;
// while (i < n) {
//   console.log(i);
//   i++;
// }
// console.log("hello");

//* Do While loop
// const prompt = require("prompt-sync")();
// let n = prompt("Enter the number:");
// n = Number.parseInt(n);
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<n);

//* Functions
// function sayHello(){
//     console.log("Hello");
// }
// sayHello();

//* String
// let name = "FrostFern"
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name[0]);
//* Template Literals
// let boy1 = "John";
// let boy2 = "Doe";
// let friend = `boy1 is a friend of boy2`;
// let sentence = `${boy1} is a friend of ${boy2}`;
// console.log(sentence);
//* Escape sequence characters
// let fruit = 'Bana\'na';
// console.log(fruit);

//* String Methods
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

//* Arrays
// let fruits = ['Apple','Banana','Mango','Orange'];
// console.log(fruits);
// console.log(fruits[3]);

//* Arrays Methods
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

//* Some more methods of arrays
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbers);

// console.log("Reverse method:");
// console.log(numbers.reverse());

// console.log('\n');

// console.log("Concat method:");
// let numbers2 = [11,12,13,14,15];
// console.log(numbers.concat(numbers2));

// console.log('\n');

// console.log("Slice method:");
// console.log(numbers.slice(2,5));

// console.log('\n');

// console.log("Delete method:");
// delete numbers[2];
// console.log(numbers);

//* Using loops in arrays
// let numbers = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

//* ForeEach loop
// numbers.forEach((elements)=> {
//     console.log(elements * elements);
// })

//* Array.form
// let numbers2 = Array.from('hello');
// console.log(numbers2);

//* Array.of
// num = [1,2,3,4,5,6,7,8,9,10];
// for (let i of num ){
//     console.log(i);
// }

//* Array.in
// Number = [1,2,3,4,5,6,7,8,9,10];
// for (let i in Number){
//     console.log(i);
// }

//* Map , Filter and Reduce
// let numbers = [45,54,546,5,1,35]
//* Array Map Method
// let a = numbers.map((value,index)=>{
//     console.log(value,index);
//     return value + 1;
// })
// console.log(a);

//* Array Filter Method
// let filterNumbers = numbers.filter((value)=>{
//     return value < 10;
// })
// console.log(filterNumbers);

//* Array Reduce Method
// let reduceNumbers = numbers.reduce((acc,curr)=>{
//     return acc + curr;
// })
// console.log(reduceNumbers);

//* Console Methods
// console.log("Hello");
// console.error("This is an error");
// console.warn("This is a warning");
// console.table({a:1,b:2});
// console.time('Time taken');

//* Alert,Prompt and Confirm
// alert("Hello World");
// let a = prompt("Enter your name:","asdf");
// let write = confirm("Are you sure you want to Write this?");
// if (write){
//     document.write("Hello " + a);
// }
// else{
//     document.write("You cancelled the write operation");
// }
// document.write(a);

//* BOM & DOM
// console.log(window);
// window.alert("Hello World");
// document.body.style.backgroundColor = "black";
// document.body.style.color = "white";
//* Example of BOM (Browser Object Model)
// console.log("Browser Width: " + window.innerWidth);
// console.log("Browser Height: " + window.innerHeight);
// console.log("Current URL: " + window.location.href);
// window.alert("This is an example of BOM!");

//* Example of DOM (Document Object Model)
// const heading = document.createElement("h1");
// heading.textContent = "Welcome to BOM and DOM Example!";
// document.body.appendChild(heading);

// const paragraph = document.createElement("p");
// paragraph.textContent = "This paragraph is dynamically added using DOM.";
// document.body.appendChild(paragraph);

//* Walking the DOM

// example (document.title = "Hello World");
// example (document.body.style.backgroundColor = "lightblue");

//* Accessing children of an element

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);

//* Accessing parent of an element
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.parentNode);
// console.log(document.body.parentElement);

//* Element only navigation
// const changeBodyRed = () => {
//     document.body.firstElementChild.style.background = "red";
// }

// let b = document.body;
// console.log("First child of b is: ", b.firstChild);
// console.log("First Element child of b is: ", b.firstElementChild);

//* Table navigation
// let t = document.body.firstElementChild.firstElementChild;
// console.log(t)
// console.log(t.rows)

//* DOM Search
// let cTitle = document.getElementsByClassName("card-title")[0];
// cTitle.style.color = "red";

// let cTitle = document.getElementById("FirstCardTitle");
// cTitle.style.color = "red";

// let cTitles = document.querySelectorAll(".card-title");
// cTitles[0].style.color = "red";
// cTitles[1].style.color = "green";
// cTitles[2].style.color = "blue";
// console.log(cTitles);

//* Matches , closest and contains
// let id1 = document.getElementById("id1")
// console.log(id1)
// console.log(id1.matches(".class"))
// console.log(id2.matches(".box"))
// console.log(id2.closest(".box"))
// console.log(id2.contains(sp1))

//* InnerHTML and OuterHTML
// let x = document.getElementsByTagName('span')[0];
// console.log(x);
// let y = document.getElementsByTagName('span')[0];
// console.dir(y);
// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.nodeName);

// console.log(first.innerHTML)
// first.innerHTML = "<h1>hello</h1>"
// console.log(first.outerHTML)
// first.outerHTML = "<h1>adsf</h1>"

// console.log(document.body.textContent);

//*HTML Attributes and their methods
// let first = document.getElementById("first");
// let a =first.getAttribute("class");
// console.log(a);
// console.log(first.hasAttribute("class"));
// console.log(first.hasAttributes("style"));
// first.setAttribute("hidden","true");
// first.removeAttribute("class");
// console.log(first.attributes);
// console.log(first.dataset);
// console.log(first.dataset.game);
// console.log(first.dataset.player);

//* HTML Insertion Methods
// let a =document.getElementsByTagName('div')[0];
// a.innerHTML = a.innerHTML + "<h1>hello</h1>";

// let div = document.createElement('div');
// div.innerHTML = "<h1>hello</h1>";
// a.appendChild(div);

//* insertAdjacentHTML, insertAdjacentElement and insertAdjacentText
// first.insertAdjacentHTML('beforebegin','<div class= "test">beforebegin</div>');
// first.insertAdjacentHTML('beforeend','<div class= "test">beforeend</div>');
// first.insertAdjacentHTML('afterbegin','<div class= "test">afterbegin</div>');
// first.insertAdjacentHTML('afterend','<div class= "test">afterend</div>');
// first.remove();

//* Class changing using javascript
// first.className = "cyan";

//* SetInterval and SetTimeout
document.writeln("Hello World");
// setTimeout(() => {
//   alert("This is a delayed alert!");
// }, 2000);
const sum = (a, b) => {
    console.log("Sum of " + a + " and " + b + " is: " + (a + b));
    document.writeln("Sum of " + a + " and " + b + " is: " + (a + b));
}
setTimeout(sum, 2000, 5, 10);
setInterval(function(){
    alert("This is a repeated alert every 3 seconds!");
},3000);