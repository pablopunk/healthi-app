var exec = require('child_process').exec;
		
function updateBattery(percentage)
{
	percentage = percentage.toFixed(0);
    document.getElementById('battery-health').innerHTML = percentage + "%";
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