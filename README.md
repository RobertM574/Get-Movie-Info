# 项目简介

## 项目模块结构

 + app /app
    - index.html
    - app.js 入口模块，引入其他模块
 + 首页 /home_page
    - home_page.html
    - home_page.js
 + 正在热映 /in_theaters
    - in_theaters.html
    - in_theaters.js
 + 即将上映 /coming_soon
    - coming_soon.html
    - coming_soon.js
 + Top250     
    - top250.html
    - top250.js
 + components    组件模块
    - myService.js

## 用到的相关技术
### angularjs框架中
 + 单页应用，通过引入路由模块ngRoute实现锚点的改变，渲染单页面的效果
    - 引入路由模块
```
    var app = angular.module('routeApp',['ngRoute'])
```
    - 配置路由属性，传入一个数组，其中要引入路由提供参数$routeProvider
```
    app.config(['$routeProvider',function($routeProvider){}])
```
    - 在回调函数中设置$routeProvider.when
```
    $routeProvider.when('someURL',{template/templateUrl:'',controller:''})
```

### 跨域
 + angularjs中提供了$http模块用来发送请求，其中包括了$http.jsonp，可以用来跨域
```
    $http.jsonp('http://api.douban.com/' + callback=JSON_CALLBACK, {})
    .then(function(successResponse){
        console.log(successResponse)
    })
```
    - 这个方法在请求的时候Request URL会出现什么格式？？？
+ 自己封装的跨域函数
    - 跨域原理：
    - 利用src天然的跨域属性，动态创建script标签，使script.src指向请求地址，再将这个script标签添加到dom树上去，达到跨域的结果.
```
    var scrip = document.createElement('script')
    scrip.src="someURL"
    document.body.appendChild('scrip')
```
    - 在url中拼接url+='callback='+myCallbackName;此处callback=callback，是现在api默认的一种书写回调函数的方式，这样能在数据请求完成后对数据进行操作。

## 用到的api接口
 + 使用豆瓣提供的api，具体查看豆瓣开发者文档
    - http://api.douban.com

