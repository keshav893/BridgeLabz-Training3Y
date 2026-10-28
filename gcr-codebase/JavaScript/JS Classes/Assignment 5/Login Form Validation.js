
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form Validation</title>
    <style>
        body { font-family: Arial; max-width: 400px; margin: 40px auto; }
        input { display: block; width: 100%; box-sizing: border-box; padding: 10px; margin: 8px 0 15px; }
        button { padding: 10px 18px; }
        .error { color: red; }
        .success { color: green; }
    </style>
</head>
<body>
    <h2>Login Form</h2>

    <form id="loginForm" novalidate>
        <label>Username</label>
        <input id="username" type="text">

        <label>Password</label>
        <input id="password" type="password">

        <button type="submit">Login</button>
    </form>

    <p id="message"></p>

    <script>
        document.getElementById("loginForm").addEventListener(
            "submit",
            function (event) {
                event.preventDefault();

                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;
                const message = document.getElementById("message");

                if (username.length < 5) {
                    message.textContent =
                        "Username must contain at least 5 characters.";
                    message.className = "error";
                    return;
                }

                if (password.length < 8) {
                    message.textContent =
                        "Password must contain at least 8 characters.";
                    message.className = "error";
                    return;
                }

                if (!/[A-Z]/.test(password)) {
                    message.textContent =
                        "Password must contain an uppercase letter.";
                    message.className = "error";
                    return;
                }

                if (!/[a-z]/.test(password)) {
                    message.textContent =
                        "Password must contain a lowercase letter.";
                    message.className = "error";
                    return;
                }

                if (!/[0-9]/.test(password)) {
                    message.textContent =
                        "Password must contain a number.";
                    message.className = "error";
                    return;
                }

                if (!/[^A-Za-z0-9]/.test(password)) {
                    message.textContent =
                        "Password must contain a special character.";
                    message.className = "error";
                    return;
                }

                message.textContent = "Validation successful!";
                message.className = "success";
            }
        );
    </script>
</body>
</html>
