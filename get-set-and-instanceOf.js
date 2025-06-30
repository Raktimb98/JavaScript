class Product {
  constructor(id, name, price) {
    this._id = id;          // Private-like convention for internal ID
    this._name = name;      // Private-like convention for internal name
    this._price = price;    // Private-like convention for internal price
    this._stock = 0;        // Initial stock is zero
  }

  // --- Getter for Product ID ---
  // A simple getter to retrieve the product ID.
  get productId() {
    return this._id;
  }

  // --- Getter for Product Name ---
  // Allows controlled access to the product name.
  get productName() {
    return this._name;
  }

  // --- Setter for Product Name ---
  // Allows setting the product name with basic validation.
  set productName(newName) {
    if (typeof newName === 'string' && newName.trim() !== '') {
      this._name = newName.trim();
      console.log(`Product name updated to: ${this._name}`);
    } else {
      console.warn("Invalid product name. Must be a non-empty string.");
    }
  }

  // --- Getter for Product Price ---
  // A getter to retrieve the product price.
  get price() {
    return this._price;
  }

  // --- Setter for Product Price ---
  // Allows setting the product price with validation to ensure it's positive.
  set price(newPrice) {
    if (typeof newPrice === 'number' && newPrice > 0) {
      this._price = newPrice;
      console.log(`Product price updated to: $${this._price.toFixed(2)}`);
    } else {
      console.warn("Invalid price. Price must be a positive number.");
    }
  }

  // --- Getter for Stock (Computed Property) ---
  // A getter to get the current stock level.
  get stock() {
    return this._stock;
  }

  // --- Setter for Stock (With Logic for Adding/Removing) ---
  // This setter doesn't directly set _stock but rather adds/removes based on input.
  // This demonstrates more complex logic within a setter.
  set adjustStock(quantity) {
    if (typeof quantity === 'number' && Number.isInteger(quantity)) {
      const newStock = this._stock + quantity;
      if (newStock >= 0) {
        this._stock = newStock;
        console.log(`Stock adjusted by ${quantity}. New stock: ${this._stock}`);
      } else {
        console.warn(`Cannot reduce stock below zero. Current stock: ${this._stock}`);
      }
    } else {
      console.warn("Invalid quantity. Stock adjustment must be an integer.");
    }
  }

  // A method to display product details
  displayDetails() {
    console.log(`\nProduct ID: ${this.productId}`);
    console.log(`Name: ${this.productName}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
    console.log(`Current Stock: ${this.stock}`);
  }
}

// --- Demonstrate `get` and `set` with Product Class ---

console.log("--- Demonstrating Getters and Setters ---");

const laptop = new Product('LPT001', 'Gaming Laptop', 1500.00);
laptop.displayDetails();

// Using a setter to adjust stock (adds to stock)
laptop.adjustStock = 10; // Output: Stock adjusted by 10. New stock: 10
laptop.displayDetails();

// Using a setter to change the product name
laptop.productName = 'Ultra Gaming Laptop Pro'; // Output: Product name updated to: Ultra Gaming Laptop Pro
laptop.displayDetails();

// Using a setter to change the price
laptop.price = 1450.99; // Output: Product price updated to: $1450.99
laptop.displayDetails();

// Attempting invalid operations with setters
laptop.adjustStock = -15; // Output: Cannot reduce stock below zero. Current stock: 10
laptop.productName = '';  // Output: Invalid product name. Must be a non-empty string.
laptop.price = -100;     // Output: Invalid price. Price must be a positive number.
laptop.adjustStock = 5.5; // Output: Invalid quantity. Stock adjustment must be an integer.

laptop.displayDetails(); // Verify state after invalid attempts


// --- Demonstrate `instanceof` with Product Class ---

console.log("\n--- Demonstrating instanceof Operator ---");

const phone = new Product('PHN002', 'Smartphone', 800.00);
const tablet = new Product('TBL003', 'Tablet', 500.00);
const randomObject = { type: 'Not a Product' };
const someString = "Hello World";
const someNumber = 123;

console.log(`Is 'laptop' an instance of Product? ${laptop instanceof Product}`);       // Output: true
console.log(`Is 'phone' an instance of Product? ${phone instanceof Product}`);         // Output: true
console.log(`Is 'tablet' an instance of Product? ${tablet instanceof Product}`);       // Output: true
console.log(`Is 'laptop' an instance of Object? ${laptop instanceof Object}`);         // Output: true (all objects inherit from Object)

console.log(`Is 'randomObject' an instance of Product? ${randomObject instanceof Product}`); // Output: false
console.log(`Is 'someString' an instance of Product? ${someString instanceof Product}`);     // Output: false
console.log(`Is 'someNumber' an instance of Product? ${someNumber instanceof Product}`);     // Output: false

// Check against built-in types
console.log(`Is 'someString' an instance of String? ${someString instanceof String}`); // Output: false (primitive string)
console.log(`Is 'new String("test")' an instance of String? ${new String("test") instanceof String}`); // Output: true

console.log(`Is 'myArray = [1,2]' an instance of Array? ${[1,2] instanceof Array}`); // Output: true