var gpio = require('./lib/gpio.js');

gpio.setup(gpio.PIN.GPIO204, gpio.DIRECTION.OUT); // export pin204
gpio.write(gpio.PIN.GPIO204, 1);                  // write 1 to pin204
gpio.read(gpio.PIN.GPIO204);                      // read value of pin204
gpio.unset(gpio.PIN.GPIO204);                     // unexport pin204