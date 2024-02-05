let navbar = document.querySelector(".navbar")

window.onscroll = function () {
    if (scrollY >= 100) {
        navbar.classList.add("scroll")
    } else {
        navbar.classList.remove("scroll")
    }
}