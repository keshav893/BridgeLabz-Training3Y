function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);
const fiveTimes = makeMultiplier(5);

console.log("Triple of 5:", triple(5));
console.log("Double of 6:", double(6));
console.log("Five times 4:", fiveTimes(4));
