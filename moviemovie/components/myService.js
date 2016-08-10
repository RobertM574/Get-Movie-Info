;(function (angular) {
	var app = angular.module('myMovieCatApp.myService',[])
	app.service('MyService',['$window',function ($window) {
		this.jsonp = function (url,data,fn) {
			//url的格式: ?key=val&key=val key和val对应的是data中的数据
			var queryStr = '&'
			if (!data) {
				queryStr = '?'
			}
			//遍历data
			for(var key in data){
				queryStr += key + '=' + data[key] + '&'
			}
			url += queryStr
			var callbackName = 'callback_' + $window.Math.random().toString().substr(2)
			$window[callbackName] = fn
			var scrip = document.createElement('script')
			scrip.src = url + 'callback=' + callbackName
			$window.document.body.appendChild(scrip)
		}
	}])
}(angular))