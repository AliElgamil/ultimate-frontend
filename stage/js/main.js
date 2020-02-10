$(function () {

    "use strict";

    $('.toggle-sidebar').on('click', function () {

        $('.sidebar, .content-area').toggleClass('no-sidebar');
    });

    // Toggle Submenu
    $('.toggle-menu').on('click', function () {

        $(this).children('.toggle-submenu').toggleClass('down');

        $(this).next('.child-links').slideToggle();
    }); 
});