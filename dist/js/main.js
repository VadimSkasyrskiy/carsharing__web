$(function() {
    $('.offer__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        fade: true,
        verticalSwiping: true
    });

    $('.reviews__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1110,
              settings: {
                slidesToShow: 3,
                autoplay: false,
              }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
              },
          ]
    });
});