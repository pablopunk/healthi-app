var exec = require('child_process').exec;

var message = {
	replace : "Replace battery :(",
	soon : "Replace battery soon",
	good: "Your battery is OK :)"
}

var color = {
	replace : "#DA4453",
	soon : "#F6BB42",
	good: "#26C281"
}

function getColor(percentage) {
	if (percentage > 90) return color.good
	if (percentage > 80) return color.soon
	return color.replace
}

function updateBattery(percentage)
{
	percentage = percentage.toFixed(0);
    document.getElementById('battery-health').innerHTML = percentage + "%";
	var c = getColor(percentage);
	document.body.style.backgroundColor = c;
	if (c == color.good) document.getElementById('message').innerHTML = message.good
	else if (c == color.soon) document.getElementById('message').innerHTML = message.soon
	else if (c == color.replace) document.getElementById('message').innerHTML = message.replace
}

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