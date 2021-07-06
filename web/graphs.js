/******************************************************************************
 * File: graphs.js
 *
 * Description: graphs that show the data from the sensors
 *
 *****************************************************************************/

/* <javascript ....... > */ /* ---> tornar ficheiro php */

/* FROM HIGHCHARTS - FOR TEST */
Highcharts.chart('container', {
  chart: {
      type: 'spline',
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
          load: function () {

              // set up the updating of the chart each second
              var series = this.series[0];
              setInterval(function () {
                  var x = (new Date()).getTime(), // current time
                      y = Math.random();
                  series.addPoint([x, y], true, true);
              }, 1000);
          }
      }
  },
  time: {
      useUTC: false
  },

  title: {
      text: 'Live random data'
  },
  accessibility: {
      announceNewData: {
          enabled: true,
          minAnnounceInterval: 15000,
          announcementFormatter: function (allSeries, newSeries, newPoint) {
              if (newPoint) {
                  return 'New point added. Value: ' + newPoint.y;
              }
              return false;
          }
      }
  },
  xAxis: {
      type: 'datetime',
      tickPixelInterval: 150
  },
  yAxis: {
      title: {
          text: 'Value'
      },
      plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
      }]
  },

  tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  },

  legend: {
      enabled: false
  },

  exporting: {
      enabled: false
  },
  series: [{
      name: 'Random data',
      data: (function () {
          // generate an array of random data
          var data = [],
              time = (new Date()).getTime(),
              i;
          for (i = -19; i <= 0; i += 1) {
              data.push({
                  x: time + i * 1000,
                  y: Math.random()
              });
          }
          return data;
      }())
  }]
});

/* ------------------------------------ Graph 1 --------------------------------------- */
var chartT = new Highcharts.Chart({
  chart:{renderTo : 'temperature_graph'},
  title: {text:'Temperature'},
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
    title: {text:'Temperature [ºC]'}
  },
  credits: {enabled: false}
});

setInterval(function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = (new Date()).getTime();
      var y = 1;

      /*function iterationFunction(){
        for (i = 1; ;i++){
          getOneValue($database, "temperature", i);
        }

      }
      setInterval(IterationFunction, 3000);*/


      //var y = JSON.parse(this.responseText);
      console.log(y);

      if (chartT.series[0].data.length > 10) {
        chartT.series[0].addPoint([x, y], true, true, true);
      } else {
        chartT.series[0].addPoint([x, y], true, false, true);
      }
    }
  };
  //xhttp.open("GET", "ajax.php");
  xhttp.open("GET", "database_connection.php", true);
  xhttp.send();
}, 3000);


/*setInterval(function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = (new Date()).getTime();
      console.log(this.responseText);
      var y = 1;

      if (chartT.series[0].data.length > 10) {
        chartT.series[0].addPoint([x, y], true, true, true);
      } else {
        chartT.series[0].addPoint([x, y], true, false, true);
      }
    }
  };
  //xhttp.open("GET", "index.php", false); // for synch
  xhttp.open("GET", "database_connection.php?q", true); // for async -> will not wait for server
  xhttp.send();
}, 3000);*/


/*
setInterval(function ( ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var x = (new Date()).getTime(),
          y = parseFloat(this.responseText);
      //console.log(this.responseText);
      if(chartT.series[0].data.length > 40) {
        chartT.series[0].addPoint([x, y], true, true, true);
      } else {
        chartT.series[0].addPoint([x, y], true, false, true);
      }
    }
  };
  xhttp.open("GET", "/temperature", true);
  xhttp.send();
}, 30000 ); */


/* -------------------------------------------- Graph 2 ------------------------------------------- */
var chartH = new Highcharts.Chart({
  chart:{renderTo:'voltage_graph'},
  title: {text: 'Voltage'},
  series: [{
    showInLegend: true,
    name: "V",
    data: []
  }],
  plotOptions: {
    line: {animation: false,
      dataLabels: {enabled: true}
    }
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {second: '%H:%M:%S'}
  },
  yAxis: {
    title: {text: 'Voltage [V]'}
  },
  credits: {enabled: false}
});
setInterval(function ( ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var x = (new Date()).getTime(),
          y = parseFloat(this.responseText);
      //console.log(this.responseText);
      if(chartH.series[0].data.length > 40) {
        chartH.series[0].addPoint([x, y], true, true, true);
      } else {
        chartH.series[0].addPoint([x, y], true, false, true);
      }
    }
  };
  xhttp.open("GET", "/humidity", true);
  xhttp.send();
}, 30000 ) ;


