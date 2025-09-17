import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  return (
    <div id='corpo'>
      <header id='cabecalho'>
        <div>
          <img src="imagens\logo_maceio.svg" alt="" />
        </div>
        <div id='logo'>
          <img src="imagens\LogoMarca.svg" alt="Logo" />
        </div>
        <div>
          <p id='titulo1'>Arretado Sabor <img src="imagens\avaliacao.svg" alt="Avaliação" /> <br /><span id='titulo2'> Pedido mínimo R$ 20,00</span> </p>
        </div>
        <div id='barra_pesquisa'>
          <div id='lupa'>
            <img src="imagens\Group.svg" alt="lupa de pesquisa" />
          </div>
          <input id='pesquisa' type="text" placeholder='Buscar no Cardápio' />
        </div>
        <div id='barrinhas'>
          <img src="imagens\3barrinhas.svg" alt="3 barrinhas" />
        </div>
        <div id='usuario'>
          <img src="imagens\PersonCircle.svg" alt="usuario" />
        </div>
        <div>
          <p>Cadastro</p>
        </div>
        <div id='carrinho'>
          <img src="imagens\ShoppingCart.svg" alt="carrinho" />
        </div>
      </header>
      <section>
        <div id='comidas'>
          <img src="imagens\comida.svg" alt="comidas" />
        </div>
        <div class='titulo'>
          <h1>Destaques</h1>
        </div>
        <div class='secao'>
          <div>
            <img src="imagens\Seta_esquerda.svg" alt="Seta da esquerda" />
          </div>
          <div class='imagens_comidas'>
            <div class='colocar_meio'>
              <img src="imagens\Sarapatel.svg" alt="Sarapatel" />
              <h1>Sarapatel</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Cuscuz_Recheado.svg" alt="Cuscuz Recheado" />
              <h1>Cuscuz Recheado</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Acaraje.svg" alt="Acarajé" />
              <h1>Acarajé</h1>
            </div>
          </div>
          <div>
            <img src="imagens\Seta_direita.svg" alt="Seta da direita" />
          </div>
        </div>
        <div class="divisao"></div>
        <div class='titulo'>
          <h1>Sobremesas</h1>
        </div>
        <div class='secao'>
          <div>
            <img src="imagens\Seta_esquerda.svg" alt="Seta da esquerda" />
          </div>
          <div class='imagens_comidas'>
            <div class='colocar_meio'>
              <img src="imagens\Bolo_Rolo.svg" alt="Bolo de Rolo" />
              <h1>Bolo de Rolo</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Bolo_Milho.svg" alt="Bolo de Milho" />
              <h1>Bolo de Milho</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Cocada.svg" alt="Cocada" />
              <h1>Cocada</h1>
            </div>
          </div>
          <div>
            <img src="imagens\Seta_direita.svg" alt="Seta da direita" />
          </div>
        </div>
        <div class="divisao"></div>
        <div class='titulo'>
          <h1>Em promoção</h1>
        </div>
        <div class='secao'>
          <div>
            <img src="imagens\Seta_esquerda.svg" alt="Seta da esquerda" />
          </div>
          <div class='imagens_comidas'>
            <div class='colocar_meio'>
              <img src="imagens\Muguzá.svg" alt="Munguzá" />
              <h1>Munguzá</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Sururu.svg" alt="Sururu" />
              <h1>Sururu</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Baião_Dois.svg" alt="Baião de dois" />
              <h1>Baião de dois</h1>
            </div>
          </div>
          <div>
            <img src="imagens\Seta_direita.svg" alt="Seta da direita" />
          </div>
        </div>
        <div class="divisao"></div>
        <div class='titulo'>
          <h1>Outras sugestões</h1>
        </div>
        <div class='secao'>
          <div>
            <img src="imagens\Seta_esquerda.svg" alt="Seta da esquerda" />
          </div>
          <div class='imagens_comidas'>
            <div class='colocar_meio'>
              <img src="imagens\vatapá.svg" alt="Vatapá" />
              <h1>Vatapá</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Pastel.svg" alt="Pastel de Carne com Açúcar" />
              <h1 class='alinhar_text'>Pastel com Açúcar</h1>
            </div>
            <div class='colocar_meio'>
              <img src="imagens\Pacoca.svg" alt="Paçoca de Carne-seca" />
              <h1 class='alinhar_texto'>Paçoca de Carne</h1>
            </div>
          </div>
          <div>
            <img src="imagens\Seta_direita.svg" alt="Seta da direita" />
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

export default App
