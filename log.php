<?php

$servername = "localhost:3307";
$username = "root";
$password = "";
$db_name="users";
$connection=mysql_connect($servername,$username,$password);

$database=mysql_select_db($db_name,$connection);
	
	//$_POST = json_decode(file_get_contents('php://input'), true);
	    $name=$_POST['name'];
	    $pass=$_POST['pass'];
		$hashed=md5($pass);
		$ansi=mysql_fetch_assoc(mysql_query("SELECT password FROM users WHERE mail='$name'"));
		if($hashed==$ansi['password']){
		echo true;
		}
	    else{
			echo false;
		}
?>
		
	
	
	
	

