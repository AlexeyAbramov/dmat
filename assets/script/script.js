$(document).ready(function () {
  $(".portfolio__list").slick({
    infinite: true,
    dots: true,
    prevArrow: '<button class="portfolio__prev arrow"></button>',
    nextArrow: '<button class="portfolio__next arrow"></button>',
  });
  $('.portfolio__item').click(function(){
    $(this).toggleClass('active');
  })


  $("#menu").click(function () {
    $(this).toggleClass("open");
    $("body").toggleClass("overflow");
    $(".header,.header__nav").toggleClass("open");
    $(".nav-header__item").on("click", function () {
      $("#menu").removeClass("open");
      $("body").removeClass("overflow");
      $(".header,.header__nav").removeClass("open");
    });
  });
});
