$(document).ready(function () {

  // Toggle search bar
  $(".search__btn").click(function () {
    $(".search").toggleClass("search--active")
  });

  console.log($(window).width())
  // Clear search
  $('.search__clear').click(function () {
    if ($(window).width() >= 992) {
      $('.search__input').val('').trigger('change').focus();
    } else {
      $(".search").toggleClass("search--active")
    }
  });

});
