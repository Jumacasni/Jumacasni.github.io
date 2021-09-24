var imageObserver = null;

function ScrollAnimations($selector,_options){
	var options = {};
	var firstTime = true;
	var defaultOptions = {
		animables : $(".js-animate"),
		timeAnimation : 1,
		delayAnimation: 0,
	}
	options = Object.assign(defaultOptions, _options);

	constructor();

	function constructor(){
		initVariables();
		bindEvents();
		prepareGeneralAnimations();
	};

	function initVariables(){
		if(imageObserver === null){
			imageObserver = new IntersectionObserver(
				function(entries, observer){ 
					var myDelay = 0;
					entries.forEach( function(elem, index){
						if(  elem.isIntersecting ) {
							elem = elem.target;
							imageObserver.unobserve(elem);
							elem.classList.add("js-animated");
							myDelay += 0.1;
							
							myDelay = animateGeneralElement(elem, myDelay);
						}
					});
				}, 
				{rootMargin: "0px 0px -"+window.innerHeight*0.15+"px 0px"}
			);
		}else{
			firstTime = false;
		}
		
	}
	
	function bindEvents(){
		// var delay = 1500;
		// if(firstTime){
		// 	delay = 0;
		// }
		// setTimeout(function(){
			for (var i = 0; i < options.animables.length; i++) {
				imageObserver.observe(options.animables[i]);
			}
		// }, delay);
	}

	function addAnimateElements($elements){
		for (var i = 0; i < $elements.length; i++) {
			imageObserver.observe($elements[i]);
		}
	}


	function prepareGeneralAnimations($container, noAnimated){
		
		var elements = options["animables"];
		if($container != undefined){
			if(noAnimated){
				elements = $container.find(".js-animate:not(.js-animated)");
			}else{
				elements = $container.find(".js-animate");
			}
		}
		// console.log(elements);
		for (var i = 0; i < elements.length; i++){
			var $elem = $(elements[i]);
			$elem.removeClass("js-animated");

			if($elem.data("animation-type") == "top-opacity"){
				TweenLite.set($elem, {opacity: 0, y: 40, 'pointer-events': 'none'});
			}else if($elem.data("animation-type") == "bottom-opacity"){
				TweenLite.set($elem, {opacity: 0, y: -40});
			}else if($elem.data("animation-type") == "right-opacity"){
				TweenLite.set($elem, {opacity: 0, x: -40});
			}else if($elem.data("animation-type") == "left-opacity"){
				TweenLite.set($elem, {opacity: 0, x: 40});
			}else if($elem.data("animation-type") == "opacity-image"){
				TweenLite.set($elem, {opacity: 0});

			}else if($elem.data("animation-type") == "elastic-bottom-opacity"){
				TweenLite.set($elem, {opacity: 0, y: -30});
			}else if($elem.data("animation-type") === "split-line-text"){
				var splitText = $elem.data("split");
				if(!splitText){
					// console.log($elem.html())
					var splitText = new SplitText($elem, {type: 'lines,words,chars', linesClass: 'line', wordsClass: 'word'});
					TweenMax.set(splitText.chars, {y:"100%", opacity: 0});
					$elem.data("split", splitText);
				}else{
					TweenMax.set(splitText.chars, {y:"100%", opacity: 0});
				}
				$elem.css('pointer-events', 'none');
			}else if($elem.data("animation-type") == "video-play"){
				// console.log($elem.find("iframe").src);
				// $elem[0].currentTime = 0;
				// $elem[0].onended = function(event){
				// 	$(event.currentTarget).css({"opacity":"0", "pointer-events":"none"});
				// }
			}else if($elem.data("animation-type") == "change-path"){
			}else{
				TweenLite.set($elem, {opacity: 0});
			}
		};
		//All elements prepared
		$("body").addClass("js-animations-loaded");
	}

	function animateGeneralElement(element, myDelay){
		var myTime = 1.2;
		var $elem = $(element);
		var extraDelay = Number(element.getAttribute("data-animation-delay"));
		myDelay = Math.max(0, myDelay + extraDelay);

		if($elem.data("animation-type") == "top-opacity" || $elem.data("animation-type") == "bottom-opacity"){
			TweenLite.to($elem, myTime, {opacity: 1, y: 0, clearProps: 'pointer-events',  ease: Power3.easeOut, delay: myDelay});
		}else if($elem.data("animation-type") == "left-opacity" || $elem.data("animation-type") == "right-opacity"){
			TweenLite.to($elem, myTime, {opacity: 1, x: 0,  ease: Power3.easeOut, delay: myDelay});
		}else if($elem.data("animation-type") == "opacity-image"){
			if($elem[0].complete){
				TweenLite.to($elem, myTime, {opacity: 1, ease: Power4.easeInOut, delay: myDelay});
			}else{
				$elem.removeClass('js-animated');
			}
		}else if($elem.data("animation-type") === "split-line-text"){
			myDelay += animateSplitLineText($elem, myTime, myDelay);
		}else if($elem.data("animation-type") == "elastic-bottom-opacity"){
			TweenLite.to($elem, myTime, {opacity: 1, y: 0, ease: Back.easeOut.config(2) });
		}else if($elem.data("animation-type") == "graphic-curve"){				
			animateSvgCurve($elem);
		}else if($elem.data("animation-type") == "change-path"){
			changePath($elem);
			

		}else{
			TweenLite.to($elem, myTime, {opacity: 1, ease: Power3.easeInOut, delay: myDelay});
		}
		return myDelay;
	}

	
	function animateGeneralElementsOut($container, callback){
		var elements = document.querySelectorAll(".js-animated:not(.js-not-animate-out), .js-animate-out");
		if($container !== undefined){
			elements = $container.find(".js-animated:not(.js-not-animate-out), .js-animate-out");
		}
		var myDelayOut = 0;
		var myTimeOut = 0.8;
		// var j=0;
		var body = document.body;
		var screenBottom = window.scrollY + window.innerHeight * 1; 
		var screenTop = window.scrollY + window.innerHeight * 0;
		
		/*TweenLite.to('header.header', 0.8, {opacity: 0, y: 20,  ease: Power2.easeOut});*/

		for(var i = elements.length-1 ; i >= 0; i--){
			var elem = elements[i];
			var elemOffsetTop = elem.getBoundingClientRect().top + window.scrollY;
			
			if( ( ((elemOffsetTop < screenBottom && elemOffsetTop > screenTop)) ||
				((elemOffsetTop+elem.offsetHeight) < screenBottom && (elemOffsetTop+elem.offsetHeight) > screenTop) ||
				(window.scrollTop + window.offsetHeight >= body.offsetHeight - 65) )
			){
				if(elem.getAttribute("data-animation-type") === "left-opacity"){
					TweenLite.to(elem, myTimeOut, {opacity: 0, x: 40,  ease: Power4.easeOut, delay: myDelayOut});
				}else if(elem.getAttribute("data-animation-type") === "right-opacity"){
					TweenLite.to(elem, myTimeOut, {opacity: 0, x: -40,  ease: Power4.easeOut, delay: myDelayOut});
				}else if(elem.getAttribute("data-animation-type") === "top-opacity"){
					TweenLite.to(elem, myTimeOut, {opacity: 0, y: 40,  ease: Power4.easeOut, delay: myDelayOut});
				}else if(elem.getAttribute("data-animation-type") === "bottom-opacity"){
					TweenLite.to(elem, myTimeOut, {opacity: 0, y: -40,  ease: Power4.easeOut, delay: myDelayOut});
				}else if(elem.getAttribute("data-animation-type") === "module-cover"){

				}
				else{
					TweenLite.to(elem, myTimeOut, {opacity: 0,  ease: Power4.easeOut, delay: myDelayOut});
				}
				// j = j+0.2;
				// myDelayOut = j;
			}
		}
		if (callback !== undefined){
			setTimeout(callback, (myTimeOut+myDelayOut)*1000);
		}
		return myTimeOut+myDelayOut;
	}




	function animateGeneral(){
		var screenBottom = $(window).scrollTop() + $(window).innerHeight() * 1;
		for(i = 0; i < options["animables"].length ; i++){
			if($($(options["animables"][i])).attr("data-animate") == "animable" && $($(options["animables"][i])).offset().top < screenBottom ){
				if($(options["animables"][i]).attr("data-animation-type")=="opacity"){
					opacity($(options["animables"][i]));	
				}
				$($(options["animables"][i])).attr("data-animate","animated");
			}
		}
	}

	function opacity($animable){
		TweenMax.to($animable,options["timeAnimation"],{opacity:0,ease: Power2.easeOut});
	}

	


	function animateScrollY(position, callback){
		var scroll = {left:window.scrollX, top: window.scrollY}
/*		var header = document.querySelector('.header-container');
		position -= header.offsetHeight;*/
		TweenLite.to(scroll, 1, {top: position, ease: Power2.easeOut, onUpdate:function(){window.scrollTo(scroll.left, scroll.top)}, onComplete:function(){
			if(callback !== undefined){
				callback();
			}
		}});
	}
	
	this.animateScrollY = animateScrollY;
	this.prepareGeneralAnimations = prepareGeneralAnimations;
	// this.animateGeneralElements = animateGeneralElements;
	this.animateGeneralElementsOut = animateGeneralElementsOut;
	this.addAnimateElements = addAnimateElements;
	this.bindEvents = bindEvents;
}