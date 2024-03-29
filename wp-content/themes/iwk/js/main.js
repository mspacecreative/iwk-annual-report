(function ($) {
	
	window.site = {}
	$(document).ready(function() {
	
		window.site.pluginsController = {
			aos : "",
			counterUp : $('.counter')
		};
		
		window.site.pluginsController.aos = AOS;
		
		window.site.pluginsController.aos.init({
				easing: 'ease-in-out-sine'
		});
		
		window.site.pluginsController.counterUp.counterUp({
			delay: 10,
			time: 1000
		});
			
		$(window).bind('resize', function () {
			window.site.pluginsController.aos.refresh();
		});
		
	});
	
	// MOBILE NAVIGATION TOGGLE
	$('.toggle').click(function() {
		$('body').toggleClass('reveal');
		
		if ( $('.financial-links').css('display') == 'none' ) {
			$(this).css('z-index', '99999');
		}
	});
	
	// HEADER SHRINK ON SCROLL
	function headerAdjust() {
		if ($(this).scrollTop() > 200) {
		    $('header, .toggle').addClass('shrink');
		} else {
		    $('header, .toggle').removeClass('shrink');
		}
	}
	
	// WINDOW SCROLL
	$(window).scroll(function () {
		headerAdjust();
		galleryControl();
	});
	
	// SMOOTH SCROLL
	$('a[href*=#]:not([href=#])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top-50
	      }, 1000);
		  return false;
	    }
	  }
	});
	
	$('nav li a').click(function () {
		$('body').toggleClass('reveal menu');
		$('#nav-icon, .toggle').toggleClass('open');
	});
	
	// GOVERNANCE SLIDEOUT
	$('.view-list-button').click(function() {
		$('.governance-slideout').toggleClass('view');
	});
	
	$('.slideout-close').click(function() {
		$('.governance-slideout').toggleClass('view');
	});
	
	// ACCORDION FUNCTIONALITY
	$('.accordion-container').find('.question').click(function(){
	    $(this).next().slideToggle();
	    $(this).toggleClass('switch');
	    $(".answer").not($(this).next()).slideUp();
	    $(this).find('.fa').toggleClass('rotate');
	    $('.question').not(this).each(function() {
	    	$(this).find('.fa').removeClass('rotate');
	    	$(this).removeClass('switch');
	    });
	});
	
	// SLICK SLIDER
	$('.carousel').slick({
	    dots: true,
		arrows: true,
		adaptiveHeight: true,
		slickPause: true,
		autoplaySpeed: 6000,
	});
	
	function galleryControl() {
		if ( $('.carousel').visible( true ) ) {
			$('.carousel').slick('slickPlay');
		} else {
			$('.carousel').slick('slickPause');
		}
	}
	
	// CONTROL VIDEO PLAY
	/*$(window).scroll(function(e)
	  {
	    var offsetRange = $(window).height() / 3,
	        offsetTop = $(window).scrollTop() + offsetRange + $("video").outerHeight(true),
	        offsetBottom = offsetTop + offsetRange;
	
	    $("video").each(function () { 
	      var y1 = $(this).offset().top;
	      var y2 = offsetTop;
	      if (y1 + $(this).outerHeight(true) < y2 || y1 > offsetBottom) {
	        this.play(); 
	      } else {
	        this.pause();
	      }
	    });
	});*/
	
	// OUR TEAM HOVER STATES
	if ($('.our-team-container').css('position') == 'relative' ) {
		$('.our-team-window').hover(function () {
			$(this).toggleClass('reveal');
		});
	} else if ($('.our-team-container').css('position') == 'static' ) {
		$('.our-team-container').find('.our-team-window').on('click', function () {
			$(this).toggleClass('reveal');
			$(this).children('p').slideToggle();
			$('.our-team-window').not(this).each(function() {
				$(this).removeClass('reveal');
				$(this).children('p').slideUp();
			});
		});
	}
	
	function homeWrapTopPadding() {
		if ($('.our-team-container').css('position') == 'static' ) {
			$('#home').css('padding-top', $('header').outerHeight());
		}
	}
	
	// DOC READY
	$(document).ready(function () {
		changeToggle();
		homeWrapTopPadding();
		errorPadding();
		
		$('.launched .inner_contents').hide();
	});
	
	// WINDOW LOAD
	$(window).load(function () {
		$('.inner_contents').show();
		if ( $('body').hasClass('launched') ) {
			$('.inner_contents').hide();
		}
	});
	
	// WINDOW RESIZE
	$(window).resize(function () {
		changeToggle();
		homeWrapTopPadding();
		errorPadding();
	});
	
	// CONTACT BOX SLIDE-OUT
	$('.contact-slide').click(function() {
		$('.contact-slideout').toggleClass('open');
		$('body').toggleClass('menu');
	});
	
	$('.contact-toggle').click(function() {
		$('.contact-slideout').toggleClass('open');
		$('body').toggleClass('menu');
	});
	
	$('.toggle').click(function() {
		$(this).toggleClass('open');
		$('body').toggleClass('menu');
		$('#nav-icon').toggleClass('open');
	});
	
	function changeToggle() {
		var mathStuff = $(window).width() - 1600;
		if (window.matchMedia("(min-width: 1600px)").matches) {
			$('.toggle').css('right', mathStuff / 2);
		} else {
			$('.toggle').css('right', '5%');
		}
	}
	
	// FULL FINANCIALS OVERLAY
	$('.financial-views').click(function () {
		$('body').toggleClass('menu');
		
		if ( $('body').hasClass('menu') ) {
			$('.financial-links').fadeIn();
		} else {
			$('.financial-links').fadeOut();
		}
		
		if ( $('.financial-links').css('display') == 'block' ) {
			$('.toggle').css('z-index', '999');
			
			// OVERLAY CLOSE ALL ON CLICK
			$('.overlay').click(function () {
				$('body').removeClass('menu');
				$('.financial-links').fadeOut();
			});
			
		} else {
			$('body').addClass('menu');
			$('.financial-links').fadeIn();
		}
	});
	
	// OVERLAY CLOSE ALL ON CLICK
	$('.overlay').click(function () {
		$('body').removeClass('menu reveal');
		$('.contact-slideout, .toggle').removeClass('open');
	});
	
	// ERROR PAGE WRAP PADDING
	function errorPadding() {
		$('.error404 .wrap').css('padding-top', $('header').outerHeight());
	}

})(jQuery);