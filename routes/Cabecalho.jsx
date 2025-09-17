import React from 'react'

function Cabecalho() {
  return (
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
  )
}

export default Cabecalho