
var mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







$(document).ready(function(){
    $(".project-carousel").owlCarousel({
      loop:false,
      nav:true,
      dots:false,
      navText:[ "<i class='fa fa-caret-left'></i>",
                "<i class='fa fa-caret-right'></i>"],
      autoplay: true,
      autoplayHoverPause: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        767:{
          items:2
        },
        1000:{
          items:3
        },
        1200:{
            items:3
        }
      },

    });
   });