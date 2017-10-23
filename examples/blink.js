var gpio = require("../lib/gpio");

var pin = "7";

var value = 1;

setInterval(function () {
    gpio.write(pin, value);
    value = +!value;
}, 500);
