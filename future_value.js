"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var calculateFV = function(investment, rate, years) {
    var x=(1+rate/100)
	var future_value = investment * (Math.pow(x,years));
	future_value = future_value.toFixed(2);
	return future_value;
};
		
var processEntries = function() {
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
    var years = parseFloat($("years").value);
    var msgError; 

	if (isNaN(investment) || investment < 1 || investment > 100000) {
		msgError = "Total Investment must be a number from 1 to 100,000";
        alert(msgError);
        $("investment").focus();
    } else if (isNaN(rate) || rate < 1 || rate > 15) {
        msgError = "Anual Interest Rate must be a number from 1 to 15";
		alert(msgError);
		$("rate").focus();
    } else if (isNaN(years) || years < 1 || years > 50) {
        msgError = "Number of Years must be a number from 1 to 50";
		alert(msgError);
        $("years").focus();
    }else {
         $("future_value").value = calculateFV(investment, rate, years);
    }
};

var initApp = function() {
    $('investment').value = "";
    $('rate').value = "";
    $('years').value = "";
    $('future_value').value = "";
    $('investment').focus();
}


window.onload = function() {
    $("calculate").onclick = processEntries;
    $("investment").focus();
    $("reset").onclick = initApp;
};
