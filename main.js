

//angular-	routing

var app=angular.module('crick',['ngRoute','ngCookies']);

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
	.when('/global',{templateUrl:'global.html'})
	.otherwise({redirectTo:'/'});
});
//controller for legend list
app.controller('legend',function($scope,$http){
	 
	  $http.get('aus20.json')//http://localhost:553/artifice_2540/jsonplayers.json
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
	
	 $http.get('aus20.json')//http://localhost:553/artifice_2540/jsonplayers.json
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
			  return 'runs';
		  }
		  if(check==2)
		  {
			  return 'wickets';
		  }
		  else{
			  return 'matches';
		  }
	  };
	  
});
app.controller('home',function($scope,$http,$rootScope,$cookies){
	$scope.form=true;
	var loggedin="cookie";
	if($cookies.get(loggedin)=='yep'){
	$rootScope.logged=true;
	}
    if(!($rootScope.logged))
	{
		$scope.form=false;
	    $scope.msg=true;
	}
	$scope.user={};
	//cookies
	var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);
    
    //submit()
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
			  // Setting a cookie
              $cookies.put(loggedin, 'yep', {'expires': expireDate});

	 });
	 
	 };
		    if($rootScope.logged==true)
	{
	$scope.form=true;
	$scope.msg=false;		
	}
	
	});
	
app.controller('global',function($scope,$http){
	 //checkboxes hiding.
	 $scope.formatSelected=0;
	 $scope.stateChange=function(test)
	 {
		  $scope.ones=!($scope.ones);
		  $scope.twentys=!($scope.twentys); //problem if checked and then unchecked.
		  $scope.formatSelected=1;
	 }
	 $scope.stateChange2=function(one)
	 {
		  $scope.tests=!($scope.tests);
		  $scope.twentys=!($scope.twentys);
		  $scope.formatSelected=2;
	 }
	 $scope.stateChange3=function(twenty)
	 {
		  $scope.ones=!($scope.ones);
		  $scope.tests=!($scope.tests);
		  $scope.formatSelected=3;
	 }
	 //for style
	 $scope.styleSelected=0;
	 $scope.stateChange4=function(batt)
	 {
		  $scope.bowl=!($scope.bowl);
		  $scope.styleSelected=1;
	 }
	 $scope.stateChange5=function(bow)
	 {
		  $scope.bat=!($scope.bat);
		  $scope.styleSelected=2;
	 }
	 
	 //team hiding
	 $scope.teamSelected="no";
	 $scope.teamHide=function($event){
		 $scope.team=true;                                    //can't retreive back to options.
		 $scope.target=angular.element($event.target);
		 $scope.choose='your selected team is'+' '+$scope.target.html();
		 $scope.back='Back';
		 $scope.teamSelected=$scope.target.html();
	 }
	 //back
	 $scope.back2=function(){
		 $scope.team=false;
		 $scope.choose=" ";
		 $scope.back=" ";
    	 $scope.teamSelected="no";
	 }
	 
	 $scope.submit=function(){
		 if($scope.formatSelected==3 &&$scope.styleSelected==1 &&$scope.teamSelected=='Australia')
		 {
			 $http.get('aus20.json')
			 .success(function(response)
			 {
				 $scope.array=response.records;
			 });
		 }
		 
	 }
	  
	  
});
	
	
	
	
	
	
	
		
	
		 






