// script.js
document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.pathname;

    // Get all navigation links
    var navLinks = document.querySelectorAll('nav a');

    // Iterate over each link and check if it matches the current path
    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === path) {
            // Add the 'active' class to the matching link
            link.classList.add('active');
        }
    });
});
