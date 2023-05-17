$(document).ready(function () {
  $(this).scrollTop(0);
  // Menu toggle
  $(".menu-show").click(function () {
    $("body").toggleClass("modal-open");
    $(this).toggleClass("active");
    $(".stepper").toggleClass("index");
  });

  // Carrer Filters
  var selectedFilters = [];
  $('.filters-buttons .btn-check').click(function (event) {
    if ($(this).is(':checked')) {
      selectedFilters.push(this.id);
    } else {
      selectedFilters.splice(selectedFilters.indexOf(this.id), 1);
    }
    if (selectedFilters.length === 0) {
      $(".filters a").show();
    } else {
      $(".filters a").hide();
      selectedFilters.forEach((f) => {
        $("." + f).show()
      })
    }

  })

  // Show/Hide scroll to top button  
  var scroll = $(window).scrollTop();
  if (scroll >= 20) {
    $(".scroll-top").addClass("d-block");
  }

  // Add header background on load
  if ($(".pad-top").hasClass("bg-1")) {
    $(".pad-top").closest("body").find(".main-header").removeClass("bg-white").addClass("bg-1");
  }

  // add background on scroll
  $(window).scroll(function () {
    var divHeight = $(".main-header.bg-1 ~ .bg-1").outerHeight();
    var scroll = $(window).scrollTop();
    if (scroll >= divHeight) {
      $(".main-header.bg-1").addClass("bg-white");
    } else {
      $(".main-header.bg-1").removeClass("bg-white");
    }

    if (scroll >= 20) {
      $(".scroll-top").addClass("d-block");
    } else {
      $(".scroll-top").removeClass("d-block");
    }

  });


  // industries page scroll
  if (window.location.pathname.includes("industries")) {
    $(window).scroll(function () {

      var scroll = $(window).scrollTop();
      var stepper = $(".stepper").offset().top - 180;
      var healthcare = $("#healthcare").offset().top - 100;
      var logistics = $('#logistics').offset().top - 102;
      var transport = $('#transport').offset().top - 104;
      var mechanical = $('#mechanical').offset().top - 106;
      var hardware = $('#hardware').offset().top - 108;
      var animation = $('#animation').offset().top - 110;
      var finance = $('#finance').offset().top - 112;

      if (scroll > healthcare && scroll < logistics) {
        $(".stepper .step").removeClass("completed");
        $(".step.healthcare").addClass("completed");
      }
      else if (scroll > logistics && scroll < transport) {
        $(".stepper .healthcare").removeClass("completed");
        $(".step.logistics").addClass("completed");
      }
      else if (scroll > transport && scroll < mechanical) {
        $(".stepper .step").removeClass("completed");
        $(".step.transport").addClass("completed");
      }
      else if (scroll > mechanical && scroll < hardware) {
        $(".stepper .step").removeClass("completed");
        $(".step.mechanical").addClass("completed");
      }
      else if (scroll > hardware && scroll < animation) {
        $(".stepper .step").removeClass("completed");
        $(".step.hardware").addClass("completed");
      }
      else if (scroll > animation && scroll < finance) {
        $(".stepper .step").removeClass("completed");
        $(".step.animation").addClass("completed");
      }
      else if (scroll > finance) {
        $(".stepper .step").removeClass("completed");
        $(".step.finance").addClass("completed");
      }
      else if (scroll > stepper) {
        $(".stepper").addClass("active");
      }
      else {
        $(".stepper .step").removeClass("completed");
        $(".step.information").addClass("completed");
        $(".stepper").removeClass("active");
      }
    });

    
    var step1 = $("#information").offset().top - 160;
    var step2 = $("#healthcare").offset().top - 70;
    var step3 = $('#logistics').offset().top - 70;
    var step4 = $('#transport').offset().top - 70;
    var step5 = $('#mechanical').offset().top - 70;
    var step6 = $('#hardware').offset().top - 70;
    var step7 = $('#animation').offset().top - 70;
    var step8 = $('#finance').offset().top - 70;

    
    $(".step1").click(function () {
      $(window).scrollTop(step1);
    });

    $(".step2").click(function () {
      $(window).scrollTop(step2);
    });

    $(".step3").click(function () {
      $(window).scrollTop(step3);
    });

    $(".step4").click(function () {
      $(window).scrollTop(step4);
    });

    $(".step5").click(function () {
      $(window).scrollTop(step5);
    });

    $(".step6").click(function () {
      $(window).scrollTop(step6);
    });

    $(".step7").click(function () {
      $(window).scrollTop(step7);
    });

    $(".step8").click(function () {
      $(window).scrollTop(step8);
    });


  }


    // Hide header on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      
      // Make scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If scrolled down and past the navbar, add class .nav-up.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.stepper').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.stepper').removeClass('nav-up').addClass('nav-down');
          }
      }
    
      lastScrollTop = st;
  }


});

// Open mail to
function openMailbox() {
  var a = document.createElement("a");
  a.setAttribute("href", "mailto:hello@rivercitycorp.in")
  a.setAttribute("hidden", true)
  a.click()
}

// Open mail to
function openCareerMailbox() {
  var a = document.createElement("a");
  a.setAttribute("href", "mailto:careers@rivercitycorp.in")
  a.setAttribute("hidden", true)
  a.click()
}

// Scroll top on click
function scrollWin() {
  window.scrollTo(0, 0);
}

// Open phone to
function openPhonebox() {
  var a = document.createElement("a");
  a.setAttribute("href", "tel:+91 987 669 2272")
  a.setAttribute("hidden", true)
  a.click()
}

