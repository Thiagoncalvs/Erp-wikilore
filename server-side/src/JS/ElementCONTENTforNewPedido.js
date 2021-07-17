

export const AddNewContentofPedidoELEMENT = ()=>{
    const NumberId = SeparacaoOne.children.length - 1

///////////////////////////////////////////////////////////////////////////////
    const NewPedidoContent = document.createElement('div')
        NewPedidoContent.setAttribute('id', 'Area-New-Pedido-' + NumberId)
        NewPedidoContent.classList.add('AreaNewPedido')
        NewPedidoContent.setAttribute('style', 'display: none;')


        const NewButtonToDoPedido = document.createElement('div')
            NewButtonToDoPedido.classList.add('ButtonToDoPedido')

            const NewThisButtonOne = document.createElement('div')
                NewThisButtonOne.classList.add('ThisButton')

                const InfoComandoOne = document.createElement('div')
                    InfoComandoOne.classList.add('InfoComando')

                    const InfoComandoOneTex1 = document.createElement('p')
                        InfoComandoOneTex1.textContent = 'Add Cliente'
                    const InfoComandoOneTex2 = document.createElement('p')
                        InfoComandoOneTex2.textContent = 'Ctrl + Shift + K'
                
                const NewThisButtonOneText1 = document.createElement('p')
                    NewThisButtonOneText1.textContent = 'CLIENTE'
                const NewThisButtonOneText2 = document.createElement('p')
                    NewThisButtonOneText2.setAttribute('id', 'Add-Cliente-Body-' + NumberId)
                    NewThisButtonOneText2.setAttribute('title', 'Add Cliente')
                        
                        const NewThisButtonOneText2SubText = document.createElement('i')
                            NewThisButtonOneText2SubText.setAttribute('id', 'AddCliente')
                            NewThisButtonOneText2SubText.setAttribute('class', 'bi biPlusCloseOne bi-plus-square')

            const NewThisButtonTwo = document.createElement('div')
                NewThisButtonTwo.classList.add('ThisButton')

                const InfoComandoTwo = document.createElement('div')
                    InfoComandoTwo.classList.add('InfoComando')

                    const InfoComandoTwoTex1 = document.createElement('p')
                        InfoComandoTwoTex1.textContent = 'Add Pedido'
                    const InfoComandoTwoTex2 = document.createElement('p')
                        InfoComandoTwoTex2.textContent = 'Ctrl + Shift + J'
                
                const NewThisButtonTwoText1 = document.createElement('p')
                    NewThisButtonTwoText1.textContent = 'PEDIDO'
                const NewThisButtonTwoText2 = document.createElement('p')
                    NewThisButtonTwoText2.setAttribute('id', 'Add-PedidoAndPagamento-Body-' + NumberId)
                    NewThisButtonTwoText2.setAttribute('title', 'Add Pedido')
                        
                        const NewThisButtonTwoText2SubText = document.createElement('i')
                            NewThisButtonTwoText2SubText.setAttribute('id', 'AddPedidoAndPay')
                            NewThisButtonTwoText2SubText.setAttribute('class', 'bi biPlusCloseTwo bi-plus-square')

            const NewThisButtonThree = document.createElement('div')
                NewThisButtonThree.classList.add('ThisButton')

                const NewThisButtonThreeText1 = document.createElement('p')
                    NewThisButtonThreeText1.textContent = 'PAGAMENTO'

         /////////////////////////////////////////////////////////////////
        const NewCorpoFromPedido = document.createElement('div')
            NewCorpoFromPedido.classList.add('CorpoFromPedido')

            const BodyThisCliente = document.createElement('div')
                BodyThisCliente.setAttribute('id', 'Body-This-Cliente-' + NumberId)
                BodyThisCliente.setAttribute('class', 'BodyThisCliente BodyNegative')

                    const ClientePesquisa = document.createElement('div')
                        ClientePesquisa.setAttribute('class', 'ClientePesquisa')

                        const SearchCliente = document.createElement('input')
                            SearchCliente.setAttribute('type', 'search')
                            SearchCliente.setAttribute('class', 'SearchCliente')
                            SearchCliente.setAttribute('autocomplete', 'off')
                            SearchCliente.setAttribute('placeholder', 'Search Cliente')

                    const ContainerExclusiveCliente = document.createElement('div')
                        ContainerExclusiveCliente.setAttribute('class', 'ContainerExclusiveCliente')

                        const ClienteName = document.createElement('div')
                            ClienteName.setAttribute('class', 'ClienteName')
                                const ClienteNameText = document.createElement('span')
                                    ClienteNameText.textContent = 'CLIENTE Nº ' + NumberId

                        const AllClienteNumber = document.createElement('div')
                            AllClienteNumber.setAttribute('class', 'AllClienteNumber')
                                const SELECTAllClienteNumber = document.createElement('select')
                                    SELECTAllClienteNumber.setAttribute('name', 'AllClienteNumber')
                                    SELECTAllClienteNumber.setAttribute('id', 'SELECTAllClienteNumber')
                                        const NumberTelCliente01 = document.createElement('option')
                                            NumberTelCliente01.setAttribute('value', 'NumberTelCliente01')
                                            NumberTelCliente01.textContent = '(96) 9 8406-3222'
                                        const NumberTelCliente02 = document.createElement('option')
                                            NumberTelCliente02.setAttribute('value', 'NumberTelCliente02')
                                            NumberTelCliente02.textContent = '(96) 9 9131-3972'
                                const AddNewNumberCliente = document.createElement('div')
                                    AddNewNumberCliente.setAttribute('class', 'AddNewNumberCliente')
                                        const AddNewNumberClienteText = document.createElement('p')
                                            AddNewNumberClienteText.textContent = '+'

                        const EditClienteInCadastro = document.createElement('div')
                            EditClienteInCadastro.setAttribute('class', 'EditClienteInCadastro')
                                const EditClienteInCadastroText = document.createElement('p')
                                    EditClienteInCadastroText.textContent = 'Editar Cadastro do Cliente'

                        const AlladdressCliente = document.createElement('div')
                            AlladdressCliente.setAttribute('class', 'AlladdressCliente')

                                const CadastroClienteComanda = document.createElement('div')
                                    CadastroClienteComanda.setAttribute('id', 'EnderecoLigado')
                                    CadastroClienteComanda.setAttribute('class', 'CadastroClienteComanda')

                                        const CadastroClienteComandaTextOne = document.createElement('p')
                                            CadastroClienteComandaTextOne.textContent = 'AV. MARIO FORTUNATO BARRIGA 274-A'
                                        const CadastroClienteComandaTextTwo = document.createElement('p')
                                            CadastroClienteComandaTextTwo.textContent = 'ZERÃO'
                                        const CadastroClienteComandaTextThree = document.createElement('p')
                                            CadastroClienteComandaTextThree.textContent = 'REF: RUA DA OFICINA DO PIAUI'

                        const AddNewAddre = document.createElement('div')
                            AddNewAddre.setAttribute('class', 'AddNewAddre')
                                const AddNewAddreText = document.createElement('p')
                                    AddNewAddreText.textContent = 'Novo Endereço'

                 /////////////////////////////////////////////////////////////////////////////////////////////////////////
            const BodyThisPedido = document.createElement('div')
                BodyThisPedido.setAttribute('id', 'Body-This-Pedido-' + NumberId)
                BodyThisPedido.setAttribute('class', 'BodyThisPedido BodyNegative')

                    const ItemPesquisa = document.createElement('div')
                        ItemPesquisa.setAttribute('class', 'ItemPesquisa')
                            const SearchItem = document.createElement('input')
                                SearchItem.setAttribute('type', 'search')
                                SearchItem.setAttribute('class', 'SearchItem')
                                SearchItem.setAttribute('autocomplete', 'off')
                                SearchItem.setAttribute('placeholder', 'Pesquisar Item')

                    const ContainerItens = document.createElement('div')
                        ContainerItens.setAttribute('class', 'ContainerItens')

                            const BoxTheItem = document.createElement('div')
                                BoxTheItem.setAttribute('class', 'BoxTheItem')
                                    const InfoMainItem = document.createElement('div')
                                        InfoMainItem.setAttribute('id', 'Info-Main-Item-' + NumberId)
                                        InfoMainItem.setAttribute('class', 'InfoMainItem')
                                            const QTDItem = document.createElement('div')
                                                QTDItem.setAttribute('class', 'QTDItem')
                                                    const QTDItemText = document.createElement('span')
                                                        QTDItemText.textContent = '1'
                                            const ClassOfItem = document.createElement('div')
                                                ClassOfItem.setAttribute('class', 'ClassOfItem')
                                                    const ClassOfItemText = document.createElement('span')
                                                        ClassOfItemText.textContent = 'PASTEL'
                                            const ValorTotalItem = document.createElement('div')
                                                ValorTotalItem.setAttribute('class', 'ValorTotalItem')
                                                    const ValorTotalItemText = document.createElement('span')
                                                        ValorTotalItemText.textContent = 'R$ 331,00'

                                    const OthersInfoItem = document.createElement('div')
                                        OthersInfoItem.setAttribute('class', 'OthersInfoItem')

                                            const EditQTDItem = document.createElement('div')
                                                EditQTDItem.setAttribute('class', 'EditQTDItem')

                                                    const ValorEditQTDItem = document.createElement('div')
                                                        ValorEditQTDItem.setAttribute('class', 'ValorEditQTDItem')
                                                            const ValorEditQTDInput = document.createElement('input')
                                                                ValorEditQTDInput.setAttribute('type', 'text')
                                                                ValorEditQTDInput.setAttribute('maxlength', '1')
                                                                ValorEditQTDInput.setAttribute('autocomplete', 'off')
                                                                ValorEditQTDInput.setAttribute('placeholder', '1')

                                                    const TextEditQTDItem = document.createElement('span')
                                                        TextEditQTDItem.setAttribute('id', 'TextEditQTDItem')
                                                        TextEditQTDItem.textContent = 'QTD.'

                                            const EspecificInfoIte = document.createElement('div')
                                                EspecificInfoIte.setAttribute('class', 'EspecificInfoIte')
                                                    const EspecificInfoIteTextOne = document.createElement('span')
                                                        EspecificInfoIteTextOne.textContent = '12UND CAMARÃO REGIONAL'
                                                    const EspecificInfoIteTextTwo = document.createElement('span')
                                                        EspecificInfoIteTextTwo.textContent = ''

                                            const CommentItem = document.createElement('div')
                                                CommentItem.setAttribute('class', 'CommentItem')
                                                    const CommentItemInput = document.createElement('input')
                                                        CommentItemInput.setAttribute('type', 'text')
                                                        CommentItemInput.setAttribute('autocomplete', 'off')
                                                        CommentItemInput.setAttribute('placeholder', 'ESPECIFICAR ITEM')
                                                        CommentItemInput.setAttribute('id', 'InputEspecificoItem-' + NumberId)
                                                        CommentItemInput.setAttribute('maxlength', '100')

                                            const ContainerDeleteItem = document.createElement('div')
                                                ContainerDeleteItem.setAttribute('class', 'ContainerDeleteItem')
                                                    const ButtonDeleteItem = document.createElement('div')
                                                        ButtonDeleteItem.setAttribute('class', 'ButtonDeleteItem')
                                                            const ButtonDeleteItemText = document.createElement('p')
                                                                ButtonDeleteItemText.textContent = 'REMOVER ITEM'

                    const ContainerEspecificComanda = document.createElement('div')
                        ContainerEspecificComanda.setAttribute('class', 'ContainerEspecificComanda')

                            const textareaEspecificar = document.createElement('textarea')
                                textareaEspecificar.setAttribute('placeholder', 'ESPECIFICAR ALGO NA COMANDA')
                                textareaEspecificar.setAttribute('autocomplete', 'off')
                                textareaEspecificar.setAttribute('wrap', 'hard')

             ///////////////////////////////////////////////////////////////////////////////////////////////
            const BodyThePagamento = document.createElement('div')
                BodyThePagamento.setAttribute('id', 'Body-The-Pagamento-' + NumberId)
                BodyThePagamento.setAttribute('class', 'BodyThePagamento BodyNegative')

                    const AreaPayValores = document.createElement('div')
                        AreaPayValores.setAttribute('class', 'AreaPayValores')

                            const TotalProdut = document.createElement('div')
                                TotalProdut.setAttribute('class', 'TotalProdut')
                                    const TotalValor = document.createElement('div')
                                        TotalValor.setAttribute('class', 'TotalValor')
                                            const marginTheLeft1 = document.createElement('span')
                                                marginTheLeft1.setAttribute('class', 'marginTheLeft')
                                                marginTheLeft1.textContent = 'R$ 300,00'
                                    const TotalText = document.createElement('div')
                                        TotalText.setAttribute('class', 'TotalText')
                                            const TotalTextP = document.createElement('p')
                                                TotalTextP.textContent = 'TOTAL'
                                
                            const TaxaEntrega = document.createElement('div')
                                TaxaEntrega.setAttribute('class', 'TaxaEntrega')
                                    const TaxaText = document.createElement('div')
                                        TaxaText.setAttribute('class', 'TaxaText')
                                            const marginTheLeft2 = document.createElement('p')
                                                marginTheLeft2.setAttribute('class', 'marginTheLeft')
                                                marginTheLeft2.textContent = 'TAXA'
                                    const TaxaValor = document.createElement('div')
                                        TaxaValor.setAttribute('class', 'TaxaValor')
                                            const TaxaValorSpan = document.createElement('span')
                                                TaxaValorSpan.textContent = 'R$ 300,00'

                            const TotalReceber = document.createElement('div')
                                TotalReceber.setAttribute('class', 'TotalReceber')
                                    const ReceberValor = document.createElement('div')
                                        ReceberValor.setAttribute('class', 'ReceberValor')
                                            const marginTheLeft3 = document.createElement('span')
                                                marginTheLeft3.setAttribute('class', 'marginTheLeft')
                                                marginTheLeft3.textContent = 'R$ 300,00'
                                    const ReceberText = document.createElement('div')
                                        ReceberText.setAttribute('class', 'ReceberText')
                                            const ReceberTextP = document.createElement('p')
                                                ReceberTextP.textContent = 'RECEBER'

                            const TrocoCoin = document.createElement('div')
                                TrocoCoin.setAttribute('class', 'TrocoCoin')
                                    const TrocoVal = document.createElement('div')
                                        TrocoVal.setAttribute('class', 'TrocoVal')
                                            const marginTheLeft4 = document.createElement('span')
                                                marginTheLeft4.setAttribute('class', 'marginTheLeft')
                                                marginTheLeft4.textContent = 'R$ 300,00'
                                    const TrocoText = document.createElement('div')
                                        TrocoText.setAttribute('class', 'TrocoText')
                                            const TrocoTextP = document.createElement('p')
                                                TrocoTextP.textContent = 'TROCO'

                    const AreaPayForm = document.createElement('div')
                        AreaPayForm.setAttribute('class', 'AreaPayForm')
                            const RecebidoEspecie = document.createElement('div')
                                RecebidoEspecie.setAttribute('class', 'RecebidoEspecie')
                                    const CaixaInput1 = document.createElement('input')
                                        CaixaInput1.setAttribute('type', 'text')
                                        CaixaInput1.setAttribute('placeholder', 'R$')
                                        CaixaInput1.setAttribute('id', 'CaixaInput')
                                    const CaixaText1 = document.createElement('p')
                                        CaixaText1.setAttribute('id', 'CaixaText')
                                        CaixaText1.textContent = 'RECEBIDO EM ESPÉCIE'

                            const PayCredDeb = document.createElement('div')
                                PayCredDeb.setAttribute('class', 'PayCredDeb')
                                    const PayCred = document.createElement('div')
                                        PayCred.setAttribute('class', 'PayCred')
                                        const CaixaInput2 = document.createElement('input')
                                            CaixaInput2.setAttribute('type', 'text')
                                            CaixaInput2.setAttribute('placeholder', 'R$')
                                            CaixaInput2.setAttribute('id', 'CaixaInput')
                                        const CaixaText2 = document.createElement('p')
                                            CaixaText2.setAttribute('id', 'CaixaText')
                                            CaixaText2.textContent = 'CRED.'

                                    const PayDeb = document.createElement('div')
                                        PayDeb.setAttribute('class', 'PayDeb')
                                        const CaixaInput3 = document.createElement('input')
                                            CaixaInput3.setAttribute('type', 'text')
                                            CaixaInput3.setAttribute('placeholder', 'R$')
                                            CaixaInput3.setAttribute('id', 'CaixaInput')
                                        const CaixaText3 = document.createElement('p')
                                            CaixaText3.setAttribute('id', 'CaixaText')
                                            CaixaText3.textContent = 'DEB.'

                            const PaySocioTransfe = document.createElement('div')
                                PaySocioTransfe.setAttribute('class', 'PaySocioTransfe')
                                    const TransferenciaPay = document.createElement('div')
                                        TransferenciaPay.setAttribute('class', 'TransferenciaPay')
                                        const CaixaInput4 = document.createElement('input')
                                            CaixaInput4.setAttribute('type', 'text')
                                            CaixaInput4.setAttribute('placeholder', 'R$')
                                            CaixaInput4.setAttribute('id', 'CaixaInput')
                                        const CaixaText4 = document.createElement('p')
                                            CaixaText4.setAttribute('id', 'CaixaText')
                                            CaixaText4.textContent = 'TRANSF.'

                                    const ConsumoSocio = document.createElement('div')
                                        ConsumoSocio.setAttribute('class', 'ConsumoSocio')
                                        const CaixaInput5 = document.createElement('input')
                                            CaixaInput5.setAttribute('type', 'text')
                                            CaixaInput5.setAttribute('placeholder', 'R$')
                                            CaixaInput5.setAttribute('id', 'CaixaInput')
                                        const CaixaText5 = document.createElement('p')
                                            CaixaText5.setAttribute('id', 'CaixaText')
                                            CaixaText5.textContent = 'SOCIO'


                            const PayPix = document.createElement('div')
                                PayPix.setAttribute('class', 'PayPix')
                                    const CaixaInput6 = document.createElement('input')
                                        CaixaInput6.setAttribute('type', 'text')
                                        CaixaInput6.setAttribute('placeholder', 'R$')
                                        CaixaInput6.setAttribute('id', 'CaixaInput')
                                    const CaixaText6 = document.createElement('p')
                                        CaixaText6.setAttribute('id', 'CaixaText')
                                        CaixaText6.textContent = 'PIX'

                    const AreaBotaoPay = document.createElement('div')
                        AreaBotaoPay.setAttribute('class', 'AreaBotaoPay')
                            const BotaoPay = document.createElement('div')
                                BotaoPay.setAttribute('class', 'BotaoPay')
                                    const BotaoPayP = document.createElement('p')
                                        BotaoPayP.textContent = 'FINALIZAR PAGAMENTO'

///////////////////////////////////////////////////////////////////////////////

    if (PedidosContents.children.length <= 7) {
        let parentAll = AreaAllPedidos.parentNode

        parentAll.append(NewPedidoContent)
            NewPedidoContent.append(NewButtonToDoPedido)
                NewButtonToDoPedido.append(NewThisButtonOne, NewThisButtonTwo, NewThisButtonThree)

                    NewThisButtonOne.append(InfoComandoOne)
                        InfoComandoOne.append(InfoComandoOneTex1, InfoComandoOneTex2)
                    NewThisButtonOne.append(NewThisButtonOneText1, NewThisButtonOneText2)
                        NewThisButtonOneText2.append(NewThisButtonOneText2SubText)

                    NewThisButtonTwo.append(InfoComandoTwo)
                        InfoComandoTwo.append(InfoComandoTwoTex1, InfoComandoTwoTex2)
                    NewThisButtonTwo.append(NewThisButtonTwoText1, NewThisButtonTwoText2)
                        NewThisButtonTwoText2.append(NewThisButtonTwoText2SubText)
                    
                    NewThisButtonThree.append(NewThisButtonThreeText1)

            NewPedidoContent.append(NewCorpoFromPedido)//////////////////////////////////////////////////////////
                NewCorpoFromPedido.append(BodyThisCliente, BodyThisPedido, BodyThePagamento)/////////////////////

                 ///////////////////////////////////////////////////////////////////////////////////////////////////

                    BodyThisCliente.append(ClientePesquisa, ContainerExclusiveCliente)
                        ClientePesquisa.append(SearchCliente)
                        ContainerExclusiveCliente.append(ClienteName, AllClienteNumber, EditClienteInCadastro, AlladdressCliente, AddNewAddre)

                            ClienteName.append(ClienteNameText)

                            AllClienteNumber.append(SELECTAllClienteNumber, AddNewNumberCliente)
                                SELECTAllClienteNumber.append(NumberTelCliente01, NumberTelCliente02)
                                AddNewNumberCliente.append(AddNewNumberClienteText)

                            EditClienteInCadastro.append(EditClienteInCadastroText)

                            AlladdressCliente.append(CadastroClienteComanda)
                                CadastroClienteComanda.append(CadastroClienteComandaTextOne, CadastroClienteComandaTextTwo, CadastroClienteComandaTextThree)

                            AddNewAddre.append(AddNewAddreText)
                     ////////////////////////////////////////////////////////////////////////////////////////////////////

                    BodyThisPedido.append(ItemPesquisa, ContainerItens, ContainerEspecificComanda)
                        ItemPesquisa.append(SearchItem)

                        ContainerItens.append(BoxTheItem)
                            BoxTheItem.append(InfoMainItem, OthersInfoItem)

                                InfoMainItem.append(QTDItem, ClassOfItem, ValorTotalItem)
                                    QTDItem.append(QTDItemText)
                                    ClassOfItem.append(ClassOfItemText)
                                    ValorTotalItem.append(ValorTotalItemText)

                                OthersInfoItem.append(EditQTDItem, EspecificInfoIte, CommentItem, ContainerDeleteItem)
                                    EditQTDItem.append(ValorEditQTDItem, TextEditQTDItem)
                                    ValorEditQTDItem.append(ValorEditQTDInput)
                                    EspecificInfoIte.append(EspecificInfoIteTextOne, EspecificInfoIteTextTwo)
                                    CommentItem.append(CommentItemInput)
                                    ContainerDeleteItem.append(ButtonDeleteItem)
                                        ButtonDeleteItem.append(ButtonDeleteItemText)

                        ContainerEspecificComanda.append(textareaEspecificar)
                     //////////////////////////////////////////////////////////////////////////////////////////////

                    BodyThePagamento.append(AreaPayValores, AreaPayForm, AreaBotaoPay)
                        AreaPayValores.append(TotalProdut, TaxaEntrega, TotalReceber, TrocoCoin)
                            TotalProdut.append(TotalValor, TotalText)
                                TotalValor.append(marginTheLeft1)
                                TotalText.append(TotalTextP)
                            TaxaEntrega.append(TaxaText, TaxaValor)
                                TaxaText.append(marginTheLeft2)
                                TaxaValor.append(TaxaValorSpan)
                            TotalReceber.append(ReceberValor, ReceberText)
                                ReceberValor.append(marginTheLeft3)
                                ReceberText.append(ReceberTextP)
                            TrocoCoin.append(TrocoVal, TrocoText)
                                TrocoVal.append(marginTheLeft4)
                                TrocoText.append(TrocoTextP)
                        AreaPayForm.append(RecebidoEspecie, PayCredDeb, PaySocioTransfe, PayPix)
                            RecebidoEspecie.append(CaixaInput1, CaixaText1)
                            PayCredDeb.append(PayCred, PayDeb)
                                PayCred.append(CaixaInput2, CaixaText2)
                                PayDeb.append(CaixaInput3, CaixaText3)
                            PaySocioTransfe.append(TransferenciaPay, ConsumoSocio)
                                TransferenciaPay.append(CaixaInput4, CaixaText4)
                                ConsumoSocio.append(CaixaInput5, CaixaText5)
                            PayPix.append(CaixaInput6, CaixaText6)
                        AreaBotaoPay.append(BotaoPay)
                            BotaoPay.append(BotaoPayP)
    }

 ///////////////////////////////////////////////////////////////////////////////////////////////////////

    const IdBodyThisCliente = document.querySelectorAll('#Add-Cliente-Body-' + NumberId)
    const IdBodyThisPedido = document.querySelectorAll('#Add-PedidoAndPagamento-Body-' + NumberId)
    const IdInfoMainItem = document.querySelectorAll('#Info-Main-Item-' + NumberId)

    const IdCommentItemInput = document.querySelectorAll('#InputEspecificoItem-' + NumberId)

    IdBodyThisCliente.forEach( i =>{

        i.addEventListener('click', ()=>{

            if ((BodyThisCliente.className) == (BodyThisCliente.className = 'BodyThisCliente BodyNegative')) {
                BodyThisCliente.className = 'BodyThisCliente BodyActive'
            }
            if ((NewThisButtonOneText2SubText.className) == (NewThisButtonOneText2SubText.className = 'bi biPlusCloseOne bi-plus-square')) {
                NewThisButtonOneText2SubText.className = "bi biPlusCloseOne bi-x-square"
            }
        })
    })


    IdBodyThisPedido.forEach( i =>{
        i.addEventListener('click', ()=>{
            if ((BodyThisPedido.className) == (BodyThisPedido.className = 'BodyThisPedido BodyNegative')) {
                BodyThisPedido.className = 'BodyThisPedido BodyActive'
            }
            if ((BodyThePagamento.className) == (BodyThePagamento.className = 'BodyThePagamento BodyNegative')) {
                BodyThePagamento.className = 'BodyThePagamento BodyActive'
            }
            if ((NewThisButtonTwoText2SubText.className) == (NewThisButtonTwoText2SubText.className = 'bi biPlusCloseTwo bi-plus-square')) {
                NewThisButtonTwoText2SubText.className = "bi biPlusCloseTwo bi-x-square"
            }
        })
    })

    IdInfoMainItem.forEach( i =>{
        i.addEventListener('click', ()=>{
            if ((OthersInfoItem.style.display) == (OthersInfoItem.style.display = 'none')) {
                OthersInfoItem.style.display = 'grid'
            }
            if ((BoxTheItem.style.height) == (BoxTheItem.style.height = '50px')) {
                BoxTheItem.style.height = '200px'
            }
        })
    })

 ///////////////////////////////////////////////////////////////////////////////////////////////////////

 IdCommentItemInput.forEach( inputOfPedido =>{
     inputOfPedido.addEventListener('keyup', ()=>{
        EspecificInfoIteTextTwo.textContent = inputOfPedido.value
        console.log(inputOfPedido.value.length)

        if (inputOfPedido.value.length == 100) {
            CommentItemInput.style.color = 'red'
        } else{
            CommentItemInput.style.color = '#3AB5E9'
        }
     })
 })

 const TabNavigationForPedidosAbaGGG = TabNavigationForPedidosAba()
 // TabNavigationForPedidosAbaGGG.hideAllContentForPedidosAbas()
 TabNavigationForPedidosAbaGGG.iniciar()

}