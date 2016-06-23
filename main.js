//jquery slider.

/*$(document).ready(function()
{ 
var width=500;
var animationspeed=1000;
var pause=3000;


var $slider=$('#slider');
var $slidecontainer=$slider.find('.slides');
var $slides=$slidecontainer.find('.slide');	

var interval;
var count=0;
function startslider(){
	interval=setInterval(function(){
		$slidecontainer.animate({'margin-top':'-='+width},animationspeed,function(){
		    count++;
			if(count==9)
			{
			$slidecontainer.css('margin-top',0);
			}});
	},pause);
}
function stopslider(){
	clearInterval(interval);
}
$slider.on('mouseenter',stopslider).on('mouseleave',startslider);
startslider();
//legends list
$("ul li").on('click',function(){
	$(this).next().css('color','blue');
	$(this).css('color','red');
	}
);
});*/





//angular-	routing

var app=angular.module('crick',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{templateUrl:'home.html'})
	.when('/news',{template:'news'})
	.when('/legends',{templateUrl:'legends.html'})
	.when('/rank',{template:'news'})
	.when('/learn',{template:'news'})
	.when('/search',{template:'news'})
	.otherwise({redirectTo:'/'});
});
//controller for legend list
app.controller('legend',function($scope,$http){
	
	  $http.get('jsonplayers.json')//http://localhost:553/artifice_2540/jsonplayers.json
	  .success(function(response){
		   $scope.array=response.records; 
	  });
	  $scope.currentPlayer={};
	  $scope.modal=function(play){
      $scope.currentPlayer=play;
	  }
	  
});

 app.controller('crick2',function($scope){
	$scope.slides = [
            {image: 'images/ball.png', description: 'Image 00'},
			 {image: 'images/warn.png', description: 'Image 01'},
            {image: 'images/tendulkar.png', description: 'Image 02'}
           ];
		   
		   $scope.currentindex=0;
		   $scope.setindex=function(index){
			   $scope.currentindex=index;
		   };
		   $scope.iscurrentslideindex=function(index){
			    return $scope.currentindex===index;  
		   };
		 
	
});

/*app.directive('heroes',function(){
	
	function hero($scope,elem,attrs){
		$scope.changecolor=function($event){
			
		};
	}
	return{
		restrict:'E',
		link:hero,
		tempalte:'<div ng-click="changecolor($event)"></div>'
	}
});
	
	

	
/*	
	angular.element(document).ready(function() {
      angular.bootstrap(document, ['legend']);
    });

*/

//js --legends list hover
//var legend=document.getElementsByTagName("li");
//legend[0].style.color='blue';	
	