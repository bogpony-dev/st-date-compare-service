'use strict';

var controller = require('./controller');

module.exports = function (app) {

	app.route('/about')
		.get(controller.about);

	app.route('/get_time_series/:symbol/:interval')
		.get(controller.get_time_series);
};