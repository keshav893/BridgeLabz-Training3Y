
"use strict";

const apiData = [
    "25", "true", "false", "NaN", "                     ",
    "100px", "3.14", null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

console.log("DYNAMIC DATA PARSER REPORT\n");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    const isBlank = typeof value === "string" && value.trim() === "";
    const isValid = !isBlank && Number.isFinite(numberValue);

    console.log(`Original Value: ${stringValue}`);
    console.log(`Number Form: ${numberValue}`);
    console.log(`Boolean Form: ${booleanValue}`);
    console.log(`String Form: "${stringValue}"`);

    if (isValid) {
        validNumbers.push(numberValue);
        console.log("Status: Valid Number\n");
    } else {
        invalidNumbers.push(value);
        console.log("Status: Invalid Number\n");
    }
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
