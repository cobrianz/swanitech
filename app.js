document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper", {
        loop: true, // Infinite loop
        autoplay: {
            delay: 3000, // 3 seconds
            disableOnInteraction: false, // Keep autoplay after user interaction
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: "coverflow", // Other effects: "fade", "cube", "coverflow"
    });
});
