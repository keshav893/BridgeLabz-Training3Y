
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multi-Step Form</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 450px; margin: 40px auto; padding: 15px; }
        .step { display: none; }
        .step.active { display: block; }
        input { display: block; box-sizing: border-box; width: 100%; padding: 10px; margin: 10px 0; }
        button { padding: 10px 16px; margin-right: 8px; }
        .error { color: red; }
        .summary { background: #eefbf0; padding: 15px; }
    </style>
</head>
<body>
    <h2>Registration Form</h2>
    <p id="stepLabel">Step 1 of 3</p>

    <form id="multiStepForm" novalidate>
        <section class="step active">
            <label for="name">Full Name</label>
            <input id="name" type="text" required>
        </section>

        <section class="step">
            <label for="email">Email Address</label>
            <input id="email" type="email" required>
        </section>

        <section class="step">
            <label for="password">Password (minimum 6 characters)</label>
            <input id="password" type="password" minlength="6" required>
        </section>

        <p id="error" class="error"></p>

        <button type="button" id="backButton" hidden>Back</button>
        <button type="button" id="nextButton">Next</button>
        <button type="submit" id="submitButton" hidden>Submit</button>
    </form>

    <div id="summary" class="summary" hidden></div>

    <script>
        const form = document.getElementById("multiStepForm");
        const steps = [...document.querySelectorAll(".step")];
        const backButton = document.getElementById("backButton");
        const nextButton = document.getElementById("nextButton");
        const submitButton = document.getElementById("submitButton");
        const error = document.getElementById("error");
        const summary = document.getElementById("summary");
        let currentStep = 0;

        function showStep(index) {
            steps.forEach((step, i) => {
                step.classList.toggle("active", i === index);
            });

            document.getElementById("stepLabel").textContent =
                `Step ${index + 1} of ${steps.length}`;

            backButton.hidden = index === 0;
            nextButton.hidden = index === steps.length - 1;
            submitButton.hidden = index !== steps.length - 1;
            error.textContent = "";
        }

        function validateCurrentStep() {
            const field = steps[currentStep].querySelector("input");
            field.value = field.value.trim();

            if (!field.checkValidity()) {
                error.textContent = currentStep === 0
                    ? "Please enter your name."
                    : currentStep === 1
                    ? "Please enter a valid email address."
                    : "Password must contain at least 6 characters.";

                field.reportValidity();
                return false;
            }

            return true;
        }

        nextButton.addEventListener("click", () => {
            if (!validateCurrentStep()) return;

            currentStep++;
            showStep(currentStep);
        });

        backButton.addEventListener("click", () => {
            currentStep--;
            showStep(currentStep);
        });

        form.addEventListener("submit", event => {
            event.preventDefault();

            if (!validateCurrentStep()) return;

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            form.hidden = true;
            document.getElementById("stepLabel").hidden = true;
            summary.hidden = false;
            summary.textContent = `Registration complete! Name: ${name}; Email: ${email}.`;
        });
    </script>
</body>
</html>
