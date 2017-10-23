var gpio = require("../lib/gpio");

var pin = "7";

gpio.setup(pin, gpio.DIRECTION.IN);

gpio.on('change', pin, function(value) {
    console.log("Pin #" + pin + " is changed. New Value is " + value);
});
