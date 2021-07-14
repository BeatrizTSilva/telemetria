/******************************************************************************
 * File: ajax.js
 *
 * Description: tests with ajax and real time updates
 *
 ******************************************************************************/

<?php

require("database_connection.php");
$database = connectDB();

/* ----------------------------------- 5th AJAX test --------------------------------- */

//$var = getOneValue($database, "current", 5);
$var = "hello";
echo json_encode($var);

closeConnection($database);
exit();

?>