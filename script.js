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






  // Formulaire
  var step = 1
  handleStep(step)

  $("#testForm").submit(function (event) {
    event.preventDefault();
    if ($("#testForm").valid()) {
      step++
      handleStep(step)
    }
  });

  function handleStep(step) {
    if (step === 1) {
      $("#prevBtn").hide();
      $("#step1").show();
      $("#step2").hide();
      $("#step3").hide();
    }
    if (step === 2) {
      $("#step1").hide();
      $("#step2").show();
      $("#step3").hide();
    }
    if (step === 3) {
      $("#step1").hide();
      $("#step2").hide();
      $("#step3").show();
    }
  }

  $("#prevBtn").click(function () {

  })


});
