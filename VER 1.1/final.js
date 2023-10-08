// Get a reference to the button element
const goUpButton = document.getElementById('goUpButton');

// Add a scroll event listener to show/hide the button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Adjust the scroll threshold as needed
        goUpButton.style.display = 'block'; // Show the button
    } else {
        goUpButton.style.display = 'none'; // Hide the button
    }
});

// Function to scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
}
