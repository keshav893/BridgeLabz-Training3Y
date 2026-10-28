
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product List Manager</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 15px; }
        .controls { display: flex; gap: 8px; }
        input { flex: 1; padding: 10px; }
        button { padding: 9px 12px; cursor: pointer; }
        ul { padding: 0; list-style: none; }
        li { display: flex; gap: 8px; align-items: center; padding: 10px; border-bottom: 1px solid #ddd; }
        .product-name { flex: 1; }
        .delete { background: #fee2e2; border: 1px solid #dc2626; }
    </style>
</head>
<body>
    <h2>Dynamic Product List</h2>

    <div class="controls">
        <input id="productInput" placeholder="Enter product name">
        <button id="addButton">Add Product</button>
    </div>

    <ul id="productList">
        <li>
            <span class="product-name">Laptop</span>
            <button data-action="edit">Edit</button>
            <button data-action="delete" class="delete">Delete</button>
        </li>
    </ul>

    <script>
        const input = document.getElementById("productInput");
        const list = document.getElementById("productList");

        document.getElementById("addButton").addEventListener("click", () => {
            const name = input.value.trim();

            if (!name) {
                alert("Please enter a product name.");
                return;
            }

            const li = document.createElement("li");
            li.innerHTML = `
                <span class="product-name"></span>
                <button data-action="edit">Edit</button>
                <button data-action="delete" class="delete">Delete</button>
            `;
            li.querySelector(".product-name").textContent = name;
            list.appendChild(li);
            input.value = "";
            input.focus();
        });

        // One parent listener handles Edit and Delete for every item.
        list.addEventListener("click", event => {
            const button = event.target.closest("button[data-action]");
            if (!button) return;

            const li = button.closest("li");
            const action = button.dataset.action;

            if (action === "delete") {
                li.remove();
            }

            if (action === "edit") {
                const nameSpan = li.querySelector(".product-name");

                if (li.querySelector("input")) return;

                const editInput = document.createElement("input");
                editInput.value = nameSpan.textContent;
                nameSpan.replaceWith(editInput);
                editInput.focus();

                function saveEdit() {
                    if (!editInput.isConnected) return;

                    const updatedName = document.createElement("span");
                    updatedName.className = "product-name";
                    updatedName.textContent =
                        editInput.value.trim() || nameSpan.textContent;

                    editInput.replaceWith(updatedName);
                }

                editInput.addEventListener("keydown", keyEvent => {
                    if (keyEvent.key === "Enter") saveEdit();
                    if (keyEvent.key === "Escape") {
                        editInput.value = nameSpan.textContent;
                        saveEdit();
                    }
                });

                editInput.addEventListener("blur", saveEdit);
            }
        });
    </script>
</body>
</html>
