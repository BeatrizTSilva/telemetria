<?php
/*------------------------------------------------------------------------------
 * File: test-ajax.php
 *
 * Description: retrieving data from the database for real time updates
 *
-------------------------------------------------------------------------------- */
include ("file.php"); // file created to hold the database conenction parameters

// database conenction parameters
$hostname = host();
$username = username();
$password = database_password();
$database_name = database_name();
$port = 5432;

// connect to the database
$database = pg_connect('host='.$hostname.' port='.$port.' dbname='.$database_name.' user='.$username.' password='.$password);

$result = pg_query($database, "SELECT * FROM telemetria WHERE t=1"); // do the query (we want all the parameters)
$value_from_database = array(); // create an array

while ($row = pg_fetch_assoc($result)) {
    array_push($value_from_database, $row); // each line of the database is an entry of the array
}

echo json_encode($value_from_database); // encode the whole arary as a JSON object to be able to access each parameter

exit();
?>