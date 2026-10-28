
"use strict";

console.log("Score:", score);
announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

function startGame() {
    console.log("Status:", status);
}

startGame();

const fixedScore = 50;
const fixedStatus = "ready";

const announceGame = () => {
    console.log("Game started");
};

const startFixedGame = () => {
    console.log("Score:", fixedScore);
    console.log("Status:", fixedStatus);
};

announceGame();
startFixedGame();
