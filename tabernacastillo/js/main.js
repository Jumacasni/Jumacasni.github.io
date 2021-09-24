var scrollAnimations;
var webLoaded = false;

$(window).on('load', function(){
	webLoaded = true;
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
}

function loadJS(){
	scrollAnimations = new ScrollAnimations();
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