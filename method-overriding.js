// Parent Class
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting.`);
  }

  stop() {
    console.log(`${this.make} ${this.model} is stopping.`);
  }
}

// Child Class: Car (inherits from Vehicle)
class Car extends Vehicle {
  constructor(make, model, numDoors) {
    super(make, model); // Call the parent constructor
    this.numDoors = numDoors;
  }

  // Method Overriding: Providing a specific implementation for 'start'
  start() {
    console.log(`The ${this.numDoors}-door ${this.make} ${this.model} is revving up and starting!`);
  }

  // New method specific to Car
  honk() {
    console.log("Beep beep!");
  }
}

// Child Class: Motorcycle (inherits from Vehicle)
class Motorcycle extends Vehicle {
  constructor(make, model, hasSidecar) {
    super(make, model);
    this.hasSidecar = hasSidecar;
  }

  // Method Overriding: Providing a specific implementation for 'stop'
  stop() {
    console.log(`The ${this.make} ${this.model} is slowing down and coming to a halt.`);
    if (this.hasSidecar) {
      console.log("Don't forget the sidecar!");
    }
  }

  wheelie() {
    console.log("Doing a wheelie!");
  }
}

// --- Usage ---

const genericVehicle = new Vehicle("Generic", "ModelX");
genericVehicle.start(); // Output: Generic ModelX is starting.
genericVehicle.stop();  // Output: Generic ModelX is stopping.

console.log("\n--- Car Example ---");
const myCar = new Car("Toyota", "Camry", 4);
myCar.start(); // Output: The 4-door Toyota Camry is revving up and starting! (Overridden method)
myCar.stop();  // Output: Toyota Camry is stopping. (Inherited method)
myCar.honk();  // Output: Beep beep!

console.log("\n--- Motorcycle Example ---");
const myMotorcycle = new Motorcycle("Harley-Davidson", "Iron 883", false);
myMotorcycle.start(); // Output: Harley-Davidson Iron 883 is starting. (Inherited method)
myMotorcycle.stop();  // Output: The Harley-Davidson Iron 883 is slowing down and coming to a halt. (Overridden method)
                      // Output: Don't forget the sidecar! (due to false, this line won't show)

const myMotorcycleWithSidecar = new Motorcycle("BMW", "R 75/5", true);
myMotorcycleWithSidecar.stop(); // Output: The BMW R 75/5 is slowing down and coming to a halt.
                               // Output: Don't forget the sidecar!