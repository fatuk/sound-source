module.exports = {
	dist: {
		options: {
			sourceMap: true
		},
		files: {
			'vendors/plugins.min.js': [
				'bower_components/jquery/dist/jquery.js',
				'bower_components/underscore/underscore.js',
				'bower_components/jquery-bar-rating/jquery.barrating.js',
				'bower_components/backbone/backbone.js'
			]
		}
	}
};