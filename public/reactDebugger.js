// Use Chrome React extension for debugging purposes
// TODO : Rewrite for crossplatform purposes, or use electron-devtools-installer

const path = require('path')
const os = require('os')

exports.macOS = function(electron) {
    const BrowserWindow = electron.BrowserWindow;
    
    BrowserWindow.addDevToolsExtension(
        path.join(os.homedir(), '/Library/Application Support/Google/Chrome/Profile 2/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.6.0_0')
    );
}