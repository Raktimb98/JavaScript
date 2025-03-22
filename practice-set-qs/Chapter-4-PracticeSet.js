//* Problem NO. 1
// let str = "Frost\"";
// console.log(str.length);

// const sentence = "The quick brown fox jumps over the lazy dog.";
// const word = "fox";
// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? "is" : "is not"
//   } in the sentence`,
// );

//* Problem NO. 2
// const str1 = "Saturday night plans";

// console.log(str1.startsWith("Sat"));
// Expected output: true

// console.log(str1.startsWith("Sat", 3));
// Expected output: false

//* Problem NO. 3
// let str = "FROST";
// console.log(str.toLowerCase());

//* Problem NO. 4
// let str = "Please give Rs 1000";
// let amount =Number.parseInt( str.slice("Please give Rs ".length));
// console.log(amount);

//* Problem NO. 5
let friend = "Fern";
friend[2] = "i";
console.log(friend) //Friend is not changed because strings are immutable in JavaScript.