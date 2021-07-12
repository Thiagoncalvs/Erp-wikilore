const AddNewTABofPedidoELEMENT = require('./js_modules/ElementsForNewPedido/ElementABAforNewPedido.js')
const AddNewContentofPedidoELEMENT = require('./js_modules/ElementsForNewPedido/ElementCONTENTforNewPedido.js')

function ConfigWindow() {
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
}

function TabNavigationForLeftBar(){

    const html = {
        linksLeftBar: [...document.querySelector('.LeftBar').children],
        CenterContent: [...document.querySelector('.CenterContent').children],
        openTab: document.querySelector('[data-open]')
    }

    function hideAllContentForLeftBar(){
        html.CenterContent.forEach(div => {
            div.style.display = "none"
        })
    }
    function removeAllActiveClass(){
        html.linksLeftBar.forEach(tabRemove =>{
            tabRemove.className = tabRemove.className.replace(" activeLeftBar", "")
        })
    }
    function showCurrentTabForLeftBar(id){
        const tabContent = document.querySelector('#' + id)
        tabContent.style.display = 'grid'
    }
    function selectTabLeftBar(event){
        hideAllContentForLeftBar()
        removeAllActiveClass()

        const target = event.currentTarget
        showCurrentTabForLeftBar(target.dataset.id)

        target.className += " activeLeftBar"

    }
    function listenerForChange(){
        html.linksLeftBar.forEach(tabForLeftBar => {
            tabForLeftBar.addEventListener('click', selectTabLeftBar)
        })
    }
    function iniciar(){
        hideAllContentForLeftBar()
        listenerForChange()

        html.openTab.click()
    }

    return{
        iniciar
    }
    
}

function TabNavigationForPedidosAba(){

    const html = {
        linksPedidosAbas: [...document.querySelector('.SeparacaoOne').children],
        PedidoContent: [...document.querySelector('.PedidosContents').children],
        // openTab: document.querySelector('[data-All]')
    }

    function hideAllContentForPedidosAbas(){
        html.PedidoContent.forEach(div => {
            div.style.display = "none"
        })
    }
    function removeAllActiveClass(){
        html.linksPedidosAbas.forEach(tabRemove =>{
            tabRemove.className = tabRemove.className.replace(" activePedidoAba", "")
        })
    }
    function showCurrentTabForLeftBar(id){
        const tabContent = document.querySelector('#' + id)
        tabContent.style.display = 'grid'
    }
    function selectTabLeftBar(event){
        hideAllContentForPedidosAbas()
        removeAllActiveClass()

        const target = event.currentTarget
        showCurrentTabForLeftBar(target.dataset.id)

        target.className += " activePedidoAba"
    }
    function listenerForChange(){
        html.linksPedidosAbas.forEach(tabForLeftBar => {
            tabForLeftBar.addEventListener('click', selectTabLeftBar)
        })
    }
    function iniciar(){
        hideAllContentForPedidosAbas()
        listenerForChange()

        // html.openTab.click()
    }

    return{
        iniciar
        // listenerForChange,
        // hideAllContentForPedidosAbas
    }
    
}

window.addEventListener('load', () =>{
    ConfigWindow()

    const TabNavigationForLeftBarGGG = TabNavigationForLeftBar()
    TabNavigationForLeftBarGGG.iniciar()

    const TabNavigationForPedidosAbaGGG = TabNavigationForPedidosAba()
    TabNavigationForPedidosAbaGGG.iniciar()

    document.querySelector('#LeftBar02').addEventListener('click', ()=>{

        const FirstChildLeftBar = document.querySelector('.SeparacaoOne')
        FirstChildLeftBar.firstElementChild.click()
    })
})

/////////////////////////////////////////////////////////////////////////////////

const AbaMorePedido = document.querySelector('.AbaMorePedido')
const SeparacaoOne = document.querySelector('.SeparacaoOne')

AbaMorePedido.addEventListener('click', ()=>{
    AddNewTABofPedidoELEMENT()
    AddNewContentofPedidoELEMENT()

    const NumberId = SeparacaoOne.children.length - 1


    if (SeparacaoOne.children.length > 0) {
        SeparacaoOne.lastChild.click()
    }

})


///////////////////////////////////////////////////////////////////////////
// SHORTCUT com KEYBOARDEVENT/////////////////////////////////////////////

window.addEventListener('keyup', ShortcutLeftBar, false)

function ShortcutLeftBar(key) {

    const ControlOne = document.querySelector('#LeftBar01')
    const ControlTwo = document.querySelector('#LeftBar02')
    const ControlThre = document.querySelector('#LeftBar03')
    const ControlFour = document.querySelector('#LeftBar04')
    const ControlFive = document.querySelector('#LeftBar05')
    const ControlSix = document.querySelector('#LeftBar06')

    const ControlMoreAndNew = document.querySelector('.AbaMorePedido')

    const ClienteOne = document.querySelector('#NewPedido-1')
    const ClienteTwo = document.querySelector('#NewPedido-2')
    const ClienteThree = document.querySelector('#NewPedido-3')
    const ClienteFour = document.querySelector('#NewPedido-4')
    const ClienteFive = document.querySelector('#NewPedido-5')
    const ClienteSix = document.querySelector('#NewPedido-6')
    const ClienteSeven = document.querySelector('#NewPedido-7')

    console.log(ClienteThree)

    if (key.ctrlKey && key.keyCode == "96") {//ctrl 0 - HOME
        ControlOne.click()
    } else if (key.ctrlKey && key.keyCode == '97') {//ctrl 1 - All Pedidos
        ControlTwo.click()
    } else if (key.ctrlKey && key.keyCode == "98") {//ctrl 2 - All Motoboy
        ControlThre.click()
    } else if (key.ctrlKey && key.keyCode == "99") {//ctrl 3 - Caixa
        ControlFour.click()
    } else if (key.ctrlKey && key.keyCode == "100") {//ctrl 4 - All Relatorios
        ControlFive.click()
    } else if (key.ctrlKey && key.keyCode == "101") {//ctrl 5 - All Cadastros
        ControlSix.click()
    }else if (key.ctrlKey && key.keyCode == "75") {//ctrl K - New Pedido
        ControlTwo.click()//////////////////////////////////////////////////////////////////////
        ControlMoreAndNew.click()///////////////////////////////////////////////////////////////
    }else if (key.shiftKey && key.keyCode == '97') {//ctrl 1 - Cliente 1
        ClienteOne.click()
    } else if (key.altKey && key.keyCode == "98") {//ctrl 2 - Cliente 2
        ClienteTwo.click()
    } else if (key.altKey && key.keyCode == "99") {//ctrl 3 - Cliente 3
        ClienteThree.click()
    } else if (key.altKey && key.keyCode == "100") {//ctrl 4 - Cliente 4
        ClienteFour.click()
    } else if (key.altKey && key.keyCode == "101") {//ctrl 5 - Cliente 5
        ClienteFive.click()
    }else if (key.altKey && key.keyCode == "102") {//ctrl 6 - Cliente 6
        ClienteSix.click()
    }else if (key.altKey && key.keyCode == "103") {//ctrl 7 - Cliente 7
        ClienteSeven.click()
    }
}