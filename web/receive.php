<?php

$requestPayload = file_get_contents("php://input"); // JSON object
$object = json_decode($requestPayload, true); // convert to a php object
// var_dump($object);

echo "<br> This is requestPayload in RECEIVE: " .$object;

$NUMBER = $object;
echo "<br> NUMBER IN RECEIVE = " .$NUMBER;

?>