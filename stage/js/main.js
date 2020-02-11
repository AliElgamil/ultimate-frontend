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

    // Open / Close Fullscreen

    $('.toggle-fullscreen').on('click', function () {

        $(this).toggleClass('full-screen');

        if ($(this).hasClass('full-screen')) {
            openFullscreen();
        } else {
            closeFullscreen();
        }
    });

    var elem = document.documentElement;

/* View in fullscreen */
    function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    }

    /* Close fullscreen */
    function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
    }

});