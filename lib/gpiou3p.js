var posix = require('posix');
var path = require('path');
var fs = require('fs');

var PATH = '/sys/class/gpio';
var EXPORT = '/sys/class/gpio/export';
var UNEXPORT = '/sys/class/gpio/unexport';

if (posix.getuid() != 0) {
  console.error('Must have superuser privileges for gpiou3p.');
  process.exit(1);
}

function pathExist(path) {
  try {
    fs.statSync(path);
  } catch(e) {
    return 0;
  }
  return 1;
}

function readPin(pin) {
  var pinPath = path.join(PATH, 'gpio' + pin);

  if (!pathExist(pinPath)) {
    throw new Error('pin' + pin + ' has not been set yet.');
  } else {
    return pinPath;
  }
}

function setPin(pin) {
  var pinPath = path.join(PATH, 'gpio' + pin);

  if (!pathExist(pinPath)) {
    try {
      fs.writeFileSync(EXPORT, pin);  
    } catch (e) {
      throw e;
    }
  }
  return pinPath;
}

exports.setup = function(pin, direction) {
  var pinPath = setPin(pin);
  fs.writeFileSync(path.join(pinPath, 'direction'), direction);
}

exports.write = function(pin, value) {
  var pinPath = setPin(pin);
  fs.writeFileSync(path.join(pinPath, 'value'), String(value));
}

exports.read = function(pin) {
  var pinPath = readPin(pin);
  return String.fromCharCode(fs.readFileSync(path.join(pinPath, 'value')).readUInt8(0));
}

exports.unset = function(pin) {
  readPin(pin);
  fs.writeFileSync(UNEXPORT, pin);
}

exports.PIN = {
  GPIO199: "199",
  GPIO200: "200",
  GPIO204: "204"
}

exports.DIRECTION = {
  IN: 'in',
  OUT: 'out'
}