const { app, BrowserWindow, ipcMain } = require('electron')
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

    if (isDev) {
        mainWindow.loadURL('http://localhost:4200/index.html')
    } else {
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


const {DELETE_ITEM, SENDING_ITEM, GET_KEYS_ORDERS, GET_KEYS_ITEMS, RESPONSE_KEYS_ITEMS, RESPONSE_KEYS_ORDERS, REQUEST_ITEM, RESPONSE_ITEM, RESPONSE_ORDER, REQUEST_ORDER}  = require('./src/message-types.js')

const storage = require('electron-json-storage')
console.log(storage.getDefaultDataPath())
console.log("HI")

ipcMain.on(SENDING_ITEM, (event, arg) => {

    const { key, payload} = arg
    console.log(payload)

    console.log(key)
    storage.set(key, payload, (error) => {

        console.log('saved data')


    })


})

ipcMain.on(GET_KEYS_ITEMS, (event, arg) => {


    storage.keys((error, keys) => {
        if (error) throw error

        event.reply(RESPONSE_KEYS_ITEMS, keys)
    })
})

ipcMain.on(GET_KEYS_ORDERS, (event, arg) => {


    storage.keys((error, keys) => {
        if (error) throw error

        event.reply(RESPONSE_KEYS_ORDERS, keys)
    })
})


ipcMain.on(REQUEST_ITEM, (event, key) => {

    storage.get(key, (error, payload) => {

        if (error) throw error;

        event.reply(RESPONSE_ITEM, payload)
    })
})

ipcMain.on(REQUEST_ORDER, (event, key) => {

    storage.get(key, (error, payload) => {

        if (error) throw error;
        payload.id = key

        event.reply(RESPONSE_ORDER, payload)
    })
})

ipcMain.on(DELETE_ITEM, (event, key) => {
    console.log(key)
    storage.remove(key, err => {
        console.log(err)
    })
})