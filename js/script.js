$(document).ready(function () {
  function renderAccountInformation(data, container) {
    if (data.id === "") {
      return "Select account";
    }
    const el = data.element;
    const img = $(el).attr("data-img");
    const title = $(el).attr("data-title");
    return $(
      `<div class='option-wrap'><img src=${img} /><span>${title}</span></div>`
    );
  }

  $("#accountSelector").select2({
    allowClear: false,
    minimumResultsForSearch: -1,
    templateResult: renderAccountInformation,
    templateSelection: renderAccountInformation,
  });

  $(".mobile-search").on("click", function () {
    $(".search-mobile").addClass("open");
    $("body, html").addClass("overflow");
  });

  $(".search-close").on("click", function () {
    $(".search-mobile").removeClass("open");
    $("body, html").removeClass("overflow");
  });

  $(".drop-menu").on("click", function () {
    $(".menu-wrap").addClass("open-menu");
    $("body, html").addClass("overflow");
  });

  $(".close-menu").on("click", function () {
    $(".menu-wrap").removeClass("open-menu");
    $(".sub-menu .links").removeClass("show");
    $(".sub-menu").removeClass("show");
    $(".menu-wrap").removeClass("remove");
    $("body, html").removeClass("overflow");
  });

  $(".menu2 li").on("click", function () {
    $(this).find(".sub-menu").addClass("show");
    $(".menu-wrap").addClass("remove");
  });

  $(".sub-menu .info b").on("click", function () {
    $(this).closest(".sub-menu").find(".links").addClass("show");
  });

  $bannerSlider = false;
  function slider() {
    if ($(window).width() < 1025) {
      if (!$bannerSlider) {
        $(".banner-slider").slick({
          dots: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          // variableWidth: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 501,
              settings: {
                dots: true,
                arrows: false,
                infinite: false,
                variableWidth: false,
                slidesToShow: 1,
              },
            },
          ],
        });
        $bannerSlider = true;
      }
    } else if ($(window).width() > 1025) {
      if ($bannerSlider) {
        $(".banner-slider").slick("unslick");
        $bannerSlider = false;
      }
    }
  }

  slider();

  $(window).on("resize", function () {
    slider();
  });

  $news = false;
  function slider3() {
    if ($(window).width() < 1025) {
      if (!$news) {
        $(".blog-slider").slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 501,
              settings: {
                dots: true,
                arrows: false,
                infinite: false,
                variableWidth: false,
                slidesToShow: 1,
              },
            },
          ],
        });
        $news = true;
      }
    } else if ($(window).width() > 1025) {
      if ($news) {
        $(".blog-slider").slick("unslick");
        $news = false;
      }
    }
  }

  slider3();

  $(window).on("resize", function () {
    slider3();
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".tabs-menu > li a").on("click", function (e) {
    e.preventDefault();
    $(".tabs-menu > li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-wrap .tab-content").removeClass("active");
    $(".tab-content-wrap .tab-content").eq(index).addClass("active");

    var selectedTab = $(this).closest("li").data("index");

    $("#tab-select").val(selectedTab);
    $("#tab-select").trigger("change");
  });

  $("#tab-select").on("change", function (e) {
    var selectedTab = $(this).val();
    var index = parseInt($(this).val()) - 1;

    $(".tabs-menu > li").removeClass("active");
    $(".tabs-menu > li").eq(index).addClass("active");
    $(".tab-content-wrap .tab-content").removeClass("active");
    $(".tab-content-wrap .tab-content").eq(index).addClass("active");
  });

  $(".tabs-menu2 > li a").on("click", function (e) {
    e.preventDefault();
    $(".tabs-menu2 > li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-wrap2 .tab-content").removeClass("active");
    $(".tab-content-wrap2 .tab-content").eq(index).addClass("active");

    var selectedTab = $(this).closest("li").data("index");

    $("#tab-select2").val(selectedTab);
    $("#tab-select2").trigger("change");
  });

  $("#tab-select2").on("change", function (e) {
    var selectedTab = $(this).val();
    var index = parseInt($(this).val()) - 1;

    $(".tabs-menu2 > li").removeClass("active");
    $(".tabs-menu2 > li").eq(index).addClass("active");
    $(".tab-content-wrap2 .tab-content").removeClass("active");
    $(".tab-content-wrap2 .tab-content").eq(index).addClass("active");
  });

  $(".favorite-icon").on("click", function () {
    $(this).toggleClass("active");
  });

  $(function () {
    function slickOnResize() {
      $(".gallery-slider-wrap").each(function (key, item) {
        var $slickElement = $(item).find(".gallery-slider");
        var $status = $(item).find(".gallery-pagingInfo");
        var $prevArrow = $(item).find(".slider-navigation .slick-prev");
        var $nextArrow = $(item).find(".slider-navigation .slick-next");

        $slickElement.on(
          "init reInit afterChange",
          function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + " / " + slick.slideCount);
          }
        );

        $slickElement.slick({
          dots: false,
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow: $prevArrow,
          nextArrow: $nextArrow,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: "unslick",
            },
          ],
        });
      });
    }

    slickOnResize();

    $(window).resize(function () {
      var $window_width = $(window).width();
      if ($window_width < 1200) {
        $(".gallery-slider").slick("resize");
      }
    });
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
    prevArrow: $(".about-us .slider-navigation .slick-prev"),
    nextArrow: $(".about-us .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        },
      },
    ],
  });
  $(".slider-nav").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // $(".info-slider").slick({
  //   dots: true,
  //   arrows: false,
  //   infinite: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1401,
  //       settings: {
  //         dots: true,
  //         arrows: false,
  //         infinite: false,
  //         variableWidth: true,
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 501,
  //       settings: {
  //         dots: true,
  //         arrows: false,
  //         infinite: false,
  //         variableWidth: false,
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });

  // $(".images-slider").slick({
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   prevArrow: $(".images-slider-wrap .slider-navigation .slick-prev"),
  //   nextArrow: $(".images-slider-wrap .slider-navigation .slick-next"),
  //   responsive: [
  //     {
  //       breakpoint: 1025,
  //       settings: {
  //         slidesToShow: 2,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         dots: true,
  //       },
  //     },
  //   ],
  // });

  // $(window).scroll(function () {
  //   var sticky = $(".top-scroll"),
  //     scroll = $(window).scrollTop();

  //   if (scroll >= 200) sticky.addClass("show");
  //   else sticky.removeClass("show");
  // });

  // $(".images-slider2").slick({
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   prevArrow: $(".images-slider-wrap2 .slider-navigation .slick-prev"),
  //   nextArrow: $(".images-slider-wrap2 .slider-navigation .slick-next"),
  //   responsive: [
  //     {
  //       breakpoint: 1025,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });

  // $(".phone-number-input").inputmask({
  //   mask: "+7 (999) 999 - 99 - 99",
  // });
  // $(".select-wrap select").select2({
  //   minimumResultsForSearch: 6,
  // });

  // $("#select1").select2({
  //   placeholder: "Жилой комплекс",
  //   minimumResultsForSearch: -1,
  //   // allowClear: true,
  // });

  // $("#select2").select2({
  //   placeholder: "Блок",
  //   minimumResultsForSearch: -1,
  //   // allowClear: true,
  // });

  // $("#select3").select2({
  //   placeholder: "Подъезд",
  //   minimumResultsForSearch: -1,
  //   // allowClear: true,
  // });

  // $("#select4").select2({
  //   placeholder: "Этаж",
  //   minimumResultsForSearch: -1,
  //   // allowClear: true,
  // });

  // $("#select5").select2({
  //   placeholder: "1-10 ком",
  //   minimumResultsForSearch: -1,
  //   // allowClear: true,
  // });

  // $("#select6").select2({
  //   placeholder: "Сортировать",
  //   minimumResultsForSearch: -1,
  //   // allowClear: true,
  // });

  // $("#select7").select2({
  //   placeholder: "Город",
  //   minimumResultsForSearch: -1,
  //   // allowClear: true,
  // });

  // $(".main-menu li button").on("click", function () {
  //   $(this).closest("li").find(".sub-menu").toggleClass("open");
  // });

  // $newsIn = false;
  // function slider2() {
  //   if ($(window).width() < 1025) {
  //     if (!$newsIn) {
  //       $(".news-in-slider").slick({
  //         dots: true,
  //         arrows: false,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         variableWidth: true,
  //         infinite: false,
  //         responsive: [
  //           {
  //             breakpoint: 501,
  //             settings: {
  //               dots: true,
  //               arrows: false,
  //               infinite: false,
  //               variableWidth: false,
  //               slidesToShow: 1,
  //             },
  //           },
  //         ],
  //       });
  //       $newsIn = true;
  //     }
  //   } else if ($(window).width() > 1025) {
  //     if ($newsIn) {
  //       $(".news-in-slider").slick("unslick");
  //       $newsIn = false;
  //     }
  //   }
  // }

  // slider2();

  // $(window).on("resize", function () {
  //   slider2();
  // });

  // $news = false;
  // function slider3() {
  //   if ($(window).width() < 1025) {
  //     if (!$news) {
  //       $(".news-slider").slick({
  //         dots: true,
  //         arrows: false,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         variableWidth: true,
  //         infinite: false,
  //         responsive: [
  //           {
  //             breakpoint: 501,
  //             settings: {
  //               dots: true,
  //               arrows: false,
  //               infinite: false,
  //               variableWidth: false,
  //               slidesToShow: 1,
  //             },
  //           },
  //         ],
  //       });
  //       $news = true;
  //     }
  //   } else if ($(window).width() > 1025) {
  //     if ($news) {
  //       $(".news-slider").slick("unslick");
  //       $news = false;
  //     }
  //   }
  // }

  // slider3();

  // $(window).on("resize", function () {
  //   slider3();
  // });

  // $(".drop-menu").on("click", function () {
  //   $(".menu-wrap").toggleClass("open");
  //   $("body, html").toggleClass("overflow");
  // });

  // $(".okey").on("click", function () {
  //   $(".fixed-block").addClass("hide");
  //   $("body, html").css({ overflow: "visible" });
  // });

  // $(".tab-menu li button").on("click", function (e) {
  //   e.preventDefault();
  //   $(this).closest(".tab-menu").find("li").removeClass("active");
  //   $(this).closest("li").addClass("active");
  //   var index = $(this).closest("li").index();
  //   $(".tab-content-item").removeClass("active");
  //   $(".tab-content-item").eq(index).addClass("active");
  // });

  // $(".favorite-icon").on("click", function () {
  //   $(this).addClass("remove");
  // });

  // $(".favorite-icon2").on("click", function () {
  //   $(this).addClass("add");
  // });

  // $(".favorite-icon3").on("click", function (e) {
  //   e.preventDefault();
  //   $(this).addClass("add");
  // });

  // $(".load-more").on("click", function () {
  //   $(".news-items .news-item").removeClass("hide");
  // });

  // $(".accordion-list-item .item-heading").on("click", function (e) {
  //   e.preventDefault();
  //   if ($(this).find("span").hasClass("minus")) {
  //     $(this).find("span").removeClass("minus");
  //   } else {
  //     $(".accordion-list-item span").removeClass("minus");
  //     $(this).find("span").addClass("minus");
  //   }
  //   $(".accordion-list-item").removeClass("opened");
  //   $(".item-body").removeClass("active");
  //   $(this)
  //     .closest(".accordion-list-item")
  //     .find(".item-body")
  //     .addClass("active");
  //   $(this).closest(".accordion-list-item").addClass("opened");
  //   $(".item-body:not(.active)").slideUp();
  //   $(".accordion-list-item:not(.opened)").removeClass("active");
  //   $(this).closest(".accordion-list-item").find(".item-body").slideToggle();
  //   $(this).closest(".accordion-list-item").toggleClass("active");
  // });

  // $(".tabs-menu > li a").on("click", function (e) {
  //   e.preventDefault();
  //   $(".tabs-menu > li").removeClass("active");
  //   $(this).closest("li").addClass("active");
  //   var index = $(this).closest("li").index();
  //   $(".tab-content-wrap .tab-content").removeClass("active");
  //   $(".tab-content-wrap .tab-content").eq(index).addClass("active");

  //   var selectedTab = $(this).closest("li").data("index");

  //   $("#tab-select").val(selectedTab);
  //   $("#tab-select").trigger("change");
  // });

  // $("#tab-select").on("change", function (e) {
  //   var selectedTab = $(this).val();
  //   var index = parseInt($(this).val()) - 1;

  //   $(".tabs-menu > li").removeClass("active");
  //   $(".tabs-menu > li").eq(index).addClass("active");
  //   $(".tab-content-wrap .tab-content").removeClass("active");
  //   $(".tab-content-wrap .tab-content").eq(index).addClass("active");
  // });

  // $(".section-container .sections").on("click", function () {
  //   $(".section-container .sections").removeClass("active");
  //   $(this).addClass("active");
  // });

  // $(".links button").hover(function () {
  //   $(".links button").removeClass("active");
  //   $(this).addClass("active");
  //   var value = $(this).attr("data-src");
  //   $(".hover-img-wrap img").attr("src", value);
  // });

  // gsap.to(".text-animate svg", {
  //   scale: 72,
  //   duration: 4,
  //   x: "27%",
  //   scrollTrigger: {
  //     scrub: -1,
  //     start: "top top",
  //     end: "bottom",
  //     pin: ".text-animate",
  //   },
  //   onComplete: function () {
  //     $(".gsap-wrapper").addClass("hidden");
  //     $(".animate-wrap").addClass("visible");
  //   },
  //   onUpdate: function () {
  //     if ($(".gsap-wrapper").hasClass("hidden")) {
  //       $(".gsap-wrapper").removeClass("hidden");
  //       $(".animate-wrap").removeClass("visible");
  //     }
  //   },
  // });

  // $(window).scroll(function () {
  //   var sticky = $(".fixed-header"),
  //     scroll = $(window).scrollTop();

  //   if (scroll >= 10) sticky.removeClass("fix");
  //   else sticky.addClass("fix");
  // });

  // gsap.to(".our-winners .wrapper", {
  //   opacity: 0.4,
  //   scale: 0.4,
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: ".animate-wrap",
  //     scrub: -1,
  //     start: "top top",
  //   },
  // });

  // $(window)
  //   .scroll(function () {
  //     var $window = $(window),
  //       $body = $(".infos-wrap"),
  //       $panel = $(".info");

  //     var scroll = $window.scrollTop() + $window.height() / 3;

  //     $panel.each(function () {
  //       var $this = $(this);

  //       if (
  //         $this.position().top <= scroll &&
  //         $this.position().top + $this.height() > scroll
  //       ) {
  //         $body.removeClass(function (index, css) {
  //           return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
  //         });
  //         $body.addClass("color-" + $(this).data("color"));
  //       }
  //     });
  //   })
  //   .scroll();

  // AOS.init();
});
