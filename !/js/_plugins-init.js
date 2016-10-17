//===============================================
//plugins initialization
//===============================================
$(document).ready(function(){

//HOVER INFO
$('.item').each( function() {
	$(this).hoverdir({
		hoverElem : '.hover-info'
	});
});

//MOBILE MENU
var mobileMenuButton = $('#mmButton');

var mobileMenu = new $.slidebars({siteClose:0, siteLock:1});

function showMenu(){
	if($(window).width() > 640){
		$('html').removeClass('mm-active')
		if(!mobileMenu.active('left')){
			mobileMenu.open('left');
		}
		$('#sb-site').removeAttr('style');
	} else {
		$('html').addClass('mm-active');
		if(mobileMenu.active('left')){
			mobileMenu.close();
		}
	}
}

mobileMenuButton.on($click, function(){
	if(!$('#sb-slidebar').hasClass('sb-active')) mobileMenu.open('left');
	else mobileMenu.close();
});

showMenu();
$(window).on('resize',showMenu);

//IMG-POST FANCYBOX
$('.fancybox').fancybox({
	prevEffect: 'none',
	nextEffect: 'none',
	helpers: {
		overlay: {
			locked: false
		}
	}
});

//SKILLS
$('.jqbar').each(function(){
	var $this = $(this),
		blockWidth = $this.width(),
		label = $this.attr('data-label'),
		value = $this.attr('data-value'),
		speed = 1000;

	$this.jqbar({barLength:blockWidth, barWidth:32, label:label, value:value, barColor:'#e2e2e2', animationSpeed:speed});

	//bar width in %
	setTimeout(function(){
		var perBarWidth = $this.find('.bar-percent').text();
		$this.find('.bar-level').width(perBarWidth);
	},speed*3);
});

//CONTACT-MAP
if($('#contact-map').length){
	var myOptions = {
		center: new google.maps.LatLng(50.4062457,30.6119227),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true
	};

	var map = new google.maps.Map(document.getElementById("contact-map"), myOptions);

	var mapStyle = [
		{
			stylers: [
				{ saturation: -85}
			]
		}
	]

	map.setOptions({styles: mapStyle});
}

});

//==================================================
$(window).load(function(){

//TESTIMONIALS SLIDER
$('.testimonials .slider').bxSlider({
	pager:false,
	controls:false,
	auto:true,
	pause:10000,
	mode:'fade'
});

//GALLERY-POST SLIDER
$('.gallery-post .slider').bxSlider({
	pager:false,
	nextText: '<span class="slider-button icon-angle-right"></span>',
	prevText: '<span class="slider-button icon-angle-left"></span>',
	auto:true,
	pause:7000,
	mode:'fade'
});

//SINGLE-WORK|SINGLE-POST SLIDERS
$('.post-layout .post .slider').bxSlider({
	controls:false,
	auto:true,
	pause:7000,
	mode:'fade'
});

if($('.blog')) $(window).trigger('resize');

//SHUFFLE
var $grid = $('.items-wrap'),
	$filter = $('.filter a'),
	activeCls = 'active';

$grid.shuffle();

$filter.on($click, function(e) {
	e.preventDefault();

	var $this = $(this);

	if (!$this.hasClass(activeCls)) {
		$filter.removeClass(activeCls);
		$this.addClass(activeCls);

		if ($this.attr('data-filter-value') === 'all')
			return $grid.shuffle( 'shuffle', 'all' );

		var filter = $this.attr('data-filter-value');

		$grid.shuffle('shuffle', function($el){
			return $el.attr('data-category') === filter;
		});
	}
});

//ie7 & ie8 fixing
var ie7or8 = $('html').hasClass('ie7') || $('html').hasClass('ie8'),
	flag2 = 0,
	width = 0;

var delay = function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
}();

$(window).resize(function() {
	if(ie7or8 && !flag2){
		flag2 = 1;
		delay(function(){
				width = (width === '101%') ? '100%' : '101%';
				$('body').css({width:width});
				setTimeout(function(){flag2 = 0;},250)
		}, 200)
	}
});

$(window).trigger('resize');

});