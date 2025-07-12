//? No.1 Write a javaScript program to print the following after 2 seconds delay [Hello(then a next line) World!]

// setTimeout(() => {
//     console.log("Hello");
//     setTimeout(() => {
//         console.log("World!");
//     }, 2000);
// }, 2000);

//? No.2 Write a javaScript program to find the average of numbers in an array using spread syntax.
// const numbers = [10, 20, 30, 40, 50];
// const average = (arr) => {
//     const sum = arr.reduce((acc, num) => acc + num, 0);
//     return sum / arr.length;
// }
// console.log(average(numbers));

//? No.3 Write a javaScript program which resolves a promise after n . The function tales n as the parameter. use an iife to execute the function with different values of n.
// const resolveAfterN = (n) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Resolved after ${n} seconds`);
//         }, n * 1000);
//     });
// }
// (async () => {
//     console.log(await resolveAfterN(2));
//     console.log(await resolveAfterN(3));
//     console.log(await resolveAfterN(5));
// })();

//? No.4 Write a simple interest calculator using javaScript.
const calculateSimpleInterest = (principal, rate, time) => {
    return (principal * rate * time) / 100;
}
const principal = 1000;
const rate = 5;
const time = 2;
const simpleInterest = calculateSimpleInterest(principal, rate, time);
console.log(`Simple Interest: ${simpleInterest}`);