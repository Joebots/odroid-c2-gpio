# odroid-c2-gpio
NodeJS library to write on the GPIO of the Odroid C2

## API
```javascript
var gpio = require('odroid-c2-gpio');

gpio.setup(pin, direction);
gpio.write(pin, value);
gpio.read(pin);
gpio.unset(pin);
```

## Pin configuration

You can use the physical numbering:

![ODROID-C2 pins](https://wiki.odroid.com/_media/odroid-c2/hardware/c2_j2.png)

## Usage

#### Setup gpio pin
```javascript
var gpio = require('odroid-gpiou3p');
gpio.setup(gpio.PIN.GPIO_0, gpio.DIRECTION.OUT); // export GPIO_0 (pin #11)
```

#### Write value to gpio pin
```javascript
gpio.write(gpio.PIN.GPIO_0, 1); // write value to GPIO_0 (pin #11)
```

#### Read value from gpio pin
```javascript
gpio.read(gpio.PIN.GPIO_0); // read value from GPIO_0 (pin #11)
```

#### Unset gpio pin
```javascript
gpio.unset(gpio.PIN.GPIO_0); // unexport GPIO_0 (pin #11)
```


## Constants
```javascript
gpio.PIN = {
    GPIO_0: "11",
    GPIO_1: "12",
    GPIO_2: "13",
    GPIO_3: "15",
    GPIO_4: "16",
    GPIO_5: "18",
    GPIO_6: "22",
    GPIO_7: "7",
    GPIO_10: "24",
    GPIO_11: "26",
    GPIO_12: "19",
    GPIO_13: "21",
    GPIO_14: "23",
    GPIO_21: "29",
    GPIO_22: "31",
    GPIO_23: "33",
    GPIO_24: "35",
    GPIO_26: "32",
    GPIO_27: "36"
};

gpio.DIRECTION = {
  IN: "in",
  OUT: "out"
};
