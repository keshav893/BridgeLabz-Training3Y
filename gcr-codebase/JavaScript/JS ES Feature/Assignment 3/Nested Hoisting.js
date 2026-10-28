
"use strict";

// Original example
function outer() {
    console.log("Outer count:", count);

    var count = 5;

    function inner() {
        console.log("Inner count:", count);

        var count = 10;
    }

    inner();
}

outer();

// Arrow function version
function outerArrow() {
    console.log("Outer count:", count);

    var count = 5;

    const inner = () => {
        console.log("Arrow inner count:", count);
    };

    inner();
}

outerArrow();
