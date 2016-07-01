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
		$query1="SELECT name FROM users WHERE mail='$mail'";
		$run1=mysql_query($query1);
		if(mysql_num_rows($run1)==0){
		$query="INSERT INTO users (id,name,mail,password) VALUES (null,'$name','$mail','$hashed')";
		$run=mysql_query($query);
		if($run)
		{
	    echo 'successful...go back and login.';
		}
		else{
			echo 'try again.';
		}
		}
		else{
			echo 'this mail id is already registered.';
		}
?>