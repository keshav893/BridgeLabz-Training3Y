let userName = "Keshav";
let age = 20;
let isStudent = true;
let subjects = ["JavaScript", "Python", "SQL"];
let student = { name: "Keshav", course: "B.Tech" };
let address = null;
let phoneNumber;

let report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Student Object", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Address", Value: address, Type: address === null ? "null" : typeof address },
    { Label: "Phone Number", Value: phoneNumber, Type: typeof phoneNumber }
];

// Print the report in a table
console.table(report);