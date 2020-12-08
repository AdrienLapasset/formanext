$(document).ready(function () {

  // Toggle search bar
  $(".search__btn").click(function () {
    $(".search").toggleClass("search--active")
  });

  // Clear search
  $('.search__clear').click(function () {
    $('.search__input').val('').trigger('change').focus();
    if ($(window).width() < 992) {
      $(".search").toggleClass("search--active")
    }
  });

  // Accordion
  var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s"
  };
  $("#accordion").accordion({
    collapsible: true,
    icons: icons,
    heightStyle: "content"
  });

});
