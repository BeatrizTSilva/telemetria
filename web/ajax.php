<!-----------------------------------------------------------------------------
 * File: ajax.js
 *
 * Description: tests with ajax and real time updates
 *
------------------------------------------------------------------------------->

<?php

/* ----------------------------------- 6th AJAX test --------------------------------- */
$database = connectDB();

$result = pg_query($database,"SELECT * FROM telemetria ORDER BY t");
$data = array();
while ($row = pg_fetch_assoc($result))
{
    echo array_push($data, $row);

}

echo json_encode($data);
//exit();
closeConnection($database);

?>