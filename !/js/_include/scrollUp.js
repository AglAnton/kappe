//===============================================
//SCROLL-UP BUTTON
//===============================================
(function($){
	
if($('html').hasClass('no-fixed')) return;

//main settings
var $scrollBlock = $('.page-wrap'),
	anchorName = 'top';

//add scroll-button in document
var scrollButton = '<a href="#'+anchorName+'" id="scrollButton" class="scroll-button"/>';
$('body').append(scrollButton);

//add scroll-block id with anchorName
$scrollBlock.attr('id', anchorName);

//show|hide scroll-button
var $scrollButton = $('#scrollButton');
$('body').scroll(function(){
	if(Math.abs($scrollBlock.offset().top) > $(window).height()){
		if($scrollButton.is(':hidden'))
			$scrollButton.fadeIn(400);
	}else{
		if($scrollButton.is(':visible'))
			$scrollButton.fadeOut(400);
	}
});

//add body-shadow in document
$('body').append("<div id='bodyShadow', class='body-shadow'/>");

//show|hide body/shadow
var bodyShadow = $('#bodyShadow');
$scrollButton.on('click', function(e){
	e.preventDefault();
	bodyShadow.show().addClass('active');
	setTimeout(function(){
		bodyShadow.hide().removeClass('active');
		window.location.hash = anchorName;
		window.location.hash = '';//for older browsers
		history.pushState('', document.title, window.location.pathname);
	},200);
});

})(jQuery);