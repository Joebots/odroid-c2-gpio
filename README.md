# odroid-gpiou3p
NodeJS library to write on the GPIO of the Odroid U3+

## API
```javascript
var gpio = require('odroid-gpiou3p');

gpio.setup(pin, direction);
gpio.write(pin, value);
gpio.read(pin);
gpio.unset(pin);
```


## Usage

#### Setup gpio pin
```javascript
var gpio = require('odroid-gpiou3p');
gpio.setup(gpio.PIN.GPIO204, gpio.DIRECTION.OUT); // export pin204
```

#### Write value to gpio pin
```javascript
gpio.write(gpio.PIN.GPIO204, 1); // write value to pin204
```

#### Read value from gpio pin
```javascript
gpio.read(gpio.PIN.GPIO204); // read value from pin204
```

#### Unset gpio pin
```javascript
gpio.unset(gpio.PIN.GPIO204); // unexport pin204
```


## Constants
```javascript
gpio.PIN = {
  GPIO199: "199",
  GPIO200: "200",
  GPIO204: "204"
}

gpio.DIRECTION = {
  IN: "in",
  OUT: "out"
}
