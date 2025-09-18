import React from 'react'
import './carrinho.css'

let clicado = false
let preco = 0

function Criar(a){ //Função para criar div com conteúdo
    let teste = a
    if(clicado==false){
    const Fundao = document.getElementById('secao1')
    const DivCarro = document.createElement('div')
    const DivFuncoes = document.createElement('div')
    const img = document.createElement('img')
    const lixeira = document.createElement('img')
    const soma = document.createElement('img')
    const titulo = document.createElement('h1')
    const p = document.createElement('p')
    const total = document.getElementById('total')

    Fundao.appendChild(DivCarro)
    DivCarro.appendChild(img)
    DivCarro.appendChild(titulo)
    DivCarro.appendChild(DivFuncoes)
    DivFuncoes.appendChild(p)
    DivFuncoes.appendChild(lixeira)
    DivFuncoes.appendChild(soma)
    titulo.textContent=a.nome
    p.textContent=`R$ ${a.valor}`
    img.src=a.img
    lixeira.src='../imagens/lixeira.svg'
    soma.src='../imagens/Soma.svg'
    
    DivCarro.classList.add('conjunto_comidas')
    DivFuncoes.classList.add('funcoes')
    titulo.classList.add('titulo_carrinho')
    p.classList.add('titulo_carrinho')
    img.classList.add('img_comida')
    total.textContent=`R$ ${preco}`
    soma.addEventListener('click',()=>{
        clicado=false
        preco=preco+parseFloat(teste.valor)
        Criar(teste)
        teste.quant++
        alert(teste.quant)
    })
    lixeira.addEventListener('click',()=>{
        DivCarro.remove()
        img.remove()
        titulo.remove()
        DivFuncoes.remove()
        p.remove()
        lixeira.remove()
        soma.remove()
        preco=preco-parseFloat(teste.valor)
        teste.quant--
        alert(teste.quant)
        if(preco<0){
            total.textContent='R$ 0.00'
        }
        else{
            total.textContent=`R$ ${preco}`
        }
    })

}}
function rodar(){//Conteúdos da div
     let sarapatel = localStorage.getItem('sarapatel')
    let sarapatelRecuperado = JSON.parse(sarapatel)
    if(sarapatelRecuperado.carrinho==true){
        preco=preco+parseFloat(sarapatelRecuperado.valor)
       Criar(sarapatelRecuperado)
       

    }
    let cuscuz = localStorage.getItem('cuscuz')
    let cuscuzRecuperado = JSON.parse(cuscuz)
    if(cuscuzRecuperado.carrinho==true){
       
       preco=preco+parseFloat(cuscuzRecuperado.valor)
       Criar(cuscuzRecuperado)
    }
    let acaraje = localStorage.getItem('acaraje')
    let acarajeRecuperado = JSON.parse(acaraje)
    if(acarajeRecuperado.carrinho==true){
       preco=preco+parseFloat(acarajeRecuperado.valor)
        Criar(acarajeRecuperado)

    }
    let bolorolo = localStorage.getItem('bolorolo')
    let boloroloRecuperado = JSON.parse(bolorolo)
    if(boloroloRecuperado.carrinho==true){
       preco=preco+parseFloat(boloroloRecuperado.valor)
        Criar(boloroloRecuperado)
    }
    let bolomilho = localStorage.getItem('bolomilho')
    let bolomilhoRecuperado = JSON.parse(bolomilho)
    if(bolomilhoRecuperado.carrinho==true){
       preco=preco+parseFloat(bolomilhoRecuperado.valor)
        Criar(bolomilhoRecuperado)
    }
    let cocada = localStorage.getItem('cocada')
    let cocadaRecuperado = JSON.parse(cocada)
    if(cocadaRecuperado.carrinho==true){
       preco=preco+parseFloat(cocadaRecuperado.valor)
        Criar(cocadaRecuperado)
    }
    let munguza = localStorage.getItem('munguza')
    let munguzaRecuperado = JSON.parse(munguza)
    if(munguzaRecuperado.carrinho==true){
       preco=preco+parseFloat(munguzaRecuperado.valor)
        Criar(munguzaRecuperado)
    }
        let sururu = localStorage.getItem('sururu')
    let sururuRecuperado = JSON.parse(sururu)
    if(sururuRecuperado.carrinho==true){
       preco=preco+parseFloat(sururuRecuperado.valor)
        Criar(sururuRecuperado)
    }
    let baiao = localStorage.getItem('baiao')
    let baiaoRecuperado = JSON.parse(baiao)
    if(baiaoRecuperado.carrinho==true){
       preco=preco+parseFloat(baiaoRecuperado.valor)
        Criar(baiaoRecuperado)
    }
    let vatapa = localStorage.getItem('vatapa')
    let vatapaRecuperado = JSON.parse(vatapa)
    if(vatapaRecuperado.carrinho==true){
       preco=preco+parseFloat(vatapaRecuperado.valor)
        Criar(vatapaRecuperado)
    }
    let pastel = localStorage.getItem('pastel')
    let pastelRecuperado = JSON.parse(pastel)
    if(pastelRecuperado.carrinho==true){
       preco=preco+parseFloat(pastelRecuperado.valor)
        Criar(pastelRecuperado)
    }
    let carnepacoca = localStorage.getItem('carnepacoca')
    let carneRecuperado = JSON.parse(carnepacoca)
    if(carneRecuperado.carrinho==true){
       preco=preco+parseFloat(carneRecuperado.valor)
        Criar(carneRecuperado)
    }
    clicado=true
}

