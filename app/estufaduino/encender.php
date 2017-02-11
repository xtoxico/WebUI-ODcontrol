<?php

$ch = curl_init("http://192.168.1.120/?estufa=1");

curl_setopt($ch, CURLOPT_FILE, $fp);
curl_setopt($ch, CURLOPT_HEADER, 0);

curl_exec($ch);
curl_close($ch);

echo $fp;
?>