let numbers = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

let results = [];

for (let number of numbers) {
    let classification;

    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    results.push({
        Number: number,
        Result: classification
    });
}

console.table(results);