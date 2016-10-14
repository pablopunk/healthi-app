var exec = require('child_process').exec;

var message = {
	replace : "Replace battery :(",
	soon : "Replace battery soon",
	good: "Your battery is OK :)"
}

var bodyColor = {
	replace : "#DA4453",
	soon : "#F6BB42",
	good: "#37BC9B"
}

var loadColor = {
	replace : "#ED5565",
	soon : "#FFCE54",
	good: "#48CFAD"
}

function getColor(percentage, body = false) {
	if (percentage > 90) return body ? bodyColor.good : loadColor.good
	if (percentage > 80) return body ? bodyColor.soon : loadColor.soon
	return  body ? bodyColor.replace : loadColor.replace
}

function updateBattery(percentage)
{
	percentage = percentage.toFixed(0);
    document.getElementById('battery-health').innerHTML = percentage + "%";
	var lColor = getColor(percentage);
	var bColor = getColor(percentage, true);
	document.body.style.backgroundColor = bColor;
	document.getElementById('battery-color').style.backgroundColor = lColor;
	document.getElementById('battery-color').style.width = percentage+"%";
	if (lColor == loadColor.good) document.getElementById('message').innerHTML = message.good
	else if (lColor == loadColor.soon) document.getElementById('message').innerHTML = message.soon
	else if (lColor == loadColor.replace) document.getElementById('message').innerHTML = message.replace
}

function main()
{
	var child = exec("ioreg -l | grep Capacity | cut -d' ' -f19", function (error, stdout, stderr) {
    if (error !== null) {
    	console.log('exec error: ' + error);
    }

    var lines = stdout.match(/[^\r\n]+/g);
    var capacityNow = parseInt(lines[0]);
    var chargeNow = parseInt(lines[1]);
    var capacityOriginal = parseInt(lines[3]);
    var health = (capacityNow * 100) / capacityOriginal;
    updateBattery(health);
})
}