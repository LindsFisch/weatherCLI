var weather = require('weather-js');
var WeatherAdmin = require("./WeatherAdmin");

var loginType = process.argv[2];

var userName = process.argv[3];

var city = process.argv[4];

var MyAdmin = new WeatherAdmin();

if (loginType === "admin") {
    MyAdmin.getData();
} else {
    MyAdmin.newUserSearch(userName, city);
}