class myClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Example usage:
const person = new myClass("FrostFern", 20);
console.log(person.greet());
