describe("Testing the main controller", function() {

    //Mock variables
    var rootScopeMock, httpBackendStub, weatherServiceMock;

    //Controller
    var mainCtrl;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function($rootScope, $httpBackend){
        rootScopeMock = $rootScope.$new;
        httpBackendStub = $httpBackend;
        weatherServiceMock = new App.WeatherService(httpBackendStub);

        mainCtrl = new App.MainController(rootScopeMock, weatherServiceMock);

    }));

    it('Should call GetWeatherData from the weather service once when user clicks on Go', function () {
        spyOn(weatherServiceMock, "GetWeatherData");
        mainCtrl.GetWeatherData();
        expect(weatherServiceMock.GetWeatherData).toHaveBeenCalled();
    });
});