const http = require("http");

class WeatherAPI {

	constructor() {
		this.url = 'https://samples.openweathermap.org/data/2.5/weather';
		this.apiKey = 'b6907d289e10d714a6e88b30761fae22';
	}

	getRainMM(city, fromDate, toDate) {
		var url = this.url + "?q=" + city + "&appid=" + this.apiKey;
		http.get(url, res => {
		  res.setEncoding("utf8");
		  let body = "";
		  res.on("data", data => {
		    body += data;
		  });
		  res.on("end", () => {
		    body = JSON.parse(body);
		    console.log(body);
		  });
		});

		return 500;
	}
}

module.exports = WeatherAPI;