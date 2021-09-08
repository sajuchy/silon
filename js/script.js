$(document).ready(function(){
      // wow plugin
      var wow = new WOW(
        {
          boxClass:     'wow',     
          animateClass: 'animated', 
          offset:       0,          
          mobile:       true,       
          live:         true,       
          callback:     function(box) {
            
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();

    // slick slider
    $('.all').slick({
      autoplay: true,
      centerMode: true,
      centerPadding: '4',
      autoplaySpeed:1000,
      infinite: true,
      speed: 1000,
      slidesToShow:3,
      arrows:false,
      
      responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0',
              slidesToShow:2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1
            }
          }
        ]
    });

    
})