// const {greet,greetWithName} = require("./module1") //commonjs

//! You must change the type "commonjs" to "module" to use ES6 imports in package.json .

import { greet, greetWithName } from "./module2.js"; // ES6 import
//destructuring the imported module
greet();
greetWithName("Alice");
