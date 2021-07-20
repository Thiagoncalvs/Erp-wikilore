const { ipcRenderer } = require('electron')
const ipc = ipcRenderer


// MINIMIZE WINDOW
minimizeBtn.addEventListener('click', () => {
    ipc.send('minimizeApp')
})

// CLOSE WINDOW
closeBtn.addEventListener('click', () => {
    ipc.send('closeApp')
})

// MAXIMIZE WINDOW
maxmizeBtn.addEventListener('click', () => {
    ipc.send('maximizeRestoreApp')
})

// SHORTCUT com KEYBOARDEVENT ////////////////////////////////////////////

window.addEventListener('keyup', ShortcutLeftBar, false)

function ShortcutLeftBar(key) {
    const EnterAcesso = document.querySelector('#buttonEnter')

    if (key.keyCode == "13") {
        EnterAcesso.click()
    }
}

/////////////////////////////////////////////////////////////////////

function acessoLog (form){
    form.nome.value = form.nome.value.toUpperCase()

    if ((form.nome.value == "THIAGO GONÇALVES" && form.senha.value == "91318201") || (form.nome.value == "KAUE" && form.senha.value == "123")) {
        location = "home"
    } else {
        form.nome.value=""
        form.senha.value=""
        alert ("Não cadastrado")
        location = '/'
    }
}