
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Form Builder</title>
    <style>
        body { font-family: Arial; max-width: 450px; margin: 40px auto; }
        input { display: block; width: 100%; box-sizing: border-box; padding: 10px; margin: 8px 0 15px; }
        button { padding: 10px 16px; }
        pre { background: #f2f2f2; padding: 12px; white-space: pre-wrap; }
    </style>
</head>
<body>
    <h2>Dynamic Form Builder</h2>
    <form id="dynamicForm"></form>
    <h3>Submitted Data</h3>
    <pre id="output">No data submitted yet.</pre>

    <script>
        class FormBuilder {
            constructor(fields) {
                this.fields = fields;
            }

            createForm() {
                const form = document.getElementById("dynamicForm");

                this.fields.forEach(field => {
                    const label = document.createElement("label");
                    label.textContent = field.label;

                    const input = document.createElement("input");
                    input.type = field.type;
                    input.name = field.name;
                    input.required = true;

                    form.appendChild(label);
                    form.appendChild(input);
                });

                const button = document.createElement("button");
                button.type = "submit";
                button.textContent = "Submit";
                form.appendChild(button);

                form.addEventListener("submit", event => {
                    event.preventDefault();
                    const data = this.getFormData();
                    document.getElementById("output").textContent =
                        JSON.stringify(data, null, 2);
                });
            }

            getFormData() {
                const data = {};

                this.fields.forEach(field => {
                    const input = document.querySelector(
                        `[name="${field.name}"]`
                    );
                    data[field.name] = input.value;
                });

                return data;
            }
        }

        const fields = [
            { type: "text", label: "Username", name: "username" },
            { type: "email", label: "Email", name: "email" },
            { type: "password", label: "Password", name: "password" }
        ];

        const builder = new FormBuilder(fields);
        builder.createForm();
    </script>
</body>
</html>
