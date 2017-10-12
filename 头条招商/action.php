<?php

	header("Content-type: text/html; charset=utf-8"); //指定页面编码
	
	if (empty($_POST)) header('location:index.html');
	//接收数据
	$name 	= htmlspecialchars($_POST['name']);//姓名
	$phone	= htmlspecialchars($_POST['phone']);//电话
	$addtime  = date("Y-m-d H:i:s ");
	$ip = $_SERVER["REMOTE_ADDR"];//IP
	//$url = $_GET["url"];
//	var_dump($_POST);
//	var_dump($ip);
//	var_dump($addtime);
//	exit;
	//连接数据库
	include("conn.php");
	
	$s = "select * from user where ip ='"."$ip'";//检测ip,相同的ip只能填写一次
	$sql=mysql_query($s);
	$info=mysql_fetch_array($sql);
	//var_dump($sql1);
	//exit;
	if ($info) {
		echo "<script language='javascript'>alert('您已填写过资料，请勿重复提交');history.back();</script>";
		exit;
	} else {
		//发送sql语句
		$sql = "insert into user(name, phone, ip, addtime) values('$name', '$phone', '$ip', '$addtime')";
		//echo $sql;
		//exit;
		$re=mysql_query($sql);
		 echo "<script language='javascript'>alert('感谢您的填写');history.back();</script>";
		 exit; 
	}
		
?>






		