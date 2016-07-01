

//angular-	routing

var app=angular.module('crick',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{templateUrl:'home.html'})
	.when('/news',{template:'news'})
	.when('/legends',{
		resolve:{
			"check":function($location,$rootScope){
				if(!($rootScope.logged)){
					$location.path("/");
				}
				
			}
		},templateUrl:'legends.html'
	})
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
app.controller('home',function($scope,$http,$rootScope){
	$scope.form=true;
	if(!($rootScope.logged))
	{
		$scope.form=false;
	    $scope.msg=true;
	}
	$scope.user={};
	$scope.submit=function(){
	$http({
    method: 'post',
    url: 'log.php',
	data : $.param({
                name: $scope.user.name,
				pass: $scope.user.password
            }),
    headers: {
        'Content-Type': "application/x-www-form-urlencoded; "    //charset=utf-8
              }
                                     //$.param({ lang: "fr" })
	 })
	.success(function(data) {	
 	          $rootScope.logged=data; 

	 });
	    if($rootScope.logged==true)
	{
	$scope.form=true;
	$scope.msg=false;		
	}
	};
	});
	

    
	
	/*
		  
		  $http(req).success(function(data, status, headers, config)
	{
		$scope.password=data;
	});/*.error(function(data, status, headers, config){alert("error"/*+res*)/;*/
	//};
	//});*/
	
	
	
	
	
	
	
	
	
		
	
		 






