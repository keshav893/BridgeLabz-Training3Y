let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;
    let totalSalary = salary;

    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent Employee: ${isPermanent}`);
    console.log(`Total Salary: ₹${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);

console.log(`Global Bonus: ₹${bonus}`);