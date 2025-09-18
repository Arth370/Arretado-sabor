import React from 'react'
import Cabecalho from './Cabecalho'
import './Pagamento.css'
import pix from '../imagens/pix.png'
let preco=0

function Criar(a){
    const Fundao = document.getElementById('comidas')
    const DivCarro = document.createElement('div')
    const Divtext = document.createElement('div')
    const img = document.createElement('img')
    const titulo = document.createElement('h1')
    const preco = document.createElement('h1')
    const quantida = document.createElement('h1')

    Fundao.appendChild(DivCarro)
    DivCarro.appendChild(img)
    DivCarro.appendChild(Divtext)
    Divtext.appendChild(titulo)
    Divtext.appendChild(preco)
    Divtext.appendChild(quantida)
    img.src=a.img
    titulo.textContent=a.nome
    preco.textContent=`R$ ${a.valor}`
    quantida.textContent=`Quantidade: ${a.quant}x`
    DivCarro.classList.add('quadrado')
    Divtext.classList.add('quadrado-text')
    titulo.classList.add('texto-quadrado')
    img.classList.add('imagem')
    preco.classList.add('texto-quadrado')
    quantida.classList.add('texto-quadrado')
    
}
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

function Pagamento() {
  return (
    <>
    <header>
        <Cabecalho></Cabecalho>
    </header>
    <div id='corpao'>
        <section id='comidas'>
            <h1 onClick={rodar}>Ver Mais</h1>
        </section>
        <section id='pagamento'>
            <div id='superior'>
                <div>
                    <h1 id='text'>Formas de Pagamento</h1>
                    <div id='separacao'></div>
                </div>
                <div id='formas'>
                    <div id='formas-pix'>
                        <img className='img-pix' src='../imagens/pix.png' alt="Pix" />
                        <h1 id='text'>Pix</h1>
                    </div>
                    <img className='imgs' src="../imagens/mastercad.png" alt="MasterCard" />

                    <img className='imgs' src="../imagens/visa.png" alt="Visa" />
                </div>      
                <div id='cartoes'>
                <button className='cartao'> <img src="../imagens/CreditCard.png" alt="Crédito" /> Crédito</button>
                <button className='cartao'> <img src="../imagens/CreditCard.png" alt="Crédito" /> Crédito</button>          
                </div>
            </div>
            <div>
                <button id='Confirmar-pagamento'><h1>Confirmar pagamento</h1></button>
            </div>
        </section>
    </div>
    </>
  )
}

export default Pagamento