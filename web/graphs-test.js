/* --------------------- TO DO ---------------------- */
/*
xttp.send() to send back parameter T
no setInterval inside graph
the updates are dictated by going to the database
if v[] == null -> no plot
*/

/* --------------------------------------- GAUGES (SPEED AND RPM) ------------------------------------- */
let gaugeOptions = {
	chart: {
		type: 'solidgauge'
	},
	title: null,
	pane: {
		center: ['50%', '85%'], size: '140%', startAngle: -90, endAngle: 90,
		background: {
			backgroundColor:
			Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
			innerRadius: '60%', outerRadius: '100%', shape: 'arc'
		}
	},
	exporting: { enabled: false },
	tooltip: { enabled: false },
	// the value axis
	yAxis: {
		stops: [
			[0.1, '#55BF3B'], // green
			[0.5, '#DDDF0D'], // yellow
			[0.9, '#DF5353'] // red
		],
		lineWidth: 0, tickWidth: 0, minorTickInterval: null, tickAmount: 2,
		title: { y: -70 },
		labels: { y: 16 }
	},
	plotOptions: {
		solidgauge: {
			dataLabels: { y: 5, borderWidth: 0, useHTML: true }
		}
	}
};

// The speed gauge
let chartSpeed = Highcharts.chart('container-speed2', Highcharts.merge(gaugeOptions, {
	yAxis: { min: 0, max: 200,
		title: { text: 'Speed' }
	},
	credits: { enabled: false },
	series: [{
		name: 'Speed',
		data: [80],
		dataLabels: {
			format:
			'<div style="text-align:center">' +
			'<span style="font-size:25px">{y}</span><br/>' +
			'<span style="font-size:12px;opacity:0.4">km/h</span>' +
			'</div>'
		},
		tooltip: { valueSuffix: ' km/h' }
	}]
}));
// The RPM gauge
let chartRpm = Highcharts.chart('container-rpm2', Highcharts.merge(gaugeOptions, {
	yAxis: { min: 0, max: 5,
		title: { text: 'RPM' }
	},
	series: [{
		name: 'RPM', data: [1],
		dataLabels: {
			format:
			'<div style="text-align:center">' +
			'<span style="font-size:25px">{y:.1f}</span><br/>' +
			'<span style="font-size:12px;opacity:0.4">' +
			'* 1000 / min' +
			'</span>' +
			'</div>'
		},
		tooltip: { valueSuffix: ' revolutions/min' }
	}]
}));

let counter2 = 0;
// Bring life to the dials
setInterval(function () {

	// Speed
	let point;
	if (chartSpeed) {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				point = chartSpeed.series[0].points[0];
				let y; // y axis
				let y_string; // aux variable
				let value_from_database = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)

				y_string = value_from_database[counter].speed; // data[0].voltage will return a string
				y = parseFloat(y_string); // make the string a float
				point.y = y;
				point.update(point.y); // updates MAYBE THIS point.y THING I HAVE NO IDEA

				counter2++; // increase counter to go to nextvalue in time
			}
		};
		xhttp.open("POST", "ajax.php", true); //go get stuff from ajax.php
		xhttp.send();
	}
	// RPM
	if (chartRpm) {
		point = chartRpm.series[0].points[0];
		inc = Math.random() - 0.5;
		newVal = point.y + inc;
		if (newVal < 0 || newVal > 5) {
			newVal = point.y - inc;
		}
		point.update(newVal);
	}
}, 1000);

/* -------------------------------------------- NEW TEST ------------------------------------------------ */
/* defining the graph in general */
let newTestGraph = {
	chart: {
		type: 'spline',
		animation: Highcharts.svg, // don't animate in old IE
		marginRight: 10,
	},
	time: { useUTC: false },
	title: { text: 'New Test' },
	accessibility: {
		announceNewData: { enabled: true, minAnnounceInterval: 15000,
			announcementFormatter: function (allSeries, newSeries, newPoint) {
				if (newPoint) { return 'New point added. Value: ' + newPoint.y; }
				return false;
			}
		}
	},
	xAxis: { type: 'datetime', tickPixelInterval: 150 },
	yAxis: {
		title: { text: 'Speed [m/s]' },
		// plotLines: [{ value: 0, width: 1, color: '#808080'}]
		plotLines: [{ value: 0, width: 1, color: '#89c45f'}]
	},
	tooltip: {
		headerFormat: '<b>{series.name}</b><br/>',
		pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
	},
}


