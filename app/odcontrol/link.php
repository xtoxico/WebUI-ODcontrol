<?php

if ($_GET['action']=='ON'){
    $ch = curl_init("http://admin:opendomo@192.168.1.200:81/unl+di000+LuzTV");
}else{
    $ch = curl_init("http://admin:opendomo@192.168.1.200:81/lnk+di000+LuzTV+p");
}

$fp="";
curl_setopt($ch, CURLOPT_RETURNTRANSFER, $fp);
curl_setopt($ch, CURLOPT_HEADER, 0);

curl_exec($ch);
curl_close($ch);

//echo $fp;
$json = substr($fp,0,strpos($fp,"DI"));

//echo strpos($fp,"DI");
echo $json;

sleep(3);

if ($_GET['action']=='ON'){
    $ch = curl_init("http://admin:opendomo@192.168.1.200:81/unl+di001+Lmesa");
}else{
    $ch = curl_init("http://admin:opendomo@192.168.1.200:81/lnk+di001+Lmesa+p");
}

$fp="";
curl_setopt($ch, CURLOPT_RETURNTRANSFER, $fp);
curl_setopt($ch, CURLOPT_HEADER, 0);

curl_exec($ch);
curl_close($ch);

//echo $fp;
$json = substr($fp,0,strpos($fp,"DI"));

//echo strpos($fp,"DI");
echo $json;




//
?>
