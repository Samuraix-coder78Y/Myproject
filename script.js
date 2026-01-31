$(document).ready(function() {
    $('.dropdown, .menu-large').hover(
        function() { 
            $(this).find('.dropdown-menu').stop(true, true).fadeIn(200); 
        },
        function() { 
            $(this).find('.dropdown-menu').stop(true, true).fadeOut(200); 
        }
    );

   $('#hero-slider').on('slid.bs.carousel', function () {
    $('.carousel-item.active .anim-up').hide().fadeIn(500);
    $(window).scroll(function() {
        $('.anim-up').each(function() {
            var positionElement = $(this).offset().top;
            var positionScroll = $(window).scrollTop();
            var hauteurFenetre = $(window).height();
            if (positionScroll > positionElement - hauteurFenetre + 50) {
                $(this).addClass('visible');
            }
        });
    });
    $(window).trigger('scroll');
});

    $('.side-item').on('mouseenter', function() {
        $('.side-item').removeClass('active');
        $(this).addClass('active');
    });
});