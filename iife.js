let a = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 1000);
});

let func = async () => {


let b = await a;
console.log(b);
let c = await a;
console.log(c);
  console.log("This is an IIFE example.");
};
func();