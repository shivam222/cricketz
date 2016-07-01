<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$db_name="users";
$connection=mysql_connect($servername,$username,$password);

$database=mysql_select_db($db_name,$connection);
	
	
	    $name=$_POST['signname'];
		$mail=$_POST['signmail'];
	    $pass=$_POST['signpass'];
		$hashed=md5($pass);
		$query="INSERT INTO users (id,name,mail,password) VALUES (null,'$name','$mail','$hashed')";
		$run=mysql_query($query);
		if($run)
		{
	    echo 'successful...go back and login.';
		}
		else{
			echo 'try again.';
		}
?>