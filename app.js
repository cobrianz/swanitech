const open_menu = document.getElementById("open_menu");
const close_menu = document.getElementById("close_menu");
const menu = document.querySelector(".menu ul");
// Swiper slider
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper", {
        loop: true, // Infinite loop
        autoplay: {
            delay: 3000, // 3 seconds
            disableOnInteraction: false, 
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: "coverflow", 
    });
});



function openMenu(){
    menu.style.display = "flex";
    open_menu.style.display = "none";
    close_menu.style.display = "flex";
}

function closeMenu() {
    menu.style.display = "none";
    open_menu.style.display = "flex";
    close_menu.style.display = "none";
}
