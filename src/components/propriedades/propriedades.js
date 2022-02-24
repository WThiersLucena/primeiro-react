import React, { useState } from 'react'
import App from '../../App'

function Propriedades(props) {

    let texto ='';
    if(props.texto){
        texto = props.texto
    }

    console.log(props.nome)
    return (
      <>
        <div><h2>Teste = {props.nome} Nota = {props.nota} </h2></div>
      </>
    )
}

export default Propriedades