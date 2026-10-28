let expenses = {
    food: 5000,
    travel: 2000,
    rent: 8000,
    bills: 1500,
    leisure: 1000
};

let total = 0;

for (let category in expenses) {
    total += expenses[category];
}

let average = total / Object.keys(expenses).length;

let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

console.log("Monthly Expense Summary");
console.log(`Total Expenses: ₹${total.toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final Amount: ₹${finalAmount.toFixed(2)}`);