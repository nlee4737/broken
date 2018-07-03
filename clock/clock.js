"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
    var now = new Date();  //use the 'now' variable in all calculations, etc.
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $("hours").innerHTML = h;
    $("minutes").innerHTML = m;
    $("seconds").innerHTML = s;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it
    // won't be needed - clock will just run.
    setInterval('function()',1000);
};