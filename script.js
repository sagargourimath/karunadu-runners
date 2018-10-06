$(document).ready(function() {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 100) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
});
});

/* pricing section */

$(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 500) {
        $('.card-1').addClass('moveFromBottom');
        $('.card-2').addClass('moveFromBottom');
        $('.card-3').addClass('moveFromBottom');
    }
    else {
        $('.card-1').removeClass('moveFromBottom');
        $('.card-2').removeClass('moveFromBottom');
        $('.card-3').removeClass('moveFromBottom');
    }
})

/* end of pricing section */

/* slow scroll */

$("#home-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});

$("#registration-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#registration").offset().top
    }, 1000);
});

$("#gallery-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#gallery").offset().top
    }, 1000);
});

$("#guidelines-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#guidelines").offset().top
    }, 1000);
});

$("#contact-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

/* end of slow scroll */
