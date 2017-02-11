
<?php

$ch = curl_init("http://admin:opendomo@192.168.1.200:81/lst");
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



