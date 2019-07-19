var request = require('request');

const apiKey = process.env.STOCK_API_KEY || "DT9DFGPU4HLQLBEH";
const stockURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY';

var timeSeries = {
	getTimeSeries: function (req, res, next) {
		request(stockURL + '&symbol=' + req.params.symbol + '&interval=' + req.params.interval + '&apikey=' + apiKey,
			function (error, response, body) {
				if (!error && response.statusCode == 200) {
					response = JSON.parse(body);
					res.send(response);
				} else {
					console.log(response.statusCode + response.body);
					res.send({ time_series: -1 });
				}
			});
	}
};

module.exports = timeSeries;