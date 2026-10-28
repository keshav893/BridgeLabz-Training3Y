
"use strict";

const input = Number(process.argv[2] ?? 5);
const rows = Number.isInteger(input) && input > 0 ? input : 5;

console.log(`Pyramid Pattern (${rows} rows)\n`);

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}

console.log("\nPyramid using var:");

for (var i = 1; i <= 4; i++) {
    var pattern = "";

    for (var j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}

