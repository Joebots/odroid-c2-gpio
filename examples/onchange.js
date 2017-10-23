var gpio = require("../lib/gpio");

var pin = "7";

gpio.setup(pin, gpio.DIRECTION.IN);

gpio.on('change', function(pin, value, previousValue) {
    console.log("Pin #" + pin + " is changed from " + previousValue + " to " + value);
});
