//Thumb Slider

$('.thumbSlider').each(function () {
    $(this).slick({
        centerMode: true,
        centerPadding: '30px',
        speed: 6000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        infinite: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '20px',
                    slidesToShow: 3,
                    infinite: true,
                    pauseOnHover: false,
                }
            }
        ]
    });
});

//App Slider

$('.sliderForPc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    asNavFor: '.sliderNavPc'
});

$('.sliderNavPc').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.sliderForPc',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    asNavFor: '.slider-nav, .slider-txt'
});

$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for, .slider-txt',
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true
});

$('.slider-txt').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    asNavFor: '.slider-for, .slider-nav'
});

function scrollTop() {
    $('.footer-scroll a').click(function () {
        $('body, html').stop().animate({
            scrollTop: 0
        }, 800, 'swing');
        return false;
    });
}

function scrollNavigation() {
    var e = $(window).scrollTop(),
        t = $(window).innerHeight(),
        i = 100 * ((e + t - t) / ($("body").innerHeight() - t)).toFixed(2);
    i = i / 120;
    i = i * 100;
    $(".footer-scroll-circle").css({
        top: i + "px"
    })
}

function scrollNavigationColor() {
    var e = $(window).scrollTop(),
        t = $(window).innerHeight(),
        i = ($("body").innerHeight(), e + t),
        s = $("footer").offset().top + 180,
        a = $("footer").offset().top + 120;
    a < i ? $(".footer-scroll").addClass("footer-white-scroll") : $(".footer-scroll").removeClass("footer-white-scroll");
}


$(window).scroll(function () {
    scrollTop();
    scrollNavigation();
    scrollNavigationColor();
});

$(window).on('load', function () {
    scrollNavigation();
    scrollNavigationColor();
}); // load
$(window).scroll(function () {
    scrollNavigation();
    scrollNavigationColor();
}); // scroll