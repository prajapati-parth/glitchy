'use strict';

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

//global reference of mainWindow to avoid it from being destroyed by garbage collector
let mainWindow

function createWindow() {
    //create main window for the app
    mainWindow = new BrowserWindow({width: 800, height: 600})
    //load the index file
    mainWindow.loadURL(`file://${__dirname}/index.html`)

    //this is used to open dev tools
    mainWindow.webContents.openDevTools()

    //bind event
    mainWindow.on('closed', function() {
        mainWindow = null
    })
}

//bind events
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
