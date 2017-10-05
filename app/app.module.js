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
                   $scope.leaders = [
                     {name:'Jackson',score:100},
                     {name:'Bonn',score:40},
                     {name:'Cass',score:30},
                     {name:'Ian',score:10},
                     {name:'Tom',score:6}
                   ]
                   $scope.allLeaders = function(){
                     return $scope.leaders.length;
                   }
                 })
                 .controller('steptwoCTRL',function($scope){
                   $scope.title = 'Score'
                 })
                 .controller('stepthreeCTRL',function($scope){
                   $scope.title = 'Ready?'
                 })
