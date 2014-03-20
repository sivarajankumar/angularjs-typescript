/**
 * Created by Sirar on 19.03.2014.
 */
module App {

    export class SearchDirective {

        constructor() {
            return this.CreateDirective();
        }

        public CreateDirective() : any {
            return {
                restrict: 'E',
                template: '<input ng-model="mc.location"> <button ng-click="mc.GetWeatherData()">Go</button> <div>{{mc.weatherData}}</div>'
            };
        }
    }
}