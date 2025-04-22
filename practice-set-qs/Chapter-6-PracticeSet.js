//* Make sure you link this file to 'index.html' file and open it in browser to see the output

// //? QS NO 1 : Write a program to find the person can drive or not by checking age.

// // const prompt = require("prompt-sync")({ sigint: true });
// let age = prompt("Enter your age:");
// age = parseInt(age);
// // console.log("You can", age>=18 ? "drive":age<18 ? "not drive" : "Only numbers please!");

// const canDrive = (age) => {
//     return age >= 18 ? true : false;
// }
// if(canDrive(age)){
//     alert("You can drive");
// }
// else{
//     alert("You cannot drive");
// }

//? QS NO 2 : Do the same as above but use the confirm to ask if the user wants to see the dialog box again or not.

// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };

// let runAgain = true;

// while (runAgain) {
//   let age = prompt("Enter your age:");
//   age = parseInt(age);

//   if (isNaN(age)) {
//     alert("Only numbers please!");
//   } else {
//     if (canDrive(age)) {
//       alert("You can drive");
//     } else {
//       alert("You cannot drive");
//     }
//   }

//   runAgain = confirm("Do you want to check again?");
// }

//? QS NO 3 : In the previous question use 'console.error' to log the error if the age entered is negative.

// const canDrive = (age) => {
//     return age >= 18 ? true : false;
//   };
  
//   let runAgain = true;
  
//   while (runAgain) {
//     let age = prompt("Enter your age:");
//     age = parseInt(age);

//     if (age < 0) {
//       console.error("Age cannot be negative!");
//       break;
//     }
  
//     if (isNaN(age)) {
//       alert("Only numbers please!");
//     } else {
//       if (canDrive(age)) {
//         alert("You can drive");
//       } else {
//         alert("You cannot drive");
//       }
//     }
  
//     runAgain = confirm("Do you want to check again?");
//   }

//? QS NO 4 : Write a program to change the url to 'google.com' (Redirection) if user enters a number greater than 4.

// let number = prompt("Enter a number:");
// number = parseInt(number);

// if(number > 4) {
//     window.location.href = "https://www.google.com";
// }
// else {
//     alert("Number is less than or equal to 4. No redirection.");
// }

//? QS NO 5 : Change the background of the page to 'yellow' , 'red' or any other color based on user input through prompt.

let color = prompt("Enter the page background color (e.g., 'yellow', 'red', etc.):");
document.body.style.backgroundColor = color;