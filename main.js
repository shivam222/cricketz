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
	.when('/rank',{templateUrl:'rank.html'})
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
//slider on home page
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

//controller for rank page .

app.controller('ranker',function($scope,$http){
	
	 $http.get('jsonplayers.json')//http://localhost:553/artifice_2540/jsonplayers.json
	 .success(function(response){
		   $scope.array=response.records; 
	 });
	  var check=0;
      $scope.team1=function(){
		   check=1;
	  }	;  
	   $scope.batsman1=function(){
		   check=2;
	  }	; 
	   $scope.bowler1=function(){
		   check=3;
	  }	; 
	  $scope.myfunc=function(){
		  if(check==0)
		  {
			  return 'name';
		  }
		  if(check==1)
		  {
			  return 'age';
		  }
		  if(check==2)
		  {
			  return 'height';
		  }
		  else{
			  return 'number';
		  }
	  };
	  
});





