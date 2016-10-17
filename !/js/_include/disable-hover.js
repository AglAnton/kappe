//===============================================
//IMPROVING SITE PERFORMANCE
//===============================================
$(document).ready(function(){
	//add class 'disable-hover' with property pointer-events:none on window`s scroll event
	var body = $('body'),
		timer;

	$(window).on('scroll', function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) body.addClass('disable-hover')
		timer = setTimeout(function(){body.removeClass('disable-hover')},200);
	});
});