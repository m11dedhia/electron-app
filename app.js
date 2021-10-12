const electron = require('electron');
const url = require('url');
const path = require('path');

const ENV_TYPE = 'dev'

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  // UI Window
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'main-window.html'),
    protocol: 'file',
    slashes: true,
  }))

  // MITM window
  nodeWindow = new BrowserWindow({ show: ENV_TYPE === 'prod' ? false : true });
  nodeWindow.loadURL('http://localhost:8080');
})