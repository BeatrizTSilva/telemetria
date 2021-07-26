<!-----------------------------------------------------------------------------
 * File: ajax.js
 *
 * Description: tests with ajax and real time updates
 *
------------------------------------------------------------------------------->

<?php
require("database_connection.php");
//$database = connectDB();
//closeConnection($database);

/* ----------------------------------- 6th AJAX test --------------------------------- */
//$data = getOneValue($database, "current", 5);

//echo json_encode($data);

$data = '{"result":true,"count":1}';
json_encode($data);

?>