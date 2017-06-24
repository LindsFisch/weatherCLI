var weather = require('weather-js');
var WeatherAdmin = require("./WeatherAdmin/usersearch");

var loginType = process.argv[2];

var userName = process.argv[3];

var city = process.argv[4];

console.log(loginType)

if (loginType === "admin") {
    var MyAdmin = new WeatherAdmin();
    MyAdmin.getData();    
} else {
    var MyAdmin = new WeatherAdmin(userName, city);
    MyAdmin.getWeather();
}

