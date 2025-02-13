document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("image");
    const text = document.getElementById("text");
    const button = document.getElementById("changeButton");

    // Список картинок и соответствующих текстов
    const imageData = [
        {
            src: "https://picsum.photos/id/237/400/300",
            text: "Эта собака наслаждается жизнью!"
        },
        {
            src: "https://picsum.photos/id/231/400/300",
            text: "Красивый пейзаж природы."
        },
        {
            src: "https://picsum.photos/id/239/400/300",
            text: "Город в лучах заката."
        },
        {
            src: "https://picsum.photos/id/236/400/300",
            text: "Рассвет в горах, лучшее время для медитации."
        },
        {
            src: "https://picsum.photos/id/234/400/300",
            text: "Спокойное озеро, идеальное место для отдыха."
        }
    ];

    let currentIndex = 0; // Индекс текущей картинки

    button.addEventListener("click", function () {
        // Создаем новый объект Image и загружаем следующее изображение
        let nextIndex = (currentIndex + 1) % imageData.length;
        let newImage = new Image();
        newImage.src = imageData[nextIndex].src;

        // Ожидаем загрузки новой картинки
        newImage.onload = function () {
            // Плавно скрываем картинку и текст
            image.style.opacity = "0";
            text.style.opacity = "0";

            setTimeout(() => {
                // Меняем картинку и текст
                image.src = newImage.src;
                text.textContent = imageData[nextIndex].text;

                // Плавно показываем новую картинку и текст
                image.style.opacity = "1";
                text.style.opacity = "1";

                // Обновляем текущий индекс
                currentIndex = nextIndex;
            }, 300); // Ждем 300ms перед сменой, чтобы анимация выглядела плавно
        };
    });
});
