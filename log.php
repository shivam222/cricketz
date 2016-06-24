<?php
ob_start();
session_start();
$servername = "localhost:3307";
$username = "root";
$password = "";
$db_name="users";
$_SESSION['logged']='no';
if($connection=mysql_connect($servername,$username,$password))
{
if($database=mysql_select_db($db_name,$connection)){
	
if(isset($_POST['logmail'])&&isset($_POST['logpass']))
{
$mail=$_POST['logmail'];$pass=$_POST['logpass'];
$pass_hash=md5($pass);
if(!empty($mail)&&!empty($pass))
{
    $query="SELECT id FROM users WHERE mail='$mail' AND password='$pass_hash'";
	if($run=mysql_query($query))
	{
		$query_row=mysql_num_rows($run);
	
	if($query_row==0)
	{
		echo 'wrong password or email.';
		header('Location:cricket.html#/');
	}
	else{
		$user_id=mysql_result($run,0,'id');
		$_SESSION['logged']='yes';
		$_SESSION['user_id']=$user_id;
		}
	
}
else{
	echo 'Query problem';
}
}
else{
	echo 'Bastard supply full information.';
}
}
		
}
	else{
		echo 'connection failed';
	}
}
else{
		echo 'connection failed';
	}



?>