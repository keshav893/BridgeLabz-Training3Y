let currentSalary = 30000;
let incrementRate = 10;
let salary = currentSalary;

let salaryReport = [];

for (let year = 1; year <= 5; year++) {
   
    salary += salary * incrementRate / 100;


    salary = Math.round(salary);

    salaryReport.push({
        Year: year,
        Salary: salary
    });
}
console.table(salaryReport);