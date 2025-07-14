//* ES6 Modules in Node.js
//! doing the same thing as module1.js but using ES6 syntax

export const greet = () => {
    console.log("Hello from module2!");
}
export const greetWithName = (name) => {
    console.log("Hello, " + name);
}

export default FrostFern = () => {
    console.log("This is the default export from module2!");
}