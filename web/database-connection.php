<?php
/* ---------------------------------------------------------------------------
 * File: database-connection.php
 *
 * Description: All functions related to the database - connection,
 *	retrieving values, deleting rows, etc
 *
 * Comment: delete "echos" in the end
 *
 --------------------------------------------------------------------------- */
include ("file.php"); // for hostaname, username, etc
/* ------------------------------------------ connects to the database and returns the connection ---------------------------------------------------- */
function connectDB(){
	$hostname = host();
	$username = username();
	$password = database_password();
	$database_name = database_name();
	$port = 5432;

	$connection = pg_connect('host='.$hostname.' port='.$port.' dbname='.$database_name.' user='.$username.' password='.$password);
	if ($connection) {
		echo "Connection successful <br>";
	} else {
		echo "Connection failed <br>";
	}
	return $connection;
}

/* -------------  insert a row in the database table for all parameters -> $values is an associative array with all values to be inserted ------------ */
function insertRow($database, $values){
	echo "Inside insertRow: <br> time is " .$values["time"]. "<br> voltage is " .$values["volt"]. "<br> current is " .$values["ampere"]. "<br> speed is " .$values["vel"]. "<br> temperature is " .$values["temp"]. "<br>";
	$string = "INSERT INTO telemetria (t, voltage, current, speed, temperature, coordinates1, coordinates2) VALUES (".$values["time"].",". $values["volt"].",".$values["ampere"].",".$values["vel"].",". $values["temp"].",".$values["coord1"].",".$values["coord2"].")";
	if(pg_query($database, $string)){
		echo "Records added successfully in insertRow <br>";
	} else {
		echo "ERROR: Did not execute query ".$string." in insertRow <br>";
	}
}

/* ---------------------------------------  insert a row in the database table giving all parameters as inputs ---------------------------------------- */
function insertRow2($database, $time, $voltage, $current, $speed, $temperature, $coordinates1, $coordinates2){
	echo "Inside insertRow: <br> time is " .$time. "<br> voltage is " .$voltage. "<br> current is " .$current. "<br> speed is " .$speed. "<br> temperature is " .$temperature. "<br>";
	$string = "INSERT INTO telemetria (t, voltage, current, speed, temperature, coordinates1, coordinates2) VALUES (".$time.", ".$voltage.", ".$current.", ".$speed.", ".$temperature.", ".$coordinates1.", ".$coordinates2.")";
	if(pg_query($database, $string)){
		echo "Records added successfully in insertRow2 <br>";
	} else {
		echo "ERROR: Did not execute query ".$string." in insertRow2 <br>";
	}
}

/* ----------------------------------------------------------  delete row at time = t ----------------------------------------------------------------- */
function deleteRow($database, $time){
	echo "Inside deleteRow <br>";
	pg_query($database, "DELETE FROM telemetria WHERE t=".$time) or die("ERROR: Cannot execute query in deleteRow <br>");
}

/* ------------------------------- get column -> ordered by time (t) -> variable is the name of the column to be shown ---------------------------------*/
function getColumn ($database, $variable){
	echo "Inside getColumn <br>";
	$string = "SELECT * FROM telemetria ORDER BY t";
	$result = pg_query($database, $string) or die("ERROR: Cannot execute query ".$string." in getColumn<br>");
	$i = 1;
	while($row=pg_fetch_assoc($result)){
		echo "<td align='center' width='100'> t=".$i. " " .$variable. " is " . $row[$variable] . "</td> <br>";
		$i++;
	}
}

/* -------------------------------------------------- get specific value for parameter at time t ------------------------------------------------------*/
function getOneValue ($database, $variable, $time){
	echo "Inside getOneValue <br>";
	$string = "SELECT " .$variable. " FROM telemetria WHERE t=".$time;
	$result = pg_query($database, "SELECT " .$variable. " FROM telemetria WHERE t=".$time) or die("ERROR: Cannot execute query " .$string." in getOneValue <br>");
	$row = pg_fetch_assoc($result) or die("ERROR: Could not fetch result for ".$variable." at t= ".$time." in getOneValue <br>");
	echo "Result for ".$variable." at time ".$time." is " .$row[$variable]. "<br>";
	return $row[$variable];
}

/* ------------------------------------------------------ get one value at a time for all t's --------------------------------------------------------*/
function getSequenceOfValues($database, $variable){
	echo "Inside getSequenceOfValues <br>";
	$i = 1;
	while(true){
		echo "i=".$i. "<br>";
		getOneValue($database, $variable, $i);
		echo "Value of i=" .$i." <br>";
		$i++;
	}
}
/* ----------------------------------------------------------- close the connection ---------------------------------------------------------------- */
function closeConnection($database){
	if(pg_close($database)){
		echo "Connection to database closed <br>";
	}
	else{
		echo "ERROR: Connection to database not closed <br>";
	}
}

/* -------------------------------------------- displays the whole database -> ordered by time (t) ------------------------------------------------- */
function showTable($database){
	$result = pg_query($database,"SELECT * FROM telemetria ORDER BY t");
	$i = 1;
	echo "<table>";
	while($row = pg_fetch_assoc($result)){
		echo "<tr>";
		echo "<td align='center' width='100'> t =" . $row['t'] . "</td>";
		echo "<td align='center' width='100'>" . $row['voltage'] . "</td>";
		echo "<td align='center' width='100'>" . $row['current'] . "</td>";
		echo "<td align='center' width='100'>" . $row['speed'] . "</td>";
		echo "<td align='center' width='100'>" . $row['temperature'] . "</td>";
		echo "<td align='center' width='100'>" . $row['coordinates1'] . "</td>";
		echo "<td align='center' width='100'>" . $row['coordinates2'] . "</td>";
		echo "</tr>";
		$i++;
	}
	echo "</table>";
}
?>