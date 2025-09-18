import React from 'react'
import Cabecalho from './Cabecalho'
import { useState } from 'react'


let criar = false
let sarapatel = {
  nome:'Sarapatel',
  valor: 35.50,
  carrinho:false,
  click:false,
  img:'../imagens/Sarapatel.svg',
  quant:0
}
let cuscuz = {
  nome:'Cuscuz Recheado',
  valor: 35.50,
  carrinho:false,
  click:false,
  img:'../imagens/Cuscuz_Recheado.svg',
  quant:0
}
let acaraje = {
  nome:'Acarajé',
  valor: 20.00,
  carrinho:false,
  click:false,
  img:'../imagens/Acaraje.svg',
  quant:0
}
let bolorolo = {
  nome:'Bolo de Rolo',
  valor: 27.99,
  carrinho:false,
  click:false,
  img:'../imagens/Bolo_Rolo.svg',
  quant:0
}
let bolomilho = {
  nome:'Bolo de Milho',
  valor: 32.99,
  carrinho:false,
  click:false,
  img:'../imagens/Bolo_Milho.svg',
  quant:0
}
let cocada = {
  nome:'Cocada',
  valor: 20.99,
  carrinho:false,
  click:false,
  img:'../imagens/Cocada.svg',
  quant:0
}
let munguza = {
  nome:'Munguzá',
  valor: 25.99,
  carrinho:false,
  click:false,
  img:'../imagens/Muguzá.svg',
  quant:0
}
let sururu = {
  nome:'Sururu',
  valor: 48.99,
  carrinho:false,
  click:false,
  img:'../imagens/Sururu.svg',
  quant:0
}
let baiao = {
  nome:'Baião de Dois',
  valor: 54.99,
  carrinho:false,
  click:false,
  img:'../imagens/Baião_Dois.svg',
  quant:0
}
let vatapa = {
  nome:'Vatapá',
  valor: 37.99,
  carrinho:false,
  click:false,
  img:'../imagens/vatapá.svg',
  quant:0
}
let pastel = {
  nome:'Pastel de Carne com Açúcar',
  valor: 23.99,
  carrinho:false,
  click:false,
  img:'../imagens/Pastel.svg',
  quant:0
}
let carnepacoca = {
  nome:'Paçoca de Carne',
  valor: 20.99,
  carrinho:false,
  click:false,
  img:'../imagens/Pacoca.svg',
  quant:0
}

