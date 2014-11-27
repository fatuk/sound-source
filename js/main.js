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
		cancelWish: function (e) {
			e.preventDefault();
			var $currentTarget = $(e.currentTarget);

			$currentTarget.parents('.js-product').find('.js-wishBtnCheckbox').trigger('click');
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
			this.render();
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