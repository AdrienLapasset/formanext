$(document).ready(function () {

  // Toggle search bar
  $(".search__btn").click(function () {
    $(".search").toggleClass("search--active")
  });

  console.log($(window).width())
  // Clear search
  $('.search__clear').click(function () {
    $('.search__input').val('').trigger('change').focus();
    if ($(window).width() < 992) {
      $(".search").toggleClass("search--active")
    }
  });

});
