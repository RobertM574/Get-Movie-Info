;(function(angular) {
    var app = angular.module(
    	'myMovieCatApp.filmList', 
    	['ngRoute', 'myMovieCatApp.myService']
    	)
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/:filmList/:page?', {
            templateUrl: './filmList/template.html',
            controller: 'filmListController'
        })
    }])
    app.controller('filmListController', [
        '$scope', 'MyService', '$routeParams','$window','$route',
        function($scope, MyService, $routeParams,$window,$route) {
        	var page = ($routeParams.page || '1') - 0
            // 控制每次请求的数量
            var count = 10
        	$scope.page = page
        	var start = (page - 1) * count
            MyService.jsonp(
                'http://api.douban.com/v2/movie/' + $routeParams.filmList + '?q=' + $routeParams.q,{start:start,count:count},
                function(data) {
                    //将请求回来的数据挂在到$scope上去
                    $scope.data = data
                    $scope.total = data.total
                    $scope.totalPage = $window.Math.ceil($scope.total / data.count)
                        //外部引用的异步请求，加载完成后腰告诉angular，使用$scope.$apply()方法
                    $scope.$apply()
                })

        $scope.getPage = function (nowPage) {
        	if(nowPage < 1 || nowPage > $scope.totalPage) {
        		return
        	}
        	 $route.updateParams({page:nowPage})
        	}
       
        }
    ])
}(angular))
