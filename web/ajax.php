<?php
/*------------------------------------------------------------------------------
 * File: ajax.js
 *
 * Description: retrieving data from the database for real time updates
 *
-------------------------------------------------------------------------------- */
include ("file.php");

$hostname = host();
$username = username();
$password = database_password();
$database_name = database_name();
$port = 5432;

$database = pg_connect('host='.$hostname.' port='.$port.' dbname='.$database_name.' user='.$username.' password='.$password);

//$result = pg_query($database, "SELECT * FROM telemetria WHERE t=1");
$result = pg_query($database, "SELECT * FROM telemetria ORDER BY t");
$value_from_database = array();

while ($row = pg_fetch_assoc($result))
{
    array_push($value_from_database, $row);
}

echo json_encode($value_from_database);

exit();
?>