function comprar(){
if(criar==false){
  window.scroll({ top: 0, behavior: 'smooth' })//Ir para o Começo da Tela

  const Fundo = document.getElementById('corpo')//Criar Tela
  const DivCompra = document.createElement('div')
  const h1 = document.createElement('h1')
  const p = document.createElement('p')
  const img = document.createElement('img')
  const button = document.createElement('button')
  const Fechar = document.createElement('button')

  DivCompra.appendChild(h1)//Criar uma "Familia"
  DivCompra.appendChild(img)
  DivCompra.appendChild(p)
  DivCompra.appendChild(button)
  DivCompra.appendChild(Fechar)
  Fundo.appendChild(DivCompra)

  button.textContent='Adicionar ao carrinho'//Texto nos botões
  Fechar.textContent='Fechar'

  img.classList.add('img-cardapio')

  Fechar.addEventListener('click',()=>{//Evento para fechar janela
    DivCompra.remove()
    h1.remove()
    p.remove()
   img.remove()
    button.remove()
    Fechar.remove()
    criar=false
    sarapatel.click=false
    cuscuz.click=false
    acaraje.click=false
    bolorolo.click=false
    cocada.click=false
    munguza.click=false
    sururu.click=false
    baiao.click=false
    vatapa.click=false
    pastel.click=false
    carnepacoca.click=false
  })
  
  DivCompra.classList.add('divcompra')
  
  criar=true
 if( sarapatel.click==true){
  h1.textContent=sarapatel.nome
  img.src='../imagens/Sarapatel.svg'
  p.textContent=`Valor: ${sarapatel.valor}`
  button.addEventListener('click',()=>{
    sarapatel.carrinho=true
    sarapatel.quant++
    let sarapatelString = JSON.stringify(sarapatel)
    localStorage.setItem('sarapatel',sarapatelString)
  })
 }
 if( cuscuz.click==true){
  h1.textContent=cuscuz.nome
  img.src='../imagens/Cuscuz_Recheado.svg'
  p.textContent=`Valor: ${cuscuz.valor}`
  button.addEventListener('click',()=>{
    cuscuz.carrinho=true
    cuscuz.quant++
    let cuscuzString = JSON.stringify(cuscuz)
    localStorage.setItem('cuscuz',cuscuzString)
  })
 }
 if(acaraje.click==true){
  h1.textContent=acaraje.nome
  img.src='../imagens/Acaraje.svg'
  p.textContent=`Valor: ${acaraje.valor}`
  button.addEventListener('click',()=>{
    acaraje.carrinho=true
    acaraje.quant++
    let acarajeString = JSON.stringify(acaraje)
    localStorage.setItem('acaraje',acarajeString)
  })
 }
 if(bolorolo.click==true){
  h1.textContent=bolorolo.nome
  img.src='../imagens/Bolo_Rolo.svg'
  p.textContent=`Valor: ${bolorolo.valor}`
  button.addEventListener('click',()=>{
    bolorolo.carrinho=true
    bolorolo.quant++
    let boloroloString = JSON.stringify(bolorolo)
    localStorage.setItem('bolorolo',boloroloString)
  })
 }
 if(bolomilho.click==true){
  h1.textContent=bolomilho.nome
  img.src='../imagens/Bolo_Milho.svg'
  p.textContent=`Valor: ${bolomilho.valor}`
  button.addEventListener('click',()=>{
    bolomilho.carrinho=true
    bolomilho.quant++
    let bolomilhoString = JSON.stringify(bolomilho)
    localStorage.setItem('bolomilho',bolomilhoString)
  })
 }
 if(cocada.click==true){
  h1.textContent=cocada.nome
  img.src='../imagens/Cocada.svg'
  p.textContent=`Valor: ${cocada.valor}`
  button.addEventListener('click',()=>{
    cocada.carrinho=true
    cocada.quant++
    let cocadaString = JSON.stringify(cocada)
    localStorage.setItem('cocada',cocadaString)
  })
 }
 if(munguza.click==true){
  h1.textContent=munguza.nome
  img.src='../imagens/Muguzá.svg'
  p.textContent=`Valor: ${munguza.valor}`
  button.addEventListener('click',()=>{
    munguza.carrinho=true
    munguza.quant++
    let munguzaString = JSON.stringify(munguza)
    localStorage.setItem('munguza',munguzaString)
  })
 }
 if(sururu.click==true){
  h1.textContent=sururu.nome
  img.src='../imagens/Sururu.svg'
  p.textContent=`Valor: ${sururu.valor}`
  button.addEventListener('click',()=>{
    sururu.carrinho=true
    sururu.quant++
    let sururuString = JSON.stringify(sururu)
    localStorage.setItem('sururu',sururuString)
    (sururu.carrinho)
  })
 }
 if(baiao.click==true){
  h1.textContent=baiao.nome
  img.src='../imagens/Baião_Dois.svg'
  p.textContent=`Valor: ${baiao.valor}`
  button.addEventListener('click',()=>{
    baiao.carrinho=true
    baiao.quant++
    let baiaoString = JSON.stringify(baiao)
    localStorage.setItem('baiao',baiaoString)

  })
 }
 if(vatapa.click==true){
  h1.textContent=vatapa.nome
  img.src='../imagens/vatapá.svg'
  p.textContent=`Valor: ${vatapa.valor}`
  button.addEventListener('click',()=>{
    vatapa.carrinho=true
    vatapa.quant++
    let vatapaString = JSON.stringify(vatapa)
    localStorage.setItem('vatapa',vatapaString)

  })
 }
 if(pastel.click==true){
  h1.textContent=pastel.nome
  img.src='../imagens/Pastel.svg'
  p.textContent=`Valor: ${pastel.valor}`
  button.addEventListener('click',()=>{
    pastel.carrinho=true
    pastel.quant++
    let pastelString = JSON.stringify(pastel)
    localStorage.setItem('pastel',pastelString)

  })
 }
 if(carnepacoca.click==true){
  h1.textContent=carnepacoca.nome
  img.src='../imagens/Pacoca.svg'
  p.textContent=`Valor: ${carnepacoca.valor}`
  button.addEventListener('click',()=>{
    carnepacoca.carrinho=true
    carnepacoca.quant++
    let carneString = JSON.stringify(carnepacoca)
    localStorage.setItem('carnepacoca',carneString)
  })
 }
}

}
function Sarapatel(){
  
  sarapatel.click=true
}
function Cuscuz(){
  
  cuscuz.click=true
 }
function Acaraje(){
  acaraje.click=true
}
function BoloRolo(){
  bolorolo.click=true
}
function BoloMilho(){
  bolomilho.click=true
}
function Cocada(){
  cocada.click=true
}
function Munguza(){
  munguza.click=true
}
function Sururu(){
  sururu.click=true
}
function BaiaoDois(){
  baiao.click=true
}
function Vatapa(){
  vatapa.click=true
}
function Pastel(){
  pastel.click=true
}
function Pacoca(){
  carnepacoca.click=true
}


