<!-----------------------------------------------------------------------------
 * File: ajax.js
 *
 * Description: tests with ajax and real time updates
 *
------------------------------------------------------------------------------->

<?php

/* ----------------------------------- 6th AJAX test --------------------------------- */
$database = connectDB();
echo "in ajax.php";
$result = pg_query($database,"SELECT * FROM telemetria ORDER BY t");
$data = array();
$i = 0;
while ($row = pg_fetch_assoc($result))
{
    echo "inside while";
    echo $i++;
    echo array_push($data, $row);

}


echo json_encode($data);
echo "after json_encode";
//exit();
closeConnection($database);

?>