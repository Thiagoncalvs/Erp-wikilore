const SeparacaoOne = document.querySelector('.SeparacaoOne')
const AllPedido = document.querySelector('.AbaAllPedido')
const AbaMorePedido = document.querySelector('.AbaMorePedido')

const AddNewTABofPedidoELEMENTvar = ()=>{
    const NumberId = SeparacaoOne.children.length


    const NewPedidoAba = document.createElement("div")
    const TituloNewPedidoAba = document.createElement("h1")

    TituloNewPedidoAba.textContent = 'New Pedido ' + NumberId

    NewPedidoAba.setAttribute('id', 'NewPedido-' + NumberId)
    NewPedidoAba.setAttribute('data-id', 'Area-New-Pedido-' + NumberId)
    NewPedidoAba.setAttribute('title', 'Shift + ' + NumberId)
    NewPedidoAba.classList.add('AbaNewPedido')

    

    if (SeparacaoOne.children.length <= 7) {
        let parentAll = AllPedido.parentNode
        parentAll.append(NewPedidoAba)
        NewPedidoAba.append(TituloNewPedidoAba)
    } else{
        AbaMorePedido.className = 'AbaMorePedido MoreHOVER'
    } 

    const TabNavigationForPedidosAbaGGG = TabNavigationForPedidosAba()
    // TabNavigationForPedidosAbaGGG.hideAllContentForPedidosAbas()
    TabNavigationForPedidosAbaGGG.iniciar()

}

module.exports = AddNewTABofPedidoELEMENTvar