
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theme Switcher</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 40px;
            transition: background 0.3s, color 0.3s;
        }

        body[data-theme="light"] {
            background: #ffffff;
            color: #222222;
        }

        body[data-theme="dark"] {
            background: #1e293b;
            color: #f8fafc;
        }

        body[data-theme="blue"] {
            background: #dbeafe;
            color: #1e3a8a;
        }

        button {
            padding: 10px 16px;
            margin: 5px;
            cursor: pointer;
        }

        .panel {
            padding: 25px;
            border: 1px solid currentColor;
            border-radius: 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body data-theme="light" data-current-theme="light">
    <h2>Theme Switcher</h2>
    <p>Select a theme for the page.</p>

    <button data-choice="light">Light Theme</button>
    <button data-choice="dark">Dark Theme</button>
    <button data-choice="blue">Blue Theme</button>

    <section class="panel">
        <h3>Welcome!</h3>
        <p>This content changes appearance when you select a theme.</p>
        <p>Current theme: <strong id="themeName">Light</strong></p>
    </section>

    <script>
        const page = document.body;

        document.querySelectorAll("button[data-choice]").forEach(button => {
            button.addEventListener("click", () => {
                const theme = button.getAttribute("data-choice");

                // Apply and store the selected theme using setAttribute().
                page.setAttribute("data-theme", theme);
                page.setAttribute("data-current-theme", theme);

                document.getElementById("themeName").textContent =
                    theme.charAt(0).toUpperCase() + theme.slice(1);
            });
        });
    </script>
</body>
</html>
