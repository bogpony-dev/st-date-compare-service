'use strict';

var properties = require('../../package.json')
var stock_compare = require('../service/stock_compare');

var controllers = {

	about: function (req, res) {
		var aboutInfo = {
			name: properties.name,
			version: properties.version
		}
		res.json(aboutInfo);
	},

	get_time_series: function (req, res) {
		stock_compare.getTimeSeries(req, res,
			function (err, timeSeries) {
				if (err)
					res.send(err);
				res.json(timeSeries);
			});
	},
};

module.exports = controllers;