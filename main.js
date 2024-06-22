let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Desce a página
        header.classList.add("hidden");
    } else {
        // Sobe a página
        header.classList.remove("hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
