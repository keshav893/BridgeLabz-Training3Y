let count = 0;

function increment() {
    count++;
    console.log(`Counter after increment: ${count}`);

    function showCount() {
        console.log(`Current count inside nested function: ${count}`);
    }

    showCount();
}

function decrement() {
    count--;
    console.log(`Counter after decrement: ${count}`);
}

increment();
increment();
increment();
decrement();
decrement();