(function (angular) {
	var app = angular.module('myMovieCatApp',[
		'myMovieCatApp.details',
		'myMovieCatApp.home_page',
		'myMovieCatApp.filmList',
		
		'ngRoute'
		])
	.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.otherwise({
			redirectTo:'/home_page'
		})
	}])
	.controller('mainController',['$scope','$route',function ($scope,$route) {
		$scope.query = ''
		$scope.search = function () {
			//在这里改变url的值
			console.log('123')
			$route.updateParams({
				filmList : 'search',
				q : $scope.query
			})
		}
	}])
}(angular))