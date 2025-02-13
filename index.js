document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("image");
    const button = document.getElementById("changeButton");

    // Список заданных картинок
    const imageList = [
        "https://picsum.photos/id/237/400/300",
        "https://picsum.photos/id/231/400/300",
        "https://picsum.photos/id/239/400/300",
        "https://picsum.photos/id/236/400/300",
        "https://picsum.photos/id/234/400/300"
    ];

    let currentIndex = 0; // Индекс текущего изображения

    button.addEventListener("click", function () {
        // 1. Исчезновение картинки (моментально)
        image.style.transition = "opacity 0.1s ease-in-out"; // Быстрое исчезновение
        image.style.opacity = "0";

        // 2. Смена изображения мгновенно после исчезновения
        setTimeout(() => {
            currentIndex++;
            if (currentIndex >= imageList.length) {
                currentIndex = 0; // Начинаем заново
            }
            image.src = imageList[currentIndex];

            // 3. Плавное появление новой картинки
            image.style.opacity = "1";
        }, 100); // Минимальная задержка 100ms, чтобы избежать мерцания
    });
});
