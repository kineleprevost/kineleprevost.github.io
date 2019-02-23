
    jQuery(function ($) {
        $(document).ready(function () {
          "use strict";
          //enabling stickUp on the '.navbar-wrapper' class
          $('.navbar-wrapper').stickUp({
            parts: {
              0: 'banner',
              1: 'team',
              2: 'technics',
              3: 'services',
              4: 'testimonial',
              5: 'contact'
            },
            itemClass: 'menuItem',
            itemHover: 'active',
            topMargin: 'auto'
          });
  
          // run rlightbox
          $(".lb").rlightbox();
          $(".lb_title-overwritten").rlightbox({
            overwriteTitle: true
          });
  
          
  
          //Home Testimonial 
          var activeImage;
          var getmaxHeight = 0;
          $(".testimonialText li").each(function (index, element) {
            if ($(this).height() > getmaxHeight) {
              getmaxHeight = $(this).height();
              $(".footerTopContent").height(getmaxHeight);
            }
          });
  
          $(".testimonialText li").fadeTo("fast", 0);
          $(".testimonialText li:first").fadeTo("fast", 1);
          $(".imageSlide .imageBox").removeClass("activeImage");
          $(".imageSlide .imageBox:first").addClass("activeImage");
          $(".imageSlide .imageBox").mouseenter(function () {
            if (!$(this).hasClass("activeImage")) {
              var gi = $(this).index();
              //console.log(gi);
              $(".imageSlide .imageBox").removeClass("activeImage");
              $(this).addClass("activeImage");
              $(".testimonialText li").fadeTo("fast", 0);
              $(".testimonialText li:eq(" + gi + ")").fadeTo("fast", 1);
            }
          })
        });
      });
(function($) { 		
	 "use strict";
	 
	 $('.slide').prepend('<div class="patternOverlay"></div>');	
	
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});
	
	$('.skillbar').each(function(){
		$(this).find('.skill-bar-percent').animate({
			left:$(this).attr('data-percent')
		},6000);
	});
	
	$('.skillbar').each(function(){
		$(this).find('.skill-bar-percent').text($(this).attr('data-percent'));
	});
	 
	// for mobile nav js	
	$('button.navbar-toggle').on( "click", function() {
		$(this).toggleClass('active');
		$('.navbar-collapse').slideToggle();
	});			


	$('.navbar-collapse li a').on( "click", function() {
		$('.navbar-collapse.collapse').removeClass('active');
		$('button.navbar-toggle').removeClass('active');
	});	

	
	$(".menuItem").on({
    mouseenter: function () {
        $(this).addClass('active');	
    },
    mouseleave: function () {
        $(this).removeClass('active');	
    }
	});
	
	
	if($(window).width()<1000){
		$('.navbar-nav li a').on( "click", function() {
			$('.navbar-collapse.collapse').removeClass('in');										 
		});
	}


// for portfoli filter jquary
$(window).load(function(){
	
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.	
						
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
	
    var $container2 = $('.portfolioBlog');
    $container2.isotope({});
 
    $('.portfolioFilter a').on( "click", function() {
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 	


});

	// Somth page scroll
    $('#navigation a, .smooth, a[href^="#theCouple"]').on( "click", function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });



}(jQuery));


