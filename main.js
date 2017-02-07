//handle setupevents as quickly as possible
const setupEvents = require('./installers/setupEvents')
if (setupEvents.handleSquirrelEvent()) {
   // squirrel event handled and app will exit in 1000ms, so don't do anything else
   return;
}

const electron = require('electron')  // Module to control application life.

const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

//var ipc = require('ipcRenderer');

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 640, height: 480});
  // disable main menu
  //mainWindow.setMenu(null);
  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // open dev tools
  //mainWindow.openDevTools();
  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});

// In main process.
const {ipcMain} = require('electron')
var java = require("java");

ipcMain.on('calculate', (event, arg) => {
  java.classpath.push("./src");
  var Calculator = java.import("de.lipros.electron.java.example.SimpleCalculator");
  var result = Calculator.calculateSync(Calculator.getFormatedListSync(arg));
  event.sender.send('updateResult', result);
})
