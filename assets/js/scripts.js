
(function ($) {

	'use string';

	/***------------ Preloader -------------***/

	$(window).on("load", function() {
		$("#preloader").fadeOut("slow");
	});

	/***------------- Back Top -------------***/

    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.btn-scroll').addClass("show");
        }else{
            $('.btn-scroll').removeClass("show");
        }
    });

    $('.btn-scroll').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

	/***-------------- Navbar --------------***/

	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 90) {
			$(".navbar").addClass("navbar-shrink");
		}
		else {
			$(".navbar").removeClass("navbar-shrink");
		}
	});
	
	/***------------ Video Popup -----------***/

	const videoSrc = $("#playerOne").attr("src");

	$(".video-btn, #video-popup").on("click", function() {
		if ($("#video-popup").hasClass("open")) {
			$("#video-popup").removeClass("open");
			$("#playerOne").attr("src", "");
		}
		else {
			$("#video-popup").addClass("open");
			if ($("#playerOne").attr("src") == '') {
				$("#playerOne").attr("src", videoSrc);
			}
		}
	});

	/***---------- Features Carousel -------***/

	$('.feature-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:3,
			}
		}
	});

	/***------------- Counter --------------***/

    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

	/***------------ Screenshots -----------***/

    $('.screenshot-wrap').slick({
		autoplay: true,
		dots: true,
		autoplaySpeed: 1000,
		slidesToShow: 3,
		centerPadding: '20%',
		centerMode: true,
		prevArrow: '',
		nextArrow: '',
		responsive: [{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			centerPadding: '33.3%'
		  }
		},{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			centerPadding: '0'
		  }
		}]
	});

	/***------- Testimonials Carousel ------***/

	$('.testimonials-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:3,
			}
		}
	});

	/***------- Team Members Carousel ------***/

	$('.team-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:3,
			}
		}
	});

	/***----------- Page Scrolling ---------***/

	$.scrollIt({
		topOffset: -50
	});

	/***--------- Navbar Collapse ----------***/

	$(".nav-link").on("click", function() {
		$(".navbar-collapse").collapse("hide");
	});

	/***----------- Toggle Theme -----------***/

	function toggleTheme() {
		if (localStorage.getItem("designer-theme") !== null) {
			if (localStorage.getItem("designer-theme") === "dark") {
				$("body").addClass("dark");
			}
			else {
				$("body").removeClass("dark");
			}
		}
		updateIcon();
	}

	toggleTheme();

	$(".toggle-theme").on("click", function() {
		$("body").toggleClass("dark");
		if ($("body").hasClass("dark")) {
			localStorage.setItem("designer-theme", "dark");
		}
		else {
			localStorage.setItem("designer-theme", "light");
		}
		updateIcon();
	});

	function updateIcon() {
		if ($("body").hasClass("dark")) {
			$(".toggle-theme i").removeClass("fa-moon");
			$(".toggle-theme i").addClass("fa-sun");
		}
		else {
			$(".toggle-theme i").removeClass("fa-sun");
			$(".toggle-theme i").addClass("fa-moon");
		}
	}


}(jQuery));