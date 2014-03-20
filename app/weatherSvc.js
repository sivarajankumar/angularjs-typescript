/**
 * Created by Sirar on 19.03.2014.
 */
function WeatherService($http) {
    return {
        getWeatherData: function (location) {
            return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + location
            });
        }

//        getAll: function () {
//            return $http
//                //.get('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=vqbqyakdtnfpesf26vybz4an&page_limit=1')
//                .get('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
//                .success(function(response, status){
//                    return response;
//            }).error(function(response){
//                    return response;
//                });
//        }

//        getAll: function () {
//            return [{id: 0, title: "Indiana Jones", duration: 90, rating: "***"},
//                {id: 1, "title": "Star Wars", "duration": 120, rating: "***"},
//                {id: 2, "title": "Hunger Games", "duration": 100, rating: "***"}];
//        }
    }};
