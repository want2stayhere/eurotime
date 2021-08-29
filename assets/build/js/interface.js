$(document).ready(function () {
	let options = {
		threshold: [0.5]
	};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.el-animate');

	for (let elm of elements) {
		observer.observe(elm);
	};

	$('body').on('click', '.menu-btn', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.page-header-sub').slideToggle();
	});
	$(document).mouseup(function (e){
		var div = $(".menu,.page-header-sub");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) { 
			$(".page-header-sub").slideUp();
			$('.menu-btn').removeClass('active');
		}
	});


	//TABLE-WRAP
	if ($("table").length > 0) {
		$("table").wrap("<div class='table-wrap'></div>");
	}


	//TOP SLIDER
	if ($('.js-index-top').length > 0) {
		let $statusTop = $('.top-slider-pagingInfo .s-current');
		let $statusTotalTop = $('.top-slider-pagingInfo .s-total');
		let $sliderTop = $('.index-top');
		$sliderTop.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$statusTop.text('0' + i + ' / ');
			$statusTotalTop.text('0' + slick.slideCount);
		});
		$sliderTop.slick({
			infinite: true,
			slidesToShow: 1,
			fade: true,
			lazyLoad: 'progressive',
			arrows: true,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			prevArrow: $(".js-top-prev"),
			nextArrow: $(".js-top-next"),
		});
	};



	//INDEX-NEWS SLIDER
	if ($('.js-index-news-slider').length > 0) {
		let $newsCurrent = $('.news-slider-pagingInfo .s-current');
		let $newsTotal = $('.news-slider-pagingInfo .s-total');
		let $sliderNews = $('.js-index-news-slider');
		$sliderNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$newsCurrent.text('0' + i + ' / ');
			$newsTotal.text('0' + slick.slideCount);
		});
		$sliderNews.slick({
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			//fade: true,
			lazyLoad: 'progressive',
			arrows: true,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			prevArrow: $(".js-news-prev"),
			nextArrow: $(".js-news-next"),
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			],
		});
	}



	//INDEX-CATALOG SLIDER
	if ($('.js-index-catalog-slider').length > 0) {
		let $catalogCurrent = $('.catalog-slider-pagingInfo .s-current');
		let $catalogTotal = $('.catalog-slider-pagingInfo .s-total');
		let $sliderCatalog = $('.js-index-catalog-slider');
		$sliderCatalog.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$catalogCurrent.text('0' + i + ' / ');
			$catalogTotal.text('0' + slick.slideCount);
		});
		$sliderCatalog.slick({
			infinite: true,
			slidesToShow: 8,
			slidesToScroll: 1,
			lazyLoad: 'progressive',
			arrows: true,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			prevArrow: $(".js-catalog-prev"),
			nextArrow: $(".js-catalog-next"),
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 7,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 6,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
			]
		});
	}


	//INDEX-SERVICES SLIDER
	if ($('.js-index-services-slider').length > 0) {
		let $newsCurrent = $('.services-slider-pagingInfo .s-current');
		let $newsTotal = $('.services-slider-pagingInfo .s-total');
		let $sliderNews = $('.js-index-services-slider');
		$sliderNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$newsCurrent.text('0' + i + ' / ');
			$newsTotal.text('0' + slick.slideCount);
		});
		$sliderNews.slick({
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			//fade: true,
			lazyLoad: 'progressive',
			arrows: true,
			useTransform: true,
			equalizeHeight: false,
			"accessibility": false,
			speed: 500,
			pauseOnHover: false,
			prevArrow: $(".js-services-prev"),
			nextArrow: $(".js-services-next"),
			// variableWidth: true,
			// centerMode: true,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			],
		});
	}



	//INDEX-range
	if ($("#slider-count-slider-cost").length > 0) {
		$("#slider-count-slider-cost").slider({
			animate: true,
			range: "min",
			value: 85000,
			min: 80000,
			max: 95000,
			step: 1,
			slide: function (event, ui) {
				$("#slider-count-input-cost").val(ui.value);
				$("#slider-count-cost").text(ui.value.toLocaleString());
			},
		});
	};

	if ($("#slider-count-slider-advance").length > 0) {
		$("#slider-count-slider-advance").slider({
			animate: true,
			range: "min",
			value: 3,
			min: 0,
			max: 7,
			step: 1,
			slide: function (event, ui) {
				$("#slider-count-input-advance").val(ui.value);
				$("#slider-count-advance").text(ui.value);
			},
		});
	};

	if ($("#slider-count-slider-term").length > 0) {
		$("#slider-count-slider-term").slider({
			animate: true,
			range: "min",
			value: 36,
			min: 12,
			max: 60,
			step: 1,
			slide: function (event, ui) {
				$("#slider-count-input-term").val(ui.value);
				$("#slider-count-term").text(ui.value);
			},
		});
	};



	//TABS
	var $tabs = $('.h-tabs');
	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,
	});
});



// functions
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('el-show');
		}
	});
}