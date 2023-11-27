// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the visibility of sections
    function toggleSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(function (section) {
            section.style.display = 'none';
        });

        
        // Show the selected section
        document.getElementById(sectionId).style.display = 'block';
    }

    // Event listener for link clicks
    document.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the target section id from the href attribute
            var targetSectionId = link.getAttribute('href').substring(1);

            // Toggle the visibility of sections
            toggleSection(targetSectionId);
        });
    });

    // Show the home section by default
    toggleSection('home');
});
// Updated script for portfolio-container

document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the visibility of sections
    function toggleSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.portfolio-container').forEach(function (section) {
            section.style.display = 'none';
        });

        // Show the selected section
        document.getElementById(sectionId).style.display = 'block';
    }

    // Event listener for link clicks
    document.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the target section id from the href attribute
            var targetSectionId = link.getAttribute('href').substring(1);

            // Toggle the visibility of sections
            toggleSection(targetSectionId);
        });
    });

    // Show the home section by default
    toggleSection('home');
});
