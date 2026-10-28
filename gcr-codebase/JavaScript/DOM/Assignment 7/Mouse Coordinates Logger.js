
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouse Coordinates Logger</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin: 30px; }
        #mouseBox {
            width: 400px;
            height: 400px;
            max-width: 90vw;
            max-height: 90vw;
            border: 2px solid #2563eb;
            background: #eff6ff;
            position: relative;
            margin: 20px auto;
            overflow: hidden;
            cursor: crosshair;
        }
        #coordinates { font-weight: bold; }
        .dot {
            width: 12px;
            height: 12px;
            background: red;
            border-radius: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
            pointer-events: none;
        }
    </style>
</head>
<body>
    <h2>Mouse Coordinates Logger</h2>
    <p>Move your mouse inside the box. Double-click to place a red dot.</p>
    <p id="coordinates">X: 0, Y: 0</p>

    <div id="mouseBox"></div>

    <script>
        const box = document.getElementById("mouseBox");
        const coordinates = document.getElementById("coordinates");

        box.addEventListener("mousemove", event => {
            // Calculate coordinates relative to the box.
            const rect = box.getBoundingClientRect();
            const x = Math.round(event.clientX - rect.left);
            const y = Math.round(event.clientY - rect.top);

            coordinates.textContent =
                `clientX: ${event.clientX}, clientY: ${event.clientY} | ` +
                `Box X: ${x}, Box Y: ${y}`;
        });

        box.addEventListener("dblclick", event => {
            const rect = box.getBoundingClientRect();
            const dot = document.createElement("span");

            dot.className = "dot";
            dot.style.left = `${event.clientX - rect.left}px`;
            dot.style.top = `${event.clientY - rect.top}px`;

            box.appendChild(dot);
        });
    </script>
</body>
</html>
