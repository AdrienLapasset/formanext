$(document).ready(function () {

  jQuery.extend(jQuery.validator.messages, {
    required: "<img src='/assets/icons/chevron-small.svg'>Veuillez remplir ce champ",
    email: "<img src='/assets/icons/chevron-small.svg'>Adresse email incorrect",
  });

  var step = 1
  const bez = [.25, .8, .25, 1]
  initStep()

  $("#nextBtn, #nextChevron").click(function () {
    $("#testForm").validate({
      rules: {
        firstName: {
          required: true
        },
        lastName: {
          required: true
        },
        status: {
          required: true
        },
        function: {
          required: true
        },
        company: {
          required: true
        },
        effective: {
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
        phone: {
          required: true
        },
      },
      messages: {
        status: {
          required: "<img src='/assets/icons/chevron-small.svg'>Sélectionnez un élément dans la liste",
        },
        effective: {
          required: "<img src='/assets/icons/chevron-small.svg'>Sélectionnez un élément dans la liste",
        },
        age: {
          required: "<img src='/assets/icons/chevron-small.svg'>Sélectionnez un élément dans la liste",
        },
        level: {
          required: "<img src='/assets/icons/chevron-small.svg'>Sélectionnez un élément dans la liste",
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

  function initStep() {
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
    }, 400, $.bez(bez), function () {
      $(this).css({ "left": "-20px" });
      $(this).hide();
      $(`#step${step}`).css("display", "flex");
      $(`#step${step}`).animate({
        left: '0',
        opacity: '1',
      }, 400, $.bez(bez));
    });
  }

  function animatePrev(step) {
    $(`#step${step + 1}`).animate({
      left: '20px',
      opacity: '0',
    }, 400, $.bez(bez), function () {
      $(this).hide();
      $(`#step${step}`).css({ "display": "flex" });
      $(`#step${step}`).animate({
        left: '0',
        opacity: '1',
      }, 400, $.bez(bez));
    });
  }

});
