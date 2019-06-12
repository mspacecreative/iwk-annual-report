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
	
	/*$('.our-team-window').click(function() {
		$(this).toggleClass('reveal');
		if ( $(this).hasClass('reveal') ) {
			$(this).children('p').fadeIn();
		} else {
			$(this).children('p').fadeOut();
		}
	});*/
	
	// HEADER SHRINK ON SCROLL
	function headerAdjust() {
		if ($(this).scrollTop() > 200) {
		    $('header').addClass('shrink');
		} else {
		    $('header').removeClass('shrink');
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
		  $('body').toggleClass('reveal');
		  return false;
	    }
	  }
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
	    $(this).find('.fas').toggleClass('rotate');
	    $('.question').not(this).each(function() {
	    	$(this).find('.fas').removeClass('rotate');
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
	$(window).scroll(function(e)
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
	});
	
	// OUR TEAM HOVER STATES
	function checkStyle() {
		if ($('.our-team-container').css('position') == 'relative' ) {
			$('.our-team-window').hover(function () {
				$(this).toggleClass('reveal');
			});
		} else {
			$('.our-team-container').find('.our-team-window').on('click touch', function (e) {
				e.preventDefault();
				$(this).next().removeClass('reveal');
				$(this).toggleClass('reveal');
				$(this).next().children('p').slideUp();
				$(this).children('p').slideToggle();
				$('.our-team-window').not(this).each(function() {
					$(this).removeClass('reveal');
					$(this).children('p').slideUp();
				});
			});
		}
	}
	
	// DOC READY
	$(document).ready(function () {
		checkStyle();
		$(window).resize(checkStyle);
	});
	
	// REFRESH PAGE ON WINDOW RESIZE
	$(window).bind('resize', function(e) {
		if (window.RT) clearTimeout(window.RT);
		window.RT = setTimeout(function() {
	    this.location.reload(false);
		});
	});

})(jQuery);