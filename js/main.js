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