$(document).ready(function(){
	$('.carousel-one').owlCarousel({
		margin:10,
		responsiveClass:true,
		center:true,
		responsive:{
			0:{
				items:1.5,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	})

	$('.carousel-two').owlCarousel({
		margin:10,
		responsiveClass:true,
		center:true,
		responsive:{
			0:{
				items:1.5,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	})

	$('.carousel-three').owlCarousel({
		margin:10,
		responsiveClass:true,
		center:true,
		responsive:{
			0:{
				items:1.5,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	})

	$('.carousel-four').owlCarousel({
		margin:10,
		responsiveClass:true,
		center:true,
		responsive:{
			0:{
				items:1.5,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		}
	})

	// $(".bottom-menu li .closeicon").click(function() {
	// 	$(this).parents('span').css("display","none");
	// });

	// $(".bottom-menu li").hover(
	// 	function() {
	// 		$(this).find(".tooltiptext").show();
	// 	}, function() {
	// 		$(this).find(".tooltiptext").hide();
	// 	}

	// 	);
$(".tooltiptext span.closeicon").click(function(){
	$(".tooltiptext").hide();
	$(".overlay").hide();
});
$(".overlay").click(function(){
	$(".tooltiptext").hide();
	$(".overlay").hide();
});
$(".aboutus").click(function(){
	$(".aboutuspopup").show();
	$(".overlay").show();
});
$(".address").click(function(){
	$(".addresspopup").show();
	$(".overlay").show();
});
$(".terms").click(function(){
	$(".termspopup").show();
	$(".overlay").show();
});

});


// document.addEventListener('scroll', function (event) {
// 	if (document.body.scrollHeight == 
// 		document.body.scrollTop +        
// 		window.innerHeight) {
// 	$('.arrow-bottom').css("bottom","35px");
// }
// else {
// 	$('.arrow-bottom').css("bottom","20px");
// }
// });

$(document).scroll(function(e){
	if ( $(window).scrollTop() < 200 ) { 
		$('#backToTop').fadeOut(); 
	}
	else { 
		$('#backToTop').fadeIn(); 

	}
      }); // end scroll

$('#backToTop').click(function(){
	$('html, body').animate( { scrollTop: 0 }, 400);
      }); // end click

$("#goto").click(function() {
	$('html,body').animate({
		scrollTop: $(".section-two").offset().top},
		'slow');
});
$(window).load(function(){
	$('#preloader').delay(6000).fadeOut(1000);
});

/*scroll*/

$(document).ready(function () {
  //Move Next section
  var $sec = $(".scroll-target");
  $(".arrow-down ").click(function(){
  	var y = $sec.filter(function(i, el) {
  		return el.getBoundingClientRect().bottom > 100;
  	})[$(this).hasClass("arrow-down")?"next":""]("section").offset().top;
  	$("html, body").stop().animate({scrollTop: y});
  });

  $(".arrow-up").click(function() {
  	$('html, body').animate({
  		scrollTop: $("html, body").offset().top
  	}, 2000);
  });
});

var windowheight = $(".scroll-target.section-one").height() + $(".scroll-target.section-two").height() + $(".scroll-target.section-three").height() + $(".scroll-target.section-four").height() + $(".scroll-target.section-five").height() + $(".scroll-target.section-six").height();
// arrow
$(window).scroll(function(event){
	var scroll = $(window).scrollTop();
	if (scroll >= 300 && scroll < windowheight ) {        
		$(".arrow-down").addClass("show").removeClass('hidden');
		$('.arrow-up').removeClass('hidden').addClass('show');
		$('.arrow-up').css("bottom","-40px");
	} 
	else if (scroll >= windowheight) {
		$('.arrow-up').removeClass('hidden').addClass('show');
		$('.arrow-up').css("bottom","35px");
		$('.arrow-down').addClass('hidden').removeClass('show');
	}
	else {
		$(".arrow-bottom").removeClass("show");
	}
});

(function(){
	function isTouchDevice(){
		try{
			document.createEvent("TouchEvent");
			return true;
		}catch(e){
			return false;
		}
	}

	function touchScroll(id){
		if(isTouchDevice()){ //if touch events exist...
			var el=document.getElementById(id);
			var scrollStartPos=0;

			el.addEventListener("touchstart", function(event) {
				scrollStartPos=this.scrollTop+event.touches[0].pageY;
				event.stopPropagation();
			},false);

			el.addEventListener("touchmove", function(event) {
				this.scrollTop=scrollStartPos-event.touches[0].pageY;
				event.preventDefault();
			},false);
		}
	}

	//On page load
	touchScroll('scrollMe')

})();

(function(){
	function isTouchDevice(){
		try{
			document.createEvent("TouchEvent");
			return true;
		}catch(e){
			return false;
		}
	}

	function touchScroll(id){
		if(isTouchDevice()){ //if touch events exist...
			var el=document.getElementById(id);
			var scrollStartPos=0;

			el.addEventListener("touchstart", function(event) {
				scrollStartPos=this.scrollTop+event.touches[0].pageY;
				event.stopPropagation();
			},false);

			el.addEventListener("touchmove", function(event) {
				this.scrollTop=scrollStartPos-event.touches[0].pageY;
				event.preventDefault();
			},false);
		}
	}

	//On page load
	touchScroll('scrollMeone')

})();

