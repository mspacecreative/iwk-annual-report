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
	
(function ($) {
	
	// MOBILE NAVIGATION TOGGLE
	$('.toggle').click(function() {
		$('body').toggleClass('reveal');
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
	
	/*function equalColumns() {
		// EQUALIZE COLUMNS
		$('.equalize').height($('.target_height').height() - $('.orange-text').height());
	}
	
	// DOC READY
	$(document).ready(function () {
		equalColumns();
	});
	
	// WINDOW RESIZE
	$(window).resize(function () {
		equalColumns();
	});*/
	
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
	    autoplay: true,
		dots: true,
		arrows: true,
	});
	
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
	//function checkStyle() {
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
	//}
	
	/*function checkStyle() {
		if (window.matchMedia("(max-width: 1024px)").matches) {
			$('.our-team-container').find('.our-team-window').on('click', function () {
			  	$(this).toggleClass('reveal');
			  	$(this).children('p').slideToggle();
			  	$('.our-team-window').not(this).each(function() {
			  		$(this).removeClass('reveal');
			  		$(this).children('p').slideUp();
			  	});
			});
		  	
		} else {
			$('.our-team-window').hover(function () {
				$(this).toggleClass('reveal');
			});
		}
	}
	
	$(window).bind('resize', function(e)
	{
	  console.log('window resized..');
	  this.location.reload(false); /* false to get page from cache */
	  /* true to fetch page from server
	});*/
	
	// DOC READY
	$(document).ready(function () {
		//checkStyle();
		changeToggle();
		homeWrapTopPadding();
	});
	
	// WINDOW RESIZE
	$(window).resize(function () {
		//checkStyle();
		changeToggle();
		homeWrapTopPadding();
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
		$('.mobile-nav, .toggle').toggleClass('open');
		$('body').toggleClass('menu');
		$('#nav-icon').toggleClass('open');
	});
	
	function changeToggle() {
		var mathStuff = $(window).width() - 1600;
		if (window.matchMedia("(min-width: 1600px)").matches) {
			$('.toggle').css('right', mathStuff / 2);
		}
	}
	
	if ($('.our-team-container').css('position') == 'static' ) {
		function homeWrapTopPadding() {
			$('#home').css('padding-top', $('header').outerHeight());
		}
	}
	
	window.setInterval(function() {
	
	  var current = new Date();
	  var expiry = new Date("June 21, 2019 15:37:00")
	
	  if (current.getTime() > expiry.getTime()) {
	    $('.houdini').remove();
	
	  } else if (current.getTime() < expiry.getTime()) {
	    $('.houdini').show();
	  }
	
	}, 0);

})(jQuery);