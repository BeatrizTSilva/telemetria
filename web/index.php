<!----------------------------------------------------------------------------
 * File: index.php
 *
 * Description: html file, basically
 *
------------------------------------------------------------------------------>
<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>TTTTTT</title>
	<link rel="icon" href="imgs/rover.ico"> <!-- icon for the webpage -->
	<link rel="stylesheet" type="text/css" href="styles.css"> <!-- css file with all the definitions of classes, etc -->
	<!--meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<!---------------------------- for graphs --------------------------------->
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/highcharts-more.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/modules/export-data.js"></script>
	<script src="https://code.highcharts.com/modules/accessibility.js"></script>
	<!----------------------------- includes ----------------------------------->
	<?php require("database_connection.php"); require("functions.php"); //require("ajax.php");?>
</head>

<body>
	<div id="header">
		<img id="psem-logo" src="imgs/psem-car-white.png" />
		<div id="clockbox">
			<script src="clock.js"></script>
		</div>
		<p id="github-code">
        	Code <a href="https://github.com/colher-de-pau/site" target="_blank" rel="noopenernoreferrer">here</a>
      	</p>
	</div>

	<div id="main-container">

		<!-- -------------------------------------------------------------- table ---------------------------------------------------------------- -->
		<!--div id="table"><table><tr>
			<th>First name</th><th>Last name</th><th>Age</th><th>City</th></tr><tr>
			<td>Jill</td><td>Smith</td><td>50</td><td>Lisbon</td></tr><tr>
			<td>Eve</td><td>Jackson</td><td>94</td><td>Lisbon</td></tr>
		</table></div-->

		<!-- use values from clock.js for date in hmtl -->
		<!--p id="day"></p><p id="month"></p><p id="year"></p><p id="hour"></p><p id="minute"></p><p id="second"></p-->



		<!-- --------------------------------------------------------- PHP -------------------------------------------------------------------------- -->
		<?php
		/* connection to the database -> in database_connection.php */
		$database = connectDB();

		/* values that can be inserted into the database */
		$values1 = array('time' => '6', 'volt' => '52.1', 'ampere' => '0.95', 'vel' => '8.52',
			'temp' => '26.2', 'coord1' => '9.85465', 'coord2' => '11.35698'
		);
		$values2 = array('time' => '5', 'volt' => '20.99', 'ampere' => '5.84', 'vel' => '19',
			'temp' => '25.1', 'coord1' => '9.23585', 'coord2' => '11.23589'
		);

		/* inserts a row -> in database_connection.php */
		//insertRow($database, $values1);
		/* in functions.php */
		//writeMessage();
		/* shows the whole database -> in database_connection.php */
		showTable($database);
		/* write SQL for parameter $variable and time $time */
		$something = getOneValue($database, "current", 2);
		echo "The value from getOneValue is " .$something. "<br>";
		/* choose variable to print */
		//getColumn($database, "voltage");
		/* get one value at a time for all t's*/
		//getSequenceOfValues($database, "current");
		/* delete row at time t */
		//deleteRow($database, 6);
		//showTable($database);
		closeConnection($database);
		?>


		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<?php /* -------------------------------- 1st ajax test ------------------------------------------- */
		//lastID -> bulk of data using this as input
		// get user input
		$lastID = intval($_GET['lastid']);

		// --------------------------------
		// FETCH RECORDS FROM DATABASE HERE
		// --------------------------------
		// $sql = "SELECT * FROM `graph` WHERE `id` > " . $lastID;

		// CREATE DUMMY CONTENT
		$data = array();
		for($i = $lastID; $i < $lastID + 50; $i++) {
			array_push($data, array(
				'id'        => $i,
				'position'  => array(
					'x' => $i,
					'y' => mt_rand(0, 10) // random value between 0 and 10
				)
			));
		}
		// END CREATING DUMMY CONTENT

		// create response
		$json = array(
			'lastID'    => $data[count($data) - 1]['id'],
			'data'      => $data
		);

		// display response
		echo json_encode($json);
		?>

		<!--?php /* ---------------------------------- 2nd AJAX test -------------------------------------------- */
		echo "<br> Connection to DB in 2nd test <br>";
		$db = connectDB();
		$data = dataArray($db, 1);
		echo "Echo in php file " .json_encode($data);
		echo "<br> Closed in 2nd test ";
		closeConnection($db);
		//exit();
		?-->

		<!--script type="text/javascript">
			fetch('/alldata');
		</script-->

		<!-- something for ajax -->
		<!--script type="text/javascript">
			console.log("Hello from the script");
			const data = {whateveriwanttosend};
			const options = {
				method:'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			};
			fetch('/api', options);

			//on the js file i should have:
			app.post('/api', (request, response) => {
				console.log(request);
			});
		</script-->


		<!-- ----------------------------------------- graphs for voltage, speed, etc -> in graphs.js ---------------------------------------------------- -->
		<!--div id="graph-container">
			<div id="temperature_graph" class="graph"></div-->
			<!--div id="voltage_graph" class="graph"></div>
			<div id="current_graph" class="graph"></div>
			<div id="speed_graph" class="graph"></div>
			<div id="graph_voltmeter" class="graph"></div-->
			<!--script src="graphs.js"></script>
		</div-->

		<div class="highcharts-figure">
			<div id="container"></div>
			<p class="highcharts-description">
				Chart showing data updating every second, with old data being removed.
			</p>
		</div>

		<script src="graphs.js"></script>

		<!--div id="test-chart"></div-->
		<!--div id="temperature_graph" id="one-graph"></div>
		<script src="graphs.js"></script-->


	</div>
</body>
</html>