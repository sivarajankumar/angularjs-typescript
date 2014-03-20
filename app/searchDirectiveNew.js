/**
* Created by Sirar on 19.03.2014.
*/
var App;
(function (App) {
    var SearchDirective = (function () {
        function SearchDirective() {
            return this.CreateDirective();
        }
        SearchDirective.prototype.CreateDirective = function () {
            return {
                restrict: 'E',
                template: '<input ng-model="mc.location"> <button ng-click="mc.GetWeatherData()">Go</button> <div>{{mc.weatherData}}</div>'
            };
        };
        return SearchDirective;
    })();
    App.SearchDirective = SearchDirective;
})(App || (App = {}));
//# sourceMappingURL=searchDirectiveNew.js.map
