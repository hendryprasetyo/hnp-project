const navBar = document.querySelector("nav")
menuBtns = document.querySelectorAll(".menu_icon")
overlay = document.querySelector(".overlay")

menuBtns.forEach(menuBtn => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    })
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
})