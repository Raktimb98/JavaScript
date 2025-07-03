//? Create a javaScript class to create a complex number , crate a constructor to set the real and the complex part.
// class ComplexNumber {
//     constructor(real, imaginary) {
//         this.real = real;
//         this.imaginary = imaginary;
//     }
// }

// let a = new ComplexNumber(2, 3);
// let b = new ComplexNumber(4, 5);

//? write a method to add two complex number numbers in the above class.
// class ComplexNumber {
//     constructor(real, imaginary) {
//         this.real = real;
//         this.imaginary = imaginary;
//     }

//     add(other) {
//         return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
//     }
// }
// let a = new ComplexNumber(2, 3);
// let b = new ComplexNumber(4, 5);
// let c = a.add(b);
// console.log(`Sum: ${c.real} + ${c.imaginary}i`);

//? Create a class student from a class human override a method and see changes
// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     introduce() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

//?see if student is an instance of human using instanceof keyword
// class Student extends Human {
//     constructor(name, age, studentId) {
//         super(name, age); // Call the constructor of the parent class
//         this.studentId = studentId;
//     }
//     introduce() {
//         console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`);
//     }
// }

//? use getters and setters to set and get the real and imaginary part of the complex number
class ComplexNumber {
    constructor(real, imaginary) {
        this._real = real;
        this._imaginary = imaginary;
    }

    get real() {
        return this._real;
    }

    set real(value) {
        this._real = value;
    }

    get imaginary() {
        return this._imaginary;
    }

    set imaginary(value) {
        this._imaginary = value;
    }

    add(other) {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }
}