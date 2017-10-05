var app = angular.module('fakenews',["ngRoute"])
                 .config(function($routeProvider){
                   $routeProvider
                   .when('/home',{
                     templateUrl:'/templates/home.html',
                     controller:'homeCTRL'
                   })
                   .when('/about',{
                     templateUrl:'/templates/about.html',
                     controller:'steptwoCTRL'
                   })
                   .when('/steptwo',{
                     templateUrl:'templates/steptwo.html',
                     controller:'steptwoCTRL'
                   })
                   .when('/stepthree',{
                     templateUrl:'templates/stepthree.html',
                     controller:'stepthreeCTRL'
                   })
                   .otherwise({
                     redirectTo:'/home'
                   })
                 })
                 .controller('homeCTRL',function($scope){
                   $scope.title = 'Jackson'
                 })
                 .controller('steptwoCTRL',function($scope){
                   $scope.title = 'Score'
                 })
                 .controller('stepthreeCTRL',function($scope){
                   $scope.title = 'Ready?'
                 })
