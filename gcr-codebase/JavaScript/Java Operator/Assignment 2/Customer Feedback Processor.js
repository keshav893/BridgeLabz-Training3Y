let feedback = "Great product! Fast delivery and amazing sound quality!";

let lowerFeedback = feedback.toLowerCase();

let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

if (lowerFeedback.includes("bad") || lowerFeedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

console.log(`Feedback: ${feedback}`);
console.log(`Word Count: ${wordCount}`);