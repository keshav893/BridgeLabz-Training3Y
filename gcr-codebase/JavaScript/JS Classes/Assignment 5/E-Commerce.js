
"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 800, "Accessories"),
    new Product(3, "Phone", 25000, "Electronics"),
    new Product(4, "Notebook", 100, "Stationery")
];

products[0].applyDiscount(10);

console.log("All Products:");
products.forEach(product => console.log(product.displayDetails()));

console.log("\nProducts with price above ₹1000:");
products
    .filter(product => product.price > 1000)
    .forEach(product => console.log(product.displayDetails()));
