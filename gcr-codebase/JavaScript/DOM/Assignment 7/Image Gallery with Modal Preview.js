
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 30px; }
        .gallery {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            max-width: 900px;
            margin: auto;
        }
        .gallery img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 8px;
            cursor: pointer;
        }
        .modal {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .modal[hidden] { display: none; }
        .modal-content { position: relative; max-width: 800px; width: 100%; }
        .modal-content img { width: 100%; max-height: 80vh; object-fit: contain; }
        .close {
            position: absolute;
            top: -35px;
            right: 0;
            color: white;
            background: #333;
            border: 0;
            padding: 8px 12px;
            cursor: pointer;
        }
        @media (max-width: 600px) {
            .gallery { grid-template-columns: repeat(2, 1fr); }
        }
    </style>
</head>
<body>
    <h2>Image Gallery</h2>

    <div class="gallery" id="gallery">
        <img src="https://picsum.photos/id/1015/500/350" alt="Mountain landscape">
        <img src="https://picsum.photos/id/1016/500/350" alt="Forest landscape">
        <img src="https://picsum.photos/id/1025/500/350" alt="Animal portrait">
        <img src="https://picsum.photos/id/1035/500/350" alt="Nature scene">
        <img src="https://picsum.photos/id/1043/500/350" alt="Outdoor scenery">
        <img src="https://picsum.photos/id/1050/500/350" alt="Waterfall scenery">
    </div>

    <div class="modal" id="modal" hidden>
        <div class="modal-content" id="modalContent">
            <button class="close" id="closeButton">Close ✕</button>
            <img id="largeImage" src="" alt="Large preview">
        </div>
    </div>

    <script>
        const gallery = document.getElementById("gallery");
        const modal = document.getElementById("modal");
        const modalContent = document.getElementById("modalContent");
        const largeImage = document.getElementById("largeImage");

        gallery.addEventListener("click", event => {
            if (event.target.tagName !== "IMG") return;

            largeImage.src = event.target.src;
            largeImage.alt = event.target.alt;
            modal.hidden = false;
        });

        // Clicking inside the modal must not trigger its close handler.
        modalContent.addEventListener("click", event => {
            event.stopPropagation();
        });

        modal.addEventListener("click", () => {
            modal.hidden = true;
        });

        document.getElementById("closeButton").addEventListener("click", () => {
            modal.hidden = true;
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") modal.hidden = true;
        });
    </script>
</body>
</html>
