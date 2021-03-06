/*------------------------------------------------------------------------------
 * File: ajax-js.js
 *
 * TESTS WITH AJAX.SEND()
 *
-------------------------------------------------------------------------------- */
t_current = -1;
Highcharts.chart('testing-ajax-call', {
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

                  y_string = value_from_database[counter].voltage; // data[0].voltage will return a string
                  y = parseFloat(y_string); // make the string a float

                  series.addPoint([x, y], true, true); // updates the graph

                  counter++; // increase counter to go to nextvalue in time

                  t_current = 3;
                }
              };
              // xhttp.open("POST", "send()-test.php", true); //go get stuff from ajax.php
              // xhttp.send(t_current);

              // xhttp.open("POST", "send()-test.php", true); //go get stuff from ajax.php
              // xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
              // xhttp.setRequestHeader("Content-length", t_current.length);
              // xhttp.setRequestHeader("Connection", "close");
              // xhttp.send(t_current);

              // console.log("t_current = " + t_current + " before sending");
              // req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
              // xhttp.send(t_current);
              let foo = 3;
              let foo_json = JSON.stringify(parseFloat(foo)); // to make foo a float instead of a string
              // let foo_json = JSON.stringify(foo);
              xhttp.open("POST", "send()-test.php", true);
              // xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
              xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
              // xhttp.send(JSON.stringify(foo));
              xhttp.send(foo_json);


              // let xhttp = new XMLHttpRequest();

            }, 1000);
          }
        }
      },
    time: { useUTC: false },
    title: { text: 'Ajax Call' },
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