$(document).ready(function () {


  //fancybox
  $(".photo a").fancybox();


  //SLICK-JS-banner section
  $('.background-images').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    autoplayspeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseonhover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  //in-view-js
  // var $animation_elements = $('.animation-element');
  // var $window = $(window);

  // function check_if_in_view() {
  //   var window_height = $window.height();
  //   var window_top_position = $window.scrollTop();
  //   var window_bottom_position = (window_top_position + window_height);

  //   $.each($animation_elements, function() {
  //     var $element = $(this);
  //     var element_height = $element.outerHeight();
  //     var element_top_position = $element.offset().top;
  //     var element_bottom_position = (element_top_position + element_height);

  //     if ((element_bottom_position >= window_top_position) &&
  //         (element_top_position <= window_bottom_position)) {
  //       $element.addClass('in-view');
  //     } else {
  //       $element.removeClass('in-view');
  //     }
  //   });
  // }
  // $window.on('scroll resize', check_if_in_view);
  // $window.trigger('scroll');
  //-------//

  //parallax//
  $('.parallax').parallax({ imageSrc: "images/services-bg.png" });


  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 380,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fffd76"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#fffd76",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
//smooth js
$('.list').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 500); // The number here represents the speed of the scroll in milliseconds
      return false;
    }
  }
});


  //counter
  $(window).on("load resize", function () {

    var counters = $(".num");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function (start, value, id) {
      var localStart = start;
      setInterval(function () {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 4);
    }

    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }

  });

  // -------------------------------STICKY-NAVBAR--------------------------------

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('body').addClass("sticky");
    }
    else {
      $('body').removeClass("sticky");
    }
  });

  // -----------------------------------MOBILE-MENU-------------------------------
  $(".menubtn").click(function () {
    $('.menuholder').addClass("menuholderadd");
  });
  $(".cross").click(function () {
    $('.menuholder').removeClass("menuholderadd");
  });

  $(".hashchild .newadd").click(function () {
    $(this).parents('.hashchild').children('.submenu').slideToggle();
  });


  //   //mouyse-move-parallax//
  // document.addEventListener("mousemove", parallax);
  //     const elem = document.querySelector("#parallax");
  //     // Magic happens here
  //     function parallax(e) {
  //         let _w = window.innerWidth/2;
  //         let _h = window.innerHeight/2;
  //         let _mouseX = e.clientX;
  //         let _mouseY = e.clientY;
  //         let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
  //         let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
  //         let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
  //         let x = `${_depth3}, ${_depth2}, ${_depth1}`;
  //         console.log(x);
  //         elem.style.backgroundPosition = x;
  //     }

  //wow
  new WOW().init();


});
