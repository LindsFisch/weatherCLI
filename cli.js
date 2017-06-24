var weather = require('weather-js');
var WeatherAdmin = require("./WeatherAdmin");

var loginType = process.argv[2];

var userName = process.argv[3];

var city = process.argv[4];

var MyAdmin = new WeatherAdmin();

if (loginType === "admin") {
    MyAdmin.getData();
} else {
    MyAdmin.userSearch(userName, city);
}

function UserSearch (userName, city) {
    this.userName = userName;
    this.city = city;
}

UserSearch.prototype.getWeather = function () {
    weather.find({search: city , degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
});
}
