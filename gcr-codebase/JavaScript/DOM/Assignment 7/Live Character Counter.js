
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character Counter</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 500px; margin: 40px auto; padding: 15px; }
        textarea { width: 100%; box-sizing: border-box; padding: 12px; }
        #counter { color: green; font-weight: bold; }
        #counter.warning { color: #c58b00; }
        #counter.danger { color: red; }
        button { padding: 9px 16px; margin-top: 10px; }
    </style>
</head>
<body>
    <h2>Live Character Counter</h2>

    <textarea id="message" rows="6" maxlength="100"
        placeholder="Write a message (maximum 100 characters)..."></textarea>

    <p>Characters remaining: <span id="counter">100</span></p>
    <button id="resetButton">Reset</button>

    <script>
        const textarea = document.getElementById("message");
        const counter = document.getElementById("counter");
        const maxLength = 100;

        function updateCounter() {
            const remaining = maxLength - textarea.value.length;

            counter.textContent = remaining;
            counter.className =
                remaining === 0 ? "danger" :
                remaining <= 20 ? "warning" : "";

            if (remaining === 0) {
                counter.classList.add("danger");
            }
        }

        textarea.addEventListener("input", updateCounter);

        // Prevent additional typing once the limit is reached.
        textarea.addEventListener("beforeinput", event => {
            if (
                textarea.value.length >= maxLength &&
                event.inputType.startsWith("insert")
            ) {
                event.preventDefault();
            }
        });

        document.getElementById("resetButton").addEventListener("click", () => {
            textarea.value = "";
            updateCounter();
            textarea.focus();
        });
    </script>
</body>
</html>
