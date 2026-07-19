// Smooth welcome message
console.log("Welcome to Pooja Sonawane's Portfolio 🚀");

// Highlight active navigation link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "white";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#38bdf8";
        }
    });
});
