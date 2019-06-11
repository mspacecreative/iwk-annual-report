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
	
	// MOBILE NAVIGATION TOGGLE
	$('.toggle').click(function() {
		$('body').toggleClass('reveal');
	});
	
	$('.our-team-window').click(function() {
		$(this).toggleClass('reveal');
		if ( $(this).hasClass('reveal') ) {
			$(this).children('p').fadeIn();
		} else {
			$(this).children('p').fadeOut();
		}
	});
	
	// EQUALIZE COLUMNS
	$('.equalize').css('height', $('.target_height').outerHeight());
	
	// HEADER SHRINK ON SCROLL
	function headerAdjust() {
		if ($(this).scrollTop() > 200) {
		    $('header').addClass('shrink');
		} else {
		    $('header').removeClass('shrink');
		}
	}
	
	// WINDOW SCROLL
	$(window).scroll(function() {
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
	
});