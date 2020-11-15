const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");
const isDev = require('electron-is-dev')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        backgroundColor: '#FFF',
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    if(isDev){
        mainWindow.loadURL('http://localhost:4200/index.html')
    }else{
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, `/dist/lpdv/index.html`),
                protocol: "file:",
                slashes: true
            })
        );
    }


    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function() {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
    if (mainWindow === null) createWindow()
})