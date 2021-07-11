/******************************************************************************
 * File: clock.js
 *
 * Description: top bar clock (will get day, month, year and time)
 *
 *****************************************************************************/

//tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var saved_month, saved_day, saved_year, saved_hour, saved_min, saved_sec;

  function GetClock(){
    var d = new Date();
    var nday = d.getDay(), nmonth=d.getMonth(), ndate=d.getDate(), nyear=d.getYear();
    if(nyear<1000) nyear+=1900;
    var nhour = d.getHours(), nmin=d.getMinutes(), nsec=d.getSeconds(), ap;

    /*if(nhour === 0){ap =" AM"; nhour=12;}
    else if(nhour<12){ap=" AM";}
    else if(nhour==12){ap=" PM";}
    else if(nhour>12){ap=" PM";nhour-=12;}*/

    if(nmin <= 9) nmin = "0"+nmin;
    if(nsec <= 9) nsec = "0"+nsec;

  //document.getElementById('clockbox').innerHTML=" "+nhour+":"+nmin+":"+nsec+"";
  //document.getElementById('clockbox').innerHTML=" "+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
  document.getElementById('clockbox').innerHTML=" "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+"";


  saved_day = ndate;
  saved_month = tmonth[nmonth];
  saved_year = nyear;
  saved_hour = nhour;
  saved_min = nmin;
  saved_sec = nsec;
}

window.onload=function(){
  GetClock();
  setInterval(GetClock,1000);

  /* to get individual values - not relevant as of yet */
  //document.getElementById("day").innerHTML=saved_day;
  //document.getElementById("month").innerHTML=saved_month;
  //document.getElementById("year").innerHTML=saved_year;
  //document.getElementById("hour").innerHTML=saved_hour;
  //document.getElementById("minute").innerHTML=saved_min;
  //document.getElementById("second").innerHTML=saved_sec;
}


