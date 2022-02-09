$(document).ready(function () {
    if($('div').hasClass('questions-slider')){
        $('.questions-slider').slick({
            fade: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            arrows: true,
            dots: false,
            focusOnSelect: false,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100,
            speed: 700, 
            responsive: [
                {
                    breakpoint: 1271,
                    settings: {
                        slidesToShow: 3,
                        adaptiveHeight: true,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        adaptiveHeight: true,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        fade: true,
                        slidesToShow: 1,
                    },
                },
            ]
        });
    }
});