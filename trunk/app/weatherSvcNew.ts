/**
 * Created by Sirar on 19.03.2014.
 */
///<reference path="bootstrapNew.ts"/>

module App {
    export interface IWeatherService {
        location: string;
        GetWeatherData(successCallback: Function) : any;
    }

    export class WeatherService implements IWeatherService {

        private http: ng.IHttpService;
        public location: string;

        constructor($http) {
            this.http = $http;
            this.location = "";
        }

        public GetWeatherData(successCallback: Function) : any {
            this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.location).success((data, status) => {
                successCallback(data);
            }).error(error => {
                successCallback(error);
            });
        }
    }
}