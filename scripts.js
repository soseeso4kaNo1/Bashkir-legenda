document.addEventListener("DOMContentLoaded", () => {
    const paintings = [
    ];

    const gallery = document.querySelector(".gallery");
    paintings.forEach(painting => {
        const img = document.createElement("img");
        img.src = painting.src;
        img.alt = painting.alt;
        img.classList.add('gallery-item');
        gallery.appendChild(img);
    });
});