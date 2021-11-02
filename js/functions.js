$(window).on("load", function() {

    // page load function start
    $("#page-loader").fadeOut("slow");
    // page load function end 
});


$(document).ready(function() {

    $('.single-item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: false,
        nextArrow: false,

        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]


    });


    $('.multiple-items-2').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    prevArrow: false,
                    nextArrow: false,
                }
            }

        ]


    });

    $('.multiple-items-3').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: false,
        nextArrow: false,
        responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                dots: true,
            }
        },{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
        }, 
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        }
    ]
    });

    $('.multiple-items-4').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 992,
            settings: {
                prevArrow: false,
                nextArrow: false
            }
        }

    ]       
    });

    $('.multiple-items-5').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: false,
        nextArrow: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        }, 
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        }
    ]
    });


    

    //bootstrap select js start 
    // $('.bs-select').selectpicker();
    //bootstrap select js end

    //date picker function start
    //  $('#js-date').datepicker();
    //date picker function end

    //bootstrap animated select box start
    // $('.dropdown').on('show.bs.dropdown', function () {
    //   $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
    // });

    // $('.dropdown').on('hide.bs.dropdown', function () {
    //       $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250);
    // });
    //bootstrap animated select box end


    //scroll function start
    // (function ($) {
    //   $(window).on("load", function () {
    //       $(".mcust-scroll").mCustomScrollbar({
    //           theme: "dark-3"
    //       });
    //   });
    // })(jQuery);
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //   (function ($) {
    //       $(window).on("load", function () {
    //           $(".mcust-scroll").mCustomScrollbar("destroy");
    //       });
    //   })(jQuery);
    //}
    //scroll function end

});


function togglefloat() {
    var element = document.getElementById("float-blk");
    element.classList.toggle("open");
}

$('.js-tilt').tilt({
    maxTilt: 20,
    speed: 500,
    perspective: 1000
});