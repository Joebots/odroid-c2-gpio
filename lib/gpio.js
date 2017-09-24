var path = require('path');
var fs = require('fs');

var PATH = '/sys/class/gpio';
var EXPORT = '/sys/class/gpio/export';
var UNEXPORT = '/sys/class/gpio/unexport';

const PIN_MAPPING_REF = {
    "7": 249,
    "11": 247,
    "12": 238,
    "13": 239,
    "15": 237,
    "16": 236,
    "18": 233,
    "19": 235,
    "21": 232,
    "22": 231,
    "23": 230,
    "24": 229,
    "26": 225,
    "29": 228,
    "31": 219,
    "32": 224,
    "33": 234,
    "35": 214,
    "36": 218
};

function pathExist(path) {
    try {
        fs.statSync(path);
    } catch (e) {
        return 0;
    }
    return 1;
}

function readPin(pin) {
    var pinPath = path.join(PATH, 'gpio' + PIN_MAPPING_REF[pin]);

    if (!pathExist(pinPath)) {
        throw new Error('pin' + pin + ' has not been set yet.');
    } else {
        return pinPath;
    }
}

function setPin(pin) {
    var pinPath = path.join(PATH, 'gpio' + PIN_MAPPING_REF[pin]);

    if (!pathExist(pinPath)) {
        try {
            fs.writeFileSync(EXPORT, PIN_MAPPING_REF[pin]);
        } catch (e) {
            throw e;
        }
    }
    return pinPath;
}

function changeOwner(file) {
    var uid = process.getuid();
    var gid = process.getgid();
    fs.chownSync(file, uid, gid);
    /*
    if (chown (file, uid, gid) != 0)
    {
        if (errno == ENOENT)	// Warn that it's not there
            fprintf (stderr, "%s: Warning: File not present: %s\n", cmd, file) ;
        else
        {
            fprintf (stderr, "%s: Unable to change ownership of %s: %s\n", cmd, file, strerror (errno)) ;
            exit (1) ;
        }
    }*/
}

exports.setup = function (pin, direction) {
    var pinPath = setPin(pin);
    console.log("[setup] pinPath= " + pinPath + ", direction= " + direction);
    fs.writeFileSync(path.join(pinPath, 'direction'), direction);
    return pinPath;
};

exports.write = function (pin, value) {
    var pinPath = this.setup(pin, this.DIRECTION.OUT);
    console.log("[write] pinPath= " + pinPath);
    fs.writeFileSync(path.join(pinPath, 'value'), String(value));
};

exports.read = function (pin) {
    var pinPath = readPin(pin);
    return String.fromCharCode(fs.readFileSync(path.join(pinPath, 'value')).readUInt8(0));
};

exports.unset = function (pin) {
    readPin(pin);
    fs.writeFileSync(UNEXPORT, PIN_MAPPING_REF[pin]);
};

exports.PIN = {
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

exports.DIRECTION = {
    IN: 'in',
    OUT: 'out'
};