
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

console.log("TRANSACTION VALIDATION REPORT\n");

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new Error("MISSING_PROPERTY");
        }

        if (
            typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)
        ) {
            throw new Error("INVALID_AMOUNT");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: Valid`);
    } catch (error) {
        const record = {
            transaction: transactions[i],
            error: error.message
        };

        invalidTransactions.push(record);
        console.log(`Entry ${i + 1}: ${error.message}`);
    }
}

console.log("\nValid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log("Successful Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);
