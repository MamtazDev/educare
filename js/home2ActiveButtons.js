document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.custom-button1');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {

            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
});
