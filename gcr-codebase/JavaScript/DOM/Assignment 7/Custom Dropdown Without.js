
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Dropdown</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin: 50px; }
        .dropdown { display: inline-block; position: relative; width: 230px; }
        #dropdownButton { width: 100%; padding: 12px; cursor: pointer; }
        #options {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            border: 1px solid #ccc;
            background: white;
            z-index: 2;
        }
        #options[hidden] { display: none; }
        .option {
            display: block;
            width: 100%;
            padding: 12px;
            border: 0;
            background: white;
            text-align: left;
            cursor: pointer;
        }
        .option:hover, .option:focus { background: #dbeafe; }
    </style>
</head>
<body>
    <h2>Custom Dropdown Menu</h2>

    <div class="dropdown" id="dropdown">
        <button id="dropdownButton" aria-expanded="false">
            Select a course ▼
        </button>

        <div id="options" hidden>
            <button class="option">Artificial Intelligence</button>
            <button class="option">Data Science</button>
            <button class="option">Web Development</button>
            <button class="option">Cyber Security</button>
        </div>
    </div>

    <p id="selectedMessage">No course selected.</p>

    <script>
        const dropdown = document.getElementById("dropdown");
        const button = document.getElementById("dropdownButton");
        const options = document.getElementById("options");
        const selectedMessage = document.getElementById("selectedMessage");

        function setOpen(isOpen) {
            options.hidden = !isOpen;
            button.setAttribute("aria-expanded", String(isOpen));
        }

        button.addEventListener("click", () => {
            setOpen(options.hidden);
        });

        options.addEventListener("click", event => {
            if (!event.target.classList.contains("option")) return;

            const selectedCourse = event.target.textContent.trim();

            button.textContent = selectedCourse + " ▼";
            selectedMessage.textContent = "Selected course: " + selectedCourse;

            setOpen(false);
        });

        // Capturing phase: detect outside clicks before normal handlers run.
        document.addEventListener("click", event => {
            if (!dropdown.contains(event.target)) {
                setOpen(false);
            }
        }, true);
    </script>
</body>
</html>
