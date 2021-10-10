<?php
/*------------------------------------------------------------------------------
 * File: ajax.php
 *
 * Description: retrieving data from the database for real time updates
 *
 * aquisicao (horas, sd, tempo, tensao, corrente, velocidade, temperatura, ns,
 *      latitude, longitude, ang_x, ang_y, ang_z, acel_x, acel_y, acel_z, validity)
 *
-------------------------------------------------------------------------------- */
include ("file.php"); // file created to return the database conenction parameters

// database conenction parameters -- change for different databases
$hostname = host();
$username = username2();
$password = database_password2();
$database_name = database_name2();
$port = 5432;
$table_name = table_name2();

// connect to the database
$database = pg_connect('host='.$hostname.' port='.$port.' dbname='.$database_name.' user='.$username.' password='.$password);

$result = pg_query($database, "SELECT * FROM " .$table_name /*" ORDER BY tempo"*/); // do the query (we want all the parameters)
//$result = pg_query($database, "SELECT * FROM telemetria ORDER BY t WHERE t > T_curr");
$value_from_database = array(); // create an array

while ($row = pg_fetch_assoc($result)) {
    array_push($value_from_database, $row); // each line of the database is an entry of the array
}

echo json_encode($value_from_database); // encode the whole arary as a JSON object to be able to access each parameter

exit();
?>