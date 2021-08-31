<!-----------------------------------------------------------------------------
 * File: index.php
 *
 * Description: html file, basically
 *
 * Comments: CLOSE CONNECTION TO DATABASE SOONER (CURRENTLY AT THE
 * 			END OF THE FILE)
 *
------------------------------------------------------------------------------>
<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>TTTTTT</title>
	<link rel="icon" href="imgs/rover.ico"> <!-- icon for the browser tab -->
	<link rel="stylesheet" type="text/css" href="styles.css"> <!--css file-->
	<!--meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0">
	<!---------------------------- for graphs --------------------------------->
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/highcharts-more.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/modules/export-data.js"></script>
	<script src="https://code.highcharts.com/modules/accessibility.js"></script>
	<!----------------------------- includes ----------------------------------->
	<?php
	require("database-connection.php");
	require("functions.php");
	//require("ajax.php");
	?>
	<!-------------------------- jquery (for ajax) ------------------------------>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
	<div id="header">
		<img id="psem-logo" src="imgs/psem-car-white.png" />
		<div id="clockbox">
			<script src="clock.js"></script>
		</div>
		<p id="github-code">
        	Code <a href="https://github.com/BeatrizTSilva/telemetria" target="_blank" rel="noopenernoreferrer">here</a>
      	</p>
	</div>

	<div id="main-container">
	<a class="button-web-design" href="web-design/web-index.php" target="_blank">Go to Web Design</a>

		<!-- ----------------------------------------------- DATABASE ---------------------------------------------------------- -->
		<!--?php
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
		?-->

		<!-- ---------------------------------- 6th AJAX test ---------------------------------------------->
		<table>
			<tr>
			<th>Time</th>
			<th>Voltage</th>
			<th>Current</th>
			<th>Speed</th>
			<th>Temperature</th>
			<th>Coordinates1</th>
			<th>Coordinates2</th>
			</tr>
			<tbody id="data"></tbody>
		</table>

		<!--script>
			var ajax = new XMLHttpRequest();
			ajax.open("GET", "ajax.php", true);
			ajax.send();

			ajax.onreadystatechange = function() {
        		if (this.readyState == 4 && this.status == 200) {
            		var data = JSON.parse(this.responseText);
            		//console.log(data);
					// alert(this.responseText);

					var html = "";
					for(var a = 0; a < data.length; a++) {
						var time = data[a].time;
						var voltage = data[a].voltage;
						var current = data[a].current;
						var speed = data[a].speed;
						var temperature = data[a].temperature;
						var coordinates1 = data[a].coordinates1;
						var coordinates2 = data[a].coordinates2;

						html += "<tr>";
							html += "<td>" + time + "</td>";
							html += "<td>" + voltage + "</td>";
							html += "<td>" + current + "</td>";
							html += "<td>" + speed + "</td>";
							html += "<td>" + temperature + "</td>";
							html += "<td>" + coordinates1 + "</td>";
							html += "<td>" + coordinates2 + "</td>";
						html += "</tr>";
					}
					document.getElementById("data").innerHTML += html;
    			}
  			};

		</script-->



		<!--script>
			/* ---------- JSON.parse ----------- */
			/*var response = '{"result":true,"count":1}';
			const parsed_var = JSON.parse(response);
			const stringed_var = JSON.stringify(response);
			console.log(response);
			console.log("Parsed variable is: " + parsed_var);
			console.log("Result (from parsed variable) is: " + parsed_var.result);
			console.log("Stringed variable is: " + stringed_var);
			var data = JSON.parse(new_var);
			console.log(new_var);
			console.log("Result is: " + new_var.result);
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

		<!--------------------------------------------------- graph from highcharts (updated) --------------------------------------------->
		<!--div class="highcharts-figure">
			<div id="container"></div>
			<p class="highcharts-description">Chart</p>
		</div-->

		<div id="test-chart"></div>
		<div id="temperature_graph" id="one-graph"></div>

		<script src="graphs.js"></script>

		<div id="test-chart"></div>
		<div id="temperature_graph" id="one-graph"></div>
		<!--script src="graphs.js"></script-->

		<!--?php closeConnection($database); ?-->


	</div>
</body>
</html>