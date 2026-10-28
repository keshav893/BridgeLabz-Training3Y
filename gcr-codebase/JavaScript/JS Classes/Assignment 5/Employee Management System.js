
"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        return this.getAnnualSalary() * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 40000),
    new Employee(2, "Sara", "HR", 35000),
    new Employee(3, "Ravi", "Finance", 45000),
    new Employee(4, "Priya", "Marketing", 38000),
    new Employee(5, "Rahul", "IT", 50000)
];

console.log("EMPLOYEE ANNUAL SALARY REPORT\n");

employees.forEach(employee => {
    const annualSalary = employee.getAnnualSalary();
    const bonus = employee.applyBonus(10);

    console.log(`ID: ${employee.id}`);
    console.log(`Name: ${employee.name}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Annual Salary: ₹${annualSalary}`);
    console.log(`10% Annual Bonus: ₹${bonus}\n`);
});

// Calculate total annual salary payout.
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(`Total Annual Salary Payout: ₹${totalAnnualPayout}`);
