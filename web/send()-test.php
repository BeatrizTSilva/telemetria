<?php
/*------------------------------------------------------------------------------
 * File: ajax-call.php
 *
 * TESTS WITH AJAX.SEND()
 *
-------------------------------------------------------------------------------- */
include ("file.php"); // file created to return the database conenction parameters

// database conenction parameters -- change for different databases
$hostname = host();
$username = username1();
$password = database_password1();
$database_name = database_name1();
$port = 5432;
$table_name = table_name1();





/* receive the value of the current time */

$requestPayload = file_get_contents("php://input"); // JSON object
$object = json_decode($requestPayload, true); // convert to a php object
var_dump($object);

echo "<br> This is object (send-test): " .$object;

$NUMBER = $object;
echo "<br> NUMBER = " .$NUMBER. "<br>";




// connect to the database
$database = pg_connect('host='.$hostname.' port='.$port.' dbname='.$database_name.' user='.$username.' password='.$password);

$result = pg_query($database, "SELECT * FROM " .$table_name. " ORDER BY t"); // do the query (we want all the parameters)
//$result = pg_query($database, "SELECT * FROM telemetria ORDER BY t WHERE t > T_curr");
$value_from_database2 = array(); // create an array

while ($row = pg_fetch_assoc($result)) {
    array_push($value_from_database2, $row); // each line of the database is an entry of the array
}

//echo json_encode($value_from_database2); // encode the whole arary as a JSON object to be able to access each parameter

// exit();


?>