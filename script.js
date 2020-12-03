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
  var step = 3
  handleStep(step)

  $("#testForm").submit(function (event) {
    event.preventDefault();
    if ($("#testForm").valid()) {
      step++
      handleStep(step)
    }
  });

  $("#prevBtn").click(function () {
    step--
    handleStep(step)
  })

  function handleStep(step) {
    if (step === 1) {
      $("#prevBtn").hide();
      $("#step1").show();
      $("#step2").hide();
      $("#step3").hide();
      $("#step4").hide();
      $("#step1 input").prop('required', true);
    }
    if (step === 2) {
      $("#prevBtn").show();
      $("#step1").hide();
      $("#step2").show();
      $("#step3").hide();
      $("#step4").hide();
      $("#step2 input").prop('required', true);
    }
    if (step === 3) {
      $("#step1").hide();
      $("#step2").hide();
      $("#step3").show();
      $("#step4").hide();
      $("#step3 input").prop('required', true);
      $("#step3 select").prop('required', true);
    }
    if (step === 4) {
      $("#step1").hide();
      $("#step2").hide();
      $("#step3").hide();
      $("#step4").show();
      $("#step4 input").prop('required', true);
      $("#nextBtn").hide();
    }
  }

});