Highcharts.chart('new-test-graph', {
	chart: {
		type: 'spline',
		// backgroundColor: '#808080',
		animation: Highcharts.svg, // don't animate in old IE
		marginRight: 10,
		events: {
			load: function () {
				// set up the updating of the chart each second
				let series = this.series[0];
				let counter = 0; // to go through the database (deprecated soon)
				let dados = null; // saves data from the database
				let T_curr = -1; // current T (for time)
				setInterval(function () {
					let xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {
							let x = (new Date()).getTime(); // x axis
							let y; // y axis
							let y_string; // aux variable
							let value_from_database = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)

							console.log("this.Response " + this.responseText);
							console.log(value_from_database);

							y_string = value_from_database[counter].speed; // data[0].voltage will return a string
							y = parseFloat(y_string); // make the string a float

							series.addPoint([x, y], true, true); // updates the graph

							counter++; // increase counter to go to nextvalue in time
						}
					};
					xhttp.open("POST", "ajax.php", true); //go get stuff from ajax.php
					xhttp.send();
				}, 1000);
			}
		}
	},
	time: { useUTC: false },
	title: { text: 'New Test' },
	accessibility: {
		announceNewData: { enabled: true, minAnnounceInterval: 15000,
			announcementFormatter: function (allSeries, newSeries, newPoint) {
				if (newPoint) { return 'New point added. Value: ' + newPoint.y; }
				return false;
			}
		}
	},
	xAxis: { type: 'datetime', tickPixelInterval: 150 },
	yAxis: {
		title: { text: 'Speed [m/s]' },
		// plotLines: [{ value: 0, width: 1, color: '#808080'}]
		plotLines: [{ value: 0, width: 1, color: '#89c45f'}]
	},
	tooltip: {
		headerFormat: '<b>{series.name}</b><br/>',
		pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
	},
	legend: { enabled: false }, exporting: { enabled: false },
	series: [{
		name: 'New Test',
		data: (function () { let data = [], time = (new Date()).getTime(), i;
			for (i = -30; i <= 0; i += 1) {
				data.push({
					x: time + i * 1000, // shows time in a comprehensible way
					y:0 // initial value (was "y: Math.random()")
				});
			}
			return data;
		}())
	}]
});



/* --------------------------------------------- NEW NEW TEST ---------------------------------------------- */
Highcharts.chart('new-new-test-graph', {
	chart: {
		type: 'spline',
		// backgroundColor: '#808080',
		animation: Highcharts.svg, // don't animate in old IE
		marginRight: 10,
		events: {
			load: function () {
				// set up the updating of the chart each second
				let series = this.series[0];
				let counter = 0;
				setInterval(function () {
					let xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function () {
						if (this.readyState == 4 && this.status == 200) {
							let x = (new Date()).getTime(); // x axis
							let y; // y axis
							let y_string; // aux variable
							let value_from_database = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)

							console.log("this.Response " + this.responseText);
							console.log(value_from_database);

							y_string = value_from_database[counter].speed; // data[0].voltage will return a string
							y = parseFloat(y_string); // make the string a float

							series.addPoint([x, y], true, true); // updates the graph

							counter++; // increase counter to go to nextvalue in time
						}
					};
					xhttp.open("POST", "ajax.php", true); //go get stuff from ajax.php
					xhttp.send();
				}, 1000);
			}
		}
	},
	time: { useUTC: false },
	title: { text: 'New New Test' },
	accessibility: {
		announceNewData: { enabled: true, minAnnounceInterval: 15000,
			announcementFormatter: function (allSeries, newSeries, newPoint) {
				if (newPoint) { return 'New point added. Value: ' + newPoint.y; }
				return false;
			}
		}
	},
	xAxis: { type: 'datetime', tickPixelInterval: 150 },
	yAxis: {
		title: { text: 'Speed [m/s]' },
		// plotLines: [{ value: 0, width: 1, color: '#808080'}]
		plotLines: [{ value: 0, width: 1, color: '#89c45f'}]
	},
	tooltip: {
		headerFormat: '<b>{series.name}</b><br/>',
		pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
	},
	legend: { enabled: false }, exporting: { enabled: false },
	series: [{
		name: 'New New Test',
		data: (function () { let data = [], time = (new Date()).getTime(), i;
			for (i = -30; i <= 0; i += 1) {
				data.push({
					x: time + i * 1000, // shows time in a comprehensible way
					y:0 // initial value (was "y: Math.random()")
				});
			}
			return data;
		}())
	}]
});


/* --------------------------------------- AJAX CALL (FOR TESTING) --------------------------------------------*/
// var counter = 0; // counter for looping through the database
// var y = 0; // y axis

// function call_ajax (parameter) {
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       let y_string; // aux variable for y axis
//       let value_from_database = JSON.parse(this.responseText); // convert everything that comes from the database (in ajax.php)

//       console.log("this.Response is " + this.responseText);
//       console.log(value_from_database);
//       console.log("INSIDE call_ajax parameter = " + parameter);

//       //y = 40;
//       switch(parameter) { // switch to return the right value to the right graph
//         case 'temperature':
//         y_string = value_from_database[counter].temperature; // value_from_database[counter].parameter will return a string
//         y = parseFloat(y_string); // make the string a float
//         console.log("This is y in temp: " + y);
//         break;
//         case 'voltage':
//         y_string = value_from_database[counter].voltage;
//         y = parseFloat(y_string);
//         console.log("This is y in voltage: " + y);
//         break;
//         // default:
//         //   // code block
//       }

//       counter++; // increase counter to go to nextvalue in the database
//       console.log("INSIDE call_ajax counter = " + counter);
//       console.log("INSIDE call_ajax y = " + y);
//       return y; // send y back to the graph that called it
//     }
//   };
//   xhttp.open("GET", "ajax.php", true); //go get stuff from ajax.php
//   xhttp.send();
// }

// // function to test variables inside and outside functions
// /*function change_y (expression) {
//   y = 100;
//   console.log("y inside the function is " +y);
// }
// var t = 0;
// change_y(t);*/

// y = call_ajax('temperature');

// console.log("EARLY OUTSIDE call_ajax counter = " + counter);
// console.log("EARLY OUTSIDE call_ajax y = " + y);


/* function for console logging values */
// setInterval(function () { // function that updates each 1000ms
//   let p;
//   p = call_ajax('temperature');
//   console.log("LATE OUTSIDE call_ajax counter = " + counter);
//   console.log("LATE OUTSIDE call_ajax y = " + p);
// }, 1000);