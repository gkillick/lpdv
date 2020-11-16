const { app, BrowserWindow, ipcMain} = require('electron')
const url = require("url");
const path = require("path");
const isDev = require('electron-is-dev')

try {
    require('electron-reloader')(module)
  } catch (_) {}


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


const {SENDING_ITEM, GET_KEYS, RESPONSE_KEYS, REQUEST_ITEM, RESPONSE_ITEM} = require('./src/message-types.js')
const storage = require('electron-json-storage')

ipcMain.on(SENDING_ITEM, (event, arg) => {

    const {key, data} = arg

    storage.set(key, data, (error) => {

        console.log('saved data')

    })


})

ipcMain.on(GET_KEYS, (event, arg) => {

   
    storage.keys((error, keys) => {
        if (error) throw error
        
        event.reply(RESPONSE_KEYS, keys)
    })
})

ipcMain.on(REQUEST_ITEM, (event, key) => {

    storage.get(key, (error, data) => {

        if(error) throw error;

        event.reply(RESPONSE_ITEM, data)
    })
})