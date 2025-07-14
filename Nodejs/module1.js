const greet = () =>{
    console.log("Hello from module1!");
}
const greetWithName = (name) =>{
    console.log("Hello, "+name);
}
module.exports = {greet,greetWithName};