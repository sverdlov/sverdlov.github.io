$(document).ready(function () {
		$('.slide_wrapp').slick({
			autoplay: true,
			autoplaySpeed: 5000,
			infinite: true,
			speed: 700,
			prevArrow: '.prev',
			nextArrow: '.next',
		});

		$("#link-about").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#about").offset().top
		    }, 1000);
		});
		$("#link-portfolio").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#portfolio").offset().top
		    }, 1500);
		});
		$("#link-pricing").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#pricing").offset().top
		    }, 2500);
		});
		$("#link-team").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#team").offset().top
		    }, 3000);
		});
		$("#link-blog").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#blog").offset().top
		    }, 3500);
		});
		$("#link-contact").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#contact").offset().top
		    }, 4000);
		});
});
