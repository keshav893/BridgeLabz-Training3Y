let scores = Array.from(
        { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

let passedStudents = scores.filter(score => score >= 50).length;

let scoreResults = scores.map((score, index) => ({
    Student: index + 1,
    Score: score,
    Result: score >= 50 ? "Pass" : "Fail"
}));

console.log("----- Performance Summary -----");
console.table(scoreResults);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Students Passed: ${passedStudents}`);