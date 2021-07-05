<!----------------------------------------------------------------------------
 * File: index.php
 *
 * Description: html file basically
 *
------------------------------------------------------------------------------>
<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>TTTTTT</title>
	<link rel="icon" href="imgs/rover.ico"> <!-- icon for the webpage -->
	<link rel="stylesheet" type="text/css" href="styles.css"> <!-- css file with all the definitions of classes, etc -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<!---------------------------- for graphs --------------------------------->
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/highcharts-more.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/modules/export-data.js"></script>
	<script src="https://code.highcharts.com/modules/accessibility.js"></script>
</head>

<body>
	<div id="head">
		<img id="psem-logo" src="imgs/psem-car-white.png" />
		<div id="clockbox">
			<script src="clock.js"></script>
		</div>
		<p id="github-code">
        	Code <a href="https://github.com/colher-de-pau/site" target="_blank" rel="noopenernoreferrer">here</a>
      	</p>
	</div>

	<div id="container">
		<!-- ------------------------------------------------ includes ---------------------------------------------------------- -->
		<?php
		include("database_connection.php");
		include("functions.php");
		//include("ajax.php");

		?>

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
		echo "UPdate <br>";

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
		writeMessage();
		/* shows the whole database -> in database_connection.php */
		showTable($database);
		/* write SQL for parameter $variable and time $time */
		getOneValue($database, "current", 2);
		/* choose variable to print */
		getColumn($database, "voltage");
		/* get one value at a time for all t's*/
		//getSequenceOfValues($database, "current");
		/* delete row at time t */
		//deleteRow($database, 6);
		//showTable($database);

		?>


		<script type="text/javascript">
			fetch('/alldata');
		</script>


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
		<div id="graph_container">
			<div id="temperature_graph" class="graph"></div>
			<!--div id="voltage_graph" class="graph"></div>
			<div id="current_graph" class="graph"></div>
			<div id="speed_graph" class="graph"></div-->
			<!--div id="graph_voltmeter" class="graph"></div-->
			<script src="graphs.js"></script>
		</div>


	</div>
	<!--script src="input.js"></script-->
	<!-- script for the inputs place and date -->
	<script src="sticky_header.js"></script> <!-- script for the static header clock -->

	<?php closeConnection($database);
	 ?>

</body>
</html>