var animatingScroll;
var imageObserver = null;
var firstTime = true;

$(window).on('load', function(){
	loadJS();
});

$(document).ready( function(){
	firstDocumentReady();
})

// Primer document ready: sólo se ejecuta en el document.ready de la primera página (no se ejecuta durante la navegación interna)
function firstDocumentReady(){
	// Hacemos el replaceState inicial
	// nav_pushFirstState();
	// Animamos el progreso y retiramos la cortina de preload
	// animateShowPreload();
	if(isTouchDevice()){
		document.body.classList.add("touch-device");
	}else{
		document.body.classList.remove("touch-device");
	}

}

function loadJS(){

	// if(isTouchDevice()){
	// 	// customScroll = Scrollbar.init(document.querySelector('.scrollbar-container'), {alwaysShowTracks:false});
	// 	// $(".header-container .header-left-container").addClass("only-desktop");
	// 	document.body.classList.add("touch-device");
	// }else{
	// 	// customScroll = Scrollbar.init(document.querySelector('.scrollbar-container'), {alwaysShowTracks:true});
	// 	// $(".header-container .header-left-container").removeClass("only-desktop");
	// 	document.body.classList.remove("touch-device");
	// }

	adjustWidth();
	changeHeader();
	scrollEvent();
	bindEvents();
	initializeGlobalVariables();
	initAnimations();
	prepareAnimations();
}



function initializeGlobalVariables(){
	animatingScroll = false;
}

function bindEvents(){

	$(window).on('scroll', scrollEvent);
	$(window).on('scroll', changeHeader);
	$('.header-container .header-item').on("click", goToSection);
	$('.header-container .inicio').on("click", goToInit);
	$(window).resize(function() {
       adjustWidth();
     });
}

function adjustWidth() {
	var parentWidth = $(".header-container").width();
	$(".header-content").width(parentWidth-40);
}

function goToSection(event){
	var data = $(event.currentTarget).data("section");
	var $elem = $('.module-container[data-section="'+data+'"]');
	var offset = $elem.offset().top;
	var leftover = $('.header-container').outerHeight(true);

	var offsetTop = Math.round((offset + Number.EPSILON) * 100) / 100;

	var $headerItemActive = $('.header-item.active');
	$headerItemActive.removeClass('active');
	var $headerItem = $('.header-item[data-section="'+data+'"]');
	$headerItem.addClass('active');

	animateScrollY(offsetTop - leftover);
}

function goToInit(event){
	animateScrollY(0);
	var $headerItemActive = $('.header-item.active');
	$headerItemActive.removeClass('active');
}

function scrollEvent(event){
	if(!animatingScroll){
		var currentOffset = $(window).scrollTop();
		var $elems = $('.js-follow[data-section]');
		var height = $(window).height();

		for (var i=1; i<$elems.length; ++i){
			var elemOffset = $($elems[i]).offset().top;
			var elemHeight = $($elems[i]).outerHeight(true);

			var data = $($elems[i]).data("section");
			var $item = $('.header-item[data-section="'+data+'"]');

			if(currentOffset+(height/2.5) >= elemOffset && currentOffset+(height/2.5) < elemOffset + elemHeight){
				$item.addClass('active');
			}
			else{
				$item.removeClass('active');
			}
		}
	}
}

function changeHeader(event){
	var currentOffset = $(window).scrollTop();
	var elemOffset = $('.profile-picture .image-box-container .image-container').offset().top;
	var elemHeight = $('.profile-picture .image-box-container .image-container').outerHeight(true);
	var leftover = $('.header-container .header-content').outerHeight(true);
	if(currentOffset > elemOffset + elemHeight - leftover - 20){
		$('.header-container .inicio').addClass('active');
	}
	else{
		$('.header-container .inicio').removeClass('active');
	}
}

function animateScrollY(position){
	var scroll = {left:window.scrollX, top: window.scrollY}
	animatingScroll = true;
	TweenLite.to(scroll,1,{top: position, ease: Power2.easeOut, onUpdate:function(){window.scrollTo(scroll.left, scroll.top)}, onComplete:function(){
		animatingScroll = false;
	}});
}

function initAnimations(){
	if(imageObserver === null){
		imageObserver = new IntersectionObserver(
			function(entries, observer){ 
				var myDelay = 0;
				entries.forEach( function(elem, index){
					if(  elem.isIntersecting ) {
						elem = elem.target;
						imageObserver.unobserve(elem);
						elem.classList.add("js-animated");
						myDelay += .15;
						
						animate(elem, myDelay);
					}
				});
			}, 
			{rootMargin: "0px 0px -"+window.innerHeight*0.05+"px 0px"}
		);

		var $elements = $(document).find(".js-animate");
		for (var i = 0; i < $elements.length; i++) {
			imageObserver.observe($elements[i]);
		}
	}else{
		firstTime = false;
	}
}

function prepareAnimations(){
	var elements = $(document).find(".js-animate");

	for (var i = 0; i < elements.length; i++) {
		var $elem = $(elements[i]);

		if($elem.data("animation") == "bar"){
			widthElem = $elem.css("width");
			$elem.data('width', widthElem);
			TweenLite.set($elem, {width: 0});
		}
		else if($elem.data("animation") == "opacity-left"){
			TweenLite.set($elem, {opacity: 0, left: -50});
		}
		else if($elem.data("animation") == "opacity-right"){
			TweenLite.set($elem, {opacity: 0, right: -50});
		}
		else if($elem.data("animation") == "opacity-top"){
			TweenLite.set($elem, {opacity: 0, top: -50});
		}
		else if($elem.data("animation") == "opacity-bottom"){
			TweenLite.set($elem, {opacity: 0, bottom: -50});
		}
		else if($elem.data("animation") == "opacity"){
			TweenLite.set($elem, {opacity: 0});
		}
	}
}

function animate(elem, myDelay){
	var $elem = $(elem)
	$elem.removeClass('js-animate');
	var extraDelay = Number(elem.getAttribute("data-animation-delay"));
	myDelay = Math.max(0, myDelay + extraDelay);

	if($elem.data("animation") == "bar"){
		widthElem = $elem.data("width");
		TweenLite.to($elem, 2, {width: widthElem,  ease: Power0.easeIn, delay: myDelay});
	}
	else if($elem.data("animation") == "opacity-left"){
		TweenLite.to($elem, 1, {opacity: 1, left: 0,  ease: Power2.easeOut, delay: myDelay});
	}
	else if($elem.data("animation") == "opacity-right"){
		TweenLite.to($elem, 1, {opacity: 1, right: 0,  ease: Power2.easeOut, delay: myDelay});
	}
	else if($elem.data("animation") == "opacity-top"){
		TweenLite.to($elem, 1, {opacity: 1, top: 0,  ease: Power2.easeOut, delay: myDelay});
	}
	else if($elem.data("animation") == "opacity-bottom"){
		TweenLite.to($elem, 1, {opacity: 1, bottom: 0,  ease: Power2.easeOut, delay: myDelay});
	}
	else if($elem.data("animation") == "opacity"){
		TweenLite.to($elem, 1, {opacity: 1,  ease: Power2.easeOut, delay: myDelay});
	}
}

function isTouchDevice() {  
	return (
		!!(typeof window !== 'undefined' &&
			('ontouchstart' in window ||
				(window.DocumentTouch &&
					typeof document !== 'undefined' &&
					document instanceof window.DocumentTouch))) ||
		!!(typeof navigator !== 'undefined' &&
			(navigator.maxTouchPoints || navigator.msMaxTouchPoints))
		);
}