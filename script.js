// You can add JavaScript to enhance functionality or interactivity later.
// For now, this is an empty script, but you can use it to add things like form validation, animations, or other effects.

// Example: Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
