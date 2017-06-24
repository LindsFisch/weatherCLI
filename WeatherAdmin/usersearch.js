var weather = require("weather-js");

function UserSearch(userName, city) {
    this.userName = userName;
    this.city = city;
    this.date = Date.now();
    console.log('here')
    this.getWeather = function () {
        weather.find({ search: city, degreeType: 'F' }, function (err, result) {
            if (err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
        });
    }
}

module.exports = UserSearch;