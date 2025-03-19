const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector("#nav-bar")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active");

    const icon = hamburger.querySelector("i")
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
});

