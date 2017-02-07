// index.js
const ipc = require('electron').ipcRenderer;
var java = require("java");

document.getElementById('nine').onclick = function() {
  document.getElementById('screen').innerHTML += '9';
}

document.getElementById('eight').onclick = function() {
  document.getElementById('screen').innerHTML += '8';
}

document.getElementById('seven').onclick = function() {
  document.getElementById('screen').innerHTML += '7';
}

document.getElementById('six').onclick = function() {
  document.getElementById('screen').innerHTML += '6';
}

document.getElementById('five').onclick = function() {
  document.getElementById('screen').innerHTML += '5';
}

document.getElementById('four').onclick = function() {
  document.getElementById('screen').innerHTML += '4';
}

document.getElementById('three').onclick = function() {
  document.getElementById('screen').innerHTML += '3';
}

document.getElementById('two').onclick = function() {
  document.getElementById('screen').innerHTML += '2';
}

document.getElementById('one').onclick = function() {
  document.getElementById('screen').innerHTML += '1';
}

document.getElementById('zero').onclick = function() {
  document.getElementById('screen').innerHTML += '0';
}

document.getElementById('comma').onclick = function() {
  document.getElementById('screen').innerHTML += '.';
}

document.getElementById('add').onclick = function() {
  if(isScreenValueOk(document.getElementById('screen').innerHTML))
    document.getElementById('screen').innerHTML += '+';
}

document.getElementById('sub').onclick = function() {
  if(isScreenValueOk(document.getElementById('screen').innerHTML))
    document.getElementById('screen').innerHTML += '-';
}

document.getElementById('div').onclick = function() {
  if(isScreenValueOk(document.getElementById('screen').innerHTML))
    document.getElementById('screen').innerHTML += '/';
}

document.getElementById('mul').onclick = function() {
  if(isScreenValueOk(document.getElementById('screen').innerHTML))
    document.getElementById('screen').innerHTML += '*';
}

document.getElementById('result').onclick = function() {
  ipc.send('calculate', document.getElementById('screen').innerHTML);
}

document.getElementById('clear').onclick = function() {
  document.getElementById('screen').innerHTML = '';
  // write this on Browser console ....
  console.log("Clear ...");
}

ipc.on('updateResult', function(event, data){
  document.getElementById('screen').innerHTML = data;
});

function isScreenValueOk(screenValue) {
  stringLength = screenValue.length;
  if(stringLength == 0)
    return false;
  else
    return Number.isInteger(parseInt(screenValue.substring(stringLength-1, stringLength)));
}
