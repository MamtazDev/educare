$(document).ready(function () {
    var $grid = $('.gallaryAll').isotope({
    });

    $('.featured_buttons').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.custom-button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {

            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
});
