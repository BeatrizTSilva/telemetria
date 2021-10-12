console.log("START");
/* --------------------- TO DO ---------------------- */
/*
xttp.send() to send back parameter T
no setInterval inside graph
the updates are dictated by going to the database
if v[] == null -> no plot
*/

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
							let value_from_database2 = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)

							// console.log("this.Response " + this.responseText);
							// console.log(value_from_database2);

							y_string = value_from_database2[counter].speed; // data[0].voltage will return a string
							y = parseFloat(y_string); // make the string a float

							series.addPoint([x, y], true, true); // updates the graph

							counter++; // increase counter to go to nextvalue in time
						}
					};
					xhttp.open("POST", "ajax1.php", true); //go get stuff from ajax.php
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
							let value_from_database2 = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)

							// console.log("this.Response " + this.responseText);
							// console.log(value_from_database2);

							y_string = value_from_database2[counter].speed; // data[0].voltage will return a string
							y = parseFloat(y_string); // make the string a float

							series.addPoint([x, y], true, true); // updates the graph

							counter++; // increase counter to go to nextvalue in time
						}
					};
					xhttp.open("POST", "ajax1.php", true); //go get stuff from ajax.php
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
//       let value_from_database2 = JSON.parse(this.responseText); // convert everything that comes from the database (in ajax.php)

//       console.log("this.Response is " + this.responseText);
//       console.log(value_from_database2);
//       console.log("INSIDE call_ajax parameter = " + parameter);

//       //y = 40;
//       switch(parameter) { // switch to return the right value to the right graph
//         case 'temperature':
//         y_string = value_from_database2[counter].temperature; // value_from_database2[counter].parameter will return a string
//         y = parseFloat(y_string); // make the string a float
//         console.log("This is y in temp: " + y);
//         break;
//         case 'voltage':
//         y_string = value_from_database2[counter].voltage;
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
//   xhttp.open("GET", "ajax1.php", true); //go get stuff from ajax.php
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