const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200, 
    height:750, 
    webPreferences: {
      nodeIntegration:true,
      enableRemoteModule: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadURL('https://www.office.com/?auth=1');
  mainWindow.setMenuBarVisibility(false)

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

