;(function (angular) {
	angular.module('myMovieCatApp.home_page',['ngRoute'])
			.config(['$routeProvider',function ($routeProvider) {
				$routeProvider
				.when('/home_page',{
					templateUrl:'./home_page/home_page.html',
					controller :　'home_pageController'
				})
			}])
			.controller('home_pageController',['$scope',function ($scope) {
				
			}])
}(angular))