/**
* Created by Sirar on 19.03.2014.
*/
///<reference path="../scripts/jquery.d.ts"/>
///<reference path="../scripts/angular.d.ts"/>
///<reference path="mainCtrlNew.ts"/>
///<reference path="weatherSvcNew.ts"/>
///<reference path="searchDirectiveNew.ts"/>
var myApp = angular.module("app", []);

myApp.controller("MainController", [
    "$scope", "weatherService", function ($scope, weatherService) {
        return new App.MainController($scope, weatherService);
    }]);

myApp.factory("weatherService", [
    "$http", function ($http) {
        return new App.WeatherService($http);
    }]);

myApp.directive("searchDirective", function () {
    return new App.SearchDirective();
});
//# sourceMappingURL=bootstrapNew.js.map
