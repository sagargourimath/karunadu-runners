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
    if (position >= 1700) {
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
