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

  $("#nextBtn, #nextChevron").click(function () {
    $("#testForm").validate({
      rules: {
        firstName: {
          required: true
        },
        status: {
          required: true
        },
        fonction: {
          required: true
        },
        age: {
          required: true
        },
        level: {
          required: true
        },
        email: {
          required: true
        },
      },
      messages: {
        firstName: {
          required: "firstName required",
        },
      }
    });
    if ((step < 6) && $("#testForm").valid()) {
      step++
      handleStep(step)
    }
  })

  $("#prevChevron").click(function () {
    step--
    handleStep(step)
  })

  function handleStep(step) {
    if (step === 1) {
      $("#prevChevron").hide();
      $("#step1").addClass("active");
      $("#step2").removeClass('active');
      $("#submitBtn > #done-content").hide();
      $(".formulaire__text-small").hide();
      $("#submitBtn").hide();
    }
    if (step === 2) {
      $("#prevChevron").show();
      $("#step1").removeClass('active');
      $("#step2").addClass("active");
      $("#step3").removeClass('active');
    }
    if (step === 3) {
      $("#step2").removeClass('active');
      $("#step3").addClass("active");
      $("#step4").removeClass('active');
    }
    if (step === 4) {
      $("#step3").removeClass('active');
      $("#step4").addClass("active");
      $("#step5").removeClass('active');
    }
    if (step === 5) {
      $("#step4").removeClass('active');
      $("#step5").addClass("active");
      $("#step6").removeClass('active');
      $("#nextChevron").show();
      $("#nextBtn").hide();
      $(".formulaire__text-small").hide();
    }
    if (step === 6) {
      $(".formulaire__nav-btn#nextBtn").hide();
      $("#step5").removeClass('active');
      $("#step6").addClass("active");
      $("#nextChevron").hide();
      $("#submitBtn").show();
      $(".formulaire__text-small").show();
    }
  }

});
