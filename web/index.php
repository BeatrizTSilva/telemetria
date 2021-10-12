<!-----------------------------------------------------------------------------
 * File: index.php
 *
 * Description: HTML File
 *
 * Comments:
 *
------------------------------------------------------------------------------->
<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>TTTTTT</title>
	<link rel="icon" href="imgs/rover.ico"> <!-- icon for the browser tab -->
	<link rel="stylesheet" type="text/css" href="styles.css"> <!--css file-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0">

	<!-- for the GitHub icon -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	<!---------------------------- for the graphs --------------------------------->
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/highcharts-more.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/modules/export-data.js"></script>
	<script src="https://code.highcharts.com/modules/accessibility.js"></script>
	<script src="https://code.highcharts.com/modules/solid-gauge.js"></script>

	<!-------------------------- jquery (for ajax) ------------------------------>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
	<!--------------------------------------------- HEADER --------------------------------------------------->
	<div id="header">
		<img id="psem-logo" src="imgs/psem-car-white.png" />
		<div id="clockbox">
			<script src="clock.js"></script>
		</div>

		<!-- button to go to web design page -->
		<a class="button-header" href="psem-website/index.html" target="_blank">Site PSEM</a>
		<a class="button-header" href="safekeeping/index.php" target="_blank">Telemetria</a>

		<a href="https://github.com/BeatrizTSilva/telemetria" target="_blank">
        	<div class="github-button"> <!--p>Code</p--> <i class="fa fa-github"></i> </div>
        </a>
	</div>

	<!---------------------------------------------- Graphs ------------------------------------------------->
	<div class="graphs-container">
		<div class="splines-container">
			<!--div id="new-test-graph" class="spline one-graph"></div>
			<div id="new-new-test-graph" class="spline one-graph"></div-->
			<div id="testing-ajax-call" class="spline one-graph"></div>
			<!--div id="voltage-graph" class="spline one-graph"></div>
			<div id="current-graph" class="spline one-graph"></div>
			<div id="temperature-graph" class="spline one-graph"></div>
			<div id="speed-spline-graph" class="spline one-graph"></div-->
		</div>

		<!--div class="gauges-container">
			<div id="speed-gauge" class="one-graph"></div>
			<div id="container-speed" class="gauge one-graph"></div>
			<div id="container-rpm" class="gauge one-graph"></div>
		</div-->

		<!--script src="graphs.js"></script-->
		<!--script src="graphs-test.js"></script-->
		<script src="send()-test.js"></script>
	</div>

	<script src="dark-mode.js"></script>


</body>
</html>