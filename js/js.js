$(document).ready(function () {
    // cool nav menu
    console.log("start1");
    /*$(window).on('load resize', function() {*/
    console.log("start2");
    var thisnav = $('.current-menu-item').offset().left;
    $('.menu-item').hover(function () {
        console.log("start3");
        var left = $(this).offset().left - thisnav;
        var width = $(this).outerWidth();
        var start = 0;

        $('.wee').css({
            'left': left,
            'width': width
        });
    }, function () {
        var initwidth = $('.current-menu-item').width();
        $('.wee').css({
            'left': '0',
            'width': initwidth
        });
    });
    /*});*/

});
