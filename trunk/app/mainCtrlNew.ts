/**
 * Created by Sirar on 19.03.2014.
 */
///<reference path="bootstrapNew.ts"/>

module App {
    export class MainController{

        private scope: any;
        private weatherService: App.IWeatherService;
        public weatherData: string;
        public location: string;

        constructor($scope: ng.IScope, weatherService){
            this.scope = $scope;
            this.weatherService = weatherService;
            this.weatherData = "";
        }

        public GetWeatherData() : any {
            this.weatherService.location = this.location;
            this.weatherService.GetWeatherData((data) => {
                this.weatherData = data;
            });
        }
    }
}