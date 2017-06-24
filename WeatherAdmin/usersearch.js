var weather = require("weather-js");

 var fs = require('fs');

function WeatherAdmin(userName, city){
    this.userName = userName;
    this.city = city;

    this.getWeather = function () {
        weather.find({ search: this.city, degreeType: 'F' }, function (err, result) {
            if (err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
        });
        fs.appendFile("log.txt", "Name: " + this.userName + " Location: " + this.city + " Date: " + Date.now());

    }, 

    this.getData = function () {
        fs.readFile("log.txt", "utf8", function(err, data) {
            if (err) {
                console.log(err);
            }
            console.log(data);
        })
    }
}


module.exports = WeatherAdmin;








