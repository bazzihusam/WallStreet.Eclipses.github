// Function to scroll to a section when a navigation link is clicked
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Add event listeners to the navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = link.getAttribute("href").substring(1); // Remove the '#' character
            scrollToSection(sectionId);
        });
    });
});