/* ------------------------------------------ Graph 3 ---------------------------------------------- */
var chartP = new Highcharts.Chart({
  chart:{renderTo:'current_graph'},
  title: {text: 'Current'},
  series: [{
    showInLegend: true,
    name: "I",
    data: []
  }],
  plotOptions: {
    line: {animation: false,
      dataLabels: {enabled: true}
    },
    series: {color: '#18009c'}
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {second: '%H:%M:%S'}
  },
  yAxis: {
    title: {text: 'Current [I]'}
  },
  credits: {enabled: false}
});
setInterval(function ( ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var x = (new Date()).getTime(),
          y = parseFloat(this.responseText);
      //console.log(this.responseText);
      if(chartP.series[0].data.length > 40) {
        chartP.series[0].addPoint([x, y], true, true, true);
      } else {
        chartP.series[0].addPoint([x, y], true, false, true);
      }
    }
  };
  xhttp.open("GET", "/pressure", true);
  xhttp.send();
}, 30000 ) ;


/* --------------------------------------------------- Speed graph ------------------------------------------------------- */
Highcharts.chart('speed_graph', {
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
/* original funtion */
/*function (chart) {
  if (!chart.renderer.forExport) {
    setInterval(function () {
      var point = chart.series[0].points[0], newVal, inc = Math.round((Math.random() - 0.5) * 20);

      newVal = point.y + inc;
      if (newVal < 0 || newVal > 200) {
        newVal = point.y - inc;
      }

      point.update(newVal);

    }, 3000);
  }
}*/

/* -------------------------------------------------- Voltmeter ---------------------------------------------- */
Highcharts.chart('graph_voltmeter', {
  chart: {
    type: 'gauge',
    plotBorderWidth: 1,
    plotBackgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      stops: [
      [0, '#FFF4C6'],
      [0.3, '#FFFFFF'],
      [1, '#FFF4C6']
      ]
    },
    plotBackgroundImage: null,
    height: 200
  },

  title: {
    text: 'VU meter'
  },

  pane: [{
    startAngle: -45,
    endAngle: 45,
    background: null,
    center: ['25%', '145%'],
    size: 300
  }, {
    startAngle: -45,
    endAngle: 45,
    background: null,
    center: ['75%', '145%'],
    size: 300
  }],

  exporting: {
    enabled: false
  },

  tooltip: {
    enabled: false
  },

  yAxis: [{
    min: -20,
    max: 6,
    minorTickPosition: 'outside',
    tickPosition: 'outside',
    labels: {
      rotation: 'auto',
      distance: 20
    },
    plotBands: [{
      from: 0,
      to: 6,
      color: '#C02316',
      innerRadius: '100%',
      outerRadius: '105%'
    }],
    pane: 0,
    title: {
      text: 'VU<br/><span style="font-size:8px">Channel A</span>',
      y: -40
    }
  }, {
    min: -20,
    max: 6,
    minorTickPosition: 'outside',
    tickPosition: 'outside',
    labels: {
      rotation: 'auto',
      distance: 20
    },
    plotBands: [{
      from: 0,
      to: 6,
      color: '#C02316',
      innerRadius: '100%',
      outerRadius: '105%'
    }],
    pane: 1,
    title: {
      text: 'VU<br/><span style="font-size:8px">Channel B</span>',
      y: -40
    }
  }],

  plotOptions: {
    gauge: {
      dataLabels: {
        enabled: false
      },
      dial: {
        radius: '100%'
      }
    }
  },

  series: [{
    name: 'Channel A',
    data: [-20],
    yAxis: 0
  }, {
    name: 'Channel B',
    data: [-20],
    yAxis: 1
  }]

},

// Let the music play
function (chart) {
  setInterval(function () {
        if (chart.series) { // the chart may be destroyed
          var left = chart.series[0].points[0],
          right = chart.series[1].points[0],
          leftVal,
          rightVal,
          inc = (Math.random() - 0.5) * 3;

          leftVal = left.y + inc;
          rightVal = leftVal + inc / 3;
          if (leftVal < -20 || leftVal > 6) {
            leftVal = left.y - inc;
          }
          if (rightVal < -20 || rightVal > 6) {
            rightVal = leftVal;
          }

          left.update(leftVal, false);
          right.update(rightVal, false);
          chart.redraw();
        }
      }, 500);

});