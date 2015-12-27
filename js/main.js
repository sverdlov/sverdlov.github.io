
		function onScrollInit( items, trigger ) {
		  items.each( function() {
		    var osElement = $(this),
		        osAnimationClass = osElement.attr('data-os-animation'),
		        osAnimationDelay = osElement.attr('data-os-animation-delay');
		      
		        osElement.css({
		          '-webkit-animation-delay':  osAnimationDelay,
		          '-moz-animation-delay':     osAnimationDelay,
		          'animation-delay':          osAnimationDelay
		        });

		        var osTrigger = ( trigger ) ? trigger : osElement;
		        
		        osTrigger.waypoint(function() {
		          osElement.addClass('animated').addClass(osAnimationClass);
		          },{
		              triggerOnce: true,
		              offset: '99%'
		        });
		  });
		}

		 onScrollInit( $('.os-animation') );
		 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );

jQuery(document).ready(function(){

		$("#link-about").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#about").offset().top
		    }, 1000);
		});
		$("#button-about").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#about").offset().top
		    }, 1000);
		});
		$("#link-portfolio").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#portfolio").offset().top
		    }, 1000);
		});
		$("#link-contact").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#contact").offset().top
		    }, 1000);
		});

		$("#contact-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
		});



});

$(window).scroll(function(){
	var st = $(this).scrollTop();
	$('.skills').css({
		"background-position-y": "-"+(st-100)/3+ "px"
	});
});
