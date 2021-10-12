<!DOCTYPE HTML>
<html>
<head>
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
	<p style="color:blue;">I am blue</p>
	<!---------------------------------------------- Graphs ------------------------------------------------->
	<div class="graphs-container">
		<div class="splines-container">
			<div id="voltage-graph" class="spline one-graph"></div>
			<div id="current-graph" class="spline one-graph"></div>
			<div id="temperature-graph" class="spline one-graph"></div>
			<div id="speed-spline-graph" class="spline one-graph"></div>
		</div>

		<div class="gauges-container">
			<div id="speed-gauge" class="one-graph"></div>
			<div id="container-speed" class="gauge one-graph"></div>
			<div id="container-rpm" class="gauge one-graph"></div>
		</div>

		<script src="graphs.js"></script>
	</div>


</body>
</html>