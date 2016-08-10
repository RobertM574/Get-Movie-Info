;(function (angular) {
	angular
		.module('myMovieCatApp.details',['ngRoute','myMovieCatApp.myService'])
		.config(['$routeProvider',function ($routeProvider) {
			$routeProvider.when('/details/:id',{
				templateUrl : './details/details.html',
				controller: 'detailsController'
			})
		}])
		.controller('detailsController',
			['$scope','MyService','$routeParams',
			function ($scope,myService,$routeParams) {
			myService.jsonp('http://api.douban.com/v2/movie/subject/' + $routeParams.id,null,function (data) {
				$scope.data = data
				$scope.$apply()
			})
		}])
}(angular))