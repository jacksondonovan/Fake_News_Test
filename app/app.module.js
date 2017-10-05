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
                   .when('/test',{
                     templateUrl:'templates/test.html',
                     controller:'testCTRL'
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
                 .controller('testCTRL',function($scope){
                   $scope.score = 0
                   $scope.allNews = [
                     {
                       title:'Headline Placeholder',
                       source:'exampleOnlinePublisher',
                       image:'http://www.slate.com/content/dam/slate/blogs/the_slatest/2016/04/10/boston_globe_publishes_fake_front_page_imagining_a_trump_presidency/bostonglobetrumpfakefrontpage.jpg.CROP.promovar-mediumlarge.jpg',
                       status:false
                     },
                     {
                       title:'Trump Gets Lost In PR',
                       source:'exampleOnlinePublisher',
                       image:'http://www.slate.com/content/dam/slate/blogs/the_slatest/2016/04/10/boston_globe_publishes_fake_front_page_imagining_a_trump_presidency/bostonglobetrumpfakefrontpage.jpg.CROP.promovar-mediumlarge.jpg',
                       status:false
                     },
                     {
                       title:'Armstrong Lands on Moon',
                       source:'exampleOnlinePublisher',
                       image:'#',
                       status:true
                     },
                     {
                       title:'Rockies lose WC',
                       source:'exampleOnlinePublisher',
                       image:'#',
                       status:true
                     }
                   ]
                   $scope.fakenews = [
                     {
                       title:'Headline Placeholder',
                       source:'exampleOnlinePublisher',
                       image:'http://www.slate.com/content/dam/slate/blogs/the_slatest/2016/04/10/boston_globe_publishes_fake_front_page_imagining_a_trump_presidency/bostonglobetrumpfakefrontpage.jpg.CROP.promovar-mediumlarge.jpg',
                       status:false
                     },
                     {
                       title:'Trump Gets Lost In PR',
                       source:'exampleOnlinePublisher',
                       image:'http://www.slate.com/content/dam/slate/blogs/the_slatest/2016/04/10/boston_globe_publishes_fake_front_page_imagining_a_trump_presidency/bostonglobetrumpfakefrontpage.jpg.CROP.promovar-mediumlarge.jpg',
                       status:false
                     }
                   ]
                   $scope.realnews = [
                     {
                       title:'Armstrong Lands on Moon',
                       source:'exampleOnlinePublisher',
                       image:'#',
                       status:true
                     },
                     {
                       title:'Rockies lose WC',
                       source:'exampleOnlinePublisher',
                       image:'#',
                       status:true
                     }
                   ]
                   $scope.allNews.concat($scope.realnews)
                   $scope.allNews.concat($scope.fakenews)
                   console.log($scope.allNews);
                   $scope.leftdisplay = $scope.allNews[Math.floor(Math.random()*$scope.allNews.length)]
                   $scope.flagleft = function(){
                     $scope.leftguess = false;
                     console.log('something');
                   }
                   $scope.rightdisplay = $scope.allNews[Math.floor(Math.random()*$scope.allNews.length)]
                   $scope.flagright = function(){
                     $scope.rightguess = false;
                     console.log('rightside');
                   }
                   $scope.check = function(){
                     if($scope.leftguess === $scope.leftdisplay.status){
                       $scope.score++
                     }
                     if($scope.rightguess === $scope.rightdisplay.status){
                       $scope.score++
                     }
                   }
                 })
