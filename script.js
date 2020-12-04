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
  initStep(step)

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
      nextStep(step)
    }
  })

  $("#prevChevron").click(function () {
    step--
    prevStep(step)
  })

  function initStep(step) {
    $("#nextChevron").addClass('active');
    $("#submitBtn > #done-content").hide();
    $(".formulaire__text-small").hide();
    $("#submitBtn").hide();
    $("#step1").css({ "display": "flex", "opacity": "1", "left": "0px" });
  }

  function nextStep(step) {
    if (step === 2) {
      $("#prevChevron").addClass("active");
      animateNext(step);
    }
    if (step === 3) {
      animateNext(step);
    }
    if (step === 4) {
      animateNext(step);
    }
    if (step === 5) {
      $("#nextChevron").addClass("active");
      $(".formulaire__text-small").hide();
      animateNext(step);
    }
    if (step === 6) {
      $(".formulaire__nav-btn#nextBtn").hide();
      $("#nextChevron").removeClass('active');
      $("#submitBtn").show();
      $(".formulaire__text-small").show();
      $("#nextBtn").hide();
      animateNext(step);
    }
  }

  function prevStep(step) {
    if (step === 1) {
      $("#prevChevron").removeClass('active');
      animatePrev(step)
    }
    if (step === 2) {
      animatePrev(step)
    }
    if (step === 3) {
      animatePrev(step)
    }
    if (step === 4) {
      animatePrev(step)
    }
    if (step === 5) {
      $("#nextChevron").addClass("active");
      $(".formulaire__text-small").hide();
      $("#submitBtn").hide();
      $("#nextBtn").show();
      animatePrev(step)
    }
  }

  function animateNext(step) {
    $(`#step${step - 1}`).animate({
      left: '-20px',
      opacity: '0',
    }, 400, function () {
      $(this).css({ "left": "-20px" });
      $(this).hide();
      $(`#step${step}`).css("display", "flex");
      $(`#step${step}`).animate({
        left: '0',
        opacity: '1',
      }, 400);
    });
  }

  function animatePrev(step) {
    $(`#step${step + 1}`).animate({
      left: '20px',
      opacity: '0',
    }, 400, function () {
      $(this).hide();
      $(`#step${step}`).css({ "display": "flex" });
      $(`#step${step}`).animate({
        left: '0',
        opacity: '1',
      }, 400);
    });
  }


});