function Carrinho() {


    return (
        <div id='corpinho'>
            <header id='cabecalho_carrinho'>
                <img src="imagens\ShoppingCart.svg" alt="Carrinho" className='CarImg' />
                <h1 id='carrinho'>Carrinho</h1>
            </header>
            <section id='secao1'>
                <h1 onClick={rodar}>Ver Mais </h1>
            </section>
            <section id='secao2'>
                <div id='itens'>
                    <h1>Adicionar mais itens</h1>
                </div>
                <div id='titulo_secao_2'>
                    <h1>Peça também: </h1>
                </div>
                <div id='outras_comidas'>
                    <div>
                        <div>
                            <img src="imagens\pastel_carrinho.svg" alt="Pastel de carne com açúcar" />
                        </div>
                        <div>
                            <p class='preco_secao_2'>R$ 9,99</p>
                        </div>
                        <div>
                            <p>Pastel de carne com açúcar </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="imagens\pacoca_carrinho.svg" alt="Paçoca de carne-seca" />
                        </div>
                        <div>
                            <p class='preco_secao_2'>R$ 28,90</p>
                        </div>
                        <div>
                            <p>Paçoca de carne-seca </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="imagens\Vatapa_carrinho.svg" alt="Vatapá" />
                        </div>
                        <div>
                            <p class='preco_secao_2'>R$ 29,99</p>
                        </div>
                        <div>
                            <p>Vatapá</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="imagens\Baiao_carrinho.svg" alt="Baião de 2" />
                        </div>
                        <div>
                            <p class='preco_secao_2'>R$ 24,90</p>
                        </div>
                        <div>
                            <p>Baião de dois</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='secao_3'>
                <div id='preco_secao_3'>
                    <h1 class='tamanho_text_secao_3'>Total:</h1>
                    <h1 id='total' class='tamanho_text_secao_3'>R$ 0,00</h1>
                </div>
                <div>
                    <button id='botao_compra'>Comprar</button>
                </div>
            </section>
            <footer id='footer'>
                <div id='rodape'>
                    <p id='texto'>© 2025 Arretado Sabor. Possui Todos os Direitos Reservados.</p>
                    <img src="imagens\logo_maceio.svg" alt="Logo Maceió" />
                </div>
            </footer>
        </div>
    )
}

export default Carrinho
