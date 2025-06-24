let a = {
  name: "FrostFern",
  age: 25,
};
console.log(a);

let p = {
  run: () => {
    alert("Running from prototype");
  },
};

p.__proto__ = {
    name: "Prototype",
}

a.__proto__ = p;
a.run();
console.log(a.name);