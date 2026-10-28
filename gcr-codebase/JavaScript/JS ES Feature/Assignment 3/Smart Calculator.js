
"use strict";

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero.");
            }
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) {
                throw new Error("Cannot find the real square root of a negative number.");
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError(
                `Operation "${operation}" is not recognized.`
            );
    }
}

console.log("SMART CALCULATOR REPORT\n");

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: ${error.name} - ${error.message}`);
    }
}

try {
    console.log(calculate("multiply", num1, num2));
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
