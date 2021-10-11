/******************************************************************************
* File: graphs.js
*
* Description: graphs that show the data from the sensors
*          the data is retrieved in ajax.php from the database
*
* T_current -> current time to keep track which values are graphed already
*
*****************************************************************************/


/******************************************************************************************************
*
*
*                                         GRAPHS THAT WORK
*
*
*******************************************************************************************************/
/* ---------------------------------------------- VOLTAGE -------------------------------------------- */
Highcharts.chart('voltage-graph', {
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

                // console.log("this.Response in voltage is " + this.responseText);
                // console.log(value_from_database);

                y_string = value_from_database[counter].tensao; // data[0].voltage will return a string
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
  title: { text: 'Voltage' },
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
    title: { text: 'Voltage [V]' },
    // plotLines: [{ value: 0, width: 1, color: '#808080'}]
    plotLines: [{ value: 0, width: 1, color: '#89c45f'}]
  },
  tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  },
  legend: { enabled: false }, exporting: { enabled: false },
  series: [{
      name: 'Voltage',
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


/* ----------------------------------------------- CURRENT ------------------------------------------ */
Highcharts.chart('current-graph', {
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

                // console.log("this.Response in current is " + this.responseText);
                // console.log(value_from_database);

                y_string = value_from_database[counter].corrente; // data[0].voltage will return a string
                y = parseFloat(y_string); // make the string a float

                series.addPoint([x, y], true, true); // updates the graph

                counter++; // increase counter to go to nextvalue in time
              }/* novo comentario*/
            };
            xhttp.open("GET", "ajax.php", true); //go get stuff from ajax.php
            xhttp.send();
          }, 1000);
        }
      }
    },
  time: { useUTC: false },
  title: { text: 'Current' },
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
    title: { text: 'Current [A]' },
    // plotLines: [{ value: 0, width: 1, color: '#808080'}]
    plotLines: [{ value: 0, width: 1, color: '#89c45f'}]
  },
  tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  },
  legend: { enabled: false }, exporting: { enabled: false },
  series: [{
      name: 'Voltage',
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


/* ----------------------------------------------- TEMPERATURE -------------------------------------------- */
Highcharts.chart('temperature-graph', {
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

                // console.log("this.Response " + this.responseText);
                // console.log(value_from_database);

                y_string = value_from_database[counter].temperatura; // data[0].voltage will return a string
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
  title: { text: 'Temperature' },
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
    title: { text: 'Temperature [ºC]' },
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

/* -------------------------------------------- SPEED SPLINE -------------------------------------------- */
Highcharts.chart('speed-spline-graph', {
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

                // console.log("this.Response " + this.responseText);
                // console.log(value_from_database);

                y_string = value_from_database[counter].velocidade; // data[0].voltage will return a string
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
  title: { text: 'Speed' },
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
    title: { text: 'Speed [km/h]' },
    // plotLines: [{ value: 0, width: 1, color: '#808080'}]
    plotLines: [{ value: 0, width: 1, color: '#89c45f'}]
  },
  tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  },
  legend: { enabled: false }, exporting: { enabled: false },
  series: [{
      name: 'Speed',
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

/* ----------------------------------------- SPEED GAUGE SIMPLE --------------------------------------------- */
Highcharts.chart('speed-gauge', {
  chart:{
    type: 'gauge', plotBackgroundColor: null, plotBackgroundImage: null, plotBorderWidth: 0, plotShadow: false
  },
  title: { text: 'Speed' },
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
    }, { // default background
    }, {
      backgroundColor: '#DDD', borderWidth: 0, outerRadius: '105%', innerRadius: '103%'
    }]
  },
  // the value axis
  yAxis: {
    min: 0, max: 70,
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
      from: 0, /* first band goes from speed x to y */
      to: 20,
      color: '#55BF3B' // green
    }, {
      from: 20, /* second band goes from speed x to y */
      to: 50,
      color: '#DDDF0D' // yellow
    }, {
      from: 50, /* first band goes from speed x to y */
      to: 70,
      color: '#DF5353' // red
    }]
  },
  series: [{
    name: 'Speed',
    data: [0], /* initial value */
    tooltip: { valueSuffix: ' km/h' }
  }]

},

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

					// console.log("this.Response in voltage is " + this.responseText);
					// console.log(value_from_database);

					y_string = value_from_database[counter].velocidade; // data[0].voltage will return a string
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
let chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
	yAxis: { min: 0, max: 70,
		title: { text: 'Speed' }
	},
	credits: { enabled: false },
	series: [{
		name: 'Speed',
		data: [0], // initial value probably
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
let chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
	yAxis: { min: 0, max: 70,
		title: { text: 'RPM' }
	},
  credits: { enabled: false },
	series: [{
		name: 'RPM',
    data: [0], // initial value probably
		dataLabels: {
			format:
			// '<div style="text-align:center">' +
			// '<span style="font-size:25px">{y:.1f}</span><br/>' +
			// '<span style="font-size:12px;opacity:0.4">' +
			// '* 1000 / min' +
			// '</span>' +
			// '</div>'
      '<div style="text-align:center">' +
			'<span style="font-size:25px">{y}</span><br/>' +
			'<span style="font-size:12px;opacity:0.4">km/h</span>' +
			'</div>'
		},
		tooltip: { valueSuffix: ' revolutions/min' }
	}]
}));

let counter = 0;
// Bring life to the dials
setInterval(function () {
	// Speed
	let point_speed;
  let point_RPM;
	if (chartSpeed) {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				point_speed = chartSpeed.series[0].points[0];
				let y; // y axis
				let y_string; // aux variable
				let value_from_database = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)

				y_string = value_from_database[counter].velocidade; // data[0].voltage will return a string
				y = parseFloat(y_string); // make the string a float
				point_speed.update(y); // updates gauge

				counter++; // increase counter to go to nextvalue in time
			}
		};
		xhttp.open("POST", "ajax.php", true); //go get stuff from ajax.php
		xhttp.send();
	}
}, 1000);

