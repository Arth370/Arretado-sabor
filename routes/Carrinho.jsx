import React from 'react'
import Cabecalho from './Cabecalho'
import './Carrinho.css'
function Carrinho() {
  return (
    <>
    <Cabecalho/>
    <main>
        <section id='Cart'>
            <img id='carrinho' src="imagens\ShoppingCart.svg" alt="" />
            <p>Carrinho</p>
        </section>
        <section>

        </section>
        <section id='total'>
            <h1>Total</h1>
            <h1>R$ {}</h1>
        </section>
    </main>

    </>

  )
}

export default Carrinho