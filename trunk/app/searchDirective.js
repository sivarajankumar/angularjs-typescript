/**
 * Created by Sirar on 19.03.2014.
 */
function SearchDirective(){
    return  {
      restrict: 'E',
      template: '<input ng-model="location"> <button ng-click="getWeatherData()">Go</button> <div>{{weatherData}}</div>'
    };
}