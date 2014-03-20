'use strict';

var myApp = angular.module("app", []);

myApp.controller("MainController", MainController);

myApp.factory("weatherService", WeatherService);

myApp.directive("searchDirective", SearchDirective);