
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
		              offset: '80%'
		        });
		  });
		}

		 onScrollInit( $('.os-animation') );
		 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );

$(document).ready(function(){

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
});

$(window).scroll(function(){
	var st = $(this).scrollTop();
	$('.skills').css({
		"background-position-y": "-"+(st-100)/3+ "px"
	});
});


$('#contact-form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: 'http://formspree.io/sverdlov.andrew@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		success: function() {
		$(".contact-input").val('');
        $(".alert-success").fadeIn(700);
        setTimeout(function(){
        	$(".alert-success").fadeOut(700);
        },3000);
      },
      error: function() {
        $(".alert-errors").fadeIn(1000);        
      }
	});
});