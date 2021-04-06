<?php
//include("database_connection.php");

echo "Inside ajax after a change <br>";

$variable = getOneValue($database, "speed", 3);
echo "From ajax.php ".$variable. "<br>";
echo json_encode($first);

/*$first = 4;
$second = 5;
echo json_encode($first);
echo json_encode($second);*/

?>