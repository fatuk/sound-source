$(function () {
	var App = {};

	App.Views = {};
	App.Collections = {};
	App.Models = {};
	App.Router = {};

	/***********************
	 *
	 * Views
	 *
	 ***********************/

	App.Views.App = Backbone.View.extend({
		el: '.js-app',
		events: {
			'click .js-wishBtnCheckbox': 'wish',
			'click .js-cancelWish': 'cancelWish'
		},
		carouselSlides: function () {
			return
		},
		cancelWish: function (e) {
			e.preventDefault();
			var $currentTarget = $(e.currentTarget);

			$currentTarget.parents('.js-product').find('.js-wishBtnCheckbox').trigger('click');
		},
		progressTimer: function () {
			var circle = new ProgressBar.Circle('.js-progressTimer', {
				color: '#f8c255',
				strokeWidth: 10,
				fill: 'none'
			});

			circle.animate(1, {
				duration: 5000
			}, function () {
				console.log('animation has finished');
				console.trace(circle);
			});

		},
		setActiveSlide: function (id) {

		},
		wish: function (e) {
			var $currentTarget = $(e.currentTarget);
			console.log($currentTarget.parents('.js-product'));
			if ($currentTarget.is(':checked')) {
				$currentTarget.closest('.js-wishBtn').addClass('checked');
				$currentTarget.parents('.js-product').find('.js-wishBlock').addClass('show');
			} else {
				$currentTarget.closest('.js-wishBtn').removeClass('checked');
				$currentTarget.parents('.js-product').find('.js-wishBlock').removeClass('show');
			}

		},
		initialize: function () {
			// Rating init
			this.$('.js-rating').barrating('show', {
				showSelectedRating: true,
				reverse: false,
				readonly: true
			});
			// Progress timer
			this.progressTimer();
			this.render();
		},
		render: function () {

		}
	});

	App.Views.Carousel = Backbone.View.extend({
		el: '.js-carousel',
		initialize: function () {

		},
		render: function () {

		}
	});


	/***********************
	 *
	 * Initialize
	 *
	 ***********************/

	var appView = new App.Views.App();
});