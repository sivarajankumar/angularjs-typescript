/**
 * Created by Sirar on 13.03.2014.
 */

function MainController ($scope, weatherService){

   $scope.weatherData = "";
   $scope.location = "";

    $scope.getWeatherData = function() {
        weatherService.getWeatherData($scope.location).success(function (response, status, headers, config) {
            $scope.weatherData = response;
        });
    };
};