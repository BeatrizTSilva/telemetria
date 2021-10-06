/* --------------------- TO DO ---------------------- */
/*
xttp.send() to send back parameter T
no setInterval inside graph
the updates are dictated by going to the database
if v[] == null -> no plot
*/

/* ----------------------------------------- SPEED GAUGE SIMPLE --------------------------------------------- */
Highcharts.chart('speed-gauge-test', {
  chart:{
    type: 'gauge', plotBackgroundColor: null, plotBackgroundImage: null, plotBorderWidth: 0, plotShadow: false
  },
  title: { text: 'Speed Database' },
  pane: {
    startAngle: -150, endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [ [0, '#FFF'], [1, '#333'] ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#333'],
          [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
      // default background
    }, {
      backgroundColor: '#DDD', borderWidth: 0, outerRadius: '105%', innerRadius: '103%'
    }]
  },
  // the value axis
  yAxis: {
    min: 0, max: 100,
    minorTickInterval: 'auto', /* interval between values displayed on the gauge */
    minorTickWidth: 1, minorTickLength: 10,
    minorTickPosition: 'inside', minorTickColor: '#666',
    tickPixelInterval: 30, /* intervals between values */
    tickWidth: 2, tickPosition: 'inside', tickLength: 10, tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'auto'
    },
    title: { text: 'km/h' },
    plotBands: [{
      from: 0, /* first band goes from speed 0 to 30 */
      to: 30,
      color: '#55BF3B' // green
    }, {
      from: 30, /* first band goes from speed 30 to 70 */
      to: 70,
      color: '#DDDF0D' // yellow
    }, {
      from: 70, /* first band goes from speed 70 to 100 */
      to: 100,
      color: '#DF5353' // red
    }]
  },

  series: [{
    name: 'Speed',
    data: [0], /* initial value */
    tooltip: { valueSuffix: ' km/h' }
  }]

},
// Add some life

function (chart) {
	let counter = 0;
  if (!chart.renderer.forExport) {
		setInterval(function () {
			let xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					let point = chart.series[0].points[0];
					let y; // y axis
					let y_string; // aux variable
					let value_from_database = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)

					console.log("this.Response in voltage is " + this.responseText);
					console.log(value_from_database);

					y_string = value_from_database[counter].voltage; // data[0].voltage will return a string
					y = parseFloat(y_string); // make the string a float

					point.update(y); // updates

					counter++; // increase counter to go to nextvalue in time
				}
			};
			xhttp.open("POST", "ajax.php", true); //go get stuff from ajax.php
			xhttp.send();

    }, 1000); /* time interval for updates */
  }
}
);

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