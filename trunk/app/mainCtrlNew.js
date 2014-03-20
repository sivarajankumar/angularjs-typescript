/**
* Created by Sirar on 19.03.2014.
*/
///<reference path="bootstrapNew.ts"/>
var App;
(function (App) {
    var MainController = (function () {
        function MainController($scope, weatherService) {
            this.scope = $scope;
            this.weatherService = weatherService;
            this.weatherData = "";
        }
        MainController.prototype.GetWeatherData = function () {
            var _this = this;
            this.weatherService.location = this.location;
            this.weatherService.GetWeatherData(function (data) {
                _this.weatherData = data;
            });
        };
        return MainController;
    })();
    App.MainController = MainController;
})(App || (App = {}));
//# sourceMappingURL=mainCtrlNew.js.map
