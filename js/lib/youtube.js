
var VideoYoutube = function($elements){

	var videoPlayers = {};
	var currentYoutubePlayer = undefined;
	var currentYoutubePlayerIdElement = undefined;

	var selectors = {
		container : '.video-container',
		controls : '.video-controls-container',
		image : '.bg-image',
		button : '.play-button',
		player : '.youtube-player',
	}

	if($elements.length > 0){
		for (var i = 0; i < $elements.length; i++) {
			initYouTubeIframeAPI($($elements[i]));
		};
		video_bindEvents();
	}

	function video_bindEvents(){
		$(selectors.container + ' ' + selectors.controls + ' ' + selectors.button).click(showVideo);
		$(selectors.container + ' .close-button').click(closeVideo);

		$(window).scroll(checkScrollVideoPosition);
	}


	function showVideo( event ){
		event.preventDefault();
		var $video = $(event.currentTarget).closest(selectors.container).find(selectors.player);
		var $container  = $video.closest(selectors.container);
		var idElement = $video.attr('id');
		if(videoPlayers[idElement]['ready']){
			if(currentYoutubePlayer != undefined){
				currentYoutubePlayer.pauseVideo();
			}
			currentYoutubePlayerIdElement = idElement;
			currentYoutubePlayer = videoPlayers[idElement]['youtubePlayer'];
			if(!videoPlayers[idElement]['done']){
				videoPlayers[idElement]['done'] = true;
				currentYoutubePlayer.playVideo();
				currentYoutubePlayer.pauseVideo();
			}
			$("body").addClass("overflow-hidden");
			$container.find(".video-popup").css("top", $(window).scrollTop());
			$container.find(".video-popup").addClass("active");
			currentYoutubePlayer.playVideo();
			$container.find(selectors.player).css("opacity","1");
		}
	}

	function closeVideo( event ){
		event.preventDefault();
		var $video = $(event.currentTarget).closest(selectors.container).find(selectors.player);
		var $container  = $video.closest(selectors.container);
		$container.find(".video-popup").removeClass("active");
		currentYoutubePlayer.seekTo(0);
		currentYoutubePlayer.pauseVideo();
		$("body").removeClass("overflow-hidden");
	}


	// Esta funcion ha de llamarse asi.
	function initYouTubeIframeAPI( $element ) {
		var idVideo = $element.attr("data-video-id");
		var idElement = $element.attr("id");
		idElement.replace("#","");
		videoPlayers[idElement] = {};
		videoPlayers[idElement]['done'] = false;
		videoPlayers[idElement]['ready'] = false;
		videoPlayers[idElement]['youtubePlayer'] = new YT.Player(idElement, {
			height: '100%',
			width: '100%',
			videoId: idVideo,
			playerVars: {
				controls: 1,
				rel: 0,
				showinfo: 0,
				autoplay: 0,
				loop: 0,
				origin: location.origin,
				// color: 'white'
			},
			events: {
				'onReady': video_onPlayerReady,
				'onStateChange': video_onPlayerStateChange
			}
		});
	}


	function video_onPlayerReady(event) {
		var idElement = event.target.getIframe().id;
		var youtubePlayer = videoPlayers[idElement]['youtubePlayer'];
		var done = videoPlayers[idElement]['done'];
		videoPlayers[idElement]['ready'] = true;
		if( window.innerWidth > 1025 && !done){
			youtubePlayer.mute();
			youtubePlayer.playVideo();
		}
	}

	function video_onPlayerStateChange(event) {
		var idElement = event.target.getIframe().id;
		var youtubePlayer = videoPlayers[idElement]['youtubePlayer'];
		var done = videoPlayers[idElement]['done'];
		if (event.data == YT.PlayerState.PLAYING){
			if(idElement != currentYoutubePlayerIdElement){
				if(currentYoutubePlayer != undefined){
					currentYoutubePlayer.pauseVideo();
				}
				currentYoutubePlayerIdElement = idElement;
				currentYoutubePlayer = videoPlayers[idElement]['youtubePlayer'];
			}
		}
		if (event.data == YT.PlayerState.PLAYING && done){
			// videoPlay();
			// autoScrollVideo = true;
			// $("html, body").animate({ scrollTop: $videoFullWidth.offset().top }, 500, "swing", function(){autoScrollVideo = false;});
		}

		if (event.data == YT.PlayerState.PLAYING && !done) {
			if( window.innerWidth > 1025 ){
				setTimeout(function(){ youtubePlayer.pauseVideo(); youtubePlayer.unMute(); youtubePlayer.seekTo(0)}, 100);
			}
			done = videoPlayers[idElement]['done'] = true;
		}



		if (event.data == YT.PlayerState.PAUSED){
			// videoPause();
			// $("html, body").animate({ scrollTop: $videoFullWidth.offset().top }, 500, "swing");
		}

		//Cuando video acaba
		if(event.data == YT.PlayerState.ENDED){ 
			var $container  = $(event.target.getIframe()).closest(selectors.container);
			// console.log("Video END");
			TweenMax.to($container.find(selectors.image), 0.6, {x:"0%", opacity:1, ease: Power2.easeInOut, onComplete:function(){
				TweenMax.to($container.find(selectors.controls), 0.6, {opacity:1, ease: Power2.easeInOut});
				$container.find(selectors.controls).css("pointer-events","auto");
			}});
		}
	}

	function checkScrollVideoPosition(){
		// if( $(window).scrollTop() > $videoFullWidth.offset().top + $videoFullWidth.innerHeight()*0.9 ||
		// 	$(window).scrollTop() < $videoFullWidth.offset().top - $videoFullWidth.innerHeight()*0.9){
		var $videoFullWidth = $('#'+currentYoutubePlayerIdElement);
		
		// console.log("windowScrolltop", $(window).scrollTop());
		// console.log("pos limit", ($videoFullWidth.offset().top + ($videoFullWidth.innerHeight()*0.25))); //+($videoFullWidth.offset().top/2)
		if( currentYoutubePlayer && currentYoutubePlayer.getPlayerState() == 1 && ($(window).scrollTop() > ($videoFullWidth.offset().top+($videoFullWidth.innerHeight()*0.25)) || ($(window).scrollTop()+$(window).innerHeight() < $videoFullWidth.offset().top+($videoFullWidth.innerHeight()*0.75))  ) ) {
			currentYoutubePlayer.pauseVideo();
		}
	}
}



