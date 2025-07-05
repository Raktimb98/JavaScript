// Destructuring Assignment Examples

// Array Destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3

// Skipping values
const [first, , third] = numbers;
console.log(first, third); // 1 3

// Swapping variables
let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y); // 10 5

// Object Destructuring
const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25

// Renaming variables
const { name: personName } = person;
console.log(personName); // Alice

// Default values
const { gender = 'female' } = person;
console.log(gender); // female

// Nested destructuring
const user = { id: 1, profile: { username: 'bob', email: 'bob@example.com' } };
const { profile: { username } } = user;
console.log(username); // bob

// Spread Operator Examples

// Array Spread
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

// Copying arrays
const copy = [...arr1];
console.log(copy); // [1, 2]

// Object Spread
const obj1 = { foo: 'bar' };
const obj2 = { baz: 42 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { foo: 'bar', baz: 42 }

// Function arguments
function sum(x, y, z) {
    return x + y + z;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6