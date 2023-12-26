$(document).ready(function () {
    var $grid = $('#isotope-container').isotope({
        itemSelector: '.featured_card',
        layoutMode: 'fitRows'
    });

    // Filter items on button click
    $('#isotope-buttons').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});