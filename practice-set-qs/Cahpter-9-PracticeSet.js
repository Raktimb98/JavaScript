//? Write a program to load a javaScript in a browser using Promises , use then() to display an alert when the load is complete

// const loadScript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => resolve(src);
//     script.onerror = () => reject(new Error("Script loading failed!"));
//     document.head.appendChild(script);
//   });
// };
// const main = async () => {
//   await loadScript("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js");
// };
// main()
//   .then(() => {
//     alert("Script loaded successfully!");
//   })
//   .catch((error) => {
//     console.error(error);
//     alert("Failed to load script.");
//   });

//? Create a promise which rejects after 3 seconds use an async/await to get it's value use a try catch to handle the error.
// const createRejectedPromise = () => {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("Promise rejected after 3 seconds"));
//     }, 3000);
//   });
// }
// const main = async () => {
//   try {
//     await createRejectedPromise();
//   } catch (error) {
//     console.error(error);
//     alert("Error: " + error.message);
//   }
// };
// main();

//? Writ a program using promise.all() inside a async await to await 3 promises compare it's result with the case where we await these promises one by one.

function promise1() {
    return new Promise(resolve => setTimeout(() => resolve("Result 1"), 1000));
}
function promise2() {
    return new Promise(resolve => setTimeout(() => resolve("Result 2"), 2000));
}
function promise3() {
    return new Promise(resolve => setTimeout(() => resolve("Result 3"), 1500));
}

const comparePromises = async () => {
    console.time("Promise.all");
    const allResults = await Promise.all([promise1(), promise2(), promise3()]);
    console.timeEnd("Promise.all");
    console.log("Promise.all results:", allResults);

    console.time("Sequential");
    const result1 = await promise1();
    const result2 = await promise2();
    const result3 = await promise3();
    console.timeEnd("Sequential");
    console.log("Sequential results:", [result1, result2, result3]);
};

comparePromises();