/******************************************************************************
 * File: graphs.js
 *
 * Description: graphs that show the data from the sensors
 *          the data is retrieved in ajax.php from the database
 *
 *****************************************************************************/

/* -------------------------------- AJAX ORIGINAL -----------------------*/
/*var ajax = new XMLHttpRequest();
ajax.open("GET", "ajax.php", true);
ajax.send();

ajax.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log("we are readystatechnage");
    var data = JSON.parse(this.responseText);
    console.log(data);
  }
};*/


/* ---------------------------------------- VOLTAGE ------------------------------------- */
Highcharts.chart('voltage-graph', {
  chart: {
      type: 'spline',
      // backgroundColor: '#808080',
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          let counter = 0;
          setInterval(function () {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                let x = (new Date()).getTime(); // x axis
                let y; // y axis
                let y_string; // aux variable
                let data = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)

                console.log("this.Response in voltage is " + this.responseText);
                console.log(data);

                y_string = data[counter].voltage; // data[0].voltage will return a string
                y = parseFloat(y_string); // make the string a float
                z = data[1].current;
                console.log("This is y: " + y);
                console.log("This is z: " + z);

                series.addPoint([x, y], true, true); // updates the graph

                counter++; // increase counter to go to nextvalue in time
              }
            };
            xhttp.open("GET", "ajax.php", true); //go get stuff from ajax.php
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
      data: (function () { var data = [], time = (new Date()).getTime(), i;
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


/* ---------------------------------------- CURRENT ------------------------------------- */
Highcharts.chart('current-graph', {
  chart: {
      type: 'spline',
      // backgroundColor: '#808080',
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          let counter = 0;
          setInterval(function () {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                let x = (new Date()).getTime(); // x axis
                let y; // y axis
                let y_string; // aux variable
                let data = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)

                console.log("this.Response in current is " + this.responseText);
                console.log(data);

                y_string = data[counter].current; // data[0].voltage will return a string
                y = parseFloat(y_string); // make the string a float

                series.addPoint([x, y], true, true); // updates the graph

                counter++; // increase counter to go to nextvalue in time
              }
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
      data: (function () { var data = [], time = (new Date()).getTime(), i;
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


/* ---------------------------------------- TEMPERATURE ------------------------------------- */
Highcharts.chart('temperature-graph', {
  chart: {
      type: 'spline',
      // backgroundColor: '#808080',
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          let counter = 0;
          setInterval(function () {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                let x = (new Date()).getTime(); // x axis
                let y; // y axis
                let y_string; // aux variable
                let data = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)

                console.log("this.Response " + this.responseText);
                console.log(data);

                y_string = data[counter].temperature; // data[0].voltage will return a string
                y = parseFloat(y_string); // make the string a float

                series.addPoint([x, y], true, true); // updates the graph

                counter++; // increase counter to go to nextvalue in time
              }
            };
            xhttp.open("GET", "ajax.php", true); //go get stuff from ajax.php
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
      data: (function () { var data = [], time = (new Date()).getTime(), i;
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

/* ------------------------------------------- GAUGE ------------------------------------------- */
var gaugeOptions = {
  chart: {
      type: 'solidgauge'
  },
  title: null,
  pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
      }
  },
  exporting: {
      enabled: false
  },
  tooltip: {
      enabled: false
  },
  // the value axis
  yAxis: {
      stops: [
          [0.1, '#55BF3B'], // green
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#DF5353'] // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
          y: -70
      },
      labels: {
          y: 16
      }
  },

  plotOptions: {
      solidgauge: {
          dataLabels: {
              y: 5,
              borderWidth: 0,
              useHTML: true
          }
      }
  }
};

// The speed gauge
var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
  yAxis: {
      min: 0,
      max: 200,
      title: {
          text: 'Speed'
      }
  },

  credits: {
      enabled: false
  },

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
      tooltip: {
          valueSuffix: ' km/h'
      }
  }]

}));

// The RPM gauge
var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
  yAxis: {
      min: 0,
      max: 5,
      title: {
          text: 'RPM'
      }
  },

  series: [{
      name: 'RPM',
      data: [1],
      dataLabels: {
          format:
              '<div style="text-align:center">' +
              '<span style="font-size:25px">{y:.1f}</span><br/>' +
              '<span style="font-size:12px;opacity:0.4">' +
              '* 1000 / min' +
              '</span>' +
              '</div>'
      },
      tooltip: {
          valueSuffix: ' revolutions/min'
      }
  }]

}));

// Bring life to the dials
setInterval(function () {
  // Speed
  var point,
      newVal,
      inc;

  if (chartSpeed) {
      point = chartSpeed.series[0].points[0];
      inc = Math.round((Math.random() - 0.5) * 100);
      newVal = point.y + inc;

      if (newVal < 0 || newVal > 200) {
          newVal = point.y - inc;
      }

      point.update(newVal);
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
}, 2000);


/* ------------------------------------ CURRENT --------------------------------------- */
/*var chartT = new Highcharts.Chart({
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
      let data = JSON.parse(this.responseText); // everything that comes from the database (in ajax.php)
      console.log("this.Response " + this.responseText);
      console.log(data);

      y_string = data[counter2].current; // data[i].voltage will return a string
      y = parseFloat(y_string); // make the string a float
      z = data[1].current;
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

/* --------------------------------------------------- Speed graph ------------------------------------------------------- */
Highcharts.chart('speed-graph', {
  chart:{
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: 'Speed'
  },
  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
        [0, '#FFF'],
        [1, '#333']
        ]
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
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
          }]
        },
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      minorTickInterval: 'auto', /* interval between values displayed on the gauge */
      minorTickWidth: 1,
      minorTickLength: 10,
      minorTickPosition: 'inside',
      minorTickColor: '#666',
      tickPixelInterval: 30, /* intervals between values */
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 10,
      tickColor: '#666',
      labels: {
        step: 2,
        rotation: 'auto'
      },
      title: {
        text: 'km/h'
      },
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
          tooltip: {
            valueSuffix: ' km/h'
          }
        }]

      },
// Add some life

function (chart) {
  if (!chart.renderer.forExport) {
    setInterval(function () {
      //var point = chart.series[0].points[0];
      var point = chart.series[0].points[0];
      var newVal; /* new value that comes from the database */
      var inc;
      /*
      inc = -(newVal - database_speed); // for when we have the database values here
      */
      inc = 1; /* increment */
      newVal = point.y + inc;
      while (newVal < 0 || newVal > 63) {
        newVal = point.y - inc;
      }
      point.update(newVal);
    }, 500); /* time interval for updates */
  }
}
);