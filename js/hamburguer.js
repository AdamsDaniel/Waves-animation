'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.getElementById('menu');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});
