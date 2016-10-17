//PRELOADER
$(window).load(function(){$('#preloader').fadeOut(800);});
//TOUCH EVENT
var $click = $.support.touch ? "tap" : "click";
"use strict";
//@prepros-append _include/no-fixed.js
//@prepros-append _include/disable-hover.js
//@prepros-append _include/placeholder.js
//@prepros-append _include/scrollUp.js
//@prepros-append _plugins-init.js
$(document).ready(function(){

	//INFO-BUTTON
	$('#infoButton').on($click, function(e) {
		e.preventDefault();
		$(this).siblings().fadeToggle();
	});
	
	//CONTACT-BUTTON
	var $contactBlock = $('.contact-block');

	$('#contactButton').on($click, function(e) {
		e.preventDefault();
		$contactBlock.fadeToggle();
	});

	$(window).resize(function(){
		if ($(window).width() > 1024){
			$contactBlock.removeClass('full-width');
			if($contactBlock.is(':hidden'))
				$contactBlock.fadeIn();
		}else{
			if(!$contactBlock.hasClass('full-width'))
				$contactBlock.hide().addClass('full-width');
		}
	});

});
