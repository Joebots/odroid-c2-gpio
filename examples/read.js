var gpio = require("../lib/gpio");

var pin = "7";

setInterval(function () {
    var value = gpio.read(pin);
    console.log("Pin #" + pin + "value = " + value);
}, 1);
