/**
* Created by Sirar on 19.03.2014.
*/
///<reference path="bootstrapNew.ts"/>
var App;
(function (App) {
    var WeatherService = (function () {
        function WeatherService($http) {
            this.http = $http;
            this.location = "";
        }
        WeatherService.prototype.GetWeatherData = function (successCallback) {
            this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.location).success(function (data, status) {
                successCallback(data);
            }).error(function (error) {
                successCallback(error);
            });
        };
        return WeatherService;
    })();
    App.WeatherService = WeatherService;
})(App || (App = {}));
//# sourceMappingURL=weatherSvcNew.js.map
