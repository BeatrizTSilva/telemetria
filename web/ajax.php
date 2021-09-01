<?php
/*-----------------------------------------------------------------------------
 * File: ajax.js
 *
 * Description: tests with ajax and real time updates
 *
-------------------------------------------------------------------------------- */
include ("file.php");

$hostname = host();
$username = username();
$password = database_password();
$database_name = database_name();
$port = 5432;

$database = pg_connect('host='.$hostname.' port='.$port.' dbname='.$database_name.' user='.$username.' password='.$password);
/*if ($database) {
    echo "Connection successful <br>";
} else {
    echo "Connection failed <br>";
}*/
/* ----------------------------------- 6th AJAX test --------------------------------- */
/*$result = pg_query($database,"SELECT * FROM telemetria ORDER BY t");

$data = array();
while ($row = pg_fetch_assoc($result))
{
    array_push($data, $row);
}*/

//$result = pg_query($database, "SELECT * FROM telemetria WHERE t=1");
$result = pg_query($database, "SELECT * FROM telemetria ORDER BY t");
$data = array();

while ($row = pg_fetch_assoc($result))
{
    array_push($data, $row);
}

echo json_encode($data);

exit();
?>