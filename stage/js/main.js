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
    // Hide / Show Setting Box

    $('.toggle-setting').on('click', function () {
        $(this).find('i').toggleClass('fa-spin');
        $(this).parent().toggleClass('hide-setting');
    });

    // switch color theme

    var themeClasses = [];

    $('.color-option li').each(function () {
        themeClasses.push($(this).data('theme'));
    });
    $('.color-option li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('body').removeClass(themeClasses.join(' ')).addClass($(this).data('theme'));
    });

    // switch font 
    var fontClass = [];

    $('.font-option select option').each(function () {
        fontClass.push($(this).val());
    });
    $('.font-option select').on('change', function () {
        $('body').removeClass(fontClass.join(' ')).addClass($(this).find('option:selected').val());
    });

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