function Home() {


  return (
        <div id='corpo'>
            <Cabecalho/>
      <section id='aba'>
        <div id='comidas'>
          <img src="imagens\comida.svg" alt="comidas" />
        </div>
        <div class='titulo'>
          <h1>Destaques</h1>
        </div>
        <div class='secao'>
          <div class='imagens_comidas'>
            <div>
              <img src="imagens\Seta_esquerda.svg" alt="Seta da esquerda"  />
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Sarapatel.svg" alt="Sarapatel" onClick={comprar} onClickCapture={Sarapatel} className='imgCrescerLado'/>
              <h1>Sarapatel</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Cuscuz_Recheado.svg" alt="Cuscuz Recheado" className='imgCrescerMeio' onClick={comprar} onClickCapture={Cuscuz}/>
              <h1>Cuscuz Recheado</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Acaraje.svg" alt="Acarajé" className='imgCrescerLado' onClick={comprar} onClickCapture={Acaraje}/>
              <h1>Acarajé</h1>
            </div>
              <div>
                <img src="imagens\Seta_direita.svg" alt="Seta da direita" />
              </div>
          </div>
        </div>
        <div class="divisao"></div>
        <div class='titulo'>
          <h1>Sobremesas</h1>
        </div>
        <div class='secao'>
          <div class='imagens_comidas'>
            <div>
              <img src="imagens\Seta_esquerda.svg" alt="Seta da esquerda"/>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Bolo_Rolo.svg" alt="Bolo de Rolo" className='imgCrescerLado' onClick={comprar} onClickCapture={BoloRolo}/>
              <h1>Bolo de Rolo</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Bolo_Milho.svg" alt="Bolo de Milho" className='imgCrescerMeio' onClick={comprar} onClickCapture={BoloMilho}/>
              <h1>Bolo de Milho</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Cocada.svg" alt="Cocada" className='imgCrescerLado' onClick={comprar} onClickCapture={Cocada}/>
              <h1>Cocada</h1>
            </div>
            <div>
            <img src="imagens\Seta_direita.svg" alt="Seta da direita" />
          </div>
          </div>
        </div>
        <div class="divisao"></div>
        <div class='titulo'>
          <h1>Em promoção</h1>
        </div>
        <div class='secao'>
          <div class='imagens_comidas'>
            <div>
              <img src="imagens\Seta_esquerda.svg" alt="Seta da esquerda" />
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Muguzá.svg" alt="Munguzá" className='imgCrescerLado' onClick={comprar} onClickCapture={Munguza}/>
              <h1>Munguzá</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Sururu.svg" alt="Sururu" className='imgCrescerMeio' onClick={comprar} onClickCapture={Sururu} />
              <h1>Sururu</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Baião_Dois.svg" alt="Baião de dois" className='imgCrescerLado' onClick={comprar} onClickCapture={BaiaoDois}/>
              <h1>Baião de dois</h1>
            </div>
            <div>
              <img src="imagens\Seta_direita.svg" alt="Seta da direita" />
            </div>
          </div>
        </div>
        <div class="divisao"></div>
        <div class='titulo'>
          <h1>Outras sugestões</h1>
        </div>
        <div class='secao'>
          <div class='imagens_comidas'>
            <div>
              <img src="imagens\Seta_esquerda.svg" alt="Seta da esquerda" />
            </div>
            <div class='colocar_meio'>
              <img src="imagens\vatapá.svg" alt="Vatapá" className='imgCrescerLado' onClick={comprar} onClickCapture={Vatapa}/>
              <h1>Vatapá</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Pastel.svg" alt="Pastel de Carne com Açúcar" className='imgCrescerMeio' onClick={comprar} onClickCapture={Pastel}/>
              <h1 class='alinhar_text'>Pastel com Açúcar</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Pacoca.svg" alt="Paçoca de Carne-seca" className='imgCrescerLado' onClick={comprar} onClickCapture={Pacoca}/>
              <h1 class='alinhar_texto'>Paçoca de Carne</h1>
            </div>
            <div>
              <img src="imagens\Seta_direita.svg" alt="Seta da direita" />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div id='rodape'>
          <p id='texto'>© 2025 Arretado Sabor. Possui Todos os Direitos Reservados.</p>
          <img src="imagens\logo_maceio.svg" alt="Logo Maceió" />
        </div>
      </footer>
    </div>
  )
}

export default Home