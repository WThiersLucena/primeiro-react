import React, { useState } from 'react'

function Filho(props) {

    function gerarNumero() {
        return Math.random
    }

    return (
      <>
        <button onClick={function () {
             const n =  gerarNumero ()
             props.funcao(n, 'O Valor e : ')
        }}>
            Executar
        </button>
      </>
    )
}

export default Filho