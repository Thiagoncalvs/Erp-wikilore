const {app, BrowserWindow, ipcMain} = require('electron');
const ipc = ipcMain

// JANELA PRINCIPAL
var mainWindow = null
async function createWindow() {
    mainWindow = new BrowserWindow({
        width:400,
        height:600,
        minWidth:400,
        minHeight:600,
        frame: false,
        resizable: true,
        show: false,
        backgroundColor: 'white',//'#1E222D'
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
            devTools:true
        }
    })

    // mainWindow.loadFile('./src/PageMain.html')
    mainWindow.loadURL('http://localhost:2698/')
    // mainWindow.loadURL('http://youtube.com/')

    mainWindow.on('ready-to-show', () => {
        mainWindow.show()
    })
    
 ////////////////////////////////////////////////////////////////////////////////
    // MINIMIZE WINDOW
    ipc.on('minimizeApp', () => {
        console.log('MINIMIZADO')
        mainWindow.minimize()
    })
    // CLOSE WINDOW
    ipc.on('closeApp', () => {
        console.log('FECHADO')
        mainWindow.close()
    })
    // MAXIMIZE WINDOW
    ipc.on('maximizeRestoreApp', () => {

        if (mainWindow.isMaximized()) {
            console.log('RESTORE')
            mainWindow.restore()
        } else {
            console.log('MAXIMIZADO')
            mainWindow.maximize()   
        }
    })
 ////////////////////////////////////////////////////////////////////////////////

}

// ON READY
app.whenReady().then(createWindow)

// ACTIVATE
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})