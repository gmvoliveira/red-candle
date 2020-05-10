const electron = require("electron");
const devTools = require('./devTools.js');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
    
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 720
    });
    
    devTools.macOS(electron);
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});