setInterval(function () {
	// RPM
	if (chartRpm) {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				point_RPM = chartRPM.series[0].points[0];
				let y; // y axis
				let y_string; // aux variable
				let value_from_database = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)

				y_string = value_from_database[counter2].velocidade; // data[0].voltage will return a string
				y = parseFloat(y_string); // make the string a float
				point_RPM.update(y); // updates gauge

				counter2++; // increase counter to go to nextvalue in time
			}
		};
		xhttp.open("POST", "ajax.php", true); //go get stuff from ajax.php
		xhttp.send();
	}
}, 1000);




/******************************************************************************************************
*
*
*                                         GRAPHS THAT WORK (END)
*
*
******************************************************************************************************/



/******************************************************************************************************
*
*
*                       GRAPHS THAT WORK BUT ARE NOT CONNECTED TO THE DATABASE
*
*
******************************************************************************************************/


/******************************************************************************************************
*
*
*                    GRAPHS THAT WORK BUT ARE NOT CONNECTED TO THE DATABASE (END)
*
*
******************************************************************************************************/


/* ------------------------------- (OLD GRAPH - keeping for future reference) ------------------------------- */
/*let chartT = new Highcharts.Chart({
  chart:{renderTo : 'test-chart'},
  title: {text:'Current'},
  series: [{
    showInLegend: true,
    name: "Temp",
    data: []
  }],
  plotOptions: {
    line: {animation: false,
      dataLabels: {enabled: true}
    },
    series: {color: '#0595d4f'}
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {second:'%H:%M:%S'}
  },
  yAxis: {
    title: {text:'Current [A]'}
  },
  credits: {enabled: false}
});

let counter2 = 0;
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

      y_string = value_from_database[counter2].current; // data[i].voltage will return a string
      y = parseFloat(y_string); // make the string a float
      z = value_from_database[1].current;
      console.log("This is y: " + y);
      console.log("This is z: " + z);

      // updating the graph
      if (chartT.series[0].data.length > 10) {
        chartT.series[0].addPoint([x, y], true, true, true);
      } else {
        chartT.series[0].addPoint([x, y], true, false, true);
      }
      counter2++;
    }
  };
  xhttp.open("GET", "ajax.php", true);
  xhttp.send();
}, 3000);

*/