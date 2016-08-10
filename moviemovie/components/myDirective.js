;(function (angular) {
	var app = angular.module('myMovieCat.myDirective',[])
	app.directive('autoActive',[function () {
		return {
			templateUrl:'',
			replace:true,
			restrict:'ECMA',
			scope:{
				tt:'@'
			},
			transclude:true,
			link:function (scope,element,attribute) {
				element.on('click',function () {
					
				})
			}
		}
	}])
}(angular))