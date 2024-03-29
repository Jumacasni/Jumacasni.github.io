var scrollAnimations;
var webLoaded = false;
var width;
var splide;

//FixVH
var originalWidth;
var originalHeight;

$(window).on('load', function(){
	webLoaded = true;
	$('.wrapper').addClass('loaded');
	width = $("body").prop("clientWidth")
	loadJS();
});

$(document).ready( function(){
	firstDocumentReady();
})

function firstDocumentReady(){
	if(isTouchDevice()){
		document.body.classList.add("touch-device");
	}else{
		document.body.classList.remove("touch-device");
	}

	document.addEventListener( 'DOMContentLoaded', function () {
		new Splide( '.splide' ).mount();
	} );
}

function loadJS(){
	fixVh();
	
	scrollAnimations = new ScrollAnimations();

	if (width <= 480) {
		splide = new Splide( '.splide', {
			type   : 'loop',
			perPage: 1,
			focus  : 'center',
			lazyLoad: 'nearby',
			preloadPages: 4
		} ).mount();
	}

	else if (width <= 768) {
		splide = new Splide( '.splide', {
			type   : 'loop',
			perPage: 2,
			focus  : 'center',
			lazyLoad: 'nearby',
			preloadPages: 4
		} ).mount();
	}

	else if(width <= 1024) {
		splide = new Splide( '.splide', {
			type   : 'loop',
			perPage: 3,
			focus  : 'center',
			lazyLoad: 'nearby',
			preloadPages: 4
		} ).mount();
	}


	else {
		splide = new Splide( '.splide', {
			type   : 'loop',
			perPage: 4,
			focus  : 'center',
			lazyLoad: 'nearby',
			preloadPages: 4
		} ).mount();
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

$(window).resize(function() {
    width = $("body").prop("clientWidth");

    if (width <= 480) {
		splide.options = { perPage: 1 };
	}

    else if (width <= 768) {
		splide.options = { perPage: 2 };
	}

	else if(width <= 1024) {
		splide.options = { perPage: 3 };
	}


	else {
		splide.options = { perPage: 4 };
	}
});

function fixVh(){
	var vh = window.innerHeight*0.01;
	document.body.style.setProperty('--1vh', vh+'px');
	originalWidth = window.innerWidth;
	originalHeight = window.innerHeight;
}