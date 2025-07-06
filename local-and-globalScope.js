//*Example 1: Global Scope
let globalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(globalVar); // Accessible here
}

printGlobalVar(); // Output: I'm a global variable


//* Example 2: Local Scope

function localScopeExample() {
    let localVar = "I'm a local variable";
    console.log(localVar); // Accessible here
}

localScopeExample(); // Output: I'm a local variable
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined


//* Example 3: Block Scope (let/const)

if (true) {
    let blockVar = "I'm block scoped";
    console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined


//* Example 4: Function Scope (var)
function functionScopeExample() {
    if (true) {
        var functionVar = "I'm function scoped";
    }
    console.log(functionVar); // Accessible here
}

functionScopeExample(); // Output: I'm function scoped
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined