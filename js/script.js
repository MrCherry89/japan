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

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-999-9",
  });

  $("#subscribe-form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: {
        required: "Укажите корректный E-mail",
      },
    },
  });

  $(".catalog-item .head").on("click", function () {
    $(this).closest(".catalog-item").find(".body").toggleClass("open");
  });

  $(".product-count .btn-minus").addClass("btn-disabled");

  $(".product-count .input-number").on("change", function () {
    if ($(this).val() == 1) {
      $(this)
        .closest(".product-count")
        .find(".btn-minus")
        .addClass("btn-disabled");
    } else {
      $(this)
        .closest(".product-count")
        .find(".btn-minus")
        .removeClass("btn-disabled");
    }
  });

  $(".btn-minus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt($(this).closest(".product-count").find(".input-number").val()) -
      1;
    $(this)
      .closest(".product-count")
      .find(".input-number")
      .val(number > 0 ? number : 1)
      .change();
  });

  $(".btn-plus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt($(this).closest(".product-count").find(".input-number").val()) +
      1;
    $(this)
      .closest(".product-count")
      .find(".input-number")
      .val(number)
      .change();
  });

  $(".filter-btn").on("click", function () {
    $(this)
      .closest(".catalog-filters-wrap")
      .find(".catalog-scroll-wrap")
      .addClass("open");
    $("body, html").addClass("overflow");
  });

  $(".close-filters").on("click", function () {
    $(this).closest(".catalog-scroll-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
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

  $(".menu2 li > button").on("click", function () {
    $(this).closest("li").find(".sub-menu").addClass("show");
    $(".menu-wrap").addClass("remove");
  });

  $(".sub-menu .info b").on("click", function () {
    $(this).closest(".sub-menu").find(".links").addClass("show");
  });

  $(".sub-menu .back").on("click", function () {
    $(this).closest(".sub-menu").removeClass("show");
  });

  $(".sub-menu .info .back").on("click", function () {
    $(this).closest(".links").removeClass("show");
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

  $(".slider-for2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav2",
  });
  $(".slider-nav2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for2",
    dots: false,
    arrows: false,
    focusOnSelect: true,
  });

  $(".open-btn").on("click", function (e) {
    e.stopPropagation();
    $(this).closest(".icons").find(".hide-wrap").toggleClass("open");
  });

  $(".icons button .hide-wrap").on("click", function (e) {
    e.stopPropagation();
  });

  $(".favorite").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".read-more").on("click", function () {
    $(this).hide();
    $(this).closest(".text-hide").find("p").addClass("overflow");
  });

  $(document).on("click", function () {
    $(".icons button .hide-wrap").removeClass("open");
  });

  $(".accordion-list-item .item-heading").on("click", function (e) {
    e.preventDefault();
    if ($(this).find("span").hasClass("minus")) {
      $(this).find("span").removeClass("minus");
    } else {
      $(".accordion-list-item span").removeClass("minus");
      $(this).find("span").addClass("minus");
    }
    $(".accordion-list-item").removeClass("opened");
    $(".item-body").removeClass("active");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body")
      .addClass("active");
    $(this).closest(".accordion-list-item").addClass("opened");
    $(".item-body:not(.active)").slideUp();
    $(".accordion-list-item:not(.opened)").removeClass("active");
    $(this).closest(".accordion-list-item").find(".item-body").slideToggle();
    $(this).closest(".accordion-list-item").toggleClass("active");
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

  $(".tab-menu li button").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });

  $(".password-icon").on("click", function () {
    $(this).closest(".input-wrap").find("input").attr("type", "text");
    $(this).addClass("fill");
  });

  $(".like-wrap button").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".blog-slider2").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: $(".blog-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".blog-slider-wrap .slider-navigation .slick-next"),
  });

  $(".cards-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  });